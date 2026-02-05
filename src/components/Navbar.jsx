import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
	const { t } = useContext(LanguageContext);

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4 fixed w-full top-0 z-50 flex justify-between items-center">
      <div className="text-xl font-bold">{t("appTitle")}</div>

      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="cursor-pointer">
          {isDark ? <FaMoon size={16}/> : <FaSun size={16}/>}
        </button>
        <button onClick={toggleLanguage} className="cursor-pointer">{language.toUpperCase()}</button>

        <button className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          <GiHamburgerMenu size={16}/>
        </button>
      </div>

      <div className={`${open ? "block" : "hidden"} md:flex gap-4 absolute md:static bg-gray-200 dark:bg-gray-800 top-full left-0 w-full md:w-auto p-4 md:p-0`}>
        <a href="#" className="block md:inline">{t("home")}</a>
        <a href="#" className="block md:inline">{t("tasks")}</a>
      </div>
    </nav>
  );
};

export default Navbar;