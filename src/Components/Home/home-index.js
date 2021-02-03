import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground, AsyncStorage
} from 'react-native';
import { Text, Content } from 'native-base';
import HomeStyle from './home-style';
import { myRunas, iconMY, backHome, logo } from '../imageProvider';
import {GoogleSignin} from 'react-native-google-signin'
import { AdMobBanner } from 'react-native-admob';

export default class Home extends Component {

  CPR = () => {
    this.props.navigation.navigate('HomeCPRScreen')
  }
  MyRunes = () => {
    this.props.navigation.push('MyRunasScreen');
  }
  signOut = async () => {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      } catch (error) {
        console.error(error);
      }
  };

render(){
  return(
    <ImageBackground  style={{flex:1}} source={backHome} >
      <Content>
        <View style={{flex:1, alignItems:'center', marginBottom:50, marginTop:50}}>
          <Image  source={logo} />
        </View>
        <View style={{flex:1, flexDirection:'column', alignSelf:'center'}}>
          <View style={{backgroundColor:'#000016', borderColor:'rgba(218, 165, 32, 0.5)', borderWidth:2, marginBottom:10}}>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={() => this.CPR()} >
              <Image style={HomeStyle.inspiracaobutton} source={myRunas} />
              <Text style={{color:'#a8a157', margin:5, textAlign:'center', padding:10, fontFamily: 'Kanit-Regular'}}>Criar Pagina de Runas</Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor:'#000016', borderColor:'rgba(218, 165, 32, 0.5)', borderWidth:2, marginTop:10}}>
            <TouchableOpacity  style={{flexDirection:'row'}} onPress={() => this.MyRunes()} >
              <Image style={HomeStyle.inspiracaobutton} source={iconMY} />
              <Text style={{color:'#a8a157', margin:5, textAlign:'center', padding:10, fontFamily: 'Kanit-Regular'}}>Minhas Runas</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={{marginTop:15, alignItems:'center'}}>
          <AdMobBanner
              adSize="banner"
              adUnitID="ca-app-pub-1942019449408433/6681750580"
              onAdFailedToLoad={error => console.error(error)}/>
          </View>
          <View style={{paddingTop:10, margin:10, padding:5, width:60, justifyContent:'flex-end'}}>
            <TouchableOpacity   onPress={() => this.signOut()} >
              <Text style={{color:'#a8a157', textAlign:'center', fontFamily: 'Kanit-Regular'}}>Sair</Text>
            </TouchableOpacity>
          </View>
      </Content>
    </ImageBackground>

    );
  }
}

Home.navigationOptions = {
    header: null,
  }


