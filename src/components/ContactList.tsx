import React from "react";
import { ContactListProps } from "../utils/interface";
import ContactItem from "./ContactItem";

const ContactList: React.FC<ContactListProps> = ({ contacts, deleteContact }) => {

	return (
		<div className="flex flex-col gap-6">
			{contacts.map((contact) => (
				<ContactItem key={contact.id} {...contact} deleteContact={deleteContact} />
			))}
		</div>
	);
};

export default ContactList;
