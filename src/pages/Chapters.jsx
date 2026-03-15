import { useContext, useEffect } from "react";
import { BibleContext } from "../context/BibleContext";

function Chapters() {
	const { book,  setChapter } = useContext(BibleContext);
  
	// useEffect(() => {
	// 	console.log(book);
	// }, [book]);

	return (
		<div className="transition ease-in-out duration-200 ">
			<h2 className="text-center">{book.name}</h2>
      {book.name !== book.title && <h3 className="text-center">{book.title}</h3>}
      <div className="p-10 gap-5 grid-cols-[repeat(auto-fill,minmax(100px,1fr))] grid-rows-auto">
        {Array.from({ length: book.lastChapterNumber }, (_, index) => index + 1).map((chapter) => (
          <button type="button" key={chapter} onClick={()=> setChapter(chapter)} className="cursor-pointer font-bold w-25 h-25 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><h3>{chapter}</h3></button>
        ))}
      </div>
		</div>
	);
}

export default Chapters;
