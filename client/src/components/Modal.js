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
            <div className="bg-white mt-10 flex flex-col w-1.3 text-white rounded-xl overflow-hidden w-1/3">
                <div className="flex flex-row-reverse mr-2 mt-2">
                    <button
                        onClick={onClose}
                        className="place-self-end text-black"
                    >
                        <X size="30" />
                    </button>
                </div>
                <div className="justify-center align-middle content-center flex">
                    <img
                        className="pt-4"
                        src={imageSrc}
                        width={200}
                        height={200}
                    ></img>
                </div>
                <div className=" px-20 py-10 flex flex-col gap-5 items-center mx-4">
                    <h2 className={`text-3xl font-extrabold ${colorClass}`}>
                        {content !== undefined && content !== null
                            ? content.toUpperCase()
                            : 'No result available'}
                    </h2>
                    <p className="text-center w-full text-gray-600 text-sm ">
                        {message}
                    </p>
                </div>
                <div className="bg-[#146939] px-4 py-3 text-center flex flex-col gap-1">
                    <div className="flex justify-center gap-2">
                        <img src="/info.png" width={30} height={15}></img>
                        <h3 className="text-base font-semibold">Learn More</h3>
                    </div>

                    <p className="text-sm">
                        Visit the{' '}
                        <a
                            href="https://www.who.int/news-room/questions-and-answers/item/stress"
                            className="text-blue-400 underline font-semibold"
                        >
                            {' '}
                            World Health Organization
                        </a>{' '}
                        website for more information on stress management.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Modal
