import React from "react";
import { ContactItemProps } from "../utils/interface";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import DeleteButton from "./DeleteButton";

const ContactItem: React.FC<ContactItemProps> = ({ imageUrl, name, tag }) => {
	return (
		<div className="flex justify-between items-center mx-6 border-2 border-black p-4 rounded-lg border-dashed">
			<div className="flex items-center">
				<ContactItemImage imageUrl={imageUrl} />
				<ContactItemBody name={name} tag={tag} />
			</div>
			<DeleteButton />
		</div>
	);
};

export default ContactItem;
