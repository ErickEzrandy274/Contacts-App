import React from "react";
import { ContactItemImageProps } from "../utils/interface";

const ContactItemImage: React.FC<ContactItemImageProps> = ({ imageUrl }) => {
	return (
		<div className="contact-item__image">
			<img className="w-full" src={imageUrl} alt="contact avatar" />
		</div>
	);
};

export default ContactItemImage;
