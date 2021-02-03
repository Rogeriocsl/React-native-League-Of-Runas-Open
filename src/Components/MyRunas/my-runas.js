import React, { Component } from 'react';
import { View, Image, ImageBackground, ActivityIndicator, Text, FlatList, TouchableOpacity } from 'react-native';
import { Content } from 'native-base';
import firebase from 'react-native-firebase';
import { myrunas,  listP,  listF, imgIG, imgIA, imgCM, imgAP, imgCQ, imgRF, imgPA,
   btnFeiticariaFooter, btnDeterminacaoFooter, btnInspiracaoFooter, btnDominacaoFooter, btnPrecisaoFooter, listI, imgAG, imgCP, imgLFD, listD, imgAMV, listDO, imgPD, imgCLS, imgCHL, imgEL, imgGP, imgPCH, logo } from '../imageProvider';
import MyRunasStyle from './my-style';
import {
  AdMobInterstitial,
} from 'react-native-admob'
let listp = ''
let Frune = ''
let secRune = ''

AdMobInterstitial.setAdUnitID('ca-app-pub-1942019449408433/9375362532');
AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
class MyRunas extends Component {
  constructor() {
    super();
    this.ref = null;
    this.unsubscribe = null;
    this.userUid = null;
    this.state = {
        textInput: '',
        loading: true,
        todos: [],
        user: null,
        collection: '',
        pagSel:''
    };
  }

  componentDidMount() {
    this.verifyPag();
  }

  componentWillUnmount() {
    if (this.userUid != null) {
      this.userUid();
      this.unsubscribe();

    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const todos = [];

    querySnapshot.forEach((doc) => {
      //const { title } = doc.data();
      todos.push({
        key: doc.id,
        doc,
        type: doc.data(),
        runaRP: doc.data().paginaT,
        runaRS: doc.data().paginaSec,
        runaA: doc.data().runa1,
        runaB: doc.data().runa2,
        runaC: doc.data().runa3,
        runaD: doc.data().runa4,
        runaE: doc.data().runa5,
        runaF: doc.data().runa6,
        title: doc.id
      });
    });
    this.setState({
      todos,
      loading: false,
   });
  }

  verifyPag = () => {
    this.userUid = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user});
      this.ref = firebase.firestore().collection(user.uid)
      this.setState({pagSel: user.uid})
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    });

  }


  GetFlatListItem (item, runaRS, runaRP, runaA, runaB, runaC, runaD, runaE, runaF) {
    this.props.navigation.navigate('MPScreen', {
      colecaoP:item,
      colecaoRS:runaRS,
      colecaoRP:runaRP,
      colecao1:runaA,
      colecao2:runaB,
      colecao3:runaC,
      colecao4:runaD,
      colecao5:runaE,
      colecao6:runaF,
      uid: this.state.pagSel

      });
    this.props.navigation.navigate('MPScreen')
    }


  render() {
    const columns = 2;
    if (this.state.loading) {
      return(
        <View style={{flex: 1, backgroundColor:'#000016', justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
        <Text style={{color:'#fff'}}>Carregando...</Text>


      </View>
      );
    }
    return(
      <ImageBackground source={myrunas} style={MyRunasStyle.containerBack} >
      <Content style={MyRunasStyle.container}>
        <View style={{alignItems:'center'}}>
           <Image source={logo} />
         </View>
          <FlatList style={MyRunasStyle.containerFlat}
            data={createRows(this.state.todos, columns)}
            numColumns={columns}
            renderItem={({ item, index }) =>{
              if (item.empty) {
              return <View style={[MyRunasStyle.item, MyRunasStyle.itemEmpty]} />;
              }if(item.type.paginaT === 'Feiticaria'){
                listp = listF
                if(item.type.runa1 === 'INVOCAR AERY'){
                  Frune = imgIA
                }else if(item.type.runa1 === 'COMETA ARCANO'){
                  Frune = imgCM
                }else{
                  Frune = imgIG
                }
              }if(item.type.paginaT === 'Precisao' ){
                listp = listP
                if(item.type.runa1 === 'PRESSIONE O ATAQUE'){
                  Frune = imgPA
                }else if(item.type.runa1 === 'RITMO FATAL'){
                  Frune = imgRF
                }else if(item.type.runa1 === 'AGILIDADE NOS PÉS'){
                  Frune = imgAP
                }else{
                  Frune = imgCQ
                }
              }if(item.type.paginaT === 'Inspiracao' ){
                listp = listI
                if(item.type.runa1 === 'APRIMORAMENTO GLACIAL'){
                  Frune = imgAG
                }else if(item.type.runa1 === 'CLEPTOMANCIA'){
                  Frune = imgCP
                }else{
                  Frune = imgLFD
                }
              }if(item.type.paginaT === 'Determinacao' ){
                listp = listD
                if(item.type.runa1 === 'APERTO DOS MORTOS VIVOS'){
                  Frune = imgAMV
                }else if(item.type.runa1 === 'POS CHOQUE'){
                  Frune = imgPCH
                }else{
                  Frune = imgGP
                }

              }if(item.type.paginaT === 'Dominacao' ){
                listp = listDO
                if(item.type.runa1 === 'ELETROCULTAR'){
                  Frune = imgEL
                }else if(item.type.runa1 === 'PREDADOR'){
                  Frune = imgPD
                }else if(item.type.runa1 === 'COLHEITA SOMBRIA'){
                  Frune = imgCLS
                }else{
                  Frune = imgCHL
                }

              }if(item.type.paginaSec === 'DOMINACAO'){
                  secRune = btnDominacaoFooter
                }else if(item.type.paginaSec === 'PRECISAO'){
                  secRune = btnPrecisaoFooter
                }else if(item.type.paginaSec === 'FEITICARIA'){
                  secRune = btnFeiticariaFooter
                }else if(item.type.paginaSec === 'DETERMINACAO'){
                  secRune = btnDeterminacaoFooter
                }else if(item.type.paginaSec === 'INSPIRACAO'){
                  secRune = btnInspiracaoFooter
                }
              return(
              <ImageBackground  style={MyRunasStyle.containerItemBack} source={listp}>
                <TouchableOpacity  onPress={this.GetFlatListItem.bind(this, item.key, item.runaRP, item.runaRS, item.runaA, item.runaB, item.runaC, item.runaD, item.runaE, item.runaF)}>
                <Text style={MyRunasStyle.textItem}>{item.title}</Text>
                <View style={MyRunasStyle.containerImgType}>
                  <Image style={{width:60, height:60}} source={Frune}/>
                  <Image style={{width:25, height:25}} source={secRune}/>
                </View>
                </TouchableOpacity>
              </ImageBackground>);
            }}
            keyExtractor={(item, index) => item.title}
            />
            </Content>

        </ImageBackground>




    );
  }
}

MyRunas.navigationOptions = {
  header: null,
}
export default MyRunas;

function createRows(data, columns) {
  const rows = Math.floor(data.length / columns); // [A]
  let lastRowElements = data.length - rows * columns; // [B]

  while (lastRowElements !== columns) { // [C]
    data.push({ // [D]
      id: `empty-${lastRowElements}`,
      name: `empty-${lastRowElements}`,
      empty: true
    });
    lastRowElements += 1; // [E]
  }

  return data; // [F]
}

