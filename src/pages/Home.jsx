import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { api } from "../api/api.js";

const Home = () => {
	const userEmail = "user@mail.com"; // Se puede cambiar dinámicamente
	const [tasks, setTasks] = useState([]);

	const loadTasks = async () => {
		const data = await api.getTasksByEmail(userEmail);
		setTasks(data);
	};

	const handleCreate = async (task) => {
		await api.createTask(userEmail, task);
		loadTasks();
	};

	const handleDelete = async (id) => {
		await api.deleteTask(id);
		loadTasks();
	};

	useEffect(() => {
		loadTasks();
	}, []);

	return (
		<div className="mt-20 mb-16">
			<TaskForm onCreate={handleCreate}/>
			<TaskList tasks={tasks} onDelete={handleDelete}/>
		</div>
	);
}

export default Home;