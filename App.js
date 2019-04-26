/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Alert, AppRegistry,FlatList,ActivityIndicator, SectionList, ScrollView, Button, StyleSheet, View, Image, Text } from 'react-native';
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
    container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

class Greeting extends Component {


  render() {
    
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    let pic = {
      uri: 'https://hubilo-o4mlunccwnbtnhr.stackpathdns.com/exhibitor/logo/thumb/91224_1511846542.png'
    };
    return (
      <ScrollView>

        <View style={{alignItems: 'center'}}>
        <Text style={{fontSize:30}}>Hello React Native</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>

        <Greeting name='AirStream' />
        <Greeting name='Cloudtouch' />
        <Greeting name='Halfticket' />
        <Button style={{padding:30}} onPress={() => {Alert.alert('Probably The Best Smart TV On The Planet!');}} title="Want To Know More About Cloudwalker"/>


        </View>
        <View style={styles.container}>
        <Text style={{fontSize:30}}>Cloudwalker Products</Text>

        <FlatList
          data={[
            {key: 'ColudTouch'},
            {key: 'Airstream'},
            {key: 'HalfTicket'},
            {key: 'Android Box'},
            {key: 'Solo'},
            {key: 'Uno'},
            {key: 'Duo'},
            {key: 'XL5'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        <Text style={{fontSize:20}}>Have A look on Cloudwalker Products</Text>

        <Image source = {require('/home/cw-dev03/MyReactNativeStudy/AwesomeProject/android/app/src/main/res/mipmap-hdpi/solo.png')} style={{width: 250, height: 300}} />

        <Image source = {require('/home/cw-dev03/MyReactNativeStudy/AwesomeProject/android/app/src/main/res/mipmap-hdpi/uno.png')} style={{width: 250, height: 300}} />

        <Image source = {require('/home/cw-dev03/MyReactNativeStudy/AwesomeProject/android/app/src/main/res/mipmap-hdpi/duo.png')} style={{width: 250, height: 300}} />

        <Image source = {require('/home/cw-dev03/MyReactNativeStudy/AwesomeProject/android/app/src/main/res/mipmap-hdpi/xl5.png')} style={{width: 250, height: 300}} />
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
            <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={styles.item}>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
   
      </View>

    

        </ScrollView>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
