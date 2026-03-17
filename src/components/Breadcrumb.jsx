import { useContext, useEffect, useState } from "react";
import { BibleContext } from "../context/BibleContext";

function Breadcrumb() {
	const { book, setBook, chapter, setChapter, verse, setVerse, setVerses } =
		useContext(BibleContext);
	const [pressed, setPressed] = useState(false);

	useEffect(() => {
		console.log(book, chapter, verse);
	}, [book, chapter, verse]);

	function handleClick(e) {
		switch (e) {
			case "home":
				setBook(null);
				setChapter(null);
				setVerse(null);
				setVerses(null);
				break;

			case "book":
				setChapter(null);
				setVerse(null);
				setVerses(null);

				break;

			case "chapter":
				setVerse(null);
				break;
		}
	}

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			setPressed(!pressed);
		}
	});

	useEffect(() => {
		//FIXME: book handleClick is being triggered on chapter handleClick
		if (book && chapter && verse) {
			console.log("chapter");
			handleClick("chapter");
			return 
		} else if (book && chapter && verse === null) {
			console.log("book");
			handleClick("book");
			return 
		} else if (book && chapter === null && verse === null) {
			console.log("home");
			handleClick("home");
			return 
		}
		return;
	}, [pressed]);

	return (
		<div className="flex flex-row justify-center items-center gap-3 ">
			<button
				type="button"
				onClick={() => handleClick("home")}
				className="transition ease-in-out duration-200 hover:scale-105 cursor-pointer hover:text-shadow-lg"
			>
				<h4>Home</h4>
			</button>
			{book && (
				<>
					<h4>{">"}</h4>{" "}
					<button
						type="button"
						onClick={() => handleClick("book")}
						className="transition ease-in-out duration-200 hover:scale-105 cursor-pointer hover:text-shadow-lg"
					>
						<h4>{book.name}</h4>
					</button>
				</>
			)}
			{chapter && (
				<>
					<h4>{">"}</h4>{" "}
					<button
						type="button"
						onClick={() => handleClick("chapter")}
						className="transition ease-in-out duration-200 hover:scale-105 cursor-pointer hover:text-shadow-lg"
					>
						<h4>Chapter {chapter}</h4>
					</button>
				</>
			)}
		</div>
	);
}

export default Breadcrumb;
