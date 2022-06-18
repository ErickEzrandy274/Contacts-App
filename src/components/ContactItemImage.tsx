import React from "react";
import { ContactItemImageProps } from "../utils/interface";

const ContactItemImage: React.FC<ContactItemImageProps> = ({ imageUrl }) => {
	return (
		<div className="w-16">
			<img className="w-full rounded-full" src={imageUrl} alt="contact avatar" />
		</div>
	);
};

export default ContactItemImage;
