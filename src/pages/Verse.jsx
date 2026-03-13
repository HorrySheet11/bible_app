import { useContext, useEffect, useRef } from "react";
import { BibleContext } from "../context/BibleContext";

function Verse() {
	const { verse, verses } = useContext(BibleContext);

	const ref = useRef(null);
	
  useEffect(() => {
		const scrollToPosition = (targetId, offset) => {
			const target = document.getElementById(targetId);
			const rect = target.getBoundingClientRect();
			const scrollTop = window.pageYOffset + (rect.top + rect.height / 2) - (window.innerHeight / 2) + offset;
			window.scrollTo({ top: scrollTop, behavior: 'smooth' });
		};
		const handleScroll = (targetId) => {
			if (targetId) {
				scrollToPosition(targetId, 50);
			}
		}
    if (ref.current) {
      ref.current.addEventListener('click', () => handleScroll(verse));
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('click', () => handleScroll(verse));
      }
    };
  }, [verse]);

	return (
		<div ref={ref} className="pb-[25vh]">
			{verses.map((verse) => (
				<div key={verse.number} className="px-5 py-2" id={verse.number}>
					<h3 className="inline ">{verse.number}</h3>{" "}
					<h4 className="inline ">{verse.content[0]}</h4>
				</div>
			))}
		</div>
	);
}
export default Verse;
