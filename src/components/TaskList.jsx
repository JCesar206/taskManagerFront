import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const categoryColors = {
  PERSONAL: "bg-blue-100 text-blue-700",
  WORK: "bg-green-100 text-green-700",
  SCHOOL: "bg-purple-100 text-purple-700",
  OTHER: "bg-gray-100 text-gray-700",
};

const TaskList = ({ tasks, onDelete, onStatusChange, onEdit, onView }) => {
  const { t } = useContext(LanguageContext);

  if (!tasks || tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
        {t("noTasks") ?? "No tasks available"}
      </p>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-4 pb-24">
      {tasks.map((task) => {
        const isDone = task.status = "DONE";

        return (
          <div key={task.id} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm flex flex-col gap-3">
            {/* Title + Emoji */}
            <div className="flex items-start gap-2">
              {task.emoji && (
                <span className="text-2xl">{task.emoji}</span>
              )}

              <div className="flex-1">
                <h3 className={`font-semibold text-lg ${isDone ? "line-through text-gray-400" : ""}`}>
                  {task.title}
                </h3>

                {task.decription && (
                  <p className={`text-sm ${isDone ? "line-through text-gray-400" : "text-gray-600 dark:text-gray-400"}`}>
                    {task.description}
                  </p>
                )}
            </div>
          </div>

          {/* Category */}
          {task.category && (
            <span className={`text-xs font-semibold w-fit px-2 rounded-full ${categoryColors[task.category] ?? ""}`}>
              {t(task.category.toLowerCase())}
            </span>
          )}

          {/* Status + Actions */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <select value={task.status} onChange={(e) => onStatusChange(task.id, e.target.value)} className="bg-gray-100 dark:bg-gray-700 text-sm rounded-lg px-3 py-1 border border-gray-300 dark:border-gray-600">
              <option value="PENDING">{t("pending")}</option>
              <option value="IN_PROGRESS">{t("inProgress")}</option>
              <option value="DONE">{t("done")}</option>
            </select>

            <div className="flex gap-2">
              <button onClick={() => onView?.(task)} className="px-3 py-1 text-sm rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white">
                {t("details")}
              </button>
              <button onClick={() => onEdit(task)} className="px-3 py-1 text-sm rounded-lg bg-yello-600 hover:bg-yellow-700 text-white">
                {t("edit")}
              </button>
              <button onClick={() => onDelete(task.id)} className="px-3 py-1 text-sm rounded-lg bg-red-500 hover:bg-red-600 text-white">
                {t("delete")}
              </button>
            </div>
          </div>
        </div>
        );
      })}
    </div>
    );
  };

export default TaskList;