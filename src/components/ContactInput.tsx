import React from "react";
import { ContactInputProps } from "../utils/interface";
import AddButton from "./AddButton";
import Input from "./Input";

const ContactInput: React.FC<ContactInputProps> = ({ addContact }) => {
    const [field, setField] = React.useState<{ name: string, tag: string, phone: string }>({
        name: "",
        tag: "",
        phone: ""
    })

    const handleChange = (e:any) => {
        const target = e.target
        const name = target.name
        const value = target.value

        setField({
            ...field,
            [name]: value
        })
    }
    
	return (
		<form className="border-2 border-dashed border-black p-4 mx-3.5 rounded-lg mb-8">
            <Input
                name="name"
                placeholder="Masukkan nama kontak baru"
                handleChange={handleChange}
                value={field.name}
            />
            <Input
                name="tag"
                placeholder="Masukkan tag kontak baru"
                handleChange={handleChange}
                value={field.tag}
            />
            <Input
                name="phone"
                placeholder="Masukkan nomor handphone kontak baru"
                handleChange={handleChange}
                value={field.phone}
            />
			<AddButton addContact={addContact} {...field} setField={setField} />
		</form>
	);
};

export default ContactInput;
