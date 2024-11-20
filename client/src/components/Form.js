import React, {useState} from 'react'
import InputField from './InputField';
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
    <div className="Absolute z-0">
    <div className="card mx-auto bloc items-center justify-center border-1 border-black  w-1/2">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center mt-6">Stress Predictor</h1>
        <p className="mb-6 text-lg font-normal text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">Test your stress level by inputting the neccesary data in the web!</p>
        <form className="md:w-[300px] lg:w-[520px] mx-auto">
            <InputField
                label="Study hours per day:"
                type="number"
                name="studyHours"
                value={formData.studyHours}
                onChange={handleChange}
                placeholder="Enter study hours"
                required
            />
            <InputField
                label="Extracurricular hours per day:"
                type="number"
                name="extracurricularHours"
                value={formData.extracurricularHours}
                onChange={handleChange}
                placeholder="Enter extracurricular hours"
                required={true}
            />
            <InputField
                label="Sleep hours per day:"
                type="number"
                name="sleepHours"
                value={formData.sleepHours}
                onChange={handleChange}
                placeholder="Enter sleep hours"
                required={true}
            />
            <InputField
                label="Social hours per day:"
                type="number"
                name="socialHours"
                value={formData.socialHours}
                onChange={handleChange}
                placeholder="Enter social hours"
                required={true}
            />
            <InputField
                label="Physical activity hours per day:"
                type="number"
                name="physicalHours"
                value={formData.physicalHours}
                onChange={handleChange}
                placeholder="Enter physical activity hours"
                required={true}
            />
            <InputField
                label="GPA:"
                type="number"
                name="gpa"
                value={formData.gpa}
                onChange={handleChange}
                placeholder="Enter GPA"
                required={true}
            />

            <div className='justify-center flex w-full'>
            <button type="submit" className="item text-white bg-[#FDC530] hover:bg-[#f9b700] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-bold w-full sm:w-full md:w-full px-5 py-2.5 text-center">PREDICT</button>
            </div>
        </form>
        
        {prediction && (
            <div>
                <h2>Prediction: {prediction}</h2>
            </div>
        )}
    </div>
    </div>
  )
}
