import { createContext, useState } from "react";

export const BibleContext = createContext(null);

export const BibleProvider = ({ children }) => {
	const [books, setBooks] = useState(null);
	const [chapters, setChapters] = useState(null);
	const [verse, setVerse] = useState(null);

	return (
		<BibleContext.Provider
			value={{ books, setBooks, chapters, setChapters, verse, setVerse }}
		>
			{children}
		</BibleContext.Provider>
	);
};
