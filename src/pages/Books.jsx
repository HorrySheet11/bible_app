import axios from "axios";
import { useContext, useEffect } from "react";
import { BibleContext } from "../context/BibleContext.jsx";

function Books() {
	const { books, setBooks } = useContext(BibleContext);

	useEffect(() => {
		async function fetchBooks() {
			const response = await axios.get(
				"https://bible.helloao.org/api/eng_kja/books.json",
			);
			setBooks(response.data.books);
			console.log(response.data);
		}
		try {
      fetchBooks();
		} catch (error) {
			console.error(error);
		}
	}, [setBooks]);
	return (
		<div>
			<h2>Books</h2>
			{books?.map((book) => (
				<div key={book.id}>
					<h3>{book.name}</h3>
					<p>{book.title}</p>
				</div>
			))}
		</div>
	);
}

export default Books;
