import React, {useState} from 'react';
import {View, Image,Text} from 'react-native';
import Title from '../../components/atoms/Title';
import List from '../../components/organims/List';
import InputTask from '../../components/molecules/InputTask';
import { styles } from './styles';
const TaskList =  () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: '1. Iniciando con React Native',
      status: true
    },
    {
      id: 2,
      task: '2. Trabajando con el Emulador',
      status: true
    },
    {
      id: 3,
      task: '3. Core Components',
      status: true
    },
    {
      id: 4,
      task: '4. Eventos & Lista optimizada',
      status: false
    },
    {
      id: 5,
      task: '5. Debug & Split Components',
      status: true
    },
    {
      id: 6,
      task: '6. Estilos y Constantes',
      status: false
    },


  ]);

  const handleStatusTaskchange = (id) => {

    let updateTasks = tasks.map(task => {
      if(task.id === id){
        task.status = !task.status;
      }
      return task;
    });
    setTasks(updateTasks);

  };
  const handleDeleteTask = (id) => {
    let updateTasks = tasks.filter(task => task.id !== id);
    setTasks(updateTasks);
  }

  const handleAddTask = (task) => {
    const newTask = {
      id: tasks.length + 1,
      task: task,
      status: false
    };
    setTasks([...tasks, newTask]);
  }


  return (
    <View style={styles.container}>
      <Title title={'Task List'}/>
      <InputTask onAddTask={handleAddTask}/>
      
      {tasks && tasks.length > 0 ?(
              <List 
              tasks={tasks}
              deleteTask={handleDeleteTask}
              handleStatusTaskchange={handleStatusTaskchange}
              />
      ):(
        <Text style={styles.footer}>Task List Is Empy</Text>
      )
      }

      <Text style={styles.footer}>Felipe Traina - Core Components - Task List</Text>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
    </View>
  );
};

export default TaskList;
