import React from 'react'
import { X, Download } from 'lucide-react'
import { useRef } from 'react'
import { textarea } from '@material-tailwind/react'
import { m } from 'framer-motion'

function Modal({ onClose, content }) {
    const modalRef = useRef()
    let colorClass = ''
    let imageSrc = ''
    let message = ''

    if (content === 'High') {
        // Adjust the threshold values as needed
        colorClass = 'text-red-500'
        imageSrc = '/high.png'
        message = (
            <p>
                You seem to be feeling{' '}
                <span className="font-semibold text-black">overwhelmed</span>.
                Remember to break tasks into smaller, manageable steps.
                Don&apos;t forget to take short breaks to rest your mind.
            </p>
        )
    } else if (content === 'Medium') {
        colorClass = 'text-yellow-500'
        imageSrc = '/moderate.png'
        message = (
            <p>
                You&apos;re{' '}
                <span className="font-semibold text-black">
                    feeling a bit stressed
                </span>
                , but you&apos;re managing well. Keep up the good work, but
                remember to take short breaks to recharge. Consider practicing
                relaxation techniques like yoga or listening to calming music.
            </p>
        )
    } else {
        colorClass = 'text-green-500'
        imageSrc = '/low.png'
        message = (
            <p>
                You seem to be{' '}
                <span className="font-semibold text-black">
                    feeling pretty relaxed
                </span>
                ! That&apos;s great news. Keep up the good work and continue to
                prioritize self-care.
            </p>
        )
    }

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
                <div
                    className={`bg-green-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4 ${colorClass}`}
                >
                    <h1 className="text-3xl font-extrabold">Stress Level</h1>
                    <img
                        src={imageSrc}
                        alt="Stress Level"
                        className="w-20 h-20"
                    />
                    {message}
                </div>
            </div>
        </div>
    )
}

export default Modal
