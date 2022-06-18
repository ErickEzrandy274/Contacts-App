import React from "react";
import { InputProps } from "../utils/interface";

const Input: React.FC<InputProps> = ({ name, placeholder, handleChange, value, type }) => {

    return (
        <>
            <label htmlFor={name} className="text-lg">{name.substring(0,1).toUpperCase() + name.substring(1)}</label>
            <input
                className="block w-full p-2 mt-1 mb-3 border-2 border-indigo-400 rounded-lg focus:outline-indigo-600"
                type={type === 'number' ? `number` : `text`}
                name={name}
                value={value}
                maxLength={type === 'number' ? 11 : 30}
                minLength={type === 'number' ? 11 : 5}
                placeholder={placeholder}
                onChange={e => handleChange(e)}
            />
            {
                type === "number" ? 
                    value.toString().length > 0 && value.toString().length !== 11 &&
                    <p className="text-red-600 font-semibold -mt-3 px-2 mb-3">
                            Panjang nomor handphone harus 11 digit!
                    </p>
                    : 
                    value.length > 0 && value.length < 6 &&
                    <p className="text-red-600 font-semibold -mt-3 px-2 mb-3">
                            Minimal {name} kontak baru harus memiliki 6 karakter!
                    </p>
            }
        </>
	);
};

export default Input;
