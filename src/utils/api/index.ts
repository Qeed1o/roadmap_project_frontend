const BACKEND_URI = 'http://localhost:3001';

const fetchTasks = async () => (await fetch(`${BACKEND_URI}`)).json();
const createTask = async (name: string) =>
  (
    await fetch(`${BACKEND_URI}/create/${name}`, {
      method: 'POST',
    })
  ).json();

const api = { fetchTasks, createTask };
export default api;
