import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ColorCounter=({colorName, colorSetter, steps})=>{
    return(
        <View>
            <Text>{colorName}</Text>
            <Button
                title={`Increase ${colorName}`}
                onPress={()=>colorSetter({type: `changeColor/${colorName.toLowerCase()}`, payload: steps})}            
                //this is when not using reducer
                // onPress={()=>colorSetter(prevState=>prevState + steps>255?prevState:prevState + steps)} 
            />
            <Button
                title={`Decrease ${colorName}`}
                    onPress={()=>colorSetter({type: `changeColor/${colorName.toLowerCase()}`, payload: -steps})}
                //this is when not using reducer
                // onPress={()=>colorSetter(prevState=>prevState - steps<0?prevState:prevState - steps)}
            />
        </View>
    )
}

const styles=StyleSheet.create({

});

export default ColorCounter;