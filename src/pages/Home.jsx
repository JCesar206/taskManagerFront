import { useEffect, useState, useContext } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { api } from "../api/api.js";
import { LanguageContext } from "../context/LanguageContext";

const Home = () => {
  const { t } = useContext(LanguageContext);

  const userEmail = "user@mail.com"; // luego se vuelve dinámico
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  // Cargar tareas
  const loadTasks = async () => {
    const data = await api.getTasksByEmail(userEmail);
    setTasks(data);
    setFilteredTasks(data);
  };

  // Crear
  const handleCreate = async (task) => {
    await api.createTask(userEmail, task);
    loadTasks();
  };

  // Eliminar
  const handleDelete = async (id) => {
    await api.deleteTask(id);
    loadTasks();
  };

  // Cambiar status
  const handleStatusChange = async (id, status) => {
    await api.updateTaskStatus(id, status);
    loadTasks();
  };

  // Editar
  const handleEdit = (task) => {
    setSelectedTask(task);
  };

  // Buscar
  const handleSearch = (text) => {
    if (!text) {
      setFilteredTasks(tasks);
      return;
    }

    const lower = text.toLowerCase();
    setFilteredTasks(
      tasks.filter(
        (t) =>
          t.title.toLowerCase().includes(lower) ||
          t.description?.toLowerCase().includes(lower)
      )
    );
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="mt-14 mb-16 relative">
      <TaskForm onCreate={handleCreate} onSearch={handleSearch} />

      <TaskList
        tasks={filteredTasks}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
        onEdit={handleEdit}
        onView={setSelectedTask}
      />

      {/* Modal */}
      {selectedTask && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelectedTask(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-xl p-6 w-[90%] max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-2 flex gap-2">
              {selectedTask.emoji && <span>{selectedTask.emoji}</span>}
              {selectedTask.title}
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {selectedTask.description || "-"}
            </p>

            <p className="text-xs text-gray-500 mb-1">
              {t("category")}: {t(selectedTask.category.toLowerCase())}
            </p>

            <p className="text-xs text-gray-500 mb-4">
              {t("status")}: {t(selectedTask.status.toLowerCase())}
            </p>

            <button
              onClick={() => setSelectedTask(null)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded cursor-pointer"
            >
              {t("close")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;