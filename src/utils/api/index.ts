import { Task } from '../../types';

const BACKEND_URI = process.env.REACT_APP_BACKEND_URI;

const deleteTaskById = async (id: string) =>
  (
    await fetch(`${BACKEND_URI}/delete/${id}`, {
      method: 'POST',
    })
  ).json();
const updateTask = async (task: Task) =>
  (
    await fetch(`${BACKEND_URI}/task/${task.id}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
  ).json();

const fetchTasks = async () => (await fetch(`${BACKEND_URI}`)).json();
const createTask = async ({ name, desc }: Task) =>
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

const api = { fetchTasks, createTask, updateTask, deleteTaskById };
export default api;
