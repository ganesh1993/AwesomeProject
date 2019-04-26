
import React, { Component } from 'react';
import { Alert, AppRegistry, ScrollView, Button, TextInput, StyleSheet, Image, Text } from 'react-native';
import Emoji from 'react-native-emoji'; 

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  red: {
    color: 'red',
    fontSize: 20
  },
});

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { isShowingText: true };

  //   // Toggle the state every second
  //   setInterval(() => (
  //     this.setState(previousState => (
  //       { isShowingText: !previousState.isShowingText }
  //     ))
  //   ), 1000);
  // }

  constructor() {
    super()
    this.state = {
      value: "Edit Me!"
    }
    this.handleChangeText = this.handleChangeText.bind(this);
    }

    handleChangeText(newText){
      this.setState({
        value: newText
      })
    }


  render() {
    // if (!this.state.isShowingText) {
    //   return null;
    // }
      return (

        <ScrollView>
          <Text style={{fontSize:30}}>Hello React Native</Text>
          <Image source = {require('/home/cw-dev03/Desktop/AwesomeProject/android/app/src/main/res/mipmap-hdpi/don.jpg')} style={{width: 250, height: 300}} />
          <Text style={{fontSize:20}}>Hello Noodles!!</Text>
          <Image source = {require('/home/cw-dev03/Desktop/AwesomeProject/android/app/src/main/res/mipmap-hdpi/don2.jpg')} style={{width: 250, height: 300}} />
          <Text style={{fontSize:20}}>Vikhroli Ka Don</Text>
          <Image source = {require('/home/cw-dev03/Desktop/AwesomeProject/android/app/src/main/res/mipmap-hdpi/cutie.jpg')} style={{width: 250, height: 300}} />
          <Text style={{fontSize:20}}>Pinkyyyyyyyy, Ponky Bhi</Text>
          <Image source = {require('/home/cw-dev03/Desktop/AwesomeProject/android/app/src/main/res/mipmap-hdpi/sweety.jpg')} style={{width: 250, height: 300}} />
          <Text style={styles.red}>Cutiest Noodles</Text>
          <Image source = {require('/home/cw-dev03/Desktop/AwesomeProject/android/app/src/main/res/mipmap-hdpi/don3.jpg')} style={{width: 250, height: 300}} />
          <Text style={{fontSize:20}}>Stylist Noodles</Text>
          <Image source = {require('/home/cw-dev03/Desktop/AwesomeProject/android/app/src/main/res/mipmap-hdpi/pasta.jpg')} style={{width: 250, height: 300}} />
          <Text style={{fontSize:20}}>Noodles Favourite Food</Text>
          <Image source = {require('/home/cw-dev03/Desktop/AwesomeProject/android/app/src/main/res/mipmap-hdpi/fice.jpg')} style={{width: 250, height: 300}} />
          <Text style={{fontSize:20}}>Noodles Favourite IceCream</Text>
          <Image source = {require('/home/cw-dev03/Desktop/AwesomeProject/android/app/src/main/res/mipmap-hdpi/bff.jpg')} style={{width: 250, height: 300}} />
          <Text style={{fontSize:20}}>Friends For Life</Text>
          <Button style={{padding:30}} onPress={() => {Alert.alert('Pasta Khayegi Moti! 😁😁');}} title="Want To Know More About Noodles Click Here"/>
          <Button style={{padding:30}} title="Write Something About Noodles"/>
          <TextInput
            defualtValue = {this.state.value}
            onChangeText = {this.handleChangeText}
         />
          <Text>You Are Writing {this.state.value}</Text>
        </ScrollView>
    );
  }
}

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'AwesomeProject',
  () => IScrolledDownAndWhatHappenedNextShockedMe);
