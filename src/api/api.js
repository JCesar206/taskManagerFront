const BASE_URL = "http://localhost:8080";

const handleResponse = async (res) => {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "API error");
  }

  // DELETE puede no devolver JSON
  if (res.status === 204) return null;

  return res.json();
};

export const api = {
  // Usuarios
  getUsers: async () =>
    fetch(`${BASE_URL}/users`).then(handleResponse),

  // Tareas
  getTasksByEmail: async (email) =>
    fetch(`${BASE_URL}/tasks/user/${encodeURIComponent(email)}`)
      .then(handleResponse),

  // Crear tarea
  createTask: async (email, task) =>
    fetch(`${BASE_URL}/tasks/user/${encodeURIComponent(email)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(handleResponse),

  // Eliminar tarea
  deleteTask: async (id) =>
    fetch(`${BASE_URL}/tasks/${id}`, {
      method: "DELETE",
    }).then(handleResponse),

  // Cambiar status
  updateTaskStatus: async (id, status) =>
    fetch(`${BASE_URL}/tasks/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    }).then(handleResponse),

  // Editar tarea completa (para el modal)
  updateTask: async (id, task) =>
    fetch(`${BASE_URL}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(handleResponse),
};