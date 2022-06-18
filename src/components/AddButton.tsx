import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { SubmitProps } from "../utils/interface";

const AddButton: React.FC<SubmitProps> = ({ addContact, name, tag, phone, setField }) => {
    const handleSubmit = (e: any) => {
        if (name.length >= 6 && tag.length >= 6 && phone.toString().length === 11 ) {
            e.preventDefault()
            addContact(name, tag, phone)
            setField({
                name: "",
                tag: "",
                phone: ""
            })
            alert(`${name} has been added!`)
        }
    }

	return (
		<button
			onClick={e => handleSubmit(e)}
            className={`flex gap-2 justify-center items-center py-2 px-4 text-white w-full transition ease-in 
                duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2
                focus:ring-offset-2  rounded-lg ${name.length < 6 || tag.length < 6 || phone.toString().length !== 11 ?
                    `bg-gray-600 cursor-not-allowed` : `bg-indigo-600 hover:bg-indigo-700 
                focus:ring-indigo-500 focus:ring-offset-indigo-200`}
            `}
            disabled={name.length < 6 || tag.length < 6 || phone.toString().length !== 11 ? true : false}
        >
            <FontAwesomeIcon icon={solid('plus')} />
			Add Contact
		</button>
	);
};

export default AddButton;
