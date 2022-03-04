import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ListScreen=()=>{
    const friends=[
        {name: 'Friend #1', age: '1'},
        {name: 'Friend #2', age: '12'},
        {name: 'Friend #3', age: '13'},
        {name: 'Friend #4', age: '14'},
        {name: 'Friend #5', age: '15'},
        {name: 'Friend #6', age: '16'},
        {name: 'Friend #7', age: '17'},
        {name: 'Friend #8', age: '18'}
    ]
    return(
        <FlatList //react native uses inbuild Flatlist instead of map, and takes 3 props 1. data and 2. renderItem 3. keyExtractor
            data={friends}
            renderItem={({item})=>{
                return(
                    <Text style={styles.textStyle}>{item.name}- Age{item.age}</Text>
                )
            }}
            keyExtractor={(friends)=>friends.name} //react native uses keyextractor as FlatList prop instead of it being assigned to renderItem JSX;
        />
    )
}

const styles=StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
})

export default ListScreen;