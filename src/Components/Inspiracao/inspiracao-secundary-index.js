import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { Content, Text, Button, Icon, Toast } from 'native-base';
import Modal from "react-native-modal";
import * as Animatable from 'react-native-animatable';
import firebase from 'react-native-firebase';
import { AdMobBanner } from 'react-native-admob';
import InspiracaoStyle from './inspiracao-secundary-style';
import { imgFH, imgBM, imgSP, imgMF, imgPT, imgEB, imgPC, imgVA, imgTDT,
  inspiracaoBack, btnDfI, btnInspiracaoFooter} from '../imageProvider';


const ref = firebase.firestore()
let runa1 = ''
let runa2 = ''
let runa3 = ''
let runa4 = ''
let runa5 = ''
let runa6 = ''
let namePageRun = '';
let paginaT = '';
let paginaSec = 'INSPIRACAO';

class InspiracaoSecundary extends Component {
  constructor(props){
    super(props);
    this.unsubscriber = null;
    this.state ={
      showDescs: false, showDescFH: false, showDescBM: false, showDescSP: false, showDescMF: false,
      showDescPT: false, showDescEB: false, showDescPC: false, showDescVA: false, showDescTDT: false,
      isModalFH: false, isModalBM: false, isModalSP: false, isModalMF: false, isModalPT: false,
      isModalEB: false, isModalPC: false, isModalVA: false, isModalTDT: false,
      showRunasInspiracao1: true, showRunasInspiracao2: false, buttonDefaultG1 : btnDfI, buttonDefaultG2: btnDfI,
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
  _toggleModalFH = () =>
    this.setState({ isModalFH: !this.state.isModalFH });

  _toggleModalBM = () =>
    this.setState({ isModalBM: !this.state.isModalBM });

  _toggleModalSP = () =>
    this.setState({ isModalSP: !this.state.isModalSP });

  _toggleModalMF = () =>
    this.setState({ isModalMF: !this.state.isModalMF });

  _toggleModalPT = () =>
    this.setState({ isModalPT: !this.state.isModalPT });

  _toggleModalEB = () =>
    this.setState({ isModalEB: !this.state.isModalEB });

  _toggleModalPC = () =>
    this.setState({ isModalPC: !this.state.isModalPC });

  _toggleModalVA = () =>
    this.setState({ isModalVA: !this.state.isModalVA });

  _toggleModalTDT = () =>
    this.setState({ isModalTDT: !this.state.isModalTDT });
//#endregion Modal Dominção Function

//#region Dominação Secundary Runas Function
  FirstListRunes = () => {
    if(this.state.showRunasInspiracao1 == false & this.state.showRunasInspiracao2 == true)
      this.setState({showRunasInspiracao1: true, showRunasInspiracao2: false})
    else if(this.state.showRunasInspiracao1 == false & this.state.showRunasInspiracao2 == false){
      this.setState({showRunasInspiracao1 : true, showDescFH: false, showDescBM: false, showDescSP: false,
      showDescMF: false, showDescPT: false, showDescEB: false, showDescVA:false, showDescPC: false,
      showDescTDT: false, showDescs: false})
    }else if (this.state.showRunasInspiracao1 == true){
      this.setState({showRunasInspiracao1: false})
    }
  }

  SecondListRunes = () => {
    if(this.state.showRunasInspiracao1 == false & this.state.showRunasInspiracao2 == true)
      this.setState({showRunasInspiracao1: true, showRunasInspiracao2: false})
    else if(this.state.showRunasInspiracao1 == true & this.state.showRunasInspiracao2 == false){
      this.setState({showRunasInspiracao1: false, showRunasInspiracao2: true})
    }
  }

  SelectRuneFH = () => {
    this.setState({buttonDefaultG1: imgFH, lr21: true, showRunasInspiracao2: true, showRunasInspiracao1: false,
      btn1: true, btn2: false, showDescFH: true})
      runa5 = 'FLASHTRAÇÃO HEXTEC'
  }

  SelectRuneBM = () => {
    this.setState({buttonDefaultG1: imgBM, lr21: true, showRunasInspiracao2: true, showRunasInspiracao1: false,
      btn1: true, btn2: false, showDescBM:true})
      runa5 = 'CALÇADOS MÁGICOS'
  }

  SelectRuneSP = () => {
    this.setState({buttonDefaultG1: imgSP, lr21: true, showRunasInspiracao2: true, showRunasInspiracao1: false,
      btn1: true, btn2: false, showDescSP: true})
      runa5 = 'SINCRONIA PERFEITA'

  }

  SelectRuneMF = () => {
    this.setState({buttonDefaultG1: imgMF, lr22: true, showRunasInspiracao2: true, showRunasInspiracao1: false,
      btn1: true, btn2: false, showDescMF: true})
      runa5 = 'MERCADO DO FUTURO'

  }

  SelectRunePT = () => {
    this.setState({buttonDefaultG1: imgPT, lr22: true, showRunasInspiracao2: true, showRunasInspiracao1: false,
      btn1: true, btn2: false, showDescPT: true})
      runa5 = 'PULVERIZADOR DE TROPAS'
  }

  SelectRuneEB = () => {
    this.setState({buttonDefaultG1: imgEB, lr22: true, showRunasInspiracao2: true, showRunasInspiracao1: false,
      btn1: true, btn2: false, showDescEB: true})
      runa5 = 'ENTREGA DE BISCOITOS'

  }

  SelectRunePC = () => {
    this.setState({buttonDefaultG1: imgPC, lr23: true, showRunasInspiracao2: true, showRunasInspiracao1: false,
      btn1: true, btn2: false,  showDescPC: true})
      runa5 = 'PERSPICÁCIA CÓSMICA'

  }

  SelectRuneVA = () => {
    this.setState({buttonDefaultG1: imgVA, lr23: true, showRunasInspiracao2: true, showRunasInspiracao1: false,
      btn1: true, btn2: false,  showDescVA: true})
      runa5 = 'VELOCIDADE DE APROXIMAÇÃO'

  }

  SelectRuneTDT = () => {
    this.setState({buttonDefaultG1: imgTDT, lr23: true, showRunasInspiracao2: true, showRunasInspiracao1: false,
      btn1: true, btn2: false, showDescTDT: true})
      runa5 = 'TÔNICO DE DISTORÇÃO NO TEMPO'

  }

  SelectRuneFH2 = () => {
    this.setState({buttonDefaultG2: imgFH, lr11: true, showRunasInspiracao1: false, showRunasInspiracao2: false,
      btn1: false, btn2: true, showDescs: true, showDescFH: true})
      runa6 = 'FLASHTRAÇÃO HEXTEC'
  }

  SelectRuneBM2 = () => {
    this.setState({buttonDefaultG2: imgBM, lr11: true, showRunasInspiracao1: false, showRunasInspiracao2: false,
      btn1: false, btn2: true, showDescs: true, showDescBM: true})
      runa6 = 'CALÇADOS MÁGICOS'
  }

  SelectRuneSP2 = () => {
    this.setState({buttonDefaultG2: imgSP, lr11: true, showRunasInspiracao1: false, showRunasInspiracao2: false,
      btn1: false, btn2: true, showDescs: true, showDescSP:true})
      runa6 = 'SINCRONIA PERFEITA'
  }

  SelectRuneMF2 = () => {
    this.setState({buttonDefaultG2: imgMF, lr12: true, showRunasInspiracao1: false, showRunasInspiracao2: false, btn1: false,
      btn2: true, showDescs: true, showDescMF: true})
      runa6 = 'MERCADO DO FUTURO'
  }

  SelectRunePT2 = () => {
    this.setState({buttonDefaultG2: imgPT, lr12: true, showRunasInspiracao1: false, showRunasInspiracao2: false, btn1: false,
      btn2: true, showDescs: true, showDescPT: true})
      runa6 = 'PULVERIZADOR DE TROPAS'
  }

  SelectRuneEB2 = () => {
    this.setState({buttonDefaultG2: imgEB, lr12: true, showRunasInspiracao1: false, showRunasInspiracao2: false, btn1: false,
      btn2: true, showDescs: true, showDescEB: true})
      runa6 = 'ENTREGA DE BISCOITOS'
  }

  SelectRunePC2 = () => {
    this.setState({buttonDefaultG2: imgPC, lr13: true, showRunasInspiracao1: false, showRunasInspiracao2: false, btn1: false,
      btn2: true, showDescs: true, showDescPC: true})
      runa6 = 'PERSPICÁCIA CÓSMICA'
  }

  SelectRuneVA2 = () => {
    this.setState({buttonDefaultG2: imgVA, lr13: true, showRunasInspiracao1: false, showRunasInspiracao2: false, btn1: false,
      btn2: true, showDescs: true, showDescVA: true})
      runa6 = 'VELOCIDADE DE APROXIMAÇÃO'
  }

  SelectRuneTDT2 = () => {
    this.setState({buttonDefaultG2: imgTDT, lr13: true, showRunasInspiracao1: false, showRunasInspiracao2: false, btn1: false,
      btn2: true, showDescs: true, showDescTDT: true})
      runa6 = 'TÔNICO DE DISTORÇÃO NO TEMPO'
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
    <ImageBackground style={InspiracaoStyle.imgBack} source={inspiracaoBack}>
    <Content style={InspiracaoStyle.backFeiticaria}>


        <View style={InspiracaoStyle.containerRunes}>
          <View style={InspiracaoStyle.containerHeaderRune}>
            <Image style={InspiracaoStyle.containerHeaderImg} source={btnInspiracaoFooter} />
            <View style={InspiracaoStyle.containerHeaderText}>
              <Text style={InspiracaoStyle.headerTitle}>Inspiração</Text>
              <Text style={InspiracaoStyle.headerDesc}>Ferramentas criativas e distorção das regras.</Text>
            </View>
          </View>
          <View style={InspiracaoStyle.containerRunesRow}>

            <Animatable.View style={{height:200}} animation='flipInY' duration={1200} delay={100}>

              <TouchableOpacity disabled={this.state.btn1} onPress={this.FirstListRunes}>
                <Image style={InspiracaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG1}/>
              </TouchableOpacity>
              <TouchableOpacity disabled={this.state.btn2} onPress={this.SecondListRunes}>
               <Image style={InspiracaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG2}/>
              </TouchableOpacity>

            </Animatable.View>

            { this.state.showRunasInspiracao1 ?

            <Animatable.View style={InspiracaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity disabled={this.state.lr11} onPress={this.SelectRuneFH}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr11 ? .3 : 1 }]}  source={imgFH}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr11} onPress={this.SelectRuneBM}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr11 ? .3 : 1 }]}  source={imgBM}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr11} onPress={this.SelectRuneSP}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr11 ? .3 : 1 }]}  source={imgSP}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr12} onPress={this.SelectRuneMF}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr12 ? .3 : 1 }]}  source={imgMF}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr12} onPress={this.SelectRunePT}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr12 ? .3 : 1 }]}  source={imgPT}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr12} onPress={this.SelectRuneEB}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr12 ? .3 : 1 }]}  source={imgEB}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr13} onPress={this.SelectRunePC}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr13 ? .3 : 1 }]}  source={imgPC}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr13} onPress={this.SelectRuneVA}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr13 ? .3 : 1 }]}  source={imgVA}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr13} onPress={this.SelectRuneTDT}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr13 ? .3 : 1 }]}  source={imgTDT}/>
                </TouchableOpacity>
              </View>

            </Animatable.View> : null }


          { this.state.showRunasInspiracao2 ?

            <View style={InspiracaoStyle.containerRowButtons}>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity  disabled={this.state.lr21} onPress={this.SelectRuneFH2}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr21 ? .3 : 1 }]}  source={imgFH}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr21} onPress={this.SelectRuneBM2}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr21 ? .3 : 1 }]}  source={imgBM}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr21} onPress={this.SelectRuneSP2}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr21 ? .3 : 1 }]}  source={imgSP}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr22} onPress={this.SelectRuneMF2}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr22 ? .3 : 1 }]}  source={imgMF}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr22} onPress={this.SelectRunePT2}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr22 ? .3 : 1 }]}  source={imgPT}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr22} onPress={this.SelectRuneEB2}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr22 ? .3 : 1 }]}  source={imgEB}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr23} onPress={this.SelectRunePC2}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr23 ? .3 : 1 }]}  source={imgPC}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr23} onPress={this.SelectRuneVA2}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr23 ? .3 : 1 }]}  source={imgVA}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr23} onPress={this.SelectRuneTDT2}>
                  <Image style={[InspiracaoStyle.buttonImgSize, {opacity: this.state.lr23 ? .3 : 1 }]}  source={imgTDT}/>
                </TouchableOpacity>
              </View>
            </View> : null }

            { this.state.showDescs ?
              <View style={[InspiracaoStyle.containerDesc, {flexDirection: this.state.lr23 ? 'column-reverse' : 'column', justifyContent: this.state.lr23 ? 'flex-end': 'flex-start'}]}>

              { this.state.showDescFH ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL1}>
                <Text style={InspiracaoStyle.titleDesc} onPress={this._toggleModalFH}>Flashtração Hextec</Text>
                <Text style={InspiracaoStyle.previewDesc}>Enquanto o Flash estiver em Tempo de Recarga, ele...</Text>
                <Modal isVisible={this.state.isModalFH} onBackdropPress={() => this.setState({ isModalFH: false })}>
                  <View style={InspiracaoStyle.containerModal}>
                    <View style={InspiracaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalFH}>
                        <Icon style={{color:'#3e7cc2'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={InspiracaoStyle.titleModal}>Flashtração Hextec</Text>
                    <Text style={InspiracaoStyle.textModal}>Enquanto o Flash estiver em Tempo de Recarga, ele é substituído pelo Flash Hextec.
                      Flash Hextec: Canalize por 2s para se teletransportar para um novo local.
                      Tempo de Recarga: 20s. Entra em Tempo de Recarga por 10s quando você entra em combate contra um Campeão.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null }

                { this.state.showDescBM ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL1}>
                <Text style={InspiracaoStyle.titleDesc} onPress={this._toggleModalBM}>Calçados Mágicos</Text>
                <Text style={InspiracaoStyle.previewDesc}>Recebe Botas Levemente Mágicas gratuitamente aos 10 mins, mas...</Text>
                <Modal isVisible={this.state.isModalBM}  onBackdropPress={() => this.setState({ isModalBM: false })}>
                  <View style={InspiracaoStyle.containerModal}>
                    <View style={InspiracaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalBM}>
                        <Icon style={{color:'#3e7cc2'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={InspiracaoStyle.titleModal}>Calçados Mágicos</Text>
                    <Text style={InspiracaoStyle.textModal}>Recebe Botas Levemente Mágicas gratuitamente aos 10 mins, mas não é possível comprar botas antes disso. Para cada abate, você adquire as botas 30s mais cedo.
                      Botas Levemente Mágicas concedem um adicional de +10 de Velocidade de Movimento e é aprimorado por menos 50 de ouro.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null }

              { this.state.showDescSP ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL1}>
                <Text style={InspiracaoStyle.titleDesc} onPress={this._toggleModalSP}>Sincronia Perfeita</Text>
                <Text style={InspiracaoStyle.previewDesc}>Comece o jogo com um Cronômetro Iniciado que se...</Text>
                <Modal isVisible={this.state.isModalSP} onBackdropPress={() => this.setState({ isModalSP: false })}>
                  <View style={InspiracaoStyle.containerModal}>
                    <View style={InspiracaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalSP}>
                        <Icon style={{color:'#3e7cc2'}} name='md-close' />
                      </Button>
                    </View>
                  <Text style={InspiracaoStyle.titleModal}>Sincronia Perfeita</Text>
                  <Text style={InspiracaoStyle.textModal}>Comece o jogo com um Cronômetro Iniciado que se transforma em Cronômetro após 6 mins. Cronômetro tem um efeito de Estase de uso único.
                    Reduz o Tempo de Recarga de Ampulheta de Zhonya, Anjo Guardião e Placa Gargolítica em 15%.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null }

              { this.state.showDescMF ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL1}>
                <Text style={InspiracaoStyle.titleDesc} onPress={this._toggleModalMF}>Mercado do Futuro</Text>
                <Text style={InspiracaoStyle.previewDesc}>Você pode ficar em débito para comprar itens. A quantidade de...</Text>
                <Modal isVisible={this.state.isModalMF} onBackdropPress={() => this.setState({ isModalMF: false })}>
                  <View style={InspiracaoStyle.containerModal}>
                    <View style={InspiracaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalMF}>
                        <Icon style={{color:'#3e7cc2'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={InspiracaoStyle.titleModal}>Mercado do Futuro</Text>
                    <Text style={InspiracaoStyle.textModal}>Você pode ficar em débito para comprar itens. A quantidade de empréstimo aumenta com o tempo.
                      Taxa de empréstimo: 50 de ouro
                      Limite de débito: 150 + 5/min
                      (O débito só fica disponível a partir dos 2 minutos).</Text>
                  </View>
                </Modal>
              </Animatable.View> : null }

              { this.state.showDescPT ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL1}>
                <Text style={InspiracaoStyle.titleDesc} onPress={this._toggleModalPT}>Pulverizador de Tropas</Text>
                <Text style={InspiracaoStyle.previewDesc}>Comece o jogo com 6 unidades de Pulverizador de Tropas...</Text>
                <Modal isVisible={this.state.isModalPT} onBackdropPress={() => this.setState({ isModalPT: false })}>
                  <View style={InspiracaoStyle.containerModal}>
                    <View style={InspiracaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalPT}>
                        <Icon style={{color:'#3e7cc2'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={InspiracaoStyle.titleModal}>Pulverizador de Tropas</Text>
                    <Text style={InspiracaoStyle.textModal}>Comece o jogo com 6 unidades de Pulverizador de Tropas
                      que abatem e absorvem tropas nas rotas instantaneamente. Pulverizador de Tropas fica em Tempo de Recarga pelos primeiros 155s do jogo.
                      Absorver uma tropa aumenta permanentemente seu dano contra esse tipo de tropa em +4% e em +1% para cada abate adicional
                      desse mesmo tipo de tropa.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null }

              { this.state.showDescEB ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL1}>
                <Text style={InspiracaoStyle.titleDesc} onPress={this._toggleModalEB}>Entrega de Biscoitos</Text>
                <Text style={InspiracaoStyle.previewDesc}>Recebe um Biscoito da Eternidade da Determinação...</Text>
                <Modal isVisible={this.state.isModalEB} onBackdropPress={() => this.setState({ isModalEB: false })}>
                  <View style={InspiracaoStyle.containerModal}>
                    <View style={InspiracaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalEB}>
                        <Icon style={{color:'#3e7cc2'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={InspiracaoStyle.titleModal}>Entrega de Biscoitos</Text>
                    <Text style={InspiracaoStyle.textModal}>Recebe um Biscoito da Eternidade da Determinação Total a cada 3 mins
                      até o minuto 12. Biscoitos restauram 15% de Vida e Mana perdidas. Consumir Biscoitos aumenta sua Mana máxima em 40
                      de Mana permanentemente. Livre de Mana: Campeões sem Mana recuperam 20% da Vida perdida.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null}

          { this.state.showDescPC ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL1}>
              <Text style={InspiracaoStyle.titleDesc} onPress={this._toggleModalPC}>Perspicácia Cósmica</Text>
              <Text style={InspiracaoStyle.previewDesc}>+5% RTR, +5% de RTR máx, +5% de RTR dos Feitiços de...</Text>
              <Modal isVisible={this.state.isModalPC} onBackdropPress={() => this.setState({ isModalPC: false })}>
                <View style={InspiracaoStyle.containerModal}>
                  <View style={InspiracaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalPC}>
                      <Icon style={{color:'#3e7cc2'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={InspiracaoStyle.titleModal}>Perspicácia Cósmica</Text>
                <Text style={InspiracaoStyle.textModal}>+5% RTR,
                  +5% de RTR máx,
                  +5% de RTR dos Feitiços de Invocador e
                  +5% RTR de itens</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

            { this.state.showDescVA ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL1}>
              <Text style={InspiracaoStyle.titleDesc} onPress={this._toggleModalVA}>Velocidade de Aproximação</Text>
              <Text style={InspiracaoStyle.previewDesc}>Recebe 10% de Velocidade de Movimento em direção a...</Text>
              <Modal isVisible={this.state.isModalVA} onBackdropPress={() => this.setState({ isModalVA: false })}>
                <View style={InspiracaoStyle.containerModal}>
                  <View style={InspiracaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalVA}>
                      <Icon style={{color:'#3e7cc2'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={InspiracaoStyle.titleModal}>Velocidade de Aproximação</Text>
                <Text style={InspiracaoStyle.textModal}>Recebe 10% de Velocidade de Movimento em direção a Campeões aliados
                  com movimento debilitado ou Campeões inimigos que você debilitou.
                  Alcance: 1000.</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

            { this.state.showDescTDT ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL1}>
              <Text style={InspiracaoStyle.titleDesc} onPress={this._toggleModalTDT}>Tônico de Distorção no Tempo</Text>
              <Text style={InspiracaoStyle.previewDesc}>Suas poções, biscoitos e elixires duram 20% a mais e você ganha...</Text>
              <Modal isVisible={this.state.isModalTDT} onBackdropPress={() => this.setState({ isModalTDT: false })}>
                <View style={InspiracaoStyle.containerModal}>
                  <View style={InspiracaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalTDT}>
                      <Icon style={{color:'#3e7cc2'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={InspiracaoStyle.titleModal}>Tônico de Distorção no Tempo</Text>
                <Text style={InspiracaoStyle.textModal}>Suas poções, biscoitos e elixires duram 20% a mais e você ganha 5%
                  de Velocidade de Movimento quando estiver sob o efeito deles.</Text>
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
              placeholderTextColor="#3e7cc2"
              underlineColorAndroid = "transparent"
              onChangeText={data => this.setState({ namePageRune: data })}
              style={{color: '#3e7cc2', flex:1, backgroundColor:'#000016', borderWidth:2, borderColor:'rgba(62, 124, 194, 0.5)'}}/>

              <View style={{marginLeft:10, padding:10, backgroundColor:'#000016', borderWidth:2, borderColor:'rgba(62, 124, 194, 0.5)'}}>
                <TouchableOpacity style={{alignItems:'center'}} onPress={() => this.SalvarDominacao()}>
                  <Text style={{color:"#3e7cc2", textAlign:'center', }}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View>

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

InspiracaoSecundary.navigationOptions = {
  header: null,
}

export default InspiracaoSecundary;

