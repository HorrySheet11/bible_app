import { BibleContext } from "../context/BibleContext";
import { useContext } from "react";
import Books from "./Books";
import Chapters from "./Chapters";
import Verses from "./Verses";

function Home(){
  const { book, chapter, verse } = useContext(BibleContext);
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