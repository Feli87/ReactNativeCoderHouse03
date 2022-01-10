import React from 'react'
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View,Text } from "react-native";

export default function InputTask({onAddTask}) {
    const [task, setTask] = React.useState("");

    const handleAddTask = () => {
        if(task.length > 0){
            onAddTask(task);
            setTask("");
        }else{
            alert("Please enter a task");
        }
    }
    const handleChange = (text) => {
        setTask(text);
    }
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={handleChange}
                placeholder="Add new task"
                value={task}
            />
            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleAddTask}>
                <Text style={styles.addTask}>
                    ADD TASK
                </Text>
            </TouchableOpacity>
            </View>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: '#ddd',
      borderRadius: 5,
      backgroundColor: '#fff',
    },
    buttonContainer:{
        margin: 12,
    },
    addTask:{
        padding: 5,
        textAlign: 'center',
        fontSize: 24,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        color: '#000',
        backgroundColor: '#E5F15C',
    }
  });