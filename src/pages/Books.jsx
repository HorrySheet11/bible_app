import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BibleContext } from "../context/BibleContext.jsx";

function Books() {
	const { book, setBook } = useContext(BibleContext);
	const [books, setBooks] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

// 	async function handleBookClick(clickedBook) {
// 		// console.log(clickedBook);
// 		await setBook(clickedBook);
// 	}
//FIXME: book not setting
	useEffect(() => {
		console.log(book);
	}, [book]);

	useEffect(() => {
		async function fetchBooks() {
			const response = await axios.get(
				"https://bible.helloao.org/api/eng_kja/books.json",
			);
			setBooks(response.data.books);
		}
		try {
			fetchBooks();
			setIsLoading(false);
		} catch (error) {
			console.error(error);
		}
	}, []);

	return (
		<div>
			<h2>Books</h2>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				books?.map((book) => (
					<button
						type="button"
						onClick={() => setBook(book)}
						key={book.id}
						className="block cursor-pointer"
					>
						<h3>{book.name}</h3>
						<p>{book.title}</p>
					</button>
				))
			)}
		</div>
	);
}

export default Books;
