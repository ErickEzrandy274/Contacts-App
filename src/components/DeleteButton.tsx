import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DeleteButton = () => {
	return (
		<button
            className="py-2 px-4 flex justify-center items-center 
                bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 
                text-white w-20 h-10 transition ease-in duration-200 text-center text-base font-semibold shadow-md 
                focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
		>
			<FontAwesomeIcon icon={"trash-alt"} />
			Delete
		</button>
	);
};

export default DeleteButton;
