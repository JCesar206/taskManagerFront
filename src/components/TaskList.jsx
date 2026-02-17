import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const categoryColors = {
  PERSONAL: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 font-semibold",
  WORK: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200 font-semibold",
  SCHOOL: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 font-semibold",
  OTHER: "bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-200 font-semibold",
};

const TaskList = ({ tasks, onDelete, onStatusChange, onEdit, onView }) => {
  const { t } = useContext(LanguageContext);

  if (!tasks || tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
        {t("noTasks")}
      </p>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-4 pb-24">
      {tasks.map((task) => {
        const isDone = task.status === "DONE";

        return (
          <div
            key={task.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
              rounded-xl p-4 shadow-sm flex flex-col gap-3"
          >
            {/* Title + Emoji */}
            <div
              className="flex items-start gap-2 cursor-pointer"
              onClick={() => onView?.(task)}
            >
              {task.emoji && <span className="text-2xl">{task.emoji}</span>}

              <div className="flex-1">
                <h3
                  className={`font-semibold text-lg ${
                    isDone ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.title}
                </h3>

                {task.description && (
                  <p
                    className={`text-sm ${
                      isDone
                        ? "line-through text-gray-400"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {task.description}
                  </p>
                )}
              </div>
            </div>

            {/* Category */}
            {task.category && (
              <span
                className={`text-xs font-semibold w-fit px-2 py-0.5 rounded-full
                  ${categoryColors[task.category]}`}
              >
                {t(task.category.toLowerCase())}
              </span>
            )}

            {/* Status + Actions */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <select
                value={task.status}
                onChange={(e) =>
                  onStatusChange(task.id, e.target.value)
                }
                className="bg-gray-100 dark:bg-gray-700 text-sm rounded-lg px-3 py-1
                  border border-gray-300 dark:border-gray-600"
              >
                <option value="PENDING">{t("pending")}</option>
                <option value="IN_PROGRESS">{t("inProgress")}</option>
                <option value="DONE">{t("done")}</option>
              </select>

              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(task)}
                  className="text-center px-12 py-2 text-sm rounded-lg
                    bg-yellow-500 hover:bg-yellow-600 text-white cursor-pointer font-semibold"
                >
                  {t("edit")}
                </button>

                <button
                  onClick={() => onDelete(task.id)}
                  className="px-12 py-2 text-sm rounded-lg
                    bg-red-500 hover:bg-red-600 text-white cursor-pointer font-semibold"
                >
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