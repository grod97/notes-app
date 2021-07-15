const API = 'http://localhost:50001/tasks'

export const getTasks = async () => {
    const response = await fetch(API)
    return await response.json()
}