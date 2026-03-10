import { BibleContext } from "../context/BibleContext";
import { useContext } from "react";
import Books from "./Books";
import Chapters from "./Chapters";
import Verses from "./Verses";
import { Outlet } from "react-router-dom";

function Home(){
  const { book, setBook, chapter, setChapter, verse, setVerse } = useContext(BibleContext);
  return(
    <div>
      <h1>The Bible</h1>
      {!book && <Books/>}
      {book && !chapter && <Chapters/>}
      {book && chapter && !verse && <Verses/>}
      
    </div>
  )
}

export default Home;