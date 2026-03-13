import { useContext } from "react";
import { BibleContext } from "../context/BibleContext";

function Breadcrumb() {
	const { book, setBook, chapter, setChapter, setVerse } = useContext(BibleContext);

  function handleClick(e){
    switch (e) {
      case 'home':
        setBook(null);
        setChapter(null);
        setVerse(null);
        break;
    
      case 'book':
        setChapter(null);
        setVerse(null);
        break;
    
      case 'chapter':
        setVerse(null);
        break;
    }
  }

	return (
		<div className="flex flex-row justify-center items-center gap-3 ">
			<button type="button" onClick={() => handleClick('home')} className="transition ease-in-out duration-200 hover:scale-105 cursor-pointer hover:text-shadow-lg">
				<h4>Home</h4>
			</button>
			{book && (
				<>
					<h4>{">"}</h4>{" "}
					<button type="button" onClick={() => handleClick('book')} className="transition ease-in-out duration-200 hover:scale-105 cursor-pointer hover:text-shadow-lg">
						<h4>{book.name}</h4>
					</button>
				</>
			)}
			{chapter && (
				<>
					<h4>{">"}</h4>{" "}
					<button type="button" onClick={() => handleClick('chapter')} className="transition ease-in-out duration-200 hover:scale-105 cursor-pointer hover:text-shadow-lg">
						<h4>Chapter {chapter}</h4>
					</button>
				</>
			)}
		</div>
	);
}

export default Breadcrumb;
