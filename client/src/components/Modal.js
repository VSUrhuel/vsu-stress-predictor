import React from 'react'
import { X, Download } from 'lucide-react'
import { useRef } from 'react'
function Modal({ onClose, content }) {
    const modalRef = useRef()
    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose()
        }
    }
    return (
        <div
            ref={modalRef}
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center"
        >
            <div className="mt-10 flex flex-col gap-5 text-white">
                <button onClick={onClose} className="place-self-end">
                    <X size="30" />
                </button>
                <div className="bg-green-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
                    <h1 className="text-3xl font-extrabold">Stress Level</h1>
                    <h2 className="text-5xl font-extrabold">
                        {content !== undefined && content !== null
                            ? content
                            : 'No result available'}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Modal
