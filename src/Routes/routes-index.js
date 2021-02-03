import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {View} from 'react-native';
import Login from '../Components/Login/login-index';
import Home from '../Components/Home/home-index';
import Precisao from '../Components/Precisao/precisao-index';
import Dominacao from '../Components/Dominacao/dominacao-index';
import DominacaoSecundary from '../Components/Dominacao/dominacao-secundary-index';
import Sobre from '../Components/sobre';
const Routes = () => (
  <View style={{flex:1, backgroundColor:'#000'}}>
    <Router>
      <Scene key="root">       
        <Scene key="login" component={Login} hideNavBar={true}/> 
        <Scene key="home" component={Home} hideNavBar={true}/> 
        <Scene key="precisao" component={Precisao} hideNavBar={true}/>
        <Scene key="dominacao" component={Dominacao} hideNavBar={true}/>
        <Scene key="sobre" component={Sobre} hideNavBar={true}  initial={true}  />
        <Scene key="dominacaoSecundary" component={DominacaoSecundary} hideNavBar={true}/>

      </Scene>
    </Router>
  </View>
)

export default Routes;
