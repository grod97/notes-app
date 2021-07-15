import React, { useEffect, useState} from 'react'
import { View, Text, FlatList } from 'react-native'
import { getTasks } from '../api'

const homescreen = () => {

    const loadTasks = async () => {
       const data = await getTasks()
       console.log(data)
       setTasks(data)
    }

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        loadTasks()
    }, [])

    return (
        <View>
            <FlatList 
            data={tasks}
            keyExtractor={(i) => i.id.toString()}
            renderItem={({item}) => {
               return  <Text>{item.name}</Text>
            }}>
            </FlatList>
        </View>
    )
}

export default homescreen
