import React from 'react'

const InputField = ({
    label,
    type,
    name,
    value,
    onChange,
    placeholder,
    required,
}) => {
    return (
        <div className="flex justify-center items-center">
            <div className="relative w-full lg:w-96 mb-5  ">
                <input
                    type={type}
                    name={name}
                    id={name}
                    className="block py-2.5 px-0 w-full text-xs md:text-sm lg:text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={onChange}
                    required={required}
                />
                <label
                    htmlFor={name}
                    className="peer-focus:font-medium absolute text-xs text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 md:text-sm lg:text-sm"
                >
                    {label}
                </label>
            </div>
        </div>
    )
}

export default InputField
