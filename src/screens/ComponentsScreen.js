import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen=()=>{

    const greeting=(<Text style={styles.textStyle}>Hello World!</Text>)
    return <View><Text style={styles.textStyle}>This is my text from ComponentsScreen</Text>
        {greeting}
        </View>
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize: 30
    }
})

export default ComponentsScreen;