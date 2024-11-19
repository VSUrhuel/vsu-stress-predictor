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

        # Make prediction
        prediction = np.argmax(model.predict(data), axis=1)

        # Map the prediction to the respective stress level
        if prediction == 0:
            result = 'Low'
        elif prediction == 1:
            result = 'Medium'
        else:
            result = 'High'

        # Return the prediction as a JSON response
        return jsonify({'prediction': result})
    



if __name__ == "__main__":
    app.run(debug=True, port=8080)