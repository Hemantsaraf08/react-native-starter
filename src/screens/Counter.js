import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Counter=()=>{
    const [count, setCount]=useState(0);
    return(
        <View>
            <Button title='Increase' onPress={()=>setCount(count+1)}/>
            <Button title='Decrease' onPress={()=>setCount(count-1)}/>
            <Text>Current count is {count}</Text>
        </View>
    )
}

const styles=StyleSheet.create({

});

export default Counter;