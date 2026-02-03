import { createContext, useState } from "react";
import { translations } from "../i18n.js";

export const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(
		localStorage.getItem("lang") || "es"
	);

	const toggleLanguage = () => {
		const newLang = language === "es" ? "en" : "es";
		setLanguage(newLang);
		localStorage.setItem("lang", newLang);
	};
	const t = (key) => translations[language][key] || [key];

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
}