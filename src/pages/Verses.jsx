import axios from "axios";
import { useContext, useEffect } from "react";
import { BibleContext } from "../context/BibleContext";

function Verses() {
	const { book, chapter, setVerse, verses, setVerses } =
		useContext(BibleContext);

		//FIXME: fix react-scroll not scrolling to element
	useEffect(() => {
		async function getVerses() {
			const response = await axios.get(
				`https://bible.helloao.org/api/eng_kjv/${book.id}/${chapter}.json`,
			);
			console.log('requested');
			setVerses(response.data.chapter.content);
			console.log(response.data.chapter.content);
		}
		try {
			getVerses();
		} catch (error) {
			console.log(error);
		}
	}, [chapter, book.id, setVerses]);

	return (
		<div className="transition ease-in-out duration-200 ">
			<h1 className="text-center">Verses</h1>
			<div className="p-10 gap-5 grid-cols-[repeat(auto-fill,minmax(100px,1fr))] grid-rows-auto">
				{!verses ? (
					<p className="w-full text-center">Loading...</p>
				) : (
					verses?.map((verse) => (
						<a key={verse.number} href={`#${verse.number}`}>
							<button
								type="button"
								className="cursor-pointer font-bold w-25 h-25 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
								onClick={() => setVerse(verse.number)}
							>
								<h3>{verse.number}</h3>
							</button>
						</a>
					))
				)}
			</div>
		</div>
	);
}

export default Verses;
