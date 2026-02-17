import { useContext } from "react";
import { FaHome, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { SiGmail } from "react-icons/si";
import { LanguageContext } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useContext(LanguageContext);

  return (
<footer className="w-full px-4 py-6">
	  <div className="bottom-0 fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-md rounded-full">
    	<div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center gap-6">
					{/*Social icons*/}
					<div className="flex gap-6">
				<a href="https://jcesar206.github.io/myPersonalBlog/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-gray-600 transition" title="My Personal Blog">
					<FaHome size={20}/>
				</a>
				<a href="https://github.com/JCesar206" target="_blank" rel="noreferrer"
					className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-gray-600 transition" title="Github">
          <FaGithub size={20}/>
        </a>
				<a href="https://www.linkedin.com/in/jcesar206" target="_blank" rel="noreferrer"
					className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-gray-600 transition" title="LinkedIn">
          <FaLinkedin size={20}/>
        </a>
        <a href="mailto:jcesar206@hotmail.com" className="text-gray-600 dark:text-gray-300 
				hover:text-black dark:hover:text-gray-600 transition" title="Hotmail"><FaEnvelope size={20}/></a>
				<a href="mailto:jcesary06@gmail.com" className="text-gray-600 dark:text-gray-300 
				hover:text-black dark:hover:text-gray-600 transition" title="Gmail"><SiGmail size={20}/></a>
			</div>
			{/*Copyright*/}
			<p className="text-sm text-gray-500 dark:text-gray-400 text-center font-bold">&copy; {new Date().getFullYear()} {t.copyright} | Juls | {t("copy")}</p>
			</div>
		</div>
		</footer>
  );
};

export default Footer;
