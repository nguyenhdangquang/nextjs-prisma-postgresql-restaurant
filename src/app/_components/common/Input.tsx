import React from "react";
import {IoSearch} from "react-icons/io5";

const InputComponent = ({ label, placeholder, type = "text", onChange, value }) => {
    return (
        <div className="relative bg-gray">
            {label && <label className="block text-gray-700 text-sm font-bold">{label}</label>}
            <IoSearch size="16" color="#98A2B3" className="absolute left-2 top-2.5"/>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 pr-3 pl-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F9FAFB]"
            />
        </div>
    );
};

export default InputComponent
