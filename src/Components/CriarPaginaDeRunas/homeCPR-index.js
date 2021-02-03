import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { Content} from 'native-base';
import HomeStyle from './homeCPR-style';
import { homeBack, btnP, btnDO, btnF, btnD, btnI,  logo } from '../imageProvider';
import { AdMobBanner } from 'react-native-admob';

export default class HomeCPR extends Component {

  Feiticaria = () => {
    this.props.navigation.navigate('FeiticariaScreen')
  }
  Determinacao = () => {
  this.props.navigation.navigate('DeterminacaoScreen')
  }
  Precisao = () => {
    this.props.navigation.navigate('PrecisaoScreen')
  }
  Dominacao = () => {
    this.props.navigation.navigate('DominacaoScreen')
  }
  Inspiracao = () => {
    this.props.navigation.navigate('InspiracaoScreen')
  }



render(){

  return(
    <ImageBackground style={HomeStyle.imgback} source={homeBack}>
      <Content>
        <View style={HomeStyle.containerbuttons}>
          <View style={HomeStyle.containerName}>
              <Image source={logo} />
          </View>
          <View style={HomeStyle.rowbuttons}>
            <TouchableOpacity onPress={() => this.Precisao()}>
              <Image style={HomeStyle.precisaobutton} source={btnP} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.Dominacao()} >
              <Image style={HomeStyle.dominacaobutton} source={btnDO} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.Feiticaria()}>
              <Image style={HomeStyle.feiticariabutton} source={btnF} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.Determinacao()}>
              <Image style={HomeStyle.determinacaobutton} source={btnD} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.Inspiracao()}>
              <Image style={HomeStyle.inspiracaobutton} source={btnI} />
            </TouchableOpacity>
          </View>
          <View style={{marginTop:30, alignItems:'center'}}>
          <AdMobBanner
              adSize="banner"
              adUnitID="ca-app-pub-1942019449408433/6681750580"
              onAdFailedToLoad={error => console.error(error)}/>
          </View>
        </View>
      </Content>
    </ImageBackground>

    );
  }
}

HomeCPR.navigationOptions = {
    header: null,
  }


