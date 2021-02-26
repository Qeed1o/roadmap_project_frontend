const fetchTasks = async () => (await fetch('http://localhost:3001')).json();

const api = { fetchTasks };
export default api;
