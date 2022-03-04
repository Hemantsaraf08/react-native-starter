import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen=()=>{
    return <View style={styles.container}>
        <Text style={styles.text}>Child #1</Text>
        <Text style={styles.text}>Child #2</Text>
        <Text style={styles.text}>Child #3</Text>
        <Text style={styles.text}>Child #3</Text>
        <Text style={styles.text}>Child #3</Text>
        <Text style={styles.text}>Child #3</Text>
        <Text style={styles.text}>Child #3</Text>
    </View>
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7CA1B4",
        alignItems: "center",
        justifyContent: "center",
      },
    text:{
        borderWidth: 2,
        borderColor: 'black',
        margin: 5,
        width: 80,
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        // flex: 1
    }
})

export default BoxScreen;
