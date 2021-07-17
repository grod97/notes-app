const API = "http://192.168.0.100:50001/";
let token = "";

export const login = async (data) => {
  console.log("User Data", data);
  const response = await fetch(API + "login", {
    method: "POST",
    headers: { Accept: "application/json" , "Content-Type" : "application/json"}, 
    body: JSON.stringify(data),
  });
  if (response.ok) {
    let tkn = await response.json()
    console.log(token);
    token = tkn.token
    return true;
  }
  return false;
};

export const getTask = async (task) => {
  const response = await fetch(API + `tasks/${task}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await response.json();
};
export const updateTask = async (task) => {
  const response = await fetch(API + `tasks/${task.id}`, {
    method: "PUT",
    headers: {
      Accept: "Application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(task),
  });
  return await response.json();
};
export const getTasks = async () => {
  const response = await fetch(API + "tasks", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await response.json();
};

export const saveTask = async (task) => {
  const response = await fetch(API + "tasks", {
    method: "POST",
    headers: {
      Accept: "Application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(task),
  });
  return await response.json();
};

export const deleteTask = async (task) => {
  const response = await fetch(API + `tasks/${task}`, {
    method: "DELETE",
    headers: { Accept: "Application/json", Authorization: `Bearer ${token}` },
  });
  return await response.json();
};
