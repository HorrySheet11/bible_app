import { createContext, useState } from "react";

export const BibleContext = createContext(null);

export const BibleProvider = ({ children }) => {
	const [book, setBook] = useState(null);
	const [chapter, setChapter] = useState(null);
	const [verse, setVerse] = useState(null);
	const [verses, setVerses] = useState(null);

	return (
		<BibleContext.Provider
			value={{ book, setBook, chapter, setChapter, verse, setVerse,verses, setVerses }}
		>
			{children}
		</BibleContext.Provider>
	);
};
