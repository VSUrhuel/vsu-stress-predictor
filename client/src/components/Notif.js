import React from 'react'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notif = ({ description }) => {
    useEffect(() => {
        if (description) {
            toast.error(description)
        }
    }, [description])
    return (
        <div className="z-50">
            {/* <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={notify}
            >
                Show Error
            </button> */}
            <ToastContainer className="z-auto" position="top-right" />
        </div>
    )
}

export default Notif
