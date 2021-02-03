import React, {Component} from 'react';
import { View,  Image,  TouchableOpacity,  ImageBackground} from 'react-native';
import { Content, Text, Button, Footer, FooterTab, Icon, Toast } from 'native-base';
import * as Animatable from 'react-native-animatable';
import Modal from "react-native-modal";
import DeterminacaoStyle from './determinacao-style';
import { AdMobBanner } from 'react-native-admob';
import {  btnDfDE, imgAMV, imgPCH, imgGP, imgDM, imgFV,
  imgOS, imgCD, imgVR, imgCT,  imgCEX, imgRV, imgIB, btnInspiracaoFooter, btnFeiticariaFooter,
  btnDeterminacaoFooter,  btnDominacaoFooter, determinacaoBack, btnPrecisaoFooter
} from '../imageProvider';

class Determinacao extends Component {

  constructor(props){
    super(props);
    this.state ={
      verifyDesc:false, verifyDescL2:false, verifyDescL3:false, verifyDescL4:false,
      showDescAMV:false, showDescPCH:false, showDescGP:false, showDescDM:false, showDescFV:false, showDescOS:false,
      showDescCD:false, showDescVR:false, showDescCT:false, showDescCEX:false, showDescRV:false, showDescIB:false,
      isModalAMV: false, isModalPCH: false, isModalGP: false, isModalDM: false,  isModalFV: false, isModalOS: false,
      isModalCD: false, isModalVR: false, isModalCT: false, isModalCEX: false, isModalRV: false, isModalIB: false,
      showRunasDeterminacaoList1:true, showRunasDeterminacaoList2: false, showRunasDeterminacaoList3: false,
      showRunasDeterminacaoList4: false, buttonDefaultG1 : btnDfDE, buttonDefaultG2 : btnDfDE, buttonDefaultG3 : btnDfDE,
      buttonDefaultG4 : btnDfDE, RunaDeterminacao1: '', RunaDeterminacao2: '', RunaDeterminacao3: '', RunaDeterminacao4: '',
      pagType: 'Determinacao'
    }
}

//#region Modal Function
  _toggleModalAMV = () =>
    this.setState({ isModalAMV: !this.state.isModalAMV });

  _toggleModalPCH = () =>
    this.setState({ isModalPCH: !this.state.isModalPCH });

  _toggleModalGP = () =>
    this.setState({ isModalGP: !this.state.isModalGP });

  _toggleModalDM = () =>
    this.setState({ isModalDM: !this.state.isModalDM });

  _toggleModalFV = () =>
    this.setState({ isModalFV: !this.state.isModalFV });

  _toggleModalOS = () =>
    this.setState({ isModalOS: !this.state.isModalOS });

  _toggleModalCD = () =>
    this.setState({ isModalCD: !this.state.isModalCD });

  _toggleModalVR = () =>
    this.setState({ isModalVR: !this.state.isModalVR });

  _toggleModalCT = () =>
    this.setState({ isModalCT: !this.state.isModalCT });

  _toggleModalCEX = () =>
    this.setState({ isModalCEX: !this.state.isModalCEX });

  _toggleModalRV = () =>
    this.setState({ isModalRV: !this.state.isModalRV });

  _toggleModalIB = () =>
    this.setState({ isModalIB: !this.state.isModalIB });

//#endregion end Modal Function

//#region Runas Function
  FirstListRunes = () => {
    if(this.state.showRunasDeterminacaoList1 == true){
      this.setState({showRunasDeterminacaoList1: false, showDescAMV: false, showDescPCH: false, showDescGP: false})
    }else{
      this.setState({showRunasDeterminacaoList1: true, showRunasDeterminacaoList2: false, showDescAMV: false, showDescPCH: false, showDescGP: false})
    }
  }

  SelectRuneAMV = () => {
    if(this.state.verifyDescL2 == false){
    this.setState({showRunasDeterminacaoList1: false,
      showRunasDeterminacaoList2:true,
      buttonDefaultG1: imgAMV, RunaDeterminacao1: 'APERTO DOS MORTOS-VIVOS' })
    }else{
      this.setState({showRunasDeterminacaoList1: false,
      buttonDefaultG1: imgAMV, RunaDeterminacao1: 'APERTO DOS MORTOS-VIVOS'})
    }if(this.showDescAMV == true){
      this.setState({showDescAMV:false})
    }else{
      this.setState({showDescAMV:true})
      }
    }

  SelectRunePCH = () => {
    if(this.state.verifyDescL2 == false){
    this.setState({showRunasDeterminacaoList1: false,
      showRunasDeterminacaoList2:true,
      buttonDefaultG1: imgPCH, RunaDeterminacao1: 'PÓS-CHOQUE'})
    }else{
      this.setState({showRunasDeterminacaoList1: false,
      buttonDefaultG1: imgPCH, RunaDeterminacao1: 'PÓS-CHOQUE'})
    }if(this.showDescPCH == true){
      this.setState({showDescPCH:false})
    }else{
      this.setState({showDescPCH:true})
      }
    }

  SelectRuneGP = () => {
    if(this.state.verifyDescL2 == false){
      this.setState({showRunasDeterminacaoList1: false,
        showRunasDeterminacaoList2:true,
        buttonDefaultG1: imgGP, RunaDeterminacao1: 'GUARDIÃO'})
      }else{
        this.setState({showRunasDeterminacaoList1: false,
        buttonDefaultG1: imgGP, RunaDeterminacao1: 'GUARDIÃO'})
      }if(this.showDescGP == true){
        this.setState({showDescGP:false})
      }else{
        this.setState({showDescGP:true})
        }
  }

  SecondListRunes = () => {
    if(this.state.showRunasDeterminacaoList2 == true){
      this.setState({showRunasDeterminacaoList2: false, showDescDM: false, showDescFV: false, showDescOS: false})
    }else{
      this.setState({showRunasDeterminacaoList2: true, showRunasDeterminacaoList3: false, showDescDM: false, showDescFV: false, showDescOS: false})
    }
  }

  SelectRuneDM = () => {
    if(this.state.verifyDescL3 == false){
      this.setState({showRunasDeterminacaoList2: false,
        showRunasDeterminacaoList3:true,
        buttonDefaultG2: imgDM, RunaDeterminacao2: 'DEMOLIR'})
      }else{
        this.setState({showRunasDeterminacaoList2: false,
          buttonDefaultG2: imgDM, RunaDeterminacao2: 'DEMOLIR'})
      }if(this.showDescDM == true){
        this.setState({showDescDM:false})
      }else{
        this.setState({showDescDM:true, verifyDescL2:true})
      }
  }

  SelectRuneFV = () => {
    if(this.state.verifyDescL3 == false){
      this.setState({showRunasDeterminacaoList2: false,
        showRunasDeterminacaoList3:true,
        buttonDefaultG2: imgFV, RunaDeterminacao2: 'FONTE DA VIDA'})
      }else{
        this.setState({showRunasDeterminacaoList2: false,
          buttonDefaultG2: imgFV, RunaDeterminacao2: 'FONTE DA VIDA'})
      }if(this.showDescFV == true){
        this.setState({showDescFV:false})
      }else{
        this.setState({showDescFV:true, verifyDescL2: true})
      }
  }

  SelectRuneOS = () => {
    if(this.state.verifyDescL3 == false){
      this.setState({showRunasDeterminacaoList2: false,
        showRunasDeterminacaoList3:true,
        buttonDefaultG2: imgOS, RunaDeterminacao2: 'OSSO REVESTIDO'})
      }else{
        this.setState({showRunasDeterminacaoList2: false,
          buttonDefaultG2: imgOS, RunaDeterminacao2: 'OSSO REVESTIDO'})
      }if(this.showDescOS == true){
        this.setState({showDescOS:false})
      }else{
        this.setState({showDescOS:true, verifyDescL2: true})
      }
  }

  ThirdListRunes = () => {
    if(this.state.showRunasDeterminacaoList3 == true){
      this.setState({showRunasDeterminacaoList3: false, showDescCD: false, showDescVR: false, showDescCT: false})
    }else{
      this.setState({showRunasDeterminacaoList3: true, showRunasDeterminacaoList4:false,  showDescCD: false, showDescVR: false, showDescCT: false})
    }
  }

  SelectRuneCD = () => {
    if(this.state.verifyDescL4 == false){
      this.setState({showRunasDeterminacaoList3: false,
        showRunasDeterminacaoList4:true,
        buttonDefaultG3: imgCD, RunaDeterminacao3: 'CONDICIONAMENTO'})
      }else{
        this.setState({showRunasDeterminacaoList3: false,
          buttonDefaultG3: imgCD, RunaDeterminacao3: 'CONDICIONAMENTO'})
      }if(this.showDescCD == true){
        this.setState({showDescCD:false})
      }else{
        this.setState({showDescCD:true, verifyDescL3:true })
      }
  }

  SelectRuneVR = () => {
    if(this.state.verifyDescL4 == false){
      this.setState({showRunasDeterminacaoList3: false,
        showRunasDeterminacaoList4:true,
        buttonDefaultG3: imgVR, RunaDeterminacao3: 'VENTOS REVIGORANTES'})
      }else{
        this.setState({showRunasDeterminacaoList3: false,
          buttonDefaultG3: imgVR, RunaDeterminacao3: 'VENTOS REVIGORANTES'})
      }if(this.showDescVR == true){
        this.setState({showDescVR:false})
      }else{
        this.setState({showDescVR:true, verifyDescL3:true })
      }
  }

  SelectRuneCT = () => {
    if(this.state.verifyDescL4 == false){
      this.setState({showRunasDeterminacaoList3: false,
        showRunasDeterminacaoList4:true,
        buttonDefaultG3: imgCT, RunaDeterminacao3: 'CRISÁLIDA'})
      }else{
        this.setState({showRunasDeterminacaoList3: false,
          buttonDefaultG3: imgCT, RunaDeterminacao3: 'CRISÁLIDA'})
      }if(this.showDescCT == true){
        this.setState({showDescCT:false})
      }else{
        this.setState({showDescCT:true, verifyDescL3:true})
      }
  }

  FourthListRunes = () => {
    if(this.state.showRunasDeterminacaoList4 == true){
      this.setState({showRunasDeterminacaoList4: false,  showDescCEX: false, showDescRV: false, showDescIB: false})
    }else{
      this.setState({showRunasDeterminacaoList4: true,   showDescCEX: false, showDescRV: false, showDescIB: false})
    }
  }

  SelectRuneCEX = () => {
    this.setState({showRunasDeterminacaoList4: false,
      buttonDefaultG4: imgCEX, RunaDeterminacao4: 'CRESCIMENTO EXCESSIVO'})
    if(this.showDescCEX == true){
      this.setState({showDescCEX:false})
    }else{
      this.setState({showDescCEX:true, verifyDescL4:true })
    }
  }

  SelectRuneRV = () => {
    this.setState({showRunasDeterminacaoList4: false,
      buttonDefaultG4: imgRV, RunaDeterminacao4: 'REVITALIZAR'})
    if(this.showDescRV == true){
      this.setState({showDescRV:false})
    }else{
      this.setState({showDescRV:true, verifyDescL4:true })
    }
  }

  SelectRuneIB = () => {
    this.setState({showRunasDeterminacaoList4: false,
      buttonDefaultG4: imgIB, RunaDeterminacao4: 'INABALÁVEL'})
    if(this.showDescIB == true){
      this.setState({showDescIB:false})
    }else{
      this.setState({showDescIB:true, verifyDescL4:true })
    }
  }
//#endregion end Runas Function

//#region Runas Secundary Function
sendDataPrecisaoSec = () => {
  if(this.state.RunaDeterminacao1 === '' | this.state.RunaDeterminacao2 === '' | this.state.RunaDeterminacao3  === '' | this.state.RunaDeterminacao4 === ''){
    Toast.show({
      text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
      position: 'top',
      type: 'danger',
      duration: 2250
    })
  }else{
    this.props.navigation.navigate('PrecisaoSecScreen', {
      RunaSelect1: this.state.RunaDeterminacao1,
      RunaSelect2: this.state.RunaDeterminacao2,
      RunaSelect3: this.state.RunaDeterminacao3,
      RunaSelect4: this.state.RunaDeterminacao4,
      RunaType: this.state.pagType,
    });
    this.props.navigation.navigate('PrecisaoSecScreen')
  }
}

sendDataFeiticariaSec = () => {
  if(this.state.RunaDeterminacao1 === '' | this.state.RunaDeterminacao2 === '' | this.state.RunaDeterminacao3  === '' | this.state.RunaDeterminacao4 === ''){
    Toast.show({
      text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
      position: 'top',
      type: 'danger',
      duration: 2250
    })
  }else{
    this.props.navigation.navigate('FeiticariaSecScreen', {
      RunaSelect1: this.state.RunaDeterminacao1,
      RunaSelect2: this.state.RunaDeterminacao2,
      RunaSelect3: this.state.RunaDeterminacao3,
      RunaSelect4: this.state.RunaDeterminacao4,
      RunaType: this.state.pagType,
    });
    this.props.navigation.navigate('FeiticariaSecScreen')
  }
}

sendDataDominacaoSec= () => {
  if(this.state.RunaDeterminacao1 === '' | this.state.RunaDeterminacao2 === '' | this.state.RunaDeterminacao3  === '' | this.state.RunaDeterminacao4 === ''){
    Toast.show({
      text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
      position: 'top',
      type: 'danger',
      duration: 2250
    })
  }else{
    this.props.navigation.navigate('DominacaoSecScreen', {
      RunaSelect1: this.state.RunaDeterminacao1,
      RunaSelect2: this.state.RunaDeterminacao2,
      RunaSelect3: this.state.RunaDeterminacao3,
      RunaSelect4: this.state.RunaDeterminacao4,
      RunaType: this.state.pagType,
    });
    this.props.navigation.navigate('DominacaoSecScreen')
  }
}

sendDataInspiracaoSec = () => {
  if(this.state.RunaDeterminacao1 === '' | this.state.RunaDeterminacao2 === '' | this.state.RunaDeterminacao3  === '' | this.state.RunaDeterminacao4 === ''){
    Toast.show({
      text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
      position: 'top',
      type: 'danger',
      duration: 2250
    })
  }else{
    this.props.navigation.navigate('InspiracaoSecScreen', {
      RunaSelect1: this.state.RunaDeterminacao1,
      RunaSelect2: this.state.RunaDeterminacao2,
      RunaSelect3: this.state.RunaDeterminacao3,
      RunaSelect4: this.state.RunaDeterminacao4,
      RunaType: this.state.pagType,
    });
    this.props.navigation.navigate('InspiracaoSecScreen')
  }
}
//#endregion Runas Secundary Function

  render(){
    return(
      <ImageBackground style={DeterminacaoStyle.imgBack} source={determinacaoBack}>
      <Content style={DeterminacaoStyle.backDeterminacao}>
        <View style={DeterminacaoStyle.containerRunes}>
          <View style={DeterminacaoStyle.containerHeaderRune}>
            <Image style={DeterminacaoStyle.containerHeaderImg} source={btnDeterminacaoFooter} />
            <View style={DeterminacaoStyle.containerHeaderText}>
              <Text style={DeterminacaoStyle.headerTitle}>DETERMINAÇÃO</Text>
              <Text style={DeterminacaoStyle.headerDesc}>Durabilidade e controle de grupo</Text>
            </View>
          </View>

        <View style={DeterminacaoStyle.containerRunesRow} >
          <Animatable.View style={{height:70}} animation='flipInY' duration={1200} delay={100}>
            <TouchableOpacity onPress={this.FirstListRunes}>
              <Image style={DeterminacaoStyle.buttonImgDefault4}  source={this.state.buttonDefaultG1}/>
            </TouchableOpacity>
          </Animatable.View>

        { this.state.showDescAMV ?

        <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL1}>
          <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalAMV}>Aperto dos Mortos-Vivos</Text>
          <Text style={DeterminacaoStyle.previewDesc}>A cada 4s em combate, seu próximo ataque básico cont...</Text>
          <Modal isVisible={this.state.isModalAMV} onBackdropPress={() => this.setState({ isModalAMV: false })}>
            <View style={DeterminacaoStyle.containerModal}>
              <View style={DeterminacaoStyle.buttonModal}>
                <Button transparent onPress={this._toggleModalAMV}>
                  <Icon style={{color:'#91dc5a'}} name='md-close' />
                </Button>
              </View>
              <Text style={DeterminacaoStyle.titleModal}>Aperto dos Mortos-Vivos</Text>
              <Text style={DeterminacaoStyle.textModal}>A cada 4s em combate, seu próximo ataque básico contra um campeão irá:
                causar dano mágico adicional equivalente a 4% da sua vida máxima curar você em 2% da sua vida máxima
                aumentar permanentemente sua vida em 5 campeões de ataque à distância: o dano e a cura são reduzidos pela metade e você recebe 2 de vida permanente em vez disso.</Text>
            </View>
          </Modal>
        </Animatable.View> : null }

        { this.state.showDescPCH ?

        <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL1}>
          <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalPCH}>Pós-Choque</Text>
          <Text style={DeterminacaoStyle.previewDesc}>Após imobilizar um campeão inimigo, aumenta sua armadura e...</Text>
          <Modal isVisible={this.state.isModalPCH} onBackdropPress={() => this.setState({ isModalPCH: false })}>
              <View style={DeterminacaoStyle.containerModal}>
                <View style={DeterminacaoStyle.buttonModal}>
                  <Button transparent onPress={this._toggleModalPCH}>
                    <Icon style={{color:'#91dc5a'}} name='md-close' />
                  </Button>
                </View>
              <Text style={DeterminacaoStyle.titleModal}>Pós-Choque</Text>
              <Text style={DeterminacaoStyle.textModal}>Após imobilizar um campeão inimigo, aumenta sua armadura e resistência mágica em 20 + 30% por 2.5s. depois explode, causando dano mágico a inimigos próximos.
                dano: 40 - 140 (+3.5% de sua vida máxima). tempo de recarga: 20s</Text>
              </View>
          </Modal>
        </Animatable.View> : null }

        { this.state.showDescGP ?

        <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL2}>
          <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalGP}>Guardião</Text>
          <Text style={DeterminacaoStyle.previewDesc}>Protege aliados a até 175 unidades de você e aliados sobre...</Text>
          <Modal isVisible={this.state.isModalGP} onBackdropPress={() => this.setState({ isModalGP: false })}>
            <View style={DeterminacaoStyle.containerModal}>
              <View style={DeterminacaoStyle.buttonModal}>
                <Button transparent onPress={this._toggleModalGP}>
                  <Icon style={{color:'#91dc5a'}} name='md-close' />
                </Button>
              </View>
              <Text style={DeterminacaoStyle.titleModal}>Guardião</Text>
              <Text style={DeterminacaoStyle.textModal}>Protege aliados a até 175 unidades de você e aliados sobre os quais você lançar habilidades por 2.5s. quando você estiver protegendo, se você ou o aliado receberem dano, ambos ganham um escudo e são acelerados por 1.5s.
                tempo de recarga: 45s escudo: 60 - 150 +(0.20 de pdh) + (+10% de vida adicional). aceleração: +20% de velocidade de movimento.</Text>
            </View>
          </Modal>
        </Animatable.View> : null }


          { this.state.showRunasDeterminacaoList1 ?

          <Animatable.View style={DeterminacaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
            <TouchableOpacity onPress={this.SelectRuneAMV}>
              <Image style={DeterminacaoStyle.buttonImgSize}  source={imgAMV}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRunePCH}>
              <Image style={DeterminacaoStyle.buttonImgSize}  source={imgPCH}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneGP}>
              <Image style={DeterminacaoStyle.buttonImgSize}  source={imgGP}/>
              </TouchableOpacity>
            </Animatable.View>

           : null}

          </View>

          <View style={DeterminacaoStyle.containerRunesRow}>

          <Animatable.View style={{height:70}} animation='flipInY' duration={1200} delay={100}>
            <TouchableOpacity onPress={this.SecondListRunes}>
              <Image style={DeterminacaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG2}/>
            </TouchableOpacity>
          </Animatable.View>

            { this.state.showDescDM ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL2}>
              <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalDM}>Demolir</Text>
              <Text style={DeterminacaoStyle.previewDesc}>Carrega um poderoso ataque contra uma torre por 4s enqua...</Text>
              <Modal isVisible={this.state.isModalDM}  onBackdropPress={() => this.setState({ isModalDM: false })}>
                <View style={DeterminacaoStyle.containerModal}>
                  <View style={DeterminacaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalDM}>
                      <Icon style={{color:'#91dc5a'}} name='md-close' />
                    </Button>
                  </View>
                  <Text style={DeterminacaoStyle.titleModal}>Demolir</Text>
                  <Text style={DeterminacaoStyle.textModal}>Carrega um poderoso ataque contra uma torre por 4s enquanto estiver a 600 de distância. o ataque carregado causa 125 (+30% de sua vida máx.) de dano físico adicional.
                    tempo de recarga: 45 s</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

            { this.state.showDescFV ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL2}>
              <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalFV}>Fonte da vida</Text>
              <Text style={DeterminacaoStyle.previewDesc}>Logo após a conjuração da sua ultimate, concede um aumen...</Text>
              <Modal isVisible={this.state.isModalFV} onBackdropPress={() => this.setState({ isModalFV: false })}>
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

            { this.state.showDescOS ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL2}>
              <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalOS}>Osso revestido</Text>
              <Text style={DeterminacaoStyle.previewDesc}>Após sofrer dano de um campeão inimigo, os próximos 3 ataq...</Text>
              <Modal isVisible={this.state.isModalOS} onBackdropPress={() => this.setState({ isModalOS: false })}>
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

            { this.state.showRunasDeterminacaoList2 ?

            <Animatable.View style={DeterminacaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
              <TouchableOpacity onPress={this.SelectRuneDM}>
                <Image style={DeterminacaoStyle.buttonImgSize}  source={imgDM}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneFV}>
                <Image style={DeterminacaoStyle.buttonImgSize}  source={imgFV}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneOS}>
                <Image style={DeterminacaoStyle.buttonImgSize}  source={imgOS}/>
              </TouchableOpacity>
            </Animatable.View> : null}
          </View>

          <View style={DeterminacaoStyle.containerRunesRow}>

            <Animatable.View style={{height:70}} animation='flipInY' duration={1200} delay={100}>
              <TouchableOpacity  onPress={this.ThirdListRunes}>
                <Image style={DeterminacaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG3}/>
              </TouchableOpacity>
              </Animatable.View>

              { this.state.showDescCD ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL3}>
                <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalCD}>CONDICIONAMENTO</Text>
                <Text style={DeterminacaoStyle.previewDesc}>Depois de 10 mins, recebe +8 de armadura e +8 de resistên...</Text>
                <Modal isVisible={this.state.isModalCD} onBackdropPress={() => this.setState({ isModalCD: false })}>
                  <View style={DeterminacaoStyle.containerModal}>
                    <View style={DeterminacaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalCD}>
                        <Icon style={{color:'#91dc5a'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={DeterminacaoStyle.titleModal}>CONDICIONAMENTO</Text>
                    <Text style={DeterminacaoStyle.textModal}>Depois de 10 mins, recebe +8 de armadura e +8 de resistência mágica,
                      e aumenta sua armadura e resistência mágica em 5%.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null }

              { this.state.showDescVR ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL3}>
                <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalVR}>Ventos revigorantes</Text>
                <Text style={DeterminacaoStyle.previewDesc}>Após receber dano de um campeão inimigo, recebe...</Text>
                <Modal isVisible={this.state.isModalVR} onBackdropPress={() => this.setState({ isModalVR: false })}>
                  <View style={DeterminacaoStyle.containerModal}>
                    <View style={DeterminacaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalVR}>
                        <Icon style={{color:'#91dc5a'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={DeterminacaoStyle.titleModal}>Ventos revigorantes</Text>
                    <Text style={DeterminacaoStyle.textModal}>Após receber dano de um campeão inimigo, recebe cura equivalente
                      a 4% da vida perdida +6 por 10s.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null }

             { this.state.showDescCT ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL3}>
                <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalCT}>Crisálida</Text>
                <Text style={DeterminacaoStyle.previewDesc}>Comece o jogo com 50 de vida adicional. após 4 abates...</Text>
                <Modal isVisible={this.state.isModalCT} onBackdropPress={() => this.setState({ isModalCT: false })}>
                  <View style={DeterminacaoStyle.containerModal}>
                    <View style={DeterminacaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalCT}>
                        <Icon style={{color:'#91dc5a'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={DeterminacaoStyle.titleModal}>Crisálida</Text>
                    <Text style={DeterminacaoStyle.textModal}>Comece o jogo com 50 de vida adicional. após 4 abates, consuma essa
                      vida para ganhar um adicional adaptativo de 9 de dano de ataque ou 15 de poder de habilidade.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null}

             { this.state.showRunasDeterminacaoList3 ?

            <Animatable.View style={DeterminacaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
              <TouchableOpacity onPress={this.SelectRuneCD}>
                <Image style={DeterminacaoStyle.buttonImgSize}  source={imgCD}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneVR}>
                <Image style={DeterminacaoStyle.buttonImgSize}  source={imgVR}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneCT}>
                <Image style={DeterminacaoStyle.buttonImgSize}  source={imgCT}/>
              </TouchableOpacity>
            </Animatable.View> : null }
           </View>

          <View style={DeterminacaoStyle.containerRunesRow}>

          <Animatable.View  style={{height:70}} animation='flipInY' duration={1200} delay={100}>
            <TouchableOpacity onPress={this.FourthListRunes}>
              <Image style={DeterminacaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG4}/>
            </TouchableOpacity>
          </Animatable.View>

          { this.state.showDescCEX ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL4}>
              <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalCEX}>Crescimento excessivo</Text>
              <Text style={DeterminacaoStyle.previewDesc}>Ganha permanentemente 0.2% de vida máxima para cada...</Text>
              <Modal isVisible={this.state.isModalCEX} onBackdropPress={() => this.setState({ isModalCEX: false })}>
                <View style={DeterminacaoStyle.containerModal}>
                  <View style={DeterminacaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalCEX}>
                      <Icon style={{color:'#91dc5a'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={DeterminacaoStyle.titleModal}>Crescimento excessivo</Text>
                <Text style={DeterminacaoStyle.textModal}>Ganha permanentemente 0.2% de vida máxima para cada 8 monstros ou tropas
                   inimigas que morrerem perto de você.</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

            { this.state.showDescRV ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL4}>
              <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalRV}>Revitalizar</Text>
              <Text style={DeterminacaoStyle.previewDesc}>Curas e escudos ficam 5% mais fortes e aumentam em 10%...</Text>
              <Modal isVisible={this.state.isModalRV} onBackdropPress={() => this.setState({ isModalRV: false })}>
                <View style={DeterminacaoStyle.containerModal}>
                  <View style={DeterminacaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalRV}>
                      <Icon style={{color:'#91dc5a'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={DeterminacaoStyle.titleModal}>Revitalizar</Text>
                <Text style={DeterminacaoStyle.textModal}>Curas e escudos ficam 5% mais fortes e aumentam em 10% em
                  alvos com vida inferior a 40%.</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

             { this.state.showDescIB ?

             <Animatable.View animation='lightSpeedIn' duration={800} style={DeterminacaoStyle.containerPreviewDescL4}>
              <Text style={DeterminacaoStyle.titleDesc} onPress={this._toggleModalIB}>Inabalável</Text>
              <Text style={DeterminacaoStyle.previewDesc}>Depois de conjurar um feitiço de invocador, recebe 15% de...</Text>
              <Modal isVisible={this.state.isModalIB} onBackdropPress={() => this.setState({ isModalIB: false })}>
                <View style={DeterminacaoStyle.containerModal}>
                  <View style={DeterminacaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalIB}>
                      <Icon style={{color:'#91dc5a'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={DeterminacaoStyle.titleModal}>Inabalável</Text>
                <Text style={DeterminacaoStyle.textModal}>Depois de conjurar um feitiço de invocador, recebe 15% de tenacidade
                  e de resistência à redução de velocidade por 10s. além disso, concede 10% de tenacidade e resistência à redução
                  de velocidade para cada feitiço de invocador em tempo de recarga.</Text>
                </View>
              </Modal>
             </Animatable.View> : null }

             { this.state.showRunasDeterminacaoList4 ?

             <Animatable.View style={DeterminacaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
               <TouchableOpacity onPress={this.SelectRuneCEX}>
                <Image style={DeterminacaoStyle.buttonImgSize}  source={imgCEX}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={this.SelectRuneRV}>
                <Image style={DeterminacaoStyle.buttonImgSize}  source={imgRV}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={this.SelectRuneIB}>
                <Image style={DeterminacaoStyle.buttonImgSize}  source={imgIB}/>
               </TouchableOpacity>
             </Animatable.View> : null }

           </View>
           <View style={{flex:1, justifyContent:'center', marginTop:10}}>
              <AdMobBanner
                adSize="banner"
                adUnitID="ca-app-pub-1942019449408433/8387899716"
                onAdFailedToLoad={error => console.error(error)}/>
            </View>
        </View>
      </Content>



        <Footer>
          <FooterTab style={{backgroundColor:'rgba(0, 0, 0, 0.9)'}}>
            <Button onPress={() => this.sendDataPrecisaoSec()}>
                <Image style={{height:30, width:30}} source={btnPrecisaoFooter}/>
            </Button>
            <Button onPress={() => this.sendDataDominacaoSec()}>
              <Image style={{height:30, width:30}} source={btnDominacaoFooter}/>
            </Button>
            <Button onPress={() => this.sendDataFeiticariaSec()}>
              <Image style={{height:30, width:30}} source={btnFeiticariaFooter}/>
            </Button>
            <Button onPress={() => this.sendDataInspiracaoSec()}>
              <Image style={{height:30, width:30}} source={btnInspiracaoFooter}/>
            </Button>
          </FooterTab>
      </Footer>
      </ImageBackground>

    );
  }
}

Determinacao.navigationOptions = {
  header: null,
}

export default Determinacao;


