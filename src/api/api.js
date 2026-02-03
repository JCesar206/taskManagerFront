const BASE_URL = "http://localhost:8080";

export const api = {
  getUsers: async () => fetch(`${BASE_URL}/users`).then(res => res.json()),
  getTasksByEmail: async (email) =>
    fetch(`${BASE_URL}/tasks/user/${encodeURIComponent(email)}`).then(res => res.json()),
  createTask: async (email, task) =>
    fetch(`${BASE_URL}/tasks/user/${encodeURIComponent(email)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    }).then(res => res.json()),
  deleteTask: async (id) =>
    fetch(`${BASE_URL}/tasks/${id}`, { method: "DELETE" })
};