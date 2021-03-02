// const BACKEND_URI = 'http://localhost:3001';
const BACKEND_URI = 'http://192.168.0.101:3001';

interface ICreateTask {
  name: string;
  desc: string;
}

const deleteTaskById = async (id: string) =>
  (
    await fetch(`${BACKEND_URI}/delete/${id}`, {
      method: 'POST',
    })
  ).json();
const toggleActiveById = async (id: string) =>
  (
    await fetch(`${BACKEND_URI}/active/${id}`, {
      method: 'POST',
    })
  ).json();
const fetchTasks = async () => (await fetch(`${BACKEND_URI}`)).json();
const createTask = async ({ name, desc }: ICreateTask) =>
  (
    await fetch(`${BACKEND_URI}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        desc,
      }),
    })
  ).json();

const api = { fetchTasks, createTask, toggleActiveById, deleteTaskById };
export default api;
