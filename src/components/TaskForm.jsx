import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

const TaskForm = ({ onCreate }) => {
	const { t } = useContext(LanguageContext);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onCreate({ title, description, status: "PENDING" });
		setTitle("");
		setDescription("");
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4">
			<input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}
				className="p-2 border rounded" required/>
			<textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}
				className="p-2 border rounded"/>
			<button type="submit" className="bg-blue-500 text-white font-semibold p-2 rounded cursor-pointer">
				{t("addTask")}
			</button>
		</form>
	);
}

export default TaskForm;