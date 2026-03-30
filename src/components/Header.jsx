import { TbSourceCode } from "react-icons/tb";
import Breadcrumb from "./Breadcrumb";

function Header() {
	return (
		<div className="z-100 mb-10 sticky top-0 left-0 bg-linear-to-r from-cyan-500 to-blue-500 w-full h-20 flex flex-row justify-around items-center">
			<div className="flex flex-row gap-5">
				<h1>The Horry Bible</h1>
        <a href="https://github.com/HorrySheet11/bible_app" target="_blank" rel="noopener noreferrer" className="h-full"><TbSourceCode size={50}/></a>
			</div>
			<Breadcrumb />
		</div>
	);
}

export default Header;
