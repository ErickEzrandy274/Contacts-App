import { v4 as uuidv4  } from 'uuid';

const getData = () => {
	return [
		{
			id: uuidv4(),
			name: "Dimas Saputra",
			tag: "dimasmds",
			imageUrl: "/images/dimasmds.jpeg",
			phone: "083453284564",
		},
		{
			id: uuidv4(),
			name: "Arif Faizin",
			tag: "arifaizin",
			imageUrl: "/images/arifaizin.jpeg",
			phone: "086754356678",
		},
		{
			id: uuidv4(),
			name: "Rahmat Fajri",
			tag: "rfajri27",
			imageUrl: "/images/rfajri27.jpeg",
			phone: "087632785667",
		},
	];
};

export { getData };