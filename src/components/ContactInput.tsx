import React from "react";
import AddButton from "./AddButton";

const ContactInput = () => {
	return (
		<form className="border-2 border-dashed border-black p-4 mx-3.5 rounded-lg mb-8">
			<input className="block w-full p-2 my-3 border-2 border-indigo-400 rounded-lg focus:outline-indigo-600" type="text" placeholder="Masukkan nama kontak baru" />
			<input className="block w-full p-2 my-3 border-2 border-indigo-400 rounded-lg focus:outline-indigo-600" type="text" placeholder="Masukkan tag kontak baru" />
			<AddButton />
		</form>
	);
};

export default ContactInput;
