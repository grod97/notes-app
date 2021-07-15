import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TaskItem = ({task}) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{task.name}</Text>
            <Text style={styles.itemDescription}>{task.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer : {
        backgroundColor: "#333333",
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
    },
    itemTitle: {
        color: '#ffffff'
    },
    itemDescription: {
        color: '#fff'
    }
})

export default TaskItem
