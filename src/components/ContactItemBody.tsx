import React from "react";
import { ContactItemBodyProps } from "../utils/interface";

const ContactItemBody: React.FC<ContactItemBodyProps> = ({ name, tag, phone }) => {
	return (
		<div className="ml-2 pl-2 border-l-2 border-red-500">
            <h3 className="px-1">{name}</h3>
			<p className="font-light">@{tag}</p>
			<p className="font-light">0{phone}</p>
		</div>
	);
};

export default ContactItemBody
