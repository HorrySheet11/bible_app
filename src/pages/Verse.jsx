import { useContext, useEffect } from "react";
import { BibleContext } from "../context/BibleContext";

function Verse() {
	const { verses } = useContext(BibleContext);
  
  useEffect(() => {
    console.log(verses);
  }, [verses]);

	return (
		<div>
			<div>Verse </div>
			<div>
				{verses.map((verse) => (
					<div key={verse.number} className="px-5 py-2">
						<h3 className="inline ">{verse.number}</h3>{" "} 
						<h4 className="inline ">{verse.content[0]}</h4>
					</div>
				))}
			</div>
		</div>
	);
}
// Array.from({ length: verses.length }, (_, index) => index + 1)
export default Verse;
