import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { BibleProvider } from "./context/BibleContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BibleProvider>
		  <BrowserRouter>
  			<App />
  		</BrowserRouter>
		</BibleProvider>
	</StrictMode>,
);
