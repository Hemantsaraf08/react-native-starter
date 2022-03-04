import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  //createStackNavigator of react-navigator gives props to all components listed under it, and this prop contains navigation object, we use navigation.navigate function to navigate
  return <View>
    <Text style={styles.text}>HomeSc</Text>
    <Button
      title="Go to Component Screen"
      onPress={()=>props.navigation.navigate('Components')}
    />
    <TouchableOpacity onPress={()=>props.navigation.navigate('List')}>
      <Text>Go to Lists screens</Text>
    </TouchableOpacity>
    <Button
      title="Go to Image Screen"
      onPress={()=>props.navigation.navigate('ImageScreen')}
    />
     <Button
      title="Go to Counter Screen"
      onPress={()=>props.navigation.navigate('Counter')}
    />
    <Button
      title="Go to Colors Screen"
      onPress={()=>props.navigation.navigate('ColorScreen')}
    />
    <Button
      title='Go to sq Image screen w/o reducer (STALE)'
      onPress={()=>props.navigation.navigate('SquareScreen')}
    />
    <Button
      title='Go to sq Image screen with reducer'
      onPress={()=>props.navigation.navigate('SquareScreenReducer')}
    />
      <Button
      title='Password Input text screen'
      onPress={()=>props.navigation.navigate('InputText')}
    />
      <Button
      title='Box Screen'
      onPress={()=>props.navigation.navigate('BoxScreen')}
    />
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
