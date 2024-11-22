import React from 'react'
function Pop() {
    return (
        <div className="absolute z-50 inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-300 rounded-lg shadow-sm w-96 ">
            <div className="grid grid-cols-5">
                <div className="col-span-3 p-3">
                    <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                            Stress Predictor Model
                        </h3>
                        <p>
                            This model predicts the stress levels of{' '}
                            <span className=" text-green-600">Viscans</span>{' '}
                            based on quantifiable lifestyle information. It was
                            trained using a multi-layer neural network and
                            achieved a <span className="font-bold">99%</span>{' '}
                            accuracy on the test data. Use with caution.
                        </p>
                        <a
                            href="#"
                            className="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline"
                        >
                            Read more{' '}
                            <svg
                                className="w-2 h-2 ms-1.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <img
                    src="/neural-network.png"
                    className="h-full col-span-2 rounded-r-lg rounded- object-cover"
                    alt="Neural network"
                />
            </div>
            <div data-popper-arrow></div>
        </div>
    )
}

export default Pop
