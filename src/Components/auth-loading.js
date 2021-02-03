import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  ImageBackground,
  View,
  Image
} from 'react-native';
import { backHome, logo } from './imageProvider';

export default class AuthLoading extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <ImageBackground source={backHome} style={{flex:1, justifyContent:'center'}}>
        <View style={{flex:1, alignItems:'center', marginBottom:50, marginTop:50}}>
          <Image source={logo} />
        </View>
        <View style={{flex:1, justifyContent:'center'}}>
          <ActivityIndicator size={60} />
        </View>
        <StatusBar barStyle="default" />
      </ImageBackground >
    );
  }
}

AuthLoading.navigationOptions = {
  header: null,
}