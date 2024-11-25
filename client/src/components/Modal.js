import React from 'react'
import {X, Download} from 'lucide-react';

function Modal(){
    return(
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center">

            <div className="mt-10 flex flex-col gap-5 text-white">
                <button className='place-self-end'><X size="30"/></button>
                <div className="bg-green-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
                    <h1 className="text-3xl font-extrabold">Download Free Rhuel Pisot</h1>
                    <p className="text-3xl font-bold max-w-md text-center">Want to learn how to fuck?</p>
                    <form>
                        <input
                            type='email'
                            placeholder='Enter'
                            required
                            className="w=full px-4 py-3 text-black border-gray-200 rounded-r-md"
                        >
                            
                        </input>
                        <button className="mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black"><Download/>Download Rhuel</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
