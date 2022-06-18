import React from "react";
import ContactList from "./components/ContactList";
import { getData } from "./utils/data";

const App = () => {
    const data = getData();
    const [contacts, setContacts] = React.useState<any[]>(data)

    const deleteContact = (index: string) => {
        const newContacts = contacts.filter(({id}) => id !== index)
        setContacts(newContacts)
    }

    return (
        <div className="max-w-[800px] p-4 mx-auto">
            <h1 className="text-5xl mb-8 p-4 px-5">Daftar Kontak</h1>
            <ContactList contacts={contacts} deleteContact={deleteContact} />
        </div>
    );
};

export default App;
