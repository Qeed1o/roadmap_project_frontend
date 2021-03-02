// const BACKEND_URI = 'http://localhost:3001';
const BACKEND_URI = 'http://192.168.0.101:3001';

interface ICreateTask {
  name: string;
  desc: string;
}
interface Task {
  isClosed?: boolean;
  isActive?: boolean;
  name?: string;
  desc?: string;
  id: string;
}

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

const api = { fetchTasks, createTask, updateTask, deleteTaskById };
export default api;
