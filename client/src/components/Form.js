import React, { useState } from 'react'
import InputField from './InputField'
import Notif from './Notif'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Tooltip, Button } from '@material-tailwind/react'
import Pop from './Pop'
export default function Form() {
    const [formData, setFormData] = useState({
        studyHours: '',
        extracurricularHours: '',
        sleepHours: '',
        socialHours: '',
        physicalHours: '',
        gpa: '',
    })

    const [prediction, setPrediction] = useState('')
    const [notifMessage, setNotifMessage] = useState('')

    const handleChange = async (e) => {
        const { name, value } = e.target
        const inputField = document.querySelector(`input[name="${name}"]`)

        toast.dismiss() // Dismiss the error toast

        if (parseFloat(value) < 0) {
            toast.dismiss() // Dismiss the error toast
            toast.error('Please enter a positive number') // Display the error toast
            setFormData({
                ...formData,
                [name]: '',
            })
            inputField.style.borderColor = 'red'
        } else if (/[^0-9.,]+/.test(value)) {
            toast.dismiss() // Dismiss the error toast
            toast.error('Please enter a valid number') // Display the error toast
            setFormData({
                ...formData,
                [name]: '',
            })
            inputField.style.borderColor = 'red'
        } else if (parseFloat(value) > 0) {
            toast.dismiss() // Dismiss the error toast
            setFormData({
                ...formData,
                [name]: value,
            })
            inputField.style.borderColor = ''
            toast.dismiss()
        }
    }

    const preventNegative = (e) => {
        if (e.key === '-' || e.key === 'e' || e.key === '+' || e.key === '.') {
            console.log('Invalid input')
            e.preventDefault()
        }
    }

    var submitBtnClicked = 0
    const handleSubmit = async (e) => {
        const submitBtn = document.getElementById('submitBtn')
        submitBtn.disabled = true // Disable the button

        const inputFeatures = [
            parseFloat(formData.studyHours),
            parseFloat(formData.extracurricularHours),
            parseFloat(formData.sleepHours),
            parseFloat(formData.socialHours),
            parseFloat(formData.physicalHours),
            parseFloat(formData.gpa),
        ]

        if (
            formData.sleepHours === '' ||
            formData.extracurricularHours === '' ||
            formData.studyHours === '' ||
            formData.socialHours === '' ||
            formData.physicalHours === '' ||
            formData.gpa === ''
        ) {
            toast.dismiss()
            toast.error('Please fill in all fields')
            submitBtn.disabled = false // Re-enable the button
            return
        }

        console.log(inputFeatures)

        try {
            const response = await fetch('http://localhost:8080/api/home', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Specify JSON payload
                },
                body: JSON.stringify({ inputFeatures: inputFeatures }), // Send data
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            // Parse the JSON response once
            const result = await response.json()
            alert(result.prediction)
            setPrediction(result.prediction) // Use the parsed response
        } catch (error) {
            console.error('Error fetching prediction:', error)
        }

        submitBtn.disabled = false // Re-enable the button
    }

    return (
        <div className="Absolute z-50">
            <ToastContainer /> {/* Add this line */}
            <div className="card mx-auto bloc items-center justify-center border-1 border-black  w-1/2">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center mt-6">
                    Stress Predictor
                </h1>
                <div className="mb-6 text-lg font-normal text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 w-full flex justify-center items-center">
                    Find out your stress level with our stress predictor model!
                    <Tooltip
                        placement="right-start" // Tooltip position
                        interactive={true} // Keeps tooltip open when interacting with content
                        dismiss={{
                            enabled: true, // Enables dismiss functionality
                            outsidePress: true, // Dismiss on outside click
                            outsidePressEvent: 'click', // Trigger dismissal on click events
                        }}
                        content={<Pop />} // Pass the Pop component as content
                    >
                        <svg
                            className="w-5 h-5 absolute cursor-pointer text-blue-gray-500 ml-60 mt-7 hover:text-black hover:fill-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                            />
                        </svg>
                    </Tooltip>
                </div>
                {/* <p className=" text-center   w-full mb-4 text-gray-500 lg:text-sm sm:px-16 xl:px-48 ">
                    Fill in the form below and get your stress level.
                </p> */}
                <form className="md:w-[300px] lg:w-[520px] mx-auto">
                    <InputField
                        label="Study hours per day:"
                        type="decimal"
                        name="studyHours"
                        value={formData.studyHours}
                        onKeyDown={preventNegative}
                        onChange={handleChange}
                        placeholder="Enter study hours"
                        required
                    />
                    <InputField
                        label="Extracurricular hours per day:"
                        type="decimal"
                        name="extracurricularHours"
                        value={formData.extracurricularHours}
                        onKeyDown={preventNegative}
                        onChange={handleChange}
                        placeholder="Enter extracurricular hours"
                        required
                    />
                    <InputField
                        label="Sleep hours per day:"
                        type="decimal"
                        name="sleepHours"
                        value={formData.sleepHours}
                        onKeyDown={preventNegative}
                        onChange={handleChange}
                        placeholder="Enter sleep hours"
                        required
                    />
                    <InputField
                        label="Social hours per day:"
                        type="decimal"
                        name="socialHours"
                        value={formData.socialHours}
                        onKeyDown={preventNegative}
                        onChange={handleChange}
                        placeholder="Enter social hours"
                        required
                    />
                    <InputField
                        label="Physical activity hours per day:"
                        type="decimal"
                        name="physicalHours"
                        value={formData.physicalHours}
                        onKeyDown={preventNegative}
                        onChange={handleChange}
                        placeholder="Enter physical activity hours"
                        required
                    />
                    <InputField
                        label="GPA:"
                        type="decimal"
                        name="gpa"
                        value={formData.gpa}
                        onKeyDown={preventNegative}
                        onChange={handleChange}
                        placeholder="Enter GPA"
                        required={true}
                    />

                    <div className="justify-center flex w-full">
                        <button
                            id="submitBtn"
                            type="submit"
                            onClick={handleSubmit}
                            className="item text-white bg-[#FDC530] hover:bg-[#f9b700] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-bold w-full sm:w/full md:w/full px-5 py-2.5 text-center"
                        >
                            PREDICT
                        </button>
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
