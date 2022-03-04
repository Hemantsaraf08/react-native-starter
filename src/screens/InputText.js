import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const InputText=()=>{
    const [name, setName]=useState('')
    const [error, setError]=useState(false)
    const handleTextChange=(changedText)=>{
        changedText.length>0&&changedText.length<5?setError(true):setError(false)
        setName(changedText);
    }
    return(
        <View>
            <Text>Enter your name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={changedText=>handleTextChange(changedText)}
            />
            {
                error&&<Text style={{color: 'red'}}>Password length must be greater than 5 characters</Text>
            }
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        margin: 15,
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default InputText;
