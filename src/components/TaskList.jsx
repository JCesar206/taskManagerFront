import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const TaskList = ({ tasks, onDelete, onStatusChange, onEdit }) => {
  const { t } = useContext(LanguageContext);

  if (!tasks || tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
        {t("noTasks") ?? "No tasks available"}
      </p>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm
            flex flex-col gap-3">
          {/* Title + Description */}
          <div>
            <h3 className="font-semibold text-lg">
              {task.title}
            </h3>

            {task.description && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {task.description}
              </p>
            )}
          </div>

          {/* Status */}
          <div className="flex items-center justify-between">
            <select value={task.status} onChange={(e) => onStatusChange(task.id, e.target.value)}
              className="bg-gray-100 dark:bg-gray-700 text-sm rounded-lg px-3 py-1 border border-gray-300 dark:border-gray-600">
              <option value="PENDING">{t("pending")}</option>
              <option value="IN_PROGRESS">{t("inProgress")}</option>
              <option value="DONE">{t("done")}</option>
            </select>

            {/* Actions */}
            <div className="flex gap-2">
              <button onClick={() => onEdit(task)} className="px-3 py-1 text-sm rounded-lg bg-yellow-500 hover:bg-yellow-600text-white">
                {t("edit")}
              </button>

              <button onClick={() => onDelete(task.id)} className=" px-3 py-1 text-sm rounded-lg bg-red-500 hover:bg-red-600 text-white">
                {t("delete")}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;