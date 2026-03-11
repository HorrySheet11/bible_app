import { createContext, useState } from "react";

export const BibleContext = createContext(null);

export const BibleProvider = ({ children }) => {
	const [book, setBook] = useState(null);
	const [chapter, setChapter] = useState(null);
	const [verse, setVerse] = useState(null);

	return (
		<BibleContext.Provider
			value={{ book, setBook, chapter, setChapter, verse, setVerse }}
		>
			{children}
		</BibleContext.Provider>
	);
};
