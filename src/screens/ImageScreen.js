import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from '../components/ImageDetail';
const ImageScreen=()=>{
    return(
        <View>
            <Text>This is img screen</Text>
            <ImageDetails title="Forest" imageSource={require('../../assets/forest.jpg')} imageScore={Math.ceil(Math.random()*10)}/>
            <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')} imageScore={Math.ceil(Math.random()*10)}/>
            <ImageDetails title="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore={Math.ceil(Math.random()*10)}/>
        </View>
    )
}

const styles=StyleSheet.create({

})

export default ImageScreen;