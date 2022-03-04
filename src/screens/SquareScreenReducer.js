import React, {useReducer} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INC_DECR_STEPS=15;
const initialState={
    red: 0,
    green: 0,
    blue: 0
}

const reducer=(state, action)=>{
    switch(action.type){
        case 'changeColor/red':
            return (state.red+action.payload>255||state.red + action.payload<0)? state: {...state, red:state.red + action.payload}
        case 'changeColor/green':
            if(state.green+action.payload>255||state.green + action.payload<0) return state;
            return {...state, green:state.green + action.payload}
        case 'changeColor/blue':
            if(state.blue+action.payload>255||state.blue + action.payload<0) return state;
            return {...state, blue:state.blue + action.payload}
        default:
            return state;
    }
}
const SquareScreenReducer=()=>{
   const [state, dispatch]=useReducer(reducer, initialState);
    console.log(`rgb(${state.red}, ${state.green}, ${state.blue})`)
    return(
        <View>
            <Text>This is sq screen</Text>
            <ColorCounter colorName="Red" colorSetter={dispatch} steps={COLOR_INC_DECR_STEPS}/>
            <ColorCounter colorName="Green" colorSetter={dispatch} steps={COLOR_INC_DECR_STEPS}/>
            <ColorCounter colorName="Blue" colorSetter={dispatch} steps={COLOR_INC_DECR_STEPS}/>
            <View style={{height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`, borderWidth: 1, borderColor: 'black'}}></View>
        </View>
    )
}

const styles=StyleSheet.create({

});

export default SquareScreenReducer;