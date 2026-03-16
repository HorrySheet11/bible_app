import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BibleContext } from "../context/BibleContext.jsx";

function Books() {
	const { setBook } = useContext(BibleContext);
	const [books, setBooks] = useState(null);

	useEffect(() => {
		async function fetchBooks() {
			const response = await axios.get(
				"https://bible.helloao.org/api/eng_kjv/books.json",
			);
			setBooks(response.data.books);
		}
		try {
			fetchBooks();
		} catch (error) {
			console.error(error);
		}
	}, []);

	return (
		<div className="transition ease-in-out duration-200 ">
			{!books ? (
				<p>Loading...</p>
			) : (
				<>
					<h2 className="w-full text-center font-bold">Old Testament</h2>
					<div className="grid p-10 gap-5 grid-cols-[repeat(auto-fill,minmax(185px,1fr))] grid-rows-auto">
						{books?.slice(0, 39).map((book) => (
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
					<h2 className="w-full text-center font-bold">
						New Testament
					</h2>
					<div className="grid p-10 gap-5 grid-cols-[repeat(auto-fill,minmax(185px,1fr))] grid-rows-auto">
						{books?.slice(39, 66).map((book) => (
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
				</>
			)}
		</div>
	);
}

export default Books;
