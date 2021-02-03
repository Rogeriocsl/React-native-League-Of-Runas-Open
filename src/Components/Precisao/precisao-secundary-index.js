import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { Container, Text, Button, Icon, Toast } from 'native-base';
import Modal from "react-native-modal";
import * as Animatable from 'react-native-animatable';
import firebase from 'react-native-firebase';
import { AdMobBanner } from 'react-native-admob';
import PrecisaoStyle from './precisao-secundary-style';
import { imgCE, imgTF, imgPE, imgLE, imgLT, imgLL, imgGM, imgDC, imgAM,
  precisaoBack, btnDF, btnPrecisaoFooter} from '../imageProvider';


const ref = firebase.firestore()

let runa1 = ''
let runa2 = ''
let runa3 = ''
let runa4 = ''
let runa5 = ''
let runa6 = ''
let namePageRun = '';
let paginaT = '';
let paginaSec = 'PRECISAO';

class PrecisaoSecundary extends Component {
  constructor(props){
    super(props);
    this.unsubscriber = null;
    this.state ={
      showDescs: false, showDescCE: false, showDescTF: false, showDescPE: false, showDescLE: false,
      showDescLT: false, showDescLL: false, showDescGM: false, showDescDC: false, showDescAM: false,
      isModalCE: false, isModalTF: false, isModalPE: false, isModalLE: false, isModalLT: false,
      isModalLL: false, isModalGM: false, isModalDC: false, isModalAM: false,
      showRunasPrecisao1: true, showRunasPrecisao2: false, buttonDefaultG1 : btnDF, buttonDefaultG2: btnDF,
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
  _toggleModalCE = () =>
    this.setState({ isModalCE: !this.state.isModalCE });

  _toggleModalTF = () =>
    this.setState({ isModalTF: !this.state.isModalTF });

  _toggleModalPE = () =>
    this.setState({ isModalPE: !this.state.isModalPE });

  _toggleModalLE = () =>
    this.setState({ isModalLE: !this.state.isModalLE });

  _toggleModalLT = () =>
    this.setState({ isModalLT: !this.state.isModalLT });

  _toggleModalLL = () =>
    this.setState({ isModalLL: !this.state.isModalLL });

  _toggleModalGM = () =>
    this.setState({ isModalGM: !this.state.isModalGM });

  _toggleModalDC = () =>
    this.setState({ isModalDC: !this.state.isModalDC });

  _toggleModalAM = () =>
    this.setState({ isModalAM: !this.state.isModalAM });
//#endregion Modal Dominção Function

//#region Dominação Secundary Runas Function
  FirstListRunes = () => {
    if(this.state.showRunasPrecisao1 == false & this.state.showRunasPrecisao2 == true)
      this.setState({showRunasPrecisao1: true, showRunasPrecisao2: false})
    else if(this.state.showRunasPrecisao1 == false & this.state.showRunasPrecisao2 == false){
      this.setState({showRunasPrecisao1 : true, showDescCE: false, showDescTF: false, showDescPE: false,
      showDescLE: false, showDescLT: false, showDescLL: false, showDescDC:false, showDescGM: false,
      showDescAM: false, showDescs: false})
    }else if (this.state.showRunasPrecisao1 == true){
      this.setState({showRunasPrecisao1: false})
    }
  }

  SecondListRunes = () => {
    if(this.state.showRunasPrecisao1 == false & this.state.showRunasPrecisao2 == true)
      this.setState({showRunasPrecisao1: true, showRunasPrecisao2: false})
    else if(this.state.showRunasPrecisao1 == true & this.state.showRunasPrecisao2 == false){
      this.setState({showRunasPrecisao1: false, showRunasPrecisao2: true})
    }
  }

  SelectRuneCE = () => {
    this.setState({buttonDefaultG1: imgCE, lr21: true, showRunasPrecisao2: true, showRunasPrecisao1: false,
      btn1: true, btn2: false, showDescCE: true})
      runa5 = 'CURA EXCESSIVA'
  }

  SelectRuneTF = () => {
    this.setState({buttonDefaultG1: imgTF, lr21: true, showRunasPrecisao2: true, showRunasPrecisao1: false,
      btn1: true, btn2: false, showDescTF:true})
      runa5 = 'TRIUNFO'
  }

  SelectRunePE = () => {
    this.setState({buttonDefaultG1: imgPE, lr21: true, showRunasPrecisao2: true, showRunasPrecisao1: false,
      btn1: true, btn2: false, showDescPE: true})
      runa5 = 'PRESENÇA DE ESPÍRITO'

  }

  SelectRuneLE = () => {
    this.setState({buttonDefaultG1: imgLE, lr22: true, showRunasPrecisao2: true, showRunasPrecisao1: false,
      btn1: true, btn2: false, showDescLE: true})
      runa5 = 'LENDA: ESPONTANEIDADE'

  }

  SelectRuneLT = () => {
    this.setState({buttonDefaultG1: imgLT, lr22: true, showRunasPrecisao2: true, showRunasPrecisao1: false,
      btn1: true, btn2: false, showDescLT: true})
      runa5 = 'LENDA: TENACIDADE'
  }

  SelectRuneLL = () => {
    this.setState({buttonDefaultG1: imgLL, lr22: true, showRunasPrecisao2: true, showRunasPrecisao1: false,
      btn1: true, btn2: false, showDescLL: true})
      runa5 = 'LENDA: LINHAGEM'

  }

  SelectRuneGM = () => {
    this.setState({buttonDefaultG1: imgGM, lr23: true, showRunasPrecisao2: true, showRunasPrecisao1: false,
      btn1: true, btn2: false, showDescGM: true})
      runa5 = 'GOLPE DE MISERICÓRDIA'

  }

  SelectRuneDC = () => {
    this.setState({buttonDefaultG1: imgDC, lr23: true, showRunasPrecisao2: true, showRunasPrecisao1: false,
      btn1: true, btn2: false, showDescDC: true})
      runa5 = 'DILACERAR'

  }

  SelectRuneAM = () => {
    this.setState({buttonDefaultG1: imgAM, lr23: true, showRunasPrecisao2: true, showRunasPrecisao1: false,
      btn1: true, btn2: false, showDescAM: true})
      runa5 = 'ATÉ A MORTE'

  }

  SelectRuneCE2 = () => {
    this.setState({buttonDefaultG2: imgCE, lr11: true, showRunasPrecisao1: false, showRunasPrecisao2: false,
      btn1: false, btn2: true, showDescs: true, showDescCE: true})
      runa6 = 'CURA EXCESSIVA'
  }

  SelectRuneTF2 = () => {
    this.setState({buttonDefaultG2: imgTF, lr11: true, showRunasPrecisao1: false, showRunasPrecisao2: false,
      btn1: false, btn2: true, showDescs: true, showDescTF: true})
      runa6 = 'TRIUNFO'
  }

  SelectRunePE2 = () => {
    this.setState({buttonDefaultG2: imgPE, lr11: true, showRunasPrecisao1: false, showRunasPrecisao2: false,
      btn1: false, btn2: true, showDescs: true, showDescPE:true})
      runa6 = 'PRESENÇA DE ESPÍRITO'
  }

  SelectRuneLE2 = () => {
    this.setState({buttonDefaultG2: imgLE, lr12: true, showRunasPrecisao1: false, showRunasPrecisao2: false, btn1: false,
      btn2: true, showDescs: true, showDescLE: true})
      runa6 = 'LENDA: ESPONTANEIDADE'
  }

  SelectRuneLT2 = () => {
    this.setState({buttonDefaultG2: imgLT, lr12: true, showRunasPrecisao1: false, showRunasPrecisao2: false, btn1: false,
      btn2: true, showDescs: true, showDescLT: true})
      runa6 = 'LENDA: TENACIDADE'
  }

  SelectRuneLL2 = () => {
    this.setState({buttonDefaultG2: imgLL, lr12: true, showRunasPrecisao1: false, showRunasPrecisao2: false, btn1: false,
      btn2: true, showDescs: true, showDescLL: true})
      runa6 = 'LENDA: LINHAGEM'
  }

  SelectRuneGM2 = () => {
    this.setState({buttonDefaultG2: imgGM, lr13: true, showRunasPrecisao1: false, showRunasPrecisao2: false, btn1: false,
      btn2: true, showDescs: true, showDescGM: true})
      runa6 = 'GOLPE DE MISERICÓRDIA'
  }

  SelectRuneDC2 = () => {
    this.setState({buttonDefaultG2: imgDC, lr13: true, showRunasPrecisao1: false, showRunasPrecisao2: false, btn1: false,
      btn2: true, showDescs: true, showDescDC: true})
      runa6 = 'DILACERAR'
  }

  SelectRuneAM2 = () => {
    this.setState({buttonDefaultG2: imgAM, lr13: true, showRunasPrecisao1: false, showRunasPrecisao2: false, btn1: false,
      btn2: true, showDescs: true, showDescAM: true})
      runa6 = 'ATÉ A MORTE'
  }

//#endregion Dominação Secundary Runas Function


SalvarDominacao = () => {
  namePageRun = this.state.namePageRune;
  const navigateTo = () => this.props.navigation.navigate('HomeCPRScreen');
  nick = this.state.user.uid
  runasRef = ref.collection(nick).doc(namePageRun);

  runasRef.get().then(function(doc) {
    if (doc.exists) {
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
    <ImageBackground style={PrecisaoStyle.imgBack} source={precisaoBack}>

    <Container style={PrecisaoStyle.backFeiticaria}>


        <View style={PrecisaoStyle.containerRunes}>
          <View style={PrecisaoStyle.containerHeaderRune}>
            <Image style={PrecisaoStyle.containerHeaderImg} source={btnPrecisaoFooter} />
            <View style={PrecisaoStyle.containerHeaderText}>
              <Text style={PrecisaoStyle.headerTitle}>Precisão</Text>
              <Text style={PrecisaoStyle.headerDesc}>Ataques aprimorados e sustentação de dano.</Text>
            </View>
          </View>
          <View style={PrecisaoStyle.containerRunesRow}>

            <Animatable.View style={{height:200}} animation='flipInY' duration={1200} delay={100}>

              <TouchableOpacity disabled={this.state.btn1} onPress={this.FirstListRunes}>
                <Image style={PrecisaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG1}/>
              </TouchableOpacity>
              <TouchableOpacity disabled={this.state.btn2} onPress={this.SecondListRunes}>
               <Image style={PrecisaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG2}/>
              </TouchableOpacity>

            </Animatable.View>

            { this.state.showRunasPrecisao1 ?

            <Animatable.View style={PrecisaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity disabled={this.state.lr11} onPress={this.SelectRuneCE}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr11 ? .3 : 1 }]}  source={imgCE}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr11} onPress={this.SelectRuneTF}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr11 ? .3 : 1 }]}  source={imgTF}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr11} onPress={this.SelectRunePE}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr11 ? .3 : 1 }]}  source={imgPE}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr12} onPress={this.SelectRuneLE}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr12 ? .3 : 1 }]}  source={imgLE}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr12} onPress={this.SelectRuneLT}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr12 ? .3 : 1 }]}  source={imgLT}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr12} onPress={this.SelectRuneLL}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr12 ? .3 : 1 }]}  source={imgLL}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr13} onPress={this.SelectRuneGM}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr13 ? .3 : 1 }]}  source={imgGM}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr13} onPress={this.SelectRuneDC}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr13 ? .3 : 1 }]}  source={imgDC}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr13} onPress={this.SelectRuneAM}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr13 ? .3 : 1 }]}  source={imgAM}/>
                </TouchableOpacity>
              </View>

            </Animatable.View> : null }


          { this.state.showRunasPrecisao2 ?

            <View style={PrecisaoStyle.containerRowButtons}>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity  disabled={this.state.lr21} onPress={this.SelectRuneCE2}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr21 ? .3 : 1 }]}  source={imgCE}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr21} onPress={this.SelectRuneTF2}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr21 ? .3 : 1 }]}  source={imgTF}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr21} onPress={this.SelectRunePE2}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr21 ? .3 : 1 }]}  source={imgPE}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr22} onPress={this.SelectRuneLE2}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr22 ? .3 : 1 }]}  source={imgLE}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr22} onPress={this.SelectRuneLT2}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr22 ? .3 : 1 }]}  source={imgLT}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr22} onPress={this.SelectRuneLL2}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr22 ? .3 : 1 }]}  source={imgLL}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr23} onPress={this.SelectRuneGM2}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr23 ? .3 : 1 }]}  source={imgGM}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr23} onPress={this.SelectRuneDC2}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr23 ? .3 : 1 }]}  source={imgDC}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr23} onPress={this.SelectRuneAM2}>
                  <Image style={[PrecisaoStyle.buttonImgSize, {opacity: this.state.lr23 ? .3 : 1 }]}  source={imgAM}/>
                </TouchableOpacity>
              </View>
            </View> : null }

            { this.state.showDescs ?
              <View style={[PrecisaoStyle.containerDesc, {flexDirection: this.state.lr23 ? 'column-reverse' : 'column', justifyContent: this.state.lr23 ? 'flex-end': 'flex-start'}]}>

            { this.state.showDescCE ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL1}>
                <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalCE}>Cura Excessiva</Text>
                <Text style={PrecisaoStyle.previewDesc}>A cura excedente sobre você é convertida em um escud...</Text>
                <Modal isVisible={this.state.isModalCE} onBackdropPress={() => this.setState({ isModalCE: false })}>
                  <View style={PrecisaoStyle.containerModal}>
                    <View style={PrecisaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalCE}>
                        <Icon style={{color:'#c8aa6e'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={PrecisaoStyle.titleModal}>Cura Excessiva</Text>
                    <Text style={PrecisaoStyle.textModal}>A cura excedente sobre você é convertida em um escudo de até 10% da sua Vida total + 10.
                    O escudo é gerado de 30% da sua cura excedente ou até 300% da cura excedente de aliados.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null }

                { this.state.showDescTF ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL1}>
                <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalTF}>Triunfo</Text>
                <Text style={PrecisaoStyle.previewDesc}>Abates restauram 15% da sua Vida perdida e concedem 25...</Text>
                <Modal isVisible={this.state.isModalTF}  onBackdropPress={() => this.setState({ isModalTF: false })}>
                  <View style={PrecisaoStyle.containerModal}>
                    <View style={PrecisaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalTF}>
                        <Icon style={{color:'#c8aa6e'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={PrecisaoStyle.titleModal}>Triunfo</Text>
                    <Text style={PrecisaoStyle.textModal}>Abates restauram 15% da sua Vida perdida e concedem 25 de ouro adicional.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null }

              { this.state.showDescPE ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL1}>
                <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalPE}>Presença de Espírito</Text>
                <Text style={PrecisaoStyle.previewDesc}>Por 5s após subir de nível ou realizar um abate...</Text>
                <Modal isVisible={this.state.isModalPE} onBackdropPress={() => this.setState({ isModalPE: false })}>
                  <View style={PrecisaoStyle.containerModal}>
                    <View style={PrecisaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalPE}>
                        <Icon style={{color:'#c8aa6e'}} name='md-close' />
                      </Button>
                    </View>
                  <Text style={PrecisaoStyle.titleModal}>Presença de Espírito</Text>
                  <Text style={PrecisaoStyle.textModal}>Por 5s após subir de nível ou realizar um abate, qualquer Mana gasta é totalmente restaurada.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null }


               { this.state.showDescLE ?

                  <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL1}>
                    <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalLE}>Lenda: Espontaneidade</Text>
                    <Text style={PrecisaoStyle.previewDesc}>Recebe 3% de Velocidade de Ataque mais um adicional de...</Text>
                    <Modal isVisible={this.state.isModalLE} onBackdropPress={() => this.setState({ isModalLE: false })}>
                      <View style={PrecisaoStyle.containerModal}>
                        <View style={PrecisaoStyle.buttonModal}>
                          <Button transparent onPress={this._toggleModalLE}>
                            <Icon style={{color:'#c8aa6e'}} name='md-close' />
                          </Button>
                        </View>
                        <Text style={PrecisaoStyle.titleModal}>Lenda: Espontaneidade</Text>
                        <Text style={PrecisaoStyle.textModal}>Recebe 3% de Velocidade de Ataque mais um adicional de 1.5% para cada acúmulo de Lenda (máx. de 10 acúmulos).
                        Ganha progresso em acúmulos de Lenda por cada abate de Campeão, monstro épico, monstro grande e tropa.</Text>
                      </View>
                    </Modal>
                  </Animatable.View> : null }

                  { this.state.showDescLT ?

                  <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL1}>
                    <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalLT}>Lenda: Tenacidade</Text>
                    <Text style={PrecisaoStyle.previewDesc}>Recebe 5% de Tenacidade mais um adicional de 1.5% por...</Text>
                    <Modal isVisible={this.state.isModalLT} onBackdropPress={() => this.setState({ isModalLT: false })}>
                      <View style={PrecisaoStyle.containerModal}>
                        <View style={PrecisaoStyle.buttonModal}>
                          <Button transparent onPress={this._toggleModalLT}>
                            <Icon style={{color:'#c8aa6e'}} name='md-close' />
                          </Button>
                        </View>
                        <Text style={PrecisaoStyle.titleModal}>Lenda: Tenacidade</Text>
                        <Text style={PrecisaoStyle.textModal}>Recebe 5% de Tenacidade mais um adicional de 1.5% por cada acúmulo de Lenda (máx. de 10 acúmulos).
                        Ganha progresso em acúmulos de Lenda por cada abate de Campeão, monstro épico, monstro grande e tropa.</Text>
                      </View>
                    </Modal>
                  </Animatable.View> : null }

                  { this.state.showDescLL ?

                  <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL1}>
                    <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalLL}>Lenda: Linhagem</Text>
                    <Text style={PrecisaoStyle.previewDesc}>Ganha 0.8% de Roubo de Vida por cada acúmulo de Lenda...</Text>
                    <Modal isVisible={this.state.isModalLL} onBackdropPress={() => this.setState({ isModalLL: false })}>
                      <View style={PrecisaoStyle.containerModal}>
                        <View style={PrecisaoStyle.buttonModal}>
                          <Button transparent onPress={this._toggleModalLL}>
                            <Icon style={{color:'#c8aa6e'}} name='md-close' />
                          </Button>
                        </View>
                        <Text style={PrecisaoStyle.titleModal}>Lenda: Linhagem</Text>
                        <Text style={PrecisaoStyle.textModal}>Ganha 0.8% de Roubo de Vida por cada acúmulo de Lenda (máx. de 10 acúmulos).
                        Ganha progresso em acúmulos de Lenda por cada abate de Campeão, monstro épico, monstro grande e tropa.</Text>
                      </View>
                    </Modal>
                  </Animatable.View> : null}

              { this.state.showDescGM ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL1}>
                  <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalGM}>Golpe de Misericórdia</Text>
                  <Text style={PrecisaoStyle.previewDesc}>Causa 10% a mais de dano a Campeões que estejam com Vi...</Text>
                  <Modal isVisible={this.state.isModalGM} onBackdropPress={() => this.setState({ isModalGM: false })}>
                    <View style={PrecisaoStyle.containerModal}>
                      <View style={PrecisaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalGM}>
                          <Icon style={{color:'#c8aa6e'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={PrecisaoStyle.titleModal}>Golpe de Misericórdia</Text>
                    <Text style={PrecisaoStyle.textModal}>Causa 10% a mais de dano a Campeões que estejam com Vida abaixo de 40%.
                      Além disso, abater Campeões concede um adicional adaptativo de 9 de Dano de Ataque ou 15 de Poder de Habilidade por 10s.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showDescDC ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL1}>
                  <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalDC}>Dilacerar</Text>
                  <Text style={PrecisaoStyle.previewDesc}>Causa até 4% a mais de dano a Campeões com 150 a...</Text>
                  <Modal isVisible={this.state.isModalDC} onBackdropPress={() => this.setState({ isModalDC: false })}>
                    <View style={PrecisaoStyle.containerModal}>
                      <View style={PrecisaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalDC}>
                          <Icon style={{color:'#c8aa6e'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={PrecisaoStyle.titleModal}>Dilacerar</Text>
                    <Text style={PrecisaoStyle.textModal}>Causa até 4% a mais de dano a Campeões com 150 a mais de Vida máxima do que você, aumentando para 10% com 2000 a mais de Vida máxima.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showDescAM ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL1}>
                  <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalAM}>Até a Morte</Text>
                  <Text style={PrecisaoStyle.previewDesc}>Causa de 5% a 12% a mais de dano a Campeões...</Text>
                  <Modal isVisible={this.state.isModalAM} onBackdropPress={() => this.setState({ isModalAM: false })}>
                    <View style={PrecisaoStyle.containerModal}>
                      <View style={PrecisaoStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalAM}>
                          <Icon style={{color:'#c8aa6e'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={PrecisaoStyle.titleModal}>Até a Morte</Text>
                    <Text style={PrecisaoStyle.textModal}>Causa de 5% a 12% a mais de dano a Campeões enquanto sua Vida estiver abaixo de 60%. O dano máximo é atingido com 30% de Vida.</Text>
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
              placeholderTextColor="#e8a157"
              underlineColorAndroid = "transparent"
              onChangeText={data => this.setState({ namePageRune: data })}
              style={{color: '#e8a157', flex:1, backgroundColor:'#000016', borderWidth:2, borderColor:'rgba(218, 165, 32, 0.5)'}}/>

              <View style={{marginLeft:10, padding:10, backgroundColor:'#000016', borderWidth:2, borderColor:'rgba(218, 165, 32, 0.5)'}}>
                <TouchableOpacity style={{alignItems:'center'}} onPress={() => this.SalvarDominacao()}>
                  <Text style={{color:"#e8a157", textAlign:'center', }}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View>

            <AdMobBanner
              adSize="banner"
              adUnitID="ca-app-pub-1942019449408433/2356063582"
              onAdFailedToLoad={error => console.error(error)}/>
            </View>

        </View>
    </Container>

      </ImageBackground>

    );
  }
}

PrecisaoSecundary.navigationOptions = {
  header: null,
}

export default PrecisaoSecundary;

