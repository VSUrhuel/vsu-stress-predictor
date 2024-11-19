import React, {useState} from 'react'

export default function Form() {

    const [formData, setFormData] = useState({
        studyHours: 0,
        extracurricularHours: 0,
        sleepHours: 0,
        socialHours: 0,
        physicalHours: 0,
        gpa: 0,
    });

    const [prediction, setPrediction] = useState('');

    const handleChange= (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const inputFeatures = [
            parseFloat(formData.studyHours),
            parseFloat(formData.extracurricularHours),
            parseFloat(formData.sleepHours),
            parseFloat(formData.socialHours),
            parseFloat(formData.physicalHours),
            parseFloat(formData.gpa),
        ];
        console.log(inputFeatures);
        try {
            const response = await fetch('http://localhost:8080/api/home', {
                method: 'POST',
            headers: {
                    'Content-Type': 'application/json', // Specify JSON payload
                },
                body: JSON.stringify({ inputFeatures: inputFeatures }), // Send data
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Parse the JSON response once
            const result = await response.json();
            setPrediction(result.prediction); // Use the parsed response
        } catch (error) {
            console.error('Error fetching prediction:', error);
        }
    }

  return (
    <div className="mx-auto block items-center justify-center ">
        <h1>Stress Prediction Form</h1>
        <form onSubmit={handleSubmit}>
            <label>Study hours per day:</label>
            <input type="number"
                    name="studyHours"
                    value={formData.studyHours}
                    onChange={handleChange} 
                    required
             />
            <label>Extracurricular hours per day:</label>
            <input type="number"
                    name="extracurricularHours"
                    value={formData.extracurricularHours}
                    onChange={handleChange} 
                    required
            />
            <label>Sleep hours per day:</label>
            <input type="number"
                    name="sleepHours"
                    value={formData.sleepHours}
                    onChange={handleChange} 
                    required
            />
            <label>Social hours per day:</label>
            <input type="number"
                    name="socialHours"
                    value={formData.socialHours}
                    onChange={handleChange} 
                    required
            />
            <label>Physical activity hours per day:</label>
            <input type="number"
                    name="physicalHours"
                    value={formData.physicalHours}
                    onChange={handleChange} 
                    required
             />
             <label>GPA:</label>
            <input type="number"
                    name="gpa"
                    value={formData.gpa}
                    onChange={handleChange} 
                    required
             />
            <button type="submit">Submit</button>

        </form>
        {prediction && (
            <div>
                <h2>Prediction: {prediction}</h2>
            </div>
        )}
    </div>
  )
}
