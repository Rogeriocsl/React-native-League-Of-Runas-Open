import React, {Component} from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Image,
  ImageBackground
} from 'react-native';

import {GoogleSignin, statusCodes, GoogleSigninButton} from 'react-native-google-signin'
import { backHome, logo } from '../imageProvider';
import { Content } from 'native-base';
import firebase from 'react-native-firebase'
import { AdMobBanner } from 'react-native-admob';

GoogleSignin.configure({
  webClientId: '678538347246-551cl5pmiv3nggc65nb04ua5qpvk2k7r.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
});

//const ref = firebase.firestore()

class Login extends Component {

  constructor(props){
    super(props);

      this.state = {
        signedIn: false,
        checkedSignIn: false,
      }
  }

  _signInAsync = async () => {

        // Add any configuration settings here:
        await GoogleSignin.configure();
        const data = await GoogleSignin.signIn();
        // create a new firebase credential with the token
        const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
        // login with credential
        const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
       // ref.collection(currentUser.user.uid).doc('userInfo').set({});
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
        console.info(JSON.stringify(currentUser.user.toJSON()));



  };

  render(){
    return(
     <ImageBackground style={{flex:1}} source={backHome}>
       <Content>
         <View style={{flex:1, alignItems:'center', marginBottom:50, marginTop:50}}>
           <Image source={logo} />
         </View>
         <View style={{flex:1, alignItems:'center'}}>
         <GoogleSigninButton
            style={{ height: 60, width:300, marginLeft:15, marginRight:15 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={this._signInAsync}
             />
         </View>
         <View style={{flex:1, alignItems:'center', marginTop:80, justifyContent:'flex-end'}}>
              <AdMobBanner
                adSize="banner"
                adUnitID="ca-app-pub-1942019449408433/8387899716"
                onAdFailedToLoad={error => console.error(error)}/>
        </View>

       </Content>
     </ImageBackground>
    )
}


}


Login.navigationOptions = {
  header: null,
}
export default Login;