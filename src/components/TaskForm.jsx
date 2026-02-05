import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

const TaskForm = ({ onCreate }) => {
	const { t } = useContext(LanguageContext);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("PERSONAL");
	const [emoji, setEmoji] = useState("");
	const [search, setSearch] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!title.trim()) return;
		onCreate({ title, description, category, emoji, status: "PENDING" });
		clearForm();
	};

	const clearForm = () => {
		setTitle("");
		setDescription("");
		setCategory("PERSONAL");
		setEmoji("");
	};

	return (
		<div className="p-4 flex flex-col gap-4">
			<input type="text" placeholder={t("search")} value={search}
				onChange={(e) => {
				setSearch(e.target.value);
				onSearch?.(e.target.value);
			}}
				className="p-2 border rounded bg-white text-black font-semibold dark:bg-gray-800 dark:text-white"/>
				{/* Form */}
				<form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-gray-100 dark:bg-gray-900 p-4 rounded-xl">
					{/* Emoji + Title */}
					<div className="flex gap-2">
						<input type="text" placeholder="😀" value={emoji} maxLength={2} onChange={(e) => setEmoji(e.target.value)} className="w-14 text-center p-2 border rounded text-xl"/>
						<input type="text" placeholder={t("title")} value={title} onChange={(e) => setTitle(e.target.value)} className="flex-1 p-2 border rounded font-semibold" required/>
						{/* Description */}
						<textarea placeholder={t("description")} value={description} onChange={(e) => setDescription(e.target.value)} className="p-2 border rounded resize-none font-semibold"/>
							{/* Category */}
							<select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded dark:bg-gray-800 dark:text-white font-semibold">
								<option value="PERSONAL">{t("personal")}</option>
								<option value="WORK">{t("work")}</option>
								<option value="SCHOOL">{t("school")}</option>
								<option value="OTHER">{t("other")}</option>
							</select>

							{/* Buttons */}
							<div className="flex gap-2">
								<button type="submit" className="flex-1 bg-blue-500 hover:bg-blue-950 text-white font-semibold p-2 rounded cursor-pointer">{t("addTask")}</button>
								<button type="button" onClick={clearForm} className="flex-1 bg-gray-400 hover:bg-gray-950 text-white font-semibold p-2 rounded cursor-pointer">{t("clear")}</button>
							</div>
					</div>
				</form>
		</div>
	);
}

export default TaskForm;