import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { Content, Text, Button, Footer, FooterTab, Icon, Toast } from 'native-base';
import Modal from "react-native-modal";
import * as Animatable from 'react-native-animatable';
import firebase from 'react-native-firebase';
import { AdMobBanner } from 'react-native-admob';
import DeterminacaoStyle from './determinacao-secundary-style';
import { imgCT, imgFV, imgOS, imgCD, imgVR, imgDM, imgRV, imgCEX, imgIB,
  determinacaoBack, btnDfDE, btnDeterminacaoFooter} from '../imageProvider';


const ref = firebase.firestore()
let runa1 = ''
let runa2 = ''
let runa3 = ''
let runa4 = ''
let runa5 = ''
let runa6 = ''
let namePageRun = '';
let paginaT = '';
let paginaSec = 'DETERMINACAO';

class DeterminacaoSecundary extends Component {
  constructor(props){
    super(props);
    this.unsubscriber = null;
    this.state ={
      showDescs: false, showdescDM: false, showdescFV: false, showdescOS: false, showdescCD: false,
      showdescVR: false, showdescCT: false, showdescCEX: false, showdescRV: false, showdescIB: false,
      ismodalDM: false, ismodalFV: false, ismodalOS: false, ismodalCD: false, ismodalVR: false,
      ismodalCT: false, ismodalCEX: false, ismodalRV: false, ismodalIB: false,
      showRunasDominacao1: true, showRunasDominacao2: false, buttonDefaultG1 : btnDfDE, buttonDefaultG2: btnDfDE,
      btn1: false, btn2: true, lr11: false, lr12: false, lr13: false, lr21: false, lr22: false, lr23: false,
      namePageRune: '',  user: null


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
  _toggleModalDM = () =>
    this.setState({ ismodalDM: !this.state.ismodalDM });

  _toggleModalFV = () =>
    this.setState({ ismodalFV: !this.state.ismodalFV });

  _toggleModalOS = () =>
    this.setState({ ismodalOS: !this.state.ismodalOS });

  _toggleModalCD = () =>
    this.setState({ ismodalCD: !this.state.ismodalCD });

  _toggleModalVR = () =>
    this.setState({ ismodalVR: !this.state.ismodalVR });

  _toggleModalCT = () =>
    this.setState({ ismodalCT: !this.state.ismodalCT });

  _toggleModalCEX = () =>
    this.setState({ ismodalCEX: !this.state.ismodalCEX });

  _toggleModalRV = () =>
    this.setState({ ismodalRV: !this.state.ismodalRV });

  _toggleModalIB = () =>
    this.setState({ ismodalIB: !this.state.ismodalIB });
//#endregion Modal Dominção Function

//#region Dominação Secundary Runas Function
  FirstListRunes = () => {
    if(this.state.showRunasDominacao1 == false & this.state.showRunasDominacao2 == true)
      this.setState({showRunasDominacao1: true, showRunasDominacao2: false})
    else if(this.state.showRunasDominacao1 == false & this.state.showRunasDominacao2 == false){
      this.setState({showRunasDominacao1 : true, showdescDM: false, showdescFV: false, showdescOS: false,
      showdescCD: false, showdescVR: false, showdescCT: false, showdescRV:false, showdescCEX: false,
      showdescIB: false, showdescCS: false, showDescs: false})
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

  SelectRuneDM = () => {
    this.setState({buttonDefaultG1: imgDM, lr21: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescDM: true})
      runa5 = 'DEMOLIR'
  }

  SelectRuneFV = () => {
    this.setState({buttonDefaultG1: imgFV, lr21: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescFV:true})
      runa5 = 'FONTE DA VIDA'
  }

  SelectRuneOS = () => {
    this.setState({buttonDefaultG1: imgOS, lr21: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescOS: true})
      runa5 = 'OSSO REVESTIDO'

  }

  SelectRuneCD = () => {
    this.setState({buttonDefaultG1: imgCD, lr22: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescCD: true})
      runa5 = 'CONDICIONAMENTO'

  }

  SelectRuneVR = () => {
    this.setState({buttonDefaultG1: imgVR, lr22: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescVR: true})
      runa5 = 'VENTOS REVIGORANTES'
  }

  SelectRuneCT = () => {
    this.setState({buttonDefaultG1: imgCT, lr22: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescCT: true})
      runa5 = 'CRISÁLIDA'

  }

  SelectRuneCEX = () => {
    this.setState({buttonDefaultG1: imgCEX, lr23: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescCEX: true})
      runa5 = 'CRESCIMENTO EXCESSIVO'

  }

  SelectRuneRV = () => {
    this.setState({buttonDefaultG1: imgRV, lr23: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescRV: true})
      runa5 = 'REVITALIZAR'

  }

  SelectRuneIB = () => {
    this.setState({buttonDefaultG1: imgIB, lr23: true, showRunasDominacao2: true, showRunasDominacao1: false,
      btn1: true, btn2: false, showdescIB: true})
      runa5 = 'INABALÁVEL'

  }

  SelectRuneDM2 = () => {
    this.setState({buttonDefaultG2: imgDM, lr11: true, showRunasDominacao1: false, showRunasDominacao2: false,
      btn1: false, btn2: true, showDescs: true, showdescDM: true})
      runa6 = 'DEMOLIR'
  }

  SelectRuneFV2 = () => {
    this.setState({buttonDefaultG2: imgFV, lr11: true, showRunasDominacao1: false, showRunasDominacao2: false,
      btn1: false, btn2: true, showDescs: true, showdescFV: true})
      runa6 = 'FONTE DA VIDA'
  }

  SelectRuneOS2 = () => {
    this.setState({buttonDefaultG2: imgOS, lr11: true, showRunasDominacao1: false, showRunasDominacao2: false,
      btn1: false, btn2: true, showDescs: true, showdescOS:true})
      runa6 = 'OSSO REVESTIDO'
  }

  SelectRuneCD2 = () => {
    this.setState({buttonDefaultG2: imgCD, lr12: true, showRunasDominacao1: false, showRunasDominacao2: false, btn1: false,
      btn2: true, showDescs: true, showdescCD: true})
      runa6 = 'CONDICIONAMENTO'
  }

  SelectRuneVR2 = () => {
    this.setState({buttonDefaultG2: imgVR, lr12: true, showRunasDominacao1: false, showRunasDominacao2: false, btn1: false,
      btn2: true, showDescs: true, showdescVR: true})
      runa6 = 'VENTOS REVIGORANTES'
  }

  SelectRuneCT2 = () => {
    this.setState({buttonDefaultG2: imgCT, lr12: true, showRunasDominacao1: false, showRunasDominacao2: false, btn1: false,
      btn2: true, showDescs: true, showdescCT: true})
      runa6 = 'CRISÁLIDA'
  }

  SelectRuneCEX2 = () => {
    this.setState({buttonDefaultG2: imgCEX, lr13: true, showRunasDominacao1: false, showRunasDominacao2: false, btn1: false,
      btn2: true, showDescs: true, showdescCEX: true})
      runa6 = 'CRESCIMENTO EXCESSIVO'
  }

  SelectRuneRV2 = () => {
    this.setState({buttonDefaultG2: imgRV, lr13: true, showRunasDominacao1: false, showRunasDominacao2: false, btn1: false,
      btn2: true, showDescs: true, showdescRV: true})
      runa6 = 'REVITALIZAR'
  }

  SelectRuneIB2 = () => {
    this.setState({buttonDefaultG2: imgIB, lr13: true, showRunasDominacao1: false, showRunasDominacao2: false, btn1: false,
      btn2: true, showDescs: true, showdescIB: true})
      runa6 = 'INABALÁVEL'
  }

//#endregion Dominação Secundary Runas Function


SalvarDominacao = async () => {
  namePageRun = this.state.namePageRune;
  const navigateTo = () => this.props.navigation.navigate('HomeCPRScreen');
  nick = this.state.user.uid
  runasRef = ref.collection(nick).doc(namePageRun);

  runasRef.get().then(function(doc) {
    if (doc.exists){
      Toast.show({
        text: 'Você já utiliza esse nome em uma de suas paginas de runas.',
        position: 'top',
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
    <ImageBackground style={DeterminacaoStyle.imgBack} source={determinacaoBack}>
    <Content style={DeterminacaoStyle.backDominacao}>

        <View style={DeterminacaoStyle.containerRunes}>
          <View style={DeterminacaoStyle.containerHeaderRune}>
            <Image style={DeterminacaoStyle.containerHeaderImg} source={btnDeterminacaoFooter} />
            <View style={DeterminacaoStyle.containerHeaderText}>
              <Text style={DeterminacaoStyle.headerTitle}>DETERMINAÇÃO</Text>
              <Text style={DeterminacaoStyle.headerDesc}>Durabilidade e controle de grupo.</Text>
            </View>
          </View>
          <View style={DeterminacaoStyle.containerRunesRow}>

            <Animatable.View style={{height:180}} animation='flipInY' duration={1200} delay={100}>

              <TouchableOpacity disabled={this.state.btn1} onPress={this.FirstListRunes}>
                <Image style={DeterminacaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG1}/>
              </TouchableOpacity>
              <TouchableOpacity disabled={this.state.btn2} onPress={this.SecondListRunes}>
               <Image style={DeterminacaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG2}/>
              </TouchableOpacity>

            </Animatable.View>

            { this.state.showRunasDominacao1 ?

            <Animatable.View style={DeterminacaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity disabled={this.state.lr11} onPress={this.SelectRuneDM}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr11 ? .3 : 1 }]}  source={imgDM}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr11} onPress={this.SelectRuneFV}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr11 ? .3 : 1 }]}  source={imgFV}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr11} onPress={this.SelectRuneOS}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr11 ? .3 : 1 }]}  source={imgOS}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr12} onPress={this.SelectRuneCD}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr12 ? .3 : 1 }]}  source={imgCD}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr12} onPress={this.SelectRuneVR}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr12 ? .3 : 1 }]}  source={imgVR}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr12} onPress={this.SelectRuneCT}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr12 ? .3 : 1 }]}  source={imgCT}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr13} onPress={this.SelectRuneCEX}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr13 ? .3 : 1 }]}  source={imgCEX}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr13} onPress={this.SelectRuneRV}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr13 ? .3 : 1 }]}  source={imgRV}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr13} onPress={this.SelectRuneIB}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr13 ? .3 : 1 }]}  source={imgIB}/>
                </TouchableOpacity>
              </View>

            </Animatable.View> : null }


          { this.state.showRunasDominacao2 ?

            <View style={DeterminacaoStyle.containerRowButtons}>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity  disabled={this.state.lr21} onPress={this.SelectRuneDM2}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr21 ? .3 : 1 }]}  source={imgDM}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr21} onPress={this.SelectRuneFV2}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr21 ? .3 : 1 }]}  source={imgFV}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr21} onPress={this.SelectRuneOS2}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr21 ? .3 : 1 }]}  source={imgOS}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr22} onPress={this.SelectRuneCD2}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr22 ? .3 : 1 }]}  source={imgCD}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr22} onPress={this.SelectRuneVR2}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr22 ? .3 : 1 }]}  source={imgVR}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr22} onPress={this.SelectRuneCT2}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr22 ? .3 : 1 }]}  source={imgCT}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr23} onPress={this.SelectRuneCEX2}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr23 ? .3 : 1 }]}  source={imgCEX}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr23} onPress={this.SelectRuneRV2}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr23 ? .3 : 1 }]}  source={imgRV}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr23} onPress={this.SelectRuneIB2}>
                  <Image style={[DeterminacaoStyle.buttonImgSize, {opacity: this.state.lr23 ? .3 : 1 }]}  source={imgIB}/>
                </TouchableOpacity>
              </View>
            </View> : null }

            { this.state.showDescs ?
              <View style={[DeterminacaoStyle.containerDesc, {flexDirection: this.state.lr23 ? 'column-reverse' : 'column', justifyContent: this.state.lr23 ? 'flex-end': 'flex-start'}]}>

              { this.state.showdescDM ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL1}>
                  <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalDM}>Demolir</Text>
                  <Text style={DeterminacaoStyle.previewDesc}>Carrega um poderoso ataque contra uma torre por 4s enqua...</Text>
                  <Modal isVisible={this.state.ismodalDM} onBackdropPress={() => this.setState({ ismodalDM: false })}>
                    <View style={DeterminacaoStyle.containerModal}>
                      <View style={DeterminacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalDM}>
                          <Icon style={{color:'#91dc5a'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DeterminacaoStyle.titleModal}>Demolir</Text>
                    <Text style={DeterminacaoStyle.textModal}>Carrega um poderoso ataque contra uma torre por 4s enquanto estiver a 600 de distância. o ataque carregado causa 125 (+30% de sua vida máx.) de dano físico adicional.
                      tempo de recarga: 45 s.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescFV ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL1}>
                  <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalFV}>Fonte da vida</Text>
                  <Text style={DeterminacaoStyle.previewDesc}>Debilitar o movimento de um campeão inimigo o...</Text>
                  <Modal isVisible={this.state.ismodalFV} onBackdropPress={() => this.setState({ ismodalFV: false })}>
                    <View style={DeterminacaoStyle.containerModal}>
                      <View style={DeterminacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalFV}>
                          <Icon style={{color:'#91dc5a'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DeterminacaoStyle.titleModal}>Fonte da vida</Text>
                    <Text style={DeterminacaoStyle.textModal}>Debilitar o movimento de um campeão inimigo o deixa marcado por 4s.
                      campeões aliados que atacarem inimigos marcados são curados em 5 + 1.0% de sua vida máxima por 2s.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescOS ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL1}>
                  <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalOS}>Osso revestido</Text>
                  <Text style={DeterminacaoStyle.previewDesc}>Após sofrer dano de um campeão inimigo, os próximos 3 ataques...</Text>
                  <Modal isVisible={this.state.ismodalOS} onBackdropPress={() => this.setState({ ismodalOS: false })}>
                    <View style={DeterminacaoStyle.containerModal}>
                      <View style={DeterminacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalOS}>
                          <Icon style={{color:'#91dc5a'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DeterminacaoStyle.titleModal}>Osso revestido</Text>
                    <Text style={DeterminacaoStyle.textModal}>Após sofrer dano de um campeão inimigo, os próximos 3 ataques ou habilidades
                      que você receber desse inimigo causarão 15 - 40 a menos de dano.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescCD ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL1}>
                  <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalCD}>Condicionamento</Text>
                  <Text style={DeterminacaoStyle.previewDesc}>Depois de 10 mins, recebe +8 de armadura e +8 de resistência mágica...</Text>
                  <Modal isVisible={this.state.ismodalCD} onBackdropPress={() => this.setState({ ismodalCD: false })}>
                    <View style={DeterminacaoStyle.containerModal}>
                      <View style={DeterminacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalCD}>
                          <Icon style={{color:'#91dc5a'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DeterminacaoStyle.titleModal}>Condicionamento</Text>
                    <Text style={DeterminacaoStyle.textModal}>Depois de 10 mins, recebe +8 de armadura e +8 de resistência mágica,
                      e aumenta sua armadura e resistência mágica em 5%.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescVR ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL1}>
                  <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalVR}>Ventos Revigorantes</Text>
                  <Text style={DeterminacaoStyle.previewDesc}>Após receber dano de um campeão inimigo, recebe cura...</Text>
                  <Modal isVisible={this.state.ismodalVR} onBackdropPress={() => this.setState({ ismodalVR: false })}>
                    <View style={DeterminacaoStyle.containerModal}>
                      <View style={DeterminacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalVR}>
                          <Icon style={{color:'#91dc5a'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DeterminacaoStyle.titleModal}>Ventos Revigorantes</Text>
                    <Text style={DeterminacaoStyle.textModal}>Após receber dano de um campeão inimigo, recebe cura
                      equivalente a 4% da vida perdida +6 por 10s.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescCT ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL1}>
                  <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalCT}>Crisálida</Text>
                  <Text style={DeterminacaoStyle.previewDesc}>Comece o jogo com 50 de vida adicional. após 4 abates, con...</Text>
                  <Modal isVisible={this.state.ismodalCT} onBackdropPress={() => this.setState({ ismodalCT: false })}>
                    <View style={DeterminacaoStyle.containerModal}>
                      <View style={DeterminacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalCT}>
                          <Icon style={{color:'#91dc5a'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DeterminacaoStyle.titleModal}>Crisálida</Text>
                    <Text style={DeterminacaoStyle.textModal}>Comece o jogo com 50 de vida adicional. após 4 abates, consuma
                      essa vida para ganhar um adicional adaptativo de 9 de dano de ataque ou 15 de poder de habilidade.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescCEX ? <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL1}>
                  <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalCEX}>Crescimento Excessivo</Text>
                  <Text style={DeterminacaoStyle.previewDesc}>Curas e escudos ficam 5% mais fortes e aumentam em...</Text>
                  <Modal isVisible={this.state.ismodalCEX} onBackdropPress={() => this.setState({ ismodalCEX: false })}>
                    <View style={DeterminacaoStyle.containerModal}>
                      <View style={DeterminacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalCEX}>
                          <Icon style={{color:'#91dc5a'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DeterminacaoStyle.titleModal}>Crescimento Excessivo</Text>
                    <Text style={DeterminacaoStyle.textModal}>Ganha permanentemente 0.2% de vida máxima para cada 8 monstros ou tropas
                      inimigas que morrerem perto de você.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescRV ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL1}>
                  <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalRV}>Revitalizar</Text>
                  <Text style={DeterminacaoStyle.previewDesc}>Curas e escudos ficam 5% mais fortes e aumentam em 10% em alvos...</Text>
                  <Modal isVisible={this.state.ismodalRV} onBackdropPress={() => this.setState({ ismodalRV: false })}>
                    <View style={DeterminacaoStyle.containerModal}>
                      <View style={DeterminacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalRV}>
                          <Icon style={{color:'#91dc5a'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DeterminacaoStyle.titleModal}>Revitalizar</Text>
                    <Text style={DeterminacaoStyle.textModal}>Curas e escudos ficam 5% mais fortes e aumentam em 10% em alvos com vida inferior a 40%.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescIB ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL1}>
                  <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalIB}>Inabalável</Text>
                  <Text style={DeterminacaoStyle.previewDesc}>Depois de conjurar um feitiço de invocador, recebe 15%...</Text>
                  <Modal isVisible={this.state.ismodalIB} onBackdropPress={() => this.setState({ ismodalIB: false })}>
                    <View style={DeterminacaoStyle.containerModal}>
                      <View style={DeterminacaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalIB}>
                          <Icon style={{color:'#91dc5a'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={DeterminacaoStyle.titleModal}>Inabalável</Text>
                    <Text style={DeterminacaoStyle.textModal}>Depois de conjurar um feitiço de invocador, recebe 15% de tenacidade e de resistência à redução de velocidade por 10s. além disso, concede 10% de tenacidade
                       e resistência à redução de velocidade para cada feitiço de invocador em tempo de recarga.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

              </View> : null }
          </View>
          <View style={{flex: 1, justifyContent:'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <TextInput
              maxLength={20}
              placeholder="Pagina De Runas"
              placeholderTextColor="#91dc5a"
              underlineColorAndroid = "transparent"
              onChangeText={data => this.setState({ namePageRune: data })}
              style={{color: '#91dc5a', flex:1, backgroundColor:'#000016', borderWidth:2, borderColor:'rgba(145, 220, 90, 0.5)'}}/>

              <View style={{marginLeft:10, padding:10, backgroundColor:'#000016', borderWidth:2, borderColor:'rgba(145, 220, 90, 0.5)'}}>
                <TouchableOpacity style={{alignItems:'center'}} onPress={() => this.SalvarDominacao()}>
                  <Text style={{color:"#91dc5a", textAlign:'center', fontFamily: 'Kanit-Regular' }}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View>

            <AdMobBanner
              adSize="banner"
              adUnitID="ca-app-pub-1942019449408433/7841104809"
              onAdFailedToLoad={error => console.error(error)}/>
            </View>

        </View>
      </Content>
      </ImageBackground>

    );
  }
}

DeterminacaoSecundary.navigationOptions = {
  header: null,
}

export default DeterminacaoSecundary;

