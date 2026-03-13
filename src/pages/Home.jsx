import { useContext } from "react";
import { BibleContext } from "../context/BibleContext";
import Books from "./Books";
import Chapters from "./Chapters";
import Verse from "./Verse";
import Verses from "./Verses";
import Header from '../components/Header';

function Home() {
	const { book, chapter, verse } = useContext(BibleContext);
	return (
		<div className="">
			<Header />
			{!book && <Books />}
			{book && !chapter && <Chapters />}
			{book && chapter && !verse && <Verses />}
			{book && chapter && verse && <Verse />}
		</div>
	);
}

export default Home;
