import React, { useEffect, useState} from 'react'
import { View, Text, FlatList } from 'react-native'
import { getTasks } from '../api'
import Layout from '../components/Layout'
import TaskList from '../components/TaskList'

const homescreen = () => {

    const loadTasks = async () => {
       const data = await getTasks()
       setTasks(data)
    }

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        loadTasks()
    }, [])

    return (
        <View>
            <Layout>
                <TaskList tasks={tasks}/>
            </Layout>
        </View>
    )
}

export default homescreen
