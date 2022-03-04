import React, {useState} from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native'

const ColorScreen=()=>{
    const [colorsArr, setcolorsArr]=useState([]);
    return(
        <View>
            <Button
                title='Add a Color'
                onPress={()=>{
                    setcolorsArr([...colorsArr, randomRgb()])
                }}
            />
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={colorsArr}
                renderItem={({item})=>{
                    return(
                        <View style={{width: 100, height: 100, borderWidth: 1, borderColor: 'black', backgroundColor:item}}></View>
                    )
                }}
                keyExtractor={(colorRgb)=>colorRgb}
            />

        </View>
    )
}

const randomRgb=()=>{
    const getRandomColor=()=>Math.floor(Math.random()*256);
    return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`
}
const styles=StyleSheet.create({

})

export default ColorScreen;