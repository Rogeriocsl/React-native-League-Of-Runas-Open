import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { Content, Text, Button, Icon, Toast } from 'native-base';
import Modal from "react-native-modal";
import * as Animatable from 'react-native-animatable';
import firebase from 'react-native-firebase';
import { AdMobBanner } from 'react-native-admob';
import FeiticariaStyle from './feiticaria-secundary-style';
import { imgOA, imgFF, imgMN, imgTD, imgCL, imgFA, imgCH, imgCSA, imgTC, btnFeiticariaFooter,
  feiticariaBack, btnDfF} from '../imageProvider';


const ref = firebase.firestore()
let runa1 = ''
let runa2 = ''
let runa3 = ''
let runa4 = ''
let runa5 = ''
let runa6 = ''
let namePageRun = '';
let paginaT = '';
let paginaSec = 'FEITICARIA';

class DeterminacaoSecundary extends Component {
  constructor(props){
    super(props);
    this.unsubscriber = null;
    this.state ={
      showDescs: false, showdescOA: false, showdescFF: false, showdescMN: false, showdescTD: false,
      showdescCL: false, showdescFA: false, showdescCH: false, showdescCSA: false, showdescTC: false,
      ismodalOA: false, ismodalFF: false, ismodalMN: false, ismodalTD: false, ismodalCL: false,
      ismodalFA: false, ismodalCH: false, ismodalCSA: false, ismodalTC: false,
      showRunasFeiticaria1: true, showRunasFeiticaria2: false, buttonDefaultG1 : btnDfF, buttonDefaultG2: btnDfF,
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
  _toggleModalOA = () =>
    this.setState({ ismodalOA: !this.state.ismodalOA });

  _toggleModalFF = () =>
    this.setState({ ismodalFF: !this.state.ismodalFF });

  _toggleModalMN = () =>
    this.setState({ ismodalMN: !this.state.ismodalMN });

  _toggleModalTD = () =>
    this.setState({ ismodalTD: !this.state.ismodalTD });

  _toggleModalCL = () =>
    this.setState({ ismodalCL: !this.state.ismodalCL });

  _toggleModalFA = () =>
    this.setState({ ismodalFA: !this.state.ismodalFA });

  _toggleModalCH = () =>
    this.setState({ ismodalCH: !this.state.ismodalCH });

  _toggleModalCSA = () =>
    this.setState({ ismodalCSA: !this.state.ismodalCSA });

  _toggleModalTC = () =>
    this.setState({ ismodalTC: !this.state.ismodalTC });
//#endregion Modal Dominção Function

//#region Dominação Secundary Runas Function
  FirstListRunes = () => {
    if(this.state.showRunasFeiticaria1 == false & this.state.showRunasFeiticaria2 == true)
      this.setState({showRunasFeiticaria1: true, showRunasFeiticaria2: false})
    else if(this.state.showRunasFeiticaria1 == false & this.state.showRunasFeiticaria2 == false){
      this.setState({showRunasFeiticaria1 : true, showdescOA: false, showdescFF: false, showdescMN: false,
      showdescTD: false, showdescCL: false, showdescFA: false, showdescCSA:false, showdescCH: false,
      showdescTC: false, showDescs: false })
    }else if (this.state.showRunasFeiticaria1 == true){
      this.setState({showRunasFeiticaria1: false})
    }
  }

  SecondListRunes = () => {
    if(this.state.showRunasFeiticaria1 == false & this.state.showRunasFeiticaria2 == true)
      this.setState({showRunasFeiticaria1: true, showRunasFeiticaria2: false})
    else if(this.state.showRunasFeiticaria1 == true & this.state.showRunasFeiticaria2 == false){
      this.setState({showRunasFeiticaria1: false, showRunasFeiticaria2: true})
    }
  }

  SelectRuneOA = () => {
    this.setState({buttonDefaultG1: imgOA, lr21: true, showRunasFeiticaria2: true, showRunasFeiticaria1: false,
      btn1: true, btn2: false, showdescOA: true})
      runa5 = 'ORBE ANULADOR'
  }

  SelectRuneFF = () => {
    this.setState({buttonDefaultG1: imgFF, lr21: true, showRunasFeiticaria2: true, showRunasFeiticaria1: false,
      btn1: true, btn2: false, showdescFF:true})
      runa5 = 'FAIXA DE FLUXO DE MANA'
  }

  SelectRuneMN = () => {
    this.setState({buttonDefaultG1: imgMN, lr21: true, showRunasFeiticaria2: true, showRunasFeiticaria1: false,
      btn1: true, btn2: false, showdescMN: true})
      runa5 = 'MANTO DE NIMBUS'

  }

  SelectRuneTD = () => {
    this.setState({buttonDefaultG1: imgTD, lr22: true, showRunasFeiticaria2: true, showRunasFeiticaria1: false,
      btn1: true, btn2: false, showdescTD: true})
      runa5 = 'TRANSCENDÊNCIA'

  }

  SelectRuneCL = () => {
    this.setState({buttonDefaultG1: imgCL, lr22: true, showRunasFeiticaria2: true, showRunasFeiticaria1: false,
      btn1: true, btn2: false, showdescCL: true})
      runa5 = 'CELERIDADE'
  }

  SelectRuneFA = () => {
    this.setState({buttonDefaultG1: imgFA, lr22: true, showRunasFeiticaria2: true, showRunasFeiticaria1: false,
      btn1: true, btn2: false, showdescFA: true})
      runa5 = 'FOCO ABSOLUTO'

  }

  SelectRuneCH = () => {
    this.setState({buttonDefaultG1: imgCH, lr23: true, showRunasFeiticaria2: true, showRunasFeiticaria1: false,
      btn1: true, btn2: false, showdescCH: true})
      runa5 = 'CHAMUSCAR'

  }

  SelectRuneCSA = () => {
    this.setState({buttonDefaultG1: imgCSA, lr23: true, showRunasFeiticaria2: true, showRunasFeiticaria1: false,
      btn1: true, btn2: false, showdescCSA: true})
      runa5 = 'CAMINHAR SOB AS ÁGUAS'

  }

  SelectRuneTC = () => {
    this.setState({buttonDefaultG1: imgTC, lr23: true, showRunasFeiticaria2: true, showRunasFeiticaria1: false,
      btn1: true, btn2: false, showdescTC: true})
      runa5 = 'TEMPESTADE CRESCENTE'

  }

  SelectRuneOA2 = () => {
    this.setState({buttonDefaultG2: imgOA, lr11: true, showRunasFeiticaria1: false, showRunasFeiticaria2: false,
      btn1: false, btn2: true, showDescs: true, showdescOA: true})
      runa6 = 'ORBE ANULADOR'
  }

  SelectRuneFF2 = () => {
    this.setState({buttonDefaultG2: imgFF, lr11: true, showRunasFeiticaria1: false, showRunasFeiticaria2: false,
      btn1: false, btn2: true, showDescs: true, showdescFF: true})
      runa6 = 'FAIXA DE FLUXO DE MANA'
  }

  SelectRuneMN2 = () => {
    this.setState({buttonDefaultG2: imgMN, lr11: true, showRunasFeiticaria1: false, showRunasFeiticaria2: false,
      btn1: false, btn2: true, showDescs: true, showdescMN:true})
      runa6 = 'MANTO DE NIMBUS'
  }

  SelectRuneTD2 = () => {
    this.setState({buttonDefaultG2: imgTD, lr12: true, showRunasFeiticaria1: false, showRunasFeiticaria2: false, btn1: false,
      btn2: true, showDescs: true, showdescTD: true})
      runa6 = 'TRANSCENDÊNCIA'
  }

  SelectRuneCL2 = () => {
    this.setState({buttonDefaultG2: imgCL, lr12: true, showRunasFeiticaria1: false, showRunasFeiticaria2: false, btn1: false,
      btn2: true, showDescs: true, showdescCL: true})
      runa6 = 'VENTOS REVIGORANTES'
  }

  SelectRuneFA2 = () => {
    this.setState({buttonDefaultG2: imgFA, lr12: true, showRunasFeiticaria1: false, showRunasFeiticaria2: false, btn1: false,
      btn2: true, showDescs: true, showdescFA: true})
      runa6 = 'FOCO ABSOLUTO'
  }

  SelectRuneCH2 = () => {
    this.setState({buttonDefaultG2: imgCH, lr13: true, showRunasFeiticaria1: false, showRunasFeiticaria2: false, btn1: false,
      btn2: true, showDescs: true, showdescCH: true})
      runa6 = 'CHAMUSCAR'
  }

  SelectRuneCSA2 = () => {
    this.setState({buttonDefaultG2: imgCSA, lr13: true, showRunasFeiticaria1: false, showRunasFeiticaria2: false, btn1: false,
      btn2: true, showDescs: true, showdescCSA: true})
      runa6 = 'CAMINHAR SOB AS ÁGUAS'
  }

  SelectRuneTC2 = () => {
    this.setState({buttonDefaultG2: imgTC, lr13: true, showRunasFeiticaria1: false, showRunasFeiticaria2: false, btn1: false,
      btn2: true, showDescs: true, showdescTC: true})
      runa6 = 'TEMPESTADE CRESCENTE'
      console.log('descricao',this.state.showDescs)

  }

//#endregion Dominação Secundary Runas Function


SalvarFeiticaria = () => {
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
        Duration: 2250
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
    <ImageBackground style={FeiticariaStyle.imgBack} source={feiticariaBack}>
    <Content style={FeiticariaStyle.backFeiticaria}>


        <View style={FeiticariaStyle.containerRunes}>
          <View style={FeiticariaStyle.containerHeaderRune}>
            <Image style={FeiticariaStyle.containerHeaderImg} source={btnFeiticariaFooter} />
            <View style={FeiticariaStyle.containerHeaderText}>
              <Text style={FeiticariaStyle.headerTitle}>Feiticaria</Text>
              <Text style={FeiticariaStyle.headerDesc}>Durabilidade e controle de grupo.</Text>
            </View>
          </View>
          <View style={FeiticariaStyle.containerRunesRow}>

            <Animatable.View style={{height:200}} animation='flipInY' duration={1200} delay={100}>

              <TouchableOpacity disabled={this.state.btn1} onPress={this.FirstListRunes}>
                <Image style={FeiticariaStyle.buttonImgDefault4}  source={this.state.buttonDefaultG1}/>
              </TouchableOpacity>
              <TouchableOpacity disabled={this.state.btn2} onPress={this.SecondListRunes}>
               <Image style={FeiticariaStyle.buttonImgDefault}  source={this.state.buttonDefaultG2}/>
              </TouchableOpacity>

            </Animatable.View>

            { this.state.showRunasFeiticaria1 ?

            <Animatable.View style={FeiticariaStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity disabled={this.state.lr11} onPress={this.SelectRuneOA}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr11 ? .3 : 1 }]}  source={imgOA}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr11} onPress={this.SelectRuneFF}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr11 ? .3 : 1 }]}  source={imgFF}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr11} onPress={this.SelectRuneMN}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr11 ? .3 : 1 }]}  source={imgMN}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr12} onPress={this.SelectRuneTD}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr12 ? .3 : 1 }]}  source={imgTD}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr12} onPress={this.SelectRuneCL}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr12 ? .3 : 1 }]}  source={imgCL}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr12} onPress={this.SelectRuneFA}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr12 ? .3 : 1 }]}  source={imgFA}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr13} onPress={this.SelectRuneCH}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr13 ? .3 : 1 }]}  source={imgCH}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr13} onPress={this.SelectRuneCSA}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr13 ? .3 : 1 }]}  source={imgCSA}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr13} onPress={this.SelectRuneTC}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr13 ? .3 : 1 }]}  source={imgTC}/>
                </TouchableOpacity>
              </View>

            </Animatable.View> : null }


          { this.state.showRunasFeiticaria2 ?

            <View style={FeiticariaStyle.containerRowButtons}>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity  disabled={this.state.lr21} onPress={this.SelectRuneOA2}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr21 ? .3 : 1 }]}  source={imgOA}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr21} onPress={this.SelectRuneFF2}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr21 ? .3 : 1 }]}  source={imgFF}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr21} onPress={this.SelectRuneMN2}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr21 ? .3 : 1 }]}  source={imgMN}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr22} onPress={this.SelectRuneTD2}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr22 ? .3 : 1 }]}  source={imgTD}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr22} onPress={this.SelectRuneCL2}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr22 ? .3 : 1 }]}  source={imgCL}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr22} onPress={this.SelectRuneFA2}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr22 ? .3 : 1 }]}  source={imgFA}/>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity disabled={this.state.lr23} onPress={this.SelectRuneCH2}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr23 ? .3 : 1 }]}  source={imgCH}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr23} onPress={this.SelectRuneCSA2}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr23 ? .3 : 1 }]}  source={imgCSA}/>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.lr23} onPress={this.SelectRuneTC2}>
                  <Image style={[FeiticariaStyle.buttonImgSize, {opacity: this.state.lr23 ? .3 : 1 }]}  source={imgTC}/>
                </TouchableOpacity>
              </View>
            </View> : null }

            { this.state.showDescs ?
              <View style={[FeiticariaStyle.containerDesc, {flexDirection: this.state.lr23 ? 'column-reverse' : 'column', justifyContent: this.state.lr23 ? 'flex-end': 'flex-start'}]}>

              { this.state.showdescOA ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL1}>
                  <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalOA}>Orbe AnuladoR</Text>
                  <Text style={FeiticariaStyle.previewDesc}>Ao receber dano mágico que reduziria sua vida a menos...</Text>
                  <Modal isVisible={this.state.ismodalOA} onBackdropPress={() => this.setState({ ismodalOA: false })}>
                    <View style={FeiticariaStyle.containerModal}>
                      <View style={FeiticariaStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalOA}>
                          <Icon style={{color:'#006df0'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={FeiticariaStyle.titleModal}>Orbe Anulador</Text>
                    <Text style={FeiticariaStyle.textModal}>Ao receber dano mágico que reduziria sua vida a menos de 30%, você
                      ganha um escudo que absorve 40 - 120 de dano mágico com base no nível (+0.10 de pdh e +0.15 de dda adicional)
                      por 4s. tempo de recarga: 60s</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescFF ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL1}>
                  <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalFF}>Faixa de fluxo de mana</Text>
                  <Text style={FeiticariaStyle.previewDesc}>A cada 60s, a próxima habilidade utilizada tem seu custo...</Text>
                  <Modal isVisible={this.state.ismodalFF} onBackdropPress={() => this.setState({ ismodalFF: false })}>
                    <View style={FeiticariaStyle.containerModal}>
                      <View style={FeiticariaStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalFF}>
                          <Icon style={{color:'#006df0'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={FeiticariaStyle.titleModal}>Faixa de fluxo de mana</Text>
                    <Text style={FeiticariaStyle.textModal}>A cada 60s, a próxima habilidade utilizada tem seu custo de mana ou de
                      energia recuperado e restaura 8% da sua mana ou energia perdida.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescMN ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL1}>
                  <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalMN}>Manto de nimbus</Text>
                  <Text style={FeiticariaStyle.previewDesc}>Logo após a conjuração da sua ultimate, concede...</Text>
                  <Modal isVisible={this.state.ismodalMN} onBackdropPress={() => this.setState({ ismodalMN: false })}>
                    <View style={FeiticariaStyle.containerModal}>
                      <View style={FeiticariaStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalMN}>
                          <Icon style={{color:'#006df0'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={FeiticariaStyle.titleModal}>Manto de nimbus</Text>
                    <Text style={FeiticariaStyle.textModal}>Logo após a conjuração da sua ultimate, concede um aumento de velocidade de
                      movimento que decai gradualmente, dura 2.5s e permite atravessar unidades. aumento: 100 de velocidade de movimento
                      tempo de recarga: 60s, diminuído com a redução de tempo de recarga.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescTD ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL1}>
                  <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalTD}>Transcendência</Text>
                  <Text style={FeiticariaStyle.previewDesc}>Recebe 10% de redução do tempo de recarga quando atinge...</Text>
                  <Modal isVisible={this.state.ismodalTD} onBackdropPress={() => this.setState({ ismodalTD: false })}>
                    <View style={FeiticariaStyle.containerModal}>
                      <View style={FeiticariaStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalTD}>
                          <Icon style={{color:'#006df0'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={FeiticariaStyle.titleModal}>Transcendência</Text>
                    <Text style={FeiticariaStyle.textModal}>Recebe 10% de redução do tempo de recarga quando atinge o nível 10.
                      cada percentual de rtr acima do limite de rtr é convertido em um adicional adaptativo de 1.2 de dano de
                      ataque ou 2 de poder de habilidade.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescCL ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL1}>
                  <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalCL}>Celeridade</Text>
                  <Text style={FeiticariaStyle.previewDesc}>Recebe mais 4% de velocidade de movimento e adiciona 8%...</Text>
                  <Modal isVisible={this.state.ismodalCL} onBackdropPress={() => this.setState({ ismodalCL: false })}>
                    <View style={FeiticariaStyle.containerModal}>
                      <View style={FeiticariaStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalCL}>
                          <Icon style={{color:'#006df0'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={FeiticariaStyle.titleModal}>Celeridade</Text>
                    <Text style={FeiticariaStyle.textModal}>Recebe mais 4% de velocidade de movimento e adiciona 8%
                      da sua velocidade de movimento adicional ao seu pdh ou dda adaptativos (com base no nível).</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescFA ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL1}>
                  <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalFA}>Foco absoluto</Text>
                  <Text style={FeiticariaStyle.previewDesc}>Acima de 70% de vida, recebe um adicional adaptativo de...</Text>
                  <Modal isVisible={this.state.ismodalFA} onBackdropPress={() => this.setState({ ismodalFA: false })}>
                    <View style={FeiticariaStyle.containerModal}>
                      <View style={FeiticariaStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalFA}>
                          <Icon style={{color:'#006df0'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={FeiticariaStyle.titleModal}>Foco absoluto</Text>
                    <Text style={FeiticariaStyle.textModal}>Acima de 70% de vida, recebe um adicional adaptativo de
                      até 24 de dano de ataque ou 40 de poder de habilidade (com base no nível).</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescCH ? <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL1}>
                  <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalCH}>Chamuscar</Text>
                  <Text style={FeiticariaStyle.previewDesc}>A próxima habilidade que atingir o alvo ateia fogo a...</Text>
                  <Modal isVisible={this.state.ismodalCH} onBackdropPress={() => this.setState({ ismodalCH: false })}>
                    <View style={FeiticariaStyle.containerModal}>
                      <View style={FeiticariaStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalCH}>
                          <Icon style={{color:'#006df0'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={FeiticariaStyle.titleModal}>Chamuscar</Text>
                    <Text style={FeiticariaStyle.textModal}>A próxima habilidade que atingir o alvo ateia fogo a campeões, causando de 30 a 60 de dano mágico
                      adicional com base no nível após 1s. tempo de recarga: 20 s</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescCSA ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL1}>
                  <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalCSA}>Caminhar sob as águas</Text>
                  <Text style={FeiticariaStyle.previewDesc}>Recebe 25 de velocidade de movimento e um adicional adaptativo...</Text>
                  <Modal isVisible={this.state.ismodalCSA} onBackdropPress={() => this.setState({ ismodalCSA: false })}>
                    <View style={FeiticariaStyle.containerModal}>
                      <View style={FeiticariaStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalCSA}>
                          <Icon style={{color:'#006df0'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={FeiticariaStyle.titleModal}>Caminhar sob as águas</Text>
                    <Text style={FeiticariaStyle.textModal}>Recebe 25 de velocidade de movimento e um adicional adaptativo de até 18 de dano de
                      ataque ou 30 de poder de habilidade (com base no nível) enquanto estiver no rio.</Text>
                    </View>
                  </Modal>
                </Animatable.View> : null }

                { this.state.showdescTC ?

                <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL1}>
                  <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalTC}>Tempestade Crescente</Text>
                  <Text style={FeiticariaStyle.previewDesc}>A cada 10 mins, recebe pdh ou dda adaptativos....</Text>
                  <Modal isVisible={this.state.ismodalTC} onBackdropPress={() => this.setState({ ismodalTC: false })}>
                    <View style={FeiticariaStyle.containerModal}>
                      <View style={FeiticariaStyle.buttonModal}>
                        <Button transparent onPress={this._toggleModalTC}>
                          <Icon style={{color:'#006df0'}} name='md-close' />
                        </Button>
                      </View>
                    <Text style={FeiticariaStyle.titleModal}>Tempestade Crescente</Text>
                    <Text style={FeiticariaStyle.textModal}>A cada 10 mins, recebe pdh ou dda adaptativos.
                      10 mins: + 8 de pdh ou 5 de dda
                      20 mins: + 24 de pdh ou 14 de dda
                      30 mins: + 48 de pdh ou 29 de dda
                      40 mins: + 80 de pdh ou 48 de dda
                      50 mins: + 120 de pdh ou 72 de dda
                      60 mins: + 168 de pdh ou 101 de dda
                      etc...</Text>
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
              placeholderTextColor="#006df0"
              underlineColorAndroid = "transparent"
              onChangeText={data => this.setState({ namePageRune: data })}
              style={{color: '#006df0', flex:1, backgroundColor:'#000016', borderWidth:2, borderColor:'rgba(0, 109, 240, 0.5)'}}/>

              <View style={{marginLeft:10, padding:10, backgroundColor:'#000016', borderWidth:2, borderColor:'rgba(0, 109, 240, 0.5)'}}>
                <TouchableOpacity style={{alignItems:'center'}} onPress={() => this.SalvarFeiticaria()}>
                  <Text style={{color:"#006df0", textAlign:'center', }}>Salvar</Text>
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

DeterminacaoSecundary.navigationOptions = {
  header: null,
}

export default DeterminacaoSecundary;

