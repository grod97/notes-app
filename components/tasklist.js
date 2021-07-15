import React from 'react'
import { View, Text, FlatList } from 'react-native'
import TaskItem from './TaskItem'

const TaskList = ({tasks}) => {

    const renderItem = ({item}) => {
       return <TaskItem task={item}></TaskItem>
    }

    return (
        <FlatList
        style={{width: '90%'}} 
        data={tasks}
        keyExtractor={(i) => i.id + ""}
        renderItem={renderItem}>
        </FlatList>
    )
}

export default TaskList
