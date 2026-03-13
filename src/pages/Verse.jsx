import { useContext, useEffect } from "react";
import { BibleContext } from "../context/BibleContext";

function Verse() {
	const { verses } = useContext(BibleContext);
  
  useEffect(() => {
    console.log(verses);
  }, [verses]);

	return (
		<div>
			<div>Verse</div>
			<div>
				{verses.map((verse) => (
					<div key={verse.number}>
						<h4 className="inline-block">{verse.number}</h4>
						<p>{verse.content[0]}</p>
					</div>
				))}
			</div>
		</div>
	);
}
// Array.from({ length: verses.length }, (_, index) => index + 1)
export default Verse;
