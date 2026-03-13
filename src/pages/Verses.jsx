import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BibleContext } from "../context/BibleContext";

function Verses() {
	const { book, chapter, setVerse, verses, setVerses } =
		useContext(BibleContext);

	useEffect(() => {
		async function getVerses() {
			const response = await axios.get(
				`https://bible.helloao.org/api/eng_kjv/${book.id}/${chapter}.json`,
			);
			setVerses(response.data.chapter.content);
		}
		try {
			getVerses();
		} catch (error) {
			console.log(error);
		}
	}, [chapter, book.id, setVerses]);

	useEffect(() => {
		console.log(verses);
	}, [verses]);

	return (
		<div>
			<h1>Verses</h1>
			<div className="p-10 gap-5 grid-cols-[repeat(auto-fill,minmax(100px,1fr))] grid-rows-auto">
				{!verses ? (
					<p>Loading...</p>
				) : (
					verses?.map((verse) => (
						<button
							key={verse.number}
							type="button"
							className="cursor-pointer font-bold w-25 h-25 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
							onClick={() => setVerse(verse.number)}
						>
							<h3>{verse.number}</h3>
						</button>
					))
				)}
			</div>
		</div>
	);
}

export default Verses;
