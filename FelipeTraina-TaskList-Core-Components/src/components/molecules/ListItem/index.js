import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {styles} from './styles';

const  ListItem = ({
     id,
     task,
     status,
     deleteTask,
     handleStatusTaskchange
    }) => {

      const textList = status ? styles.textListDone :  styles.textList;
     
      return (
  
      <View style={styles.container}>
        <View style={styles.containerCheck}>
          <BouncyCheckbox 
            fillColor='#E5F15C'
            isChecked={status} 
            onPress={()=>handleStatusTaskchange(id)} 
          />
          <Text style={textList}>{task}</Text>
        </View>
        <TouchableOpacity onPress={()=> deleteTask(id)}>
          <Text style={styles.deleteIcon}>X</Text>
        </TouchableOpacity>
      </View>
    );
    }



  export default ListItem;