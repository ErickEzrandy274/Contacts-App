import React from "react";
import { ContactItemProps } from "../utils/interface";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";

const ContactItem: React.FC<ContactItemProps> = ({ imageUrl, name, tag }) => {
	return (
		<div className="contact-item">
			<ContactItemImage imageUrl={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
		</div>
	);
};

export default ContactItem;
