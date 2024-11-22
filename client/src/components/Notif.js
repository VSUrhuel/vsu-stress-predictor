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
            <ToastContainer className="z-auto" position="top-right" />
        </div>
    )
}

export default Notif
