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
        //TODO: map verse array
				{verses?.map((verse) => (
					<div key={verse.number}>
						<h4 className="inline-block">{verse.number}</h4>
						<p>{verse.content}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Verse;
