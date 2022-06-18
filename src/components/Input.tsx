import React from "react";
import { InputProps } from "../utils/interface";

const Input: React.FC<InputProps> = ({ name, placeholder }) => {

	return (
		<input
			className="block w-full p-2 my-3 border-2 border-indigo-400 rounded-lg focus:outline-indigo-600"
            type="text"
            name={name}
			placeholder={placeholder}
		/>
	);
};

export default Input;
