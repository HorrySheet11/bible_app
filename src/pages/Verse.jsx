import { useContext } from "react";
import { BibleContext } from "../context/BibleContext";

function Verse() {
	const { verses } = useContext(BibleContext);

	return (
		<div className="pb-[25vh]">
			{verses?.map((verse) => (
				<div
					key={verse.number}
					className="px-5 py-3 w-full inline-block after:content-[''] after:w-full after:inline-block "
					id={verse.number}
				>
					<h3 className=" float-left h-full pr-3 font-bold">{verse.number}</h3>
					<h4 className="text-justify">
						{verse.content.map((content, index) => {
							return (
								<>
									<span key={content.noteId}>
										{content.text ? (
											<span className="italic ">{content.text}</span>
										) : typeof content === "string" ? (
											<span>{verse.content[index]}</span>
										) : null}
									</span>{" "}
								</>
							);
						})}
					</h4>
				</div>
			))}
		</div>
	);
}
export default Verse;
