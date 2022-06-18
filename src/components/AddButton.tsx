import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"

const AddButton = () => {
	return (
		<button
			type="button"
            className="flex gap-2 justify-center items-center py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 
                focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center 
                text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
        >
            <FontAwesomeIcon icon={solid('plus')} />
			Add Contact
		</button>
	);
};

export default AddButton;