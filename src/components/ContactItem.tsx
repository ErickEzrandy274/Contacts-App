import React from "react";
import { ContactItemProps } from "../utils/interface";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";

const ContactItem: React.FC<ContactItemProps> = ({ imageUrl, name, tag }) => {
	return (
		<div className="flex items-center mx-6 border-2 border-black p-4 rounded-lg">
			<ContactItemImage imageUrl={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
		</div>
	);
};

export default ContactItem;
