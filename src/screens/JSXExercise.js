import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const JSXExercise=()=>{
    const name='Hemant'
    return(
        <View style={style.container}>
            <Text style={styles.text1}>Geeting Started with ReactNative</Text>
            <Text style={styles.text2}>My name is {name}</Text>
        </View>
    )
} 

const styles=StyleSheet.create({
    text1:{
        fontSize: 45
    },
    text2:{
        fontSize: 20
    },
    container:{
        width: '50',
    }
})

export default JSXExercise