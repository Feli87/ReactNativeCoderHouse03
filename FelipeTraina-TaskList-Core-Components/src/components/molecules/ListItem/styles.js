import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
         margin: 5,
         padding: 8,
         backgroundColor: "#DDD",
         borderRadius: 5,
    },
    containerCheck:{
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    deleteIcon:{
      color: 'white',
      backgroundColor: '#f73636',
      textAlign: 'center',
      padding: 5,
      width: 30,
      borderWidth:1,
      borderColor: 'white',
      borderRadius:20
    },
    textList:{
      fontSize: 20,
    },
    textListDone:{
      textDecorationLine: 'line-through',
    }
  });