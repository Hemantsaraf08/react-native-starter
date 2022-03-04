import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INC_DECR_STEPS=15;
const SquareScreen=()=>{
    const [red, setRed]=useState(0)
    const [green, setGreen]=useState(0)
    const [blue, setBlue]=useState(0)
    console.log(`rgb(${red}, ${green}, ${blue})`)
    return(
        <View>
            <Text>This is sq screen</Text>
            <ColorCounter colorName="Red" colorSetter={setRed} steps={COLOR_INC_DECR_STEPS}/>
            <ColorCounter colorName="Green" colorSetter={setGreen} steps={COLOR_INC_DECR_STEPS}/>
            <ColorCounter colorName="Blue" colorSetter={setBlue} steps={COLOR_INC_DECR_STEPS}/>
            <View style={{height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`, borderWidth: 1, borderColor: 'black'}}></View>
        </View>
    )
}

const styles=StyleSheet.create({

});

export default SquareScreen;