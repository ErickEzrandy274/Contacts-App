import React from "react";
import { InputProps } from "../utils/interface";

const Input: React.FC<InputProps> = ({ name, placeholder, handleChange, value }) => {

	return (
		<input
			className="block w-full p-2 my-3 border-2 border-indigo-400 rounded-lg focus:outline-indigo-600"
            type="text"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={e => handleChange(e)}
            required
		/>
	);
};

export default Input;
