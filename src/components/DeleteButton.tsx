import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import React from "react";
import { DeleteButtonProps } from "../utils/interface";

const DeleteButton: React.FC<DeleteButtonProps> = ({ index, deleteContact }) => {
    
	return (
        <button
            className="py-2 px-4 flex justify-center items-center gap-2
                bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 
                text-white w-24 h-10 transition ease-in duration-200 text-center text-base font-semibold shadow-md 
                focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
            onClick={() => deleteContact(index)}
		>
			<FontAwesomeIcon icon={solid('trash-can')} />
			Delete
		</button>
	);
};

export default DeleteButton;
