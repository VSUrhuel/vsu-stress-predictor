from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
import numpy as np
import json
# app instancepyt
app = Flask(__name__)
CORS(app)
print("Loading model")

model = load_model('./tfmodel1.keras')

def convert_grade_to_gpa(grade):
    """
    Convert a given grade to its precise equivalent GPA using interpolation.
    """
    grade_to_gpa_ranges = [
        (1.00, 1.25, 4.00, 3.75),
        (1.25, 1.50, 3.75, 3.50),
        (1.50, 1.75, 3.50, 3.25),
        (1.75, 2.00, 3.25, 3.00),
        (2.00, 2.25, 3.00, 2.75),
        (2.25, 2.50, 2.75, 2.50),
        (2.50, 2.75, 2.50, 2.00),
        (2.75, 3.00, 2.00, 1.75),
        (3.00, 3.25, 1.75, 1.50),
        (3.25, 3.50, 1.50, 1.00),
        (3.50, 4.00, 1.00, 0.50),
        (4.00, 5.00, 0.50, 0.00),
    ]

    for lower, upper, gpa_lower, gpa_upper in grade_to_gpa_ranges:
        if lower <= grade < upper:
            # Perform linear interpolation
            gpa = gpa_lower + (grade - lower) * (gpa_upper - gpa_lower) / (upper - lower)
            return round(gpa, 2)  # Round to 2 decimal places for precision

    if grade == 5.00:
        return 0.00  # Exact match for the failing grade
    return "Invalid grade. Please enter a value between 1.00 and 5.00."



@app.route("/api/home", methods=['POST', 'GET'])
def predict():
        
        data = request.get_json()  # Parses JSON from request body
        if data is None:
            return jsonify({'error': 'No data provided'}), 400

        print("Received JSON data:", data)  # Debugging: Log received data
            
        data = np.array(data['inputFeatures'])
        print(data)
        data = np.array([data])
        print(data)
        # Ensure the data is in the correct format
        # Assuming frontend sends a "features" array
        data[0][5] = convert_grade_to_gpa(data[0][5])
        print(data)
        res = model.predict(data)
        # Make prediction
        sum_probs = np.sum(res[0])  # Compute the sum of the probabilities
        res[0] = res[0] / sum_probs  # Normalize probabilities

        # Calculate and print percentage probabilities
        percentage_probs = [f"{int(round(prob * 100))}%" for prob in res[0]]
        print("Percentage Probabilities:", percentage_probs)

        # Get the predicted class
        prediction = np.argmax(res, axis=1)
        print("Predicted Class:", prediction[0])

        # Map the prediction to the respective stress level
        if prediction == 0:
            result = 'Low'
        elif prediction == 1:
            result = 'Moderate'
        else:
            result = 'High'

        # Return the prediction as a JSON response
        return jsonify({'prediction': result})
    



if __name__ == "__main__":
    app.run(debug=True, port=8080)