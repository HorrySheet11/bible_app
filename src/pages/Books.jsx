import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BibleContext } from "../context/BibleContext.jsx";

function Books() {
	const { book, setBook } = useContext(BibleContext);
	const [books, setBooks] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchBooks() {
			const response = await axios.get(
				"https://bible.helloao.org/api/eng_kjv/books.json",
			);
			setBooks(response.data.books);
			console.log(response.data.books);
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
			<h2 className="text-center">Books</h2>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div className="grid p-10 gap-5 grid-cols-[repeat(auto-fill,minmax(175px,1fr))] grid-rows-auto">
					{books?.map((book) => (
						<button
							type="button"
							onClick={() => setBook(book)}
							key={book.id}
							className="block cursor-pointer w-50 h-25 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
						>
							<h3>{book.name}</h3>
						</button>
					))}
				</div>
			)}
		</div>
	);
}

export default Books;
