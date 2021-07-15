const API = "http://localhost:50001/tasks";

export const getTasks = async () => {
  const response = await fetch(API);
  return await response.json();
};

export const saveTask = async (task) => {
  const response = await fetch(API, {
    method: "POST",
    headers: { Accept: "Application/json", "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });
  return await response.json()
};
