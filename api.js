const API = 'http://localhost:3000/tasks'

export const getTasks = async () => {
    const response = await fetch(API)
    return await response.json()
}