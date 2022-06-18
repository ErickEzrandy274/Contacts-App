import React from "react";
import ContactInput from "./components/ContactInput";
import ContactList from "./components/ContactList";
import { getData } from "./utils/data";
import { v4 as uuidv4  } from 'uuid';

const App = () => {
	const data = getData();
	const [contacts, setContacts] = React.useState<any[]>(data);

	const deleteContact = (index: string) => {
		const newContacts = contacts.filter(({ id }) => id !== index);
		setContacts(newContacts);
    };
    
    const addContact = (name: string, tag: string, phone: string) => {
        const allNameValues = contacts.map(({ name }) => name)
        if (allNameValues.findIndex((item) => item === name) === -1){
            const newObjContact = {
                id: uuidv4(),
                name,
                tag,
                phone,
                imageUrl: '/images/default.jpg',
            }

            const newContacts = [...contacts, newObjContact]
            setContacts(newContacts)
        } else {
            alert(`Duplicate name of ${name}`)
        }
    }

	return (
		<div className="max-w-[800px] p-4 mx-auto font-semibold">
			<h1 className="text-6xl p-4 px-5">Aplikasi Kontak</h1>
			<h2 className="text-4xl p-4 px-5">Tambah Kontak</h2>
			<ContactInput addContact={addContact} />
			<h1 className="text-4xl p-4 px-5">Daftar Kontak</h1>
			<ContactList contacts={contacts} deleteContact={deleteContact} />
		</div>
	);
};

export default App;
