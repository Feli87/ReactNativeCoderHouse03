import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import ListItem from '../../molecules/ListItem';

const List =  ({
    tasks,
    deleteTask,
    handleStatusTaskchange
}) => {

    const renderItem = ({ item }) => (
        <ListItem 
            id={item.id}
            task={item.task} 
            status={item.status}
            deleteTask={deleteTask}
            handleStatusTaskchange={handleStatusTaskchange}
        />
      );

  return  (
    <SafeAreaView>
        <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
      )
};

export default List;