import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { Content, Text, Button, Icon, Toast } from 'native-base';
import Modal from "react-native-modal";
import * as Animatable from 'react-native-animatable';
import firebase from 'react-native-firebase';
import { AdMobBanner } from 'react-native-admob';
import DominacaoStyle from './dominacao-secundary-style';
import { imgGO, imgGS, imgIR, imgSZ, imgPF, imgGD, imgCA, imgCV, imgCI, imgCS,
  btnDominacaoFooter , dominacaoBack, btnDfD, } from '../imageProvider';


const ref = firebase.firestore()
let runa1 = ''
let runa2 = ''
let runa3 = ''
let runa4 = ''
let runa5 = ''
let runa6 = ''
let namePageRun = '';
let paginaT = '';
let paginaSec = 'DOMINACAO';

class DominacaoSecundary extends Component {
  constructor(props){
    super(props);
    this.unsubscriber = null;
    this.state ={
      showDescs: false, showdescGD: false, showdescGS: false, showdescIR: false, showdescSZ: false,
      showdescPF: false, showdescGO: false, showdescCV: false, showdescCA: false, showdescCI: false,
      showdescCS: false, ismodalGD: false, ismodalGS: false, ismodalIR: false, ismodalSZ: false, ismodalPF: false,
      ismodalGO: false, ismodalCA: false, ismodalCV: false, ismodalCI: false, ismodalCS: false,
      showRunasDominacao1: true, showRunasDominacao2: false, buttonDefaultG1 : btnDfD, buttonDefaultG2: btnDfD,
      btn1: false, btn2: true, lr11: false, lr12: false, lr13: false, lr21: false, lr22: false, lr23: false,
      namePageRune: '', user: null


    }
}

componentDidMount() {
  this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
    this.setState({ user });
  });
}

componentWillUnmount() {
  if (this.unsubscriber) {
    this.unsubscriber();
  }
}


//#region Modal Dominção Function
  _toggleModalGD = () =>
    this.setState({ ismodalGD: !this.state.ismodalGD });

  _toggleModalGS = () =>
    this.setState({ ismodalGS: !this.state.ismodalGS });

  _toggleModalIR = () =>
    this.setState({ ismodalIR: !this.state.ismodalIR });

  _toggleModalSZ = () =>
    this.setState({ ismodalSZ: !this.state.ismodalSZ });

  _toggleModalPF = () =>
    this.setState({ ismodalPF: !this.state.ismodalPF });

  _toggleModalGO = () =>
    this.setState({ ismodalGO: !this.state.ismodalGO });

  _toggleModalCA = () =>
    this.setState({ ismodalCA: !this.state.ismodalCA });

  _toggleModalCV = () =>
    this.setState({ ismodalCV: !this.state.ismodalCV });

  _toggleModalCI = () =>
    this.setState({ ismodalCI: !this.state.ismodalCI });

  _toggleModalCS = () =>
    this.setState({ ismodalCS: !this.state.ismodalCS });
//#endregion Modal Dominção Function

//#region Dominação Secundary Runas Function
  FirstListRunes = () => {
    if(this.state.showRunasDominacao1 == false & this.state.showRunasDominacao2 == true)
      this.setState({showRunasDominacao1: true, showRunasDominacao2: false})
    else if(this.state.showRunasDominacao1 == false & this.state.showRunasDominacao2 == false){
      this.setState({showRunasDominacao1 : true, showdescGD: false, showdescGS: false, showdescIR: false,
      showdescSZ: false, showdescPF: false, showdescGO: false, showdescCA:false, showdescCV: false,
      showdescCI: false, showdescCS: false, showDescs: false})
    }else if (this.state.showRunasDominacao1 == true){
      this.setState({showRunasDominacao1: false})
    }

  }

  SecondListRunes = () => {
    if(this.state.showRunasDominacao1 == false & this.state.showRunasDominacao2 == true)
      this.setState({showRunasDominacao1: true, showRunasDominacao2: false})
    else if(this.state.showRunasDominacao1 == true & this.state.showRunasDominacao2 == false){
      this.setState({showRunasDominacao1: false, showRunasDominacao2: true})
    }
  }

  SelectRuneGD = () => {
    this.setState({buttonDefaultG1: imgGD, lr21: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescGD: true})
      runa5 = 'GOLPE DESLEAL'
  }

  SelectRuneGS = () => {
    this.setState({buttonDefaultG1: imgGS, lr21: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescGS:true})
      runa5 = 'GOSTO DE SANGUE'
  }

  SelectRuneIR = () => {
    this.setState({buttonDefaultG1: imgIR, lr21: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescIR: true})
      runa5 = 'IMPACTO REPENTINO'

  }

  SelectRuneSZ = () => {
    this.setState({buttonDefaultG1: imgSZ, lr22: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescSZ: true})
      runa5 = 'SENTINELA ZUMBI'

  }

  SelectRunePF = () => {
    this.setState({buttonDefaultG1: imgPF, lr22: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescPF: true})
      runa5 = 'PORO FANTASMA'
  }

  SelectRuneGO = () => {
    this.setState({buttonDefaultG1: imgGO, lr22: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescGO: true})
      runa5 = 'GLOBOS OCULARES'

  }

  SelectRuneCV = () => {
    this.setState({buttonDefaultG1: imgCV, lr23: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescCV: true})
      runa5 = 'CAÇA VORAZ'

  }

  SelectRuneCA = () => {
    this.setState({buttonDefaultG1: imgCA, lr23: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescCA: true})
      runa5 = 'CAÇA ARDILOSA'

  }

  SelectRuneCI = () => {
    this.setState({buttonDefaultG1: imgCI, lr23: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescCI: true})
      runa5 = 'CAÇA INCANSÁVEL'

  }

  SelectRuneCS = () => {
    this.setState({buttonDefaultG1: imgCS, lr23: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescCS: true})
      runa5 = 'CAÇA SUPREMA'

  }

  SelectRuneGD2 = () => {
    this.setState({buttonDefaultG2: imgGD, lr11: true, showRunasDominacao1: false, showRunasDominacao2: false,
      btn1: false, btn2: true, showDescs: true, showdescGD: true})
      runa6 = 'GOLPE DESLEAL'
  }

  SelectRuneGS2 = () => {
    this.setState({buttonDefaultG2: imgGS, lr11: true, showRunasDominacao1: false, showRunasDominacao2: false,
      btn1: false, btn2: true, showDescs: true, showdescGS: true})
      runa6 = 'GOSTO DE SANGUE'
  }

  SelectRuneIR2 = () => {
    this.setState({buttonDefaultG2: imgIR, lr11: true, showRunasDominacao1: false, showRunasDominacao2: false,
      btn1: false, btn2: true, showDescs: true, showdescIR:true})
      runa6 = 'IMPACTO REPENTINO'
  }

  SelectRuneSZ2 = () => {
    this.setState({buttonDefaultG2: imgSZ, lr12: true, showRunasDominacao1: false, showRunasDominacao2: false, btn1: false,
      btn2: true, showDescs: true, showdescSZ: true})
      runa6 = 'SENTINELA ZUMBI'
  }

  SelectRunePF2 = () => {
    this.setState({buttonDefaultG2: imgPF, lr12: true, showRunasDominacao1: false, showRunasDominacao2: false, btn1: false,
      btn2: true, showDescs: true, showdescPF: true})
      runa6 = 'PORO FANTASMA'
  }

  SelectRuneGO2 = () => {
    this.setState({buttonDefaultG2: imgGO, lr12: true, showRunasDominacao1: false, showRunasDominacao2: false, btn1: false,
      btn2: true, showDescs: true, showdescGO: true})
      runa6 = 'GLOBOS OCULARES'
  }

  SelectRuneCV2 = () => {
    this.setState({buttonDefaultG2: imgCV, lr13: true, showRunasDominacao1: false, showRunasDominacao2: false, btn1: false,
      btn2: true, showDescs: true, showdescCV: true})
      runa6 = 'CAÇA VORAZ'
  }

  SelectRuneCA2 = () => {
    this.setState({buttonDefaultG2: imgCA, lr13: true, showRunasDominacao1: false, showRunasDominacao2: false, btn1: false,
      btn2: true, showDescs: true, showdescCA: true})
      runa6 = 'CAÇA ARDILOSA'
  }

  SelectRuneCI2 = () => {
    this.setState({buttonDefaultG2: imgCI, lr13: true, showRunasDominacao1: false, showRunasDominacao2: false, btn1: false,
      btn2: true, showDescs: true, showdescCI: true})
      runa6 = 'CAÇA INCANSÁVEL'
  }

  SelectRuneCS2 = () => {
    this.setState({buttonDefaultG2: imgCS, lr13: true, showRunasDominacao1: false, showRunasDominacao2: false, btn1: false,
      btn2: true, showDescs: true, showdescCS:true})
      runa6 = 'CAÇA SUPREMA'
  }
//#endregion Dominação Secundary Runas Function


SalvarDominacao = () => {
  namePageRun = this.state.namePageRune;
  const navigateTo = () => this.props.navigation.navigate('HomeCPRScreen');
  nick = this.state.user.uid
  runasRef = ref.collection(nick).doc(namePageRun);

  runasRef.get().then(function(doc) {
    if (doc.exists){
      Toast.show({
        text: 'Você já utiliza esse nome em uma de suas paginas de runas.',
        position: 'center',
        type: 'danger',
        duration: 2250
      });
    }else if(runa5 | runa6 === ''){
      Toast.show({
        text: 'Você deve escolher suas runas.',
        position: 'top',
        type: 'danger',
        duration: 2250
      });
    }else if(namePageRun === ''){
      Toast.show({
        text: 'Você deve escolher um nome para sua pagina.',
        position: 'top',
        type: 'danger',
        duration: 2250,
      });
    }else{
      ref.collection(nick).doc(namePageRun).set({
      paginaT, paginaSec, runa1, runa2, runa3, runa4, runa5, runa6});
      Toast.show({
          text: 'Sua pagina de runas foi salva.',
          position: 'top',
          type: 'success',
          duration: 2250
        });
      navigateTo()
    }}).catch(function(error) {
    console.log("Error getting document:", error);
});
}



render(){
  const { navigation } = this.props;
  runa1 = navigation.state.params.RunaSelect1
  runa2 = navigation.state.params.RunaSelect2
  runa3 = navigation.state.params.RunaSelect3
  runa4 = navigation.state.params.RunaSelect4
  paginaT = navigation.state.params.RunaType
  return(
    <ImageBackground style={DominacaoStyle.imgBack} source={dominacaoBack}>

    <Content style={DominacaoStyle.backDominacao}>


        <View style={DominacaoStyle.containerRunes}>
          <View style={DominacaoStyle.containerHeaderRune}>
            <Image style={DominacaoStyle.containerHeaderImg} source={btnDominacaoFooter} />
            <View style={DominacaoStyle.containerHeaderText}>
              <Text style={DominacaoStyle.headerTitle}>DOMINAÇÃO</Text>
              <Text style={DominacaoStyle.headerDesc}>Dano explosivo e acesso ao alvo.</Text>
            </View>
          </View>
          <View style={DominacaoStyle.containerRunesRow}>

            <Animatable.View style={{height:200}} animation='flipInY' duration={1200} delay={100}>

              <TouchableOpacity disabled={this.state.btn1} onPress={this.FirstListRunes}>
                <Image style={DominacaoStyle.buttonImgDefault4}  source={this.state.buttonDefaultG1}/>
              </TouchableOpacity>
              <TouchableOpacity disabled={this.state.btn2} onPress={this.SecondListRunes}>
               <Image style={DominacaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG2}/>
              </TouchableOpacity>

            </Animatable.View>

            { this.state.showRunasDominacao1 ?

            <Animatable.View style={DominacaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity disabled={this.state.lr11} onPress={this.SelectRuneGD}>
                  <Image style={[DominacaoStyle.buttonImgSize, {opacity: this.state.lr11 ? .3 : 1 }]}  source={imgGD}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr11} onPress={this.SelectRuneGS}>
                  <Image style={[DominacaoStyle.buttonImgSize, {opacity: this.state.lr11 ? .3 : 1 }]}  source={imgGS}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr11} onPress={this.SelectRuneIR}>
                  <Image style={[DominacaoStyle.buttonImgSize, {opacity: this.state.lr11 ? .3 : 1 }]}  source={imgIR}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr12} onPress={this.SelectRuneSZ}>
                  <Image style={[DominacaoStyle.buttonImgSize, {opacity: this.state.lr12 ? .3 : 1 }]}  source={imgSZ}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr12} onPress={this.SelectRunePF}>
                  <Image style={[DominacaoStyle.buttonImgSize, {opacity: this.state.lr12 ? .3 : 1 }]}  source={imgPF}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr12} onPress={this.SelectRuneGO}>
                  <Image style={[DominacaoStyle.buttonImgSize, {opacity: this.state.lr12 ? .3 : 1 }]}  source={imgGO}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr13} onPress={this.SelectRuneCV}>
                  <Image style={[DominacaoStyle.buttonImgSize4, {opacity: this.state.lr13 ? .3 : 1 }]}  source={imgCV}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr13} onPress={this.SelectRuneCA}>
                  <Image style={[DominacaoStyle.buttonImgSize4, {opacity: this.state.lr13 ? .3 : 1 }]}  source={imgCA}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr13} onPress={this.SelectRuneCI}>
                  <Image style={[DominacaoStyle.buttonImgSize4, {opacity: this.state.lr13 ? .3 : 1 }]}  source={imgCI}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr13} onPress={this.SelectRuneCS}>
                  <Image style={[DominacaoStyle.buttonImgSize4, {opacity: this.state.lr13 ? .3 : 1 }]}  source={imgCS}/>
                </TouchableOpacity>
              </View>

            </Animatable.View> : null }


          { this.state.showRunasDominacao2 ?

            <View style={DominacaoStyle.containerRowButtons}>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity  disabled={this.state.lr21} onPress={this.SelectRuneGD2}>
                  <Image style={[DominacaoStyle.buttonImgSize, {opacity: this.state.lr21 ? .3 : 1 }]}  source={imgGD}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr21} onPress={this.SelectRuneGS2}>
                  <Image style={[DominacaoStyle.buttonImgSize, {opacity: this.state.lr21 ? .3 : 1 }]}  source={imgGS}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr21} onPress={this.SelectRuneIR2}>
                  <Image style={[DominacaoStyle.buttonImgSize, {opacity: this.state.lr21 ? .3 : 1 }]}  source={imgIR}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr22} onPress={this.SelectRuneSZ2}>
                  <Image style={[DominacaoStyle.buttonImgSize, {opacity: this.state.lr22 ? .3 : 1 }]}  source={imgSZ}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr22} onPress={this.SelectRunePF2}>
                  <Image style={[DominacaoStyle.buttonImgSize, {opacity: this.state.lr22 ? .3 : 1 }]}  source={imgPF}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr22} onPress={this.SelectRuneGO2}>
                  <Image style={[DominacaoStyle.buttonImgSize, {opacity: this.state.lr22 ? .3 : 1 }]}  source={imgGO}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr23} onPress={this.SelectRuneCV2}>
                  <Image style={[DominacaoStyle.buttonImgSize4, {opacity: this.state.lr23 ? .3 : 1 }]}  source={imgCV}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr23} onPress={this.SelectRuneCA2}>
                  <Image style={[DominacaoStyle.buttonImgSize4, {opacity: this.state.lr23 ? .3 : 1 }]}  source={imgCA}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr23} onPress={this.SelectRuneCI2}>
                  <Image style={[DominacaoStyle.buttonImgSize4, {opacity: this.state.lr23 ? .3 : 1 }]}  source={imgCI}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr23} onPress={this.SelectRuneCS2}>
                  <Image style={[DominacaoStyle.buttonImgSize4, {opacity: this.state.lr23 ? .3 : 1 }]}  source={imgCS}/>
                </TouchableOpacity>
              </View>
            </View> : null }

            { this.state.showDescs ?
              <View style={[DominacaoStyle.containerDesc, {flexDirection: this.state.lr23 ? 'column-reverse' : 'column', justifyContent: this.state.lr23 ? 'flex-end': 'flex-start'}]}>

              { this.state.showdescGD ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL1}>
                  <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalGD}>Golpe Desleal</Text>
                  <Text style={DominacaoStyle.previewDesc}>Causar dano a Campeões com movimento ou ações debilitadas...</Text>
                  <Modal isVisible={this.state.ismodalGD} onBackdropPress={() => this.setState({ ismodalGD: false })}>
                    <View style={DominacaoStyle.containerModal}>
                      <View style={DominacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalGD}>
                          <Icon style={{color:'#ae3127'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DominacaoStyle.titleModal}>Golpe Desleal</Text>
                    <Text style={DominacaoStyle.textModal}>Causar dano a Campeões com movimento ou ações debilitadas causa 12 - 30 de Dano Verdadeiro adicional (com base no nível).
                      Tempo de Recarga: 4s É ativado pelo dano causado após a debilitação.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescGS ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL1}>
                  <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalGS}>Gosto de Sangue</Text>
                  <Text style={DominacaoStyle.previewDesc}>Cura ao causar dano a um Campeão inimigo...</Text>
                  <Modal isVisible={this.state.ismodalGS} onBackdropPress={() => this.setState({ ismodalGS: false })}>
                    <View style={DominacaoStyle.containerModal}>
                      <View style={DominacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalGS}>
                          <Icon style={{color:'#ae3127'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DominacaoStyle.titleModal}>Gosto de Sangue</Text>
                    <Text style={DominacaoStyle.textModal}>Cura ao causar dano a um Campeão inimigo.
                      Cura: 18-35 (+0.20 de DdA adicional, +0.1 de PdH) de Vida (com base no nível). Tempo de Recarga: 20s</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescIR ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL1}>
                  <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalIR}>Impacto Repentino</Text>
                  <Text style={DominacaoStyle.previewDesc}>Depois de sair da furtividade ou usar um avanço, salto, teletra...</Text>
                  <Modal isVisible={this.state.ismodalIR} onBackdropPress={() => this.setState({ ismodalIR: false })}>
                    <View style={DominacaoStyle.containerModal}>
                      <View style={DominacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalIR}>
                          <Icon style={{color:'#ae3127'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DominacaoStyle.titleModal}>Impacto Repentino</Text>
                    <Text style={DominacaoStyle.textModal}>Depois de sair da furtividade ou usar um avanço, salto,
                      teletransporte ou teleporte, causar dano a um Campeão concede 10 de Letalidade e 8 de Penetração Mágica por 5s.Tempo de Recarga: 4s</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescSZ ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL1}>
                  <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalSZ}>Sentinela Zumbi</Text>
                  <Text style={DominacaoStyle.previewDesc}>Ao abater uma sentinela, uma Sentinela Zumbi aliada surge em...</Text>
                  <Modal isVisible={this.state.ismodalSZ} onBackdropPress={() => this.setState({ ismodalSZ: false })}>
                    <View style={DominacaoStyle.containerModal}>
                      <View style={DominacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalSZ}>
                          <Icon style={{color:'#ae3127'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DominacaoStyle.titleModal}>Sentinela Zumbi</Text>
                    <Text style={DominacaoStyle.textModal}>Ao abater uma sentinela, uma Sentinela Zumbi aliada surge em seu lugar. Além disso,
                      quando suas sentinelas expiram, elas ressuscitam como Sentinelas Zumbis. As Sentinelas Zumbis são visíveis, duram 180s e não afetam seu limite de sentinelas.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescPF ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL1}>
                  <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalPF}>Poro Fantasma</Text>
                  <Text style={DominacaoStyle.previewDesc}>Entre em um arbusto para invocar um Poro depois de uma breve...</Text>
                  <Modal isVisible={this.state.ismodalPF} onBackdropPress={() => this.setState({ ismodalPF: false })}>
                    <View style={DominacaoStyle.containerModal}>
                      <View style={DominacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalPF}>
                          <Icon style={{color:'#ae3127'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DominacaoStyle.titleModal}>Poro Fantasma</Text>
                    <Text style={DominacaoStyle.textModal}>Entre em um arbusto para invocar um Poro depois de uma breve canalização. O Poro ficará para
                      trás para conceder visão até que você invoque um novo.Se um inimigo entrar em um arbusto com um Poro, ele o assusta, colocando Poro
                      Fantasma em 3s de Tempo de Recarga. A canalização do Poro é interrompida se você entrar em combate com um Campeão.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescGO ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL1}>
                  <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalGO}>Globos Oculares</Text>
                  <Text style={DominacaoStyle.previewDesc}>Coleta Globos Oculares ao abater Campeões e sentinelas. Con...</Text>
                  <Modal isVisible={this.state.ismodalGO} onBackdropPress={() => this.setState({ ismodalGO: false })}>
                    <View style={DominacaoStyle.containerModal}>
                      <View style={DominacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalGO}>
                          <Icon style={{color:'#ae3127'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DominacaoStyle.titleModal}>Globos Oculares</Text>
                    <Text style={DominacaoStyle.textModal}>Coleta Globos Oculares ao abater Campeões e sentinelas. Concede um adicional
                      adaptativo de 0.6 de Dano de Ataque ou 1 de Poder de Habilidade por Globo Ocular coletado. Após completar
                      sua coleção de 20 Globos Oculares, você ganha um adicional de um adicional adaptativo de 6 de Dano de Ataque
                      ou 10 de Poder de Habilidade Coleta 2 Globos Oculares por abates de Campeões e 1 Globos Oculares por abate de sentinela.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescCV ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL1}>
                  <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalCV}>Caça Voraz</Text>
                  <Text style={DominacaoStyle.previewDesc}>Cura um percentual do dano que você causa com suas habilidade...</Text>
                  <Modal isVisible={this.state.ismodalCV} onBackdropPress={() => this.setState({ ismodalCV: false })}>
                    <View style={DominacaoStyle.containerModal}>
                      <View style={DominacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalCV}>
                          <Icon style={{color:'#ae3127'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DominacaoStyle.titleModal}>Caça Voraz</Text>
                    <Text style={DominacaoStyle.textModal}>Cura um percentual do dano que você causa com suas habilidades.
                        Cura: 2.5% + 2.5% por acúmulo de Caçando Recompensas. Recebe um acúmulo de Caçando Recompensas sempre
                        que abater um Campeão inimigo pela primeira vez. Cura reduzida a um terço para habilidades de área de ação.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescCA ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL1}>
                  <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalCA}>Caça Ardilosa</Text>
                  <Text style={DominacaoStyle.previewDesc}>Recebe 10% de RTR de itens ativos mais 6% por acúmulo...</Text>
                  <Modal isVisible={this.state.ismodalCA} onBackdropPress={() => this.setState({ ismodalCA: false })}>
                    <View style={DominacaoStyle.containerModal}>
                      <View style={DominacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalCA}>
                          <Icon style={{color:'#ae3127'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DominacaoStyle.titleModal}>Caça Ardilosa</Text>
                    <Text style={DominacaoStyle.textModal}>Recebe 10% de RTR de itens ativos mais 6% por acúmulo de Caçando Recompensas (inclui Amuletos).
                      Recebe um acúmulo de Caçando Recompensas sempre que abater um Campeão inimigo pela primeira vez.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescCI ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL1}>
                  <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalCI}>Caça Incansável</Text>
                  <Text style={DominacaoStyle.previewDesc}>Recebe 8 de Velocidade de Movimento fora de combate...</Text>
                  <Modal isVisible={this.state.ismodalCI} onBackdropPress={() => this.setState({ ismodalCI: false })}>
                    <View style={DominacaoStyle.containerModal}>
                      <View style={DominacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalCI}>
                          <Icon style={{color:'#ae3127'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DominacaoStyle.titleModal}>Caça Incansável</Text>
                    <Text style={DominacaoStyle.textModal}>Recebe 8 de Velocidade de Movimento fora de combate mais 8 por acúmulo de Caçando Recompensas.
                      Recebe um acúmulo de Caçando Recompensas sempre que abater um Campeão inimigo pela primeira vez.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescCS ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL1}>
                  <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalCS}>Caça Suprema</Text>
                  <Text style={DominacaoStyle.previewDesc}>Sua ultimate recebe 5% de Tempo de Recarga reduzido, mais...</Text>
                  <Modal isVisible={this.state.ismodalCS} onBackdropPress={() => this.setState({ ismodalCS: false })}>
                    <View style={DominacaoStyle.containerModal}>
                      <View style={DominacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalCS}>
                          <Icon style={{color:'#ae3127'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DominacaoStyle.titleModal}>Caça Suprema</Text>
                    <Text style={DominacaoStyle.textModal}>Sua ultimate recebe 5% de Tempo de Recarga reduzido, mais 2% adicional por acúmulo de Caçador de Recompensas.
                      Acúmulos de Caçador de Recompensassão recebidos na primeira vez que você conseguir um abate em cada Campeão inimigo.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }
              </View> : null }
          </View>
          <View style={{ flex:1, justifyContent:'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <TextInput
              maxLength={20}
              placeholder="Pagina De Runas"
              placeholderTextColor="#ae3127"
              underlineColorAndroid = "transparent"
              onChangeText={data => this.setState({ namePageRune: data })}
              style={{color: '#ae3127', flex:1, backgroundColor:'#000016', borderWidth:2, borderColor:'rgba(174, 49, 39, 0.5)'}}/>

              <View style={{marginLeft:10, padding:10, backgroundColor:'#000016', borderWidth:2, borderColor:'rgba(174, 49, 39, 0.5)'}}>
                <TouchableOpacity style={{alignItems:'center'}} onPress={() => this.SalvarDominacao()}>
                  <Text style={{color:"#ae3127", textAlign:'center', }}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View>

            <AdMobBanner
              adSize="banner"
              adUnitID="ca-app-pub-1942019449408433/2356063582"
              onAdFailedToLoad={error => console.error(error)}/>
            </View>

        </View>
        </Content>

      </ImageBackground>

    );
  }
}

DominacaoSecundary.navigationOptions = {
  header: null,
}

export default DominacaoSecundary;

