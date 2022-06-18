import React from "react";
import AddButton from "./AddButton";
import Input from "./Input";

const ContactInput = () => {
	return (
		<form className="border-2 border-dashed border-black p-4 mx-3.5 rounded-lg mb-8">
            <Input
                name="fullname"
                placeholder="Masukkan nama kontak baru"
            />
            <Input
                name="tag"
                placeholder="Masukkan tag kontak baru"
            />
			<AddButton />
		</form>
	);
};

export default ContactInput;
