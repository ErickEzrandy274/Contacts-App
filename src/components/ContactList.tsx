import React from "react";
import { ContactListProps } from "../utils/interface";
import ContactItem from "./ContactItem";

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
	return (
		<div className="contact-list">
			{contacts.map((contact) => (
				<ContactItem key={contact.id} {...contact} />
			))}
		</div>
	);
};

export default ContactList;