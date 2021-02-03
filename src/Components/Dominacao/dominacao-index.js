import React, {Component} from 'react';
import { View,  Image,  TouchableOpacity,  ImageBackground} from 'react-native';
import { Content, Text, Button, Footer, FooterTab, Icon, Toast } from 'native-base';
import * as Animatable from 'react-native-animatable';
import Modal from "react-native-modal";
import DominacaoStyle from './dominacao-index-style';
import { AdMobBanner } from 'react-native-admob';
import { btnDfD, imgEL, imgPD, imgCLS, imgGD, imgGS,
  imgIR, imgSZ, imgPF, imgGO, imgCA, imgCV, imgCI, btnDominacaoFooter, btnFeiticariaFooter,
  btnPrecisaoFooter,  btnInspiracaoFooter, dominacaoBack, imgCHL, imgCS, btnDeterminacaoFooter,
} from '../imageProvider';

class Dominacao extends Component {

  constructor(props){
    super(props);
    this.state ={
      verifyDesc:false, verifyDescL2:false, verifyDescL3:false, verifyDescL4:false,
      showDescEL:false, showDescPD:false, showDescCLS:false, showDescCHL:false, showDescGD:false, showDescGS:false, showDescIR:false,
      showDescSZ:false, showDescPF:false, showDescGO:false, showDescCA:false, showDescCV:false, showDescCI:false, showDescCS:false,
      isModalEL: false, isModalPD: false, isModalCLS: false, isModalCHL: false, isModalGD: false,  isModalGS: false, isModalIR: false,
      isModalSZ: false, isModalPF: false, isModalGO: false, isModalCA: false, isModalCV: false, isModalCI: false, isModalCS: false,
      showRunasDominacaoList1:true, showRunasDominacaoList2: false, showRunasDominacaoList3: false,
      showRunasDominacaoList4: false, buttonDefaultG1 : btnDfD, buttonDefaultG2 : btnDfD, buttonDefaultG3 : btnDfD,
      buttonDefaultG4 : btnDfD, RunaDominacao1: '', RunaDominacao2: '', RunaDominacao3: '', RunaDominacao4: '',
      pagType: 'Dominacao'
    }
}

//#region Modal Function
  _toggleModalEL = () =>
    this.setState({ isModalEL: !this.state.isModalEL });

  _toggleModalPD = () =>
    this.setState({ isModalPD: !this.state.isModalPD });

  _toggleModalCLS = () =>
    this.setState({ isModalCLS: !this.state.isModalCLS });

  _toggleModalCHL = () =>
    this.setState({ isModalCHL: !this.state.isModalCHL });

  _toggleModalGD = () =>
    this.setState({ isModalGD: !this.state.isModalGD });

  _toggleModalGS = () =>
    this.setState({ isModalGS: !this.state.isModalGS });

  _toggleModalIR = () =>
    this.setState({ isModalIR: !this.state.isModalIR });

  _toggleModalSZ = () =>
    this.setState({ isModalSZ: !this.state.isModalSZ });

  _toggleModalPF = () =>
    this.setState({ isModalPF: !this.state.isModalPF });

  _toggleModalGO = () =>
    this.setState({ isModalGO: !this.state.isModalGO });

  _toggleModalCA = () =>
    this.setState({ isModalCA: !this.state.isModalCA });

  _toggleModalCV = () =>
    this.setState({ isModalCV: !this.state.isModalCV });

  _toggleModalCI = () =>
    this.setState({ isModalCI: !this.state.isModalCI });

  _toggleModalCS = () =>
    this.setState({ isModalCS: !this.state.isModalCS });

//#endregion end Modal Function

//#region Runas Function
  FirstListRunes = () => {
    if(this.state.showRunasDominacaoList1 == true){
      this.setState({showRunasDominacaoList1: false, showDescEL: false, showDescPD: false, showDescCLS: false, showDescCHL: false})
    }else{
      this.setState({showRunasDominacaoList1: true, showRunasDominacaoList2: false, showDescEL: false, showDescPD: false, showDescCLS: false, showDescCHL: false})
    }
  }

  SelectRuneEL = () => {
    if(this.state.verifyDescL2 == false){
    this.setState({showRunasDominacaoList1: false,
      showRunasDominacaoList2:true,
      buttonDefaultG1: imgEL, RunaDominacao1: 'ELETROCUTAR' })
    }else{
      this.setState({showRunasDominacaoList1: false,
      buttonDefaultG1: imgEL, RunaDominacao1: 'ELETROCUTAR'})
    }if(this.showDescEL == true){
      this.setState({showDescEL:false})
    }else{
      this.setState({showDescEL:true})
      }
    }

  SelectRunePD = () => {
    if(this.state.verifyDescL2 == false){
    this.setState({showRunasDominacaoList1: false,
      showRunasDominacaoList2:true,
      buttonDefaultG1: imgPD, RunaDominacao1: 'PREDADOR'})
    }else{
      this.setState({showRunasDominacaoList1: false,
      buttonDefaultG1: imgPD, RunaDominacao1: 'PREDADOR'})
    }if(this.showDescPD == true){
      this.setState({showDescPD:false})
    }else{
      this.setState({showDescPD:true})
      }
    }

  SelectRuneCLS = () => {
    if(this.state.verifyDescL2 == false){
      this.setState({showRunasDominacaoList1: false,
        showRunasDominacaoList2:true,
        buttonDefaultG1: imgCLS, RunaDominacao1: 'COLHEITA SOMBRIA'})
      }else{
        this.setState({showRunasDominacaoList1: false,
        buttonDefaultG1: imgCLS, RunaDominacao1: 'COLHEITA SOMBRIA'})
      }if(this.showDescCLS == true){
        this.setState({showDescCLS:false})
      }else{
        this.setState({showDescCLS:true})
        }
  }

  SelectRuneCHL = () => {
    if(this.state.verifyDescL2 == false){
      this.setState({showRunasDominacaoList1: false,
        showRunasDominacaoList2:true,
        buttonDefaultG1: imgCHL, RunaDominacao1: 'CHUVA DE LÂMINAS'})
      }else{
        this.setState({showRunasDominacaoList1: false,
        buttonDefaultG1: imgCHL, RunaDominacao1: 'CHUVA DE LÂMINAS'})
      }if(this.showDescCHL == true){
        this.setState({showDescCHL:false})
      }else{
        this.setState({showDescCHL:true})
        }
  }
  SecondListRunes = () => {
    if(this.state.showRunasDominacaoList2 == true){
      this.setState({showRunasDominacaoList2: false, showDescGD: false, showDescGS: false, showDescIR: false})
    }else{
      this.setState({showRunasDominacaoList2: true, showRunasDominacaoList3: false, showDescGD: false, showDescGS: false, showDescIR: false})
    }
  }

  SelectRuneGD = () => {
    if(this.state.verifyDescL3 == false){
      this.setState({showRunasDominacaoList2: false,
        showRunasDominacaoList3:true,
        buttonDefaultG2: imgGD, RunaDominacao2: 'GOLPE DESLEAL'})
      }else{
        this.setState({showRunasDominacaoList2: false,
          buttonDefaultG2: imgGD, RunaDominacao2: 'GOLPE DESLEAL'})
      }if(this.showDescGD == true){
        this.setState({showDescGD:false})
      }else{
        this.setState({showDescGD:true, verifyDescL2:true})
      }
  }

  SelectRuneGS = () => {
    if(this.state.verifyDescL3 == false){
      this.setState({showRunasDominacaoList2: false,
        showRunasDominacaoList3:true,
        buttonDefaultG2: imgGS, RunaDominacao2: 'GOSTO DE SANGUE'})
      }else{
        this.setState({showRunasDominacaoList2: false,
          buttonDefaultG2: imgGS, RunaDominacao2: 'GOSTO DE SANGUE'})
      }if(this.showDescGS == true){
        this.setState({showDescGS:false})
      }else{
        this.setState({showDescGS:true, verifyDescL2: true})
      }
  }

  SelectRuneIR = () => {
    if(this.state.verifyDescL3 == false){
      this.setState({showRunasDominacaoList2: false,
        showRunasDominacaoList3:true,
        buttonDefaultG2: imgIR, RunaDominacao2: 'IMPACTO REPENTINO'})
      }else{
        this.setState({showRunasDominacaoList2: false,
          buttonDefaultG2: imgIR, RunaDominacao2: 'IMPACTO REPENTINO'})
      }if(this.showDescIR == true){
        this.setState({showDescIR:false})
      }else{
        this.setState({showDescIR:true, verifyDescL2: true})
      }
  }

  ThirdListRunes = () => {
    if(this.state.showRunasDominacaoList3 == true){
      this.setState({showRunasDominacaoList3: false, showDescSZ: false, showDescPF: false, showDescGO: false})
    }else{
      this.setState({showRunasDominacaoList3: true, showRunasDominacaoList4:false,  showDescSZ: false, showDescPF: false, showDescGO: false})
    }
  }

  SelectRuneSZ = () => {
    if(this.state.verifyDescL4 == false){
      this.setState({showRunasDominacaoList3: false,
        showRunasDominacaoList4:true,
        buttonDefaultG3: imgSZ, RunaDominacao3: 'SENTINELA ZUMBI'})
      }else{
        this.setState({showRunasDominacaoList3: false,
          buttonDefaultG3: imgSZ, RunaDominacao3: 'SENTINELA ZUMBI'})
      }if(this.showDescSZ == true){
        this.setState({showDescSZ:false})
      }else{
        this.setState({showDescSZ:true, verifyDescL3:true })
      }
  }

  SelectRunePF = () => {
    if(this.state.verifyDescL4 == false){
      this.setState({showRunasDominacaoList3: false,
        showRunasDominacaoList4:true,
        buttonDefaultG3: imgPF, RunaDominacao3: 'PORO FANTASMA'})
      }else{
        this.setState({showRunasDominacaoList3: false,
          buttonDefaultG3: imgPF, RunaDominacao3: 'PORO FANTASMA'})
      }if(this.showDescPF == true){
        this.setState({showDescPF:false})
      }else{
        this.setState({showDescPF:true, verifyDescL3:true })
      }
  }

  SelectRuneGO = () => {
    if(this.state.verifyDescL4 == false){
      this.setState({showRunasDominacaoList3: false,
        showRunasDominacaoList4:true,
        buttonDefaultG3: imgGO, RunaDominacao3: 'GLOBOS OCULARES'})
      }else{
        this.setState({showRunasDominacaoList3: false,
          buttonDefaultG3: imgGO, RunaDominacao3: 'GLOBOS OCULARES'})
      }if(this.showDescGO == true){
        this.setState({showDescGO:false})
      }else{
        this.setState({showDescGO:true, verifyDescL3:true})
      }
  }

  FourthListRunes = () => {
    if(this.state.showRunasDominacaoList4 == true){
      this.setState({showRunasDominacaoList4: false, showDescCA: false, showDescCV: false, showDescCI: false})
    }else{
      this.setState({showRunasDominacaoList4: true,  showDescCA: false, showDescCV: false, showDescCI: false})
    }
  }

  SelectRuneCA = () => {
    this.setState({showRunasDominacaoList4: false,
      buttonDefaultG4: imgCA, RunaDominacao4: 'CAÇA ARDILOSA'})
    if(this.showDescCA == true){
      this.setState({showDescCA:false})
    }else{
      this.setState({showDescCA:true, verifyDescL4:true })
    }
  }

  SelectRuneCV = () => {
    this.setState({showRunasDominacaoList4: false,
      buttonDefaultG4: imgCV, RunaDominacao4: 'CAÇA VORAZ'})
    if(this.showDescCV == true){
      this.setState({showDescCV:false})
    }else{
      this.setState({showDescCV:true, verifyDescL4:true })
    }
  }

  SelectRuneCI = () => {
    this.setState({showRunasDominacaoList4: false,
      buttonDefaultG4: imgCI, RunaDominacao4: 'CAÇA INCANSÁVEL'})
    if(this.showDescCI == true){
      this.setState({showDescCI:false})
    }else{
      this.setState({showDescCI:true, verifyDescL4:true })
    }
  }

  SelectRuneCS = () => {
    this.setState({showRunasDominacaoList4: false,
      buttonDefaultG4: imgCS, RunaDominacao4: 'CAÇA SUPREMA'})
    if(this.showDescCS == true){
      this.setState({showDescCS:false})
    }else{
      this.setState({showDescCS:true, verifyDescL4:true })
    }
  }
//#endregion end Runas Function

//#region Runas Secundary Function
sendDataPrecisaoSec = () => {
  if(this.state.RunaDominacao1 === '' | this.state.RunaDominacao2 === '' | this.state.RunaDominacao3  === '' | this.state.RunaDominacao4 === ''){
    Toast.show({
      text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
      position: 'top',
      type: 'danger',
      duration: 2250
    })
  }else{
    this.props.navigation.navigate('PrecisaoSecScreen', {
      RunaSelect1: this.state.RunaDominacao1,
      RunaSelect2: this.state.RunaDominacao2,
      RunaSelect3: this.state.RunaDominacao3,
      RunaSelect4: this.state.RunaDominacao4,
      RunaType: this.state.pagType,
    });
    this.props.navigation.navigate('PrecisaoSecScreen')
  }
}

sendDataFeiticariaSec = () => {
  if(this.state.RunaDominacao1 === '' | this.state.RunaDominacao2 === '' | this.state.RunaDominacao3  === '' | this.state.RunaDominacao4 === ''){
    Toast.show({
      text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
      position: 'top',
      type: 'danger',
      duration: 2250
    })
  }else{
    this.props.navigation.navigate('FeiticariaSecScreen', {
      RunaSelect1: this.state.RunaDominacao1,
      RunaSelect2: this.state.RunaDominacao2,
      RunaSelect3: this.state.RunaDominacao3,
      RunaSelect4: this.state.RunaDominacao4,
      RunaType: this.state.pagType,
    });
    this.props.navigation.navigate('FeiticariaSecScreen')
  }
}

sendDataDeterminacaoSec= () => {
  if(this.state.RunaDominacao1 === '' | this.state.RunaDominacao2 === '' | this.state.RunaDominacao3  === '' | this.state.RunaDominacao4 === ''){
    Toast.show({
      text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
      position: 'top',
      type: 'danger',
      duration: 2250
    })
  }else{
    this.props.navigation.navigate('DeterminacaoSecScreen', {
      RunaSelect1: this.state.RunaDominacao1,
      RunaSelect2: this.state.RunaDominacao2,
      RunaSelect3: this.state.RunaDominacao3,
      RunaSelect4: this.state.RunaDominacao4,
      RunaType: this.state.pagType,
    });
    this.props.navigation.navigate('DeterminacaoSecScreen')
  }
}

sendDataInspiracaoSec = () => {
  if(this.state.RunaDominacao1 === '' | this.state.RunaDominacao2 === '' | this.state.RunaDominacao3  === '' | this.state.RunaDominacao4 === ''){
    Toast.show({
      text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
      position: 'top',
      type: 'danger',
      duration: 2250
    })
  }else{
    this.props.navigation.navigate('InspiracaoSecScreen', {
      RunaSelect1: this.state.RunaDominacao1,
      RunaSelect2: this.state.RunaDominacao2,
      RunaSelect3: this.state.RunaDominacao3,
      RunaSelect4: this.state.RunaDominacao4,
      RunaType: this.state.pagType,
    });
    this.props.navigation.navigate('InspiracaoSecScreen')
  }
}
//#endregion Runas Secundary Function

  render(){
    return(
      <ImageBackground style={DominacaoStyle.imgBack} source={dominacaoBack}>
      <Content style={DominacaoStyle.backFeiticaria}>
        <View style={DominacaoStyle.containerRunes}>
          <View style={DominacaoStyle.containerHeaderRune}>
            <Image style={DominacaoStyle.containerHeaderImg} source={btnDominacaoFooter} />
            <View style={DominacaoStyle.containerHeaderText}>
              <Text style={DominacaoStyle.headerTitle}>DOMINAÇÃO</Text>
              <Text style={DominacaoStyle.headerDesc}>Dano explosivo e acesso ao alvo.</Text>
            </View>
          </View>

        <View style={DominacaoStyle.containerRunesRow} >
          <Animatable.View style={{height:70}} animation='flipInY' duration={1200} delay={100}>
            <TouchableOpacity onPress={this.FirstListRunes}>
              <Image style={DominacaoStyle.buttonImgDefault4}  source={this.state.buttonDefaultG1}/>
            </TouchableOpacity>
          </Animatable.View>

        { this.state.showDescEL ?

        <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL1}>
          <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalEL}>Eletrocutar</Text>
          <Text style={DominacaoStyle.previewDesc}>Acertar um Campeão com 3 ataques...</Text>
          <Modal isVisible={this.state.isModalEL} onBackdropPress={() => this.setState({ isModalEL: false })}>
            <View style={DominacaoStyle.containerModal}>
              <View style={DominacaoStyle.buttonModal}>
                <Button transparent onPress={this._toggleModalEL}>
                  <Icon style={{color:'#cb2027'}} name='md-close' />
                </Button>
              </View>
              <Text style={DominacaoStyle.titleModal}>Eletrocutar</Text>
              <Text style={DominacaoStyle.textModal}>Acertar um Campeão com 3 ataques ou habilidades separadas em até 3s causa Dano Adaptativo adicional.
                Dano: 50 - 220 (+0.50 de DdA adicional, +0.3 de PdH) de dano.
                Tempo de Recarga: 50 - 25s</Text>
            </View>
          </Modal>
        </Animatable.View> : null }

        { this.state.showDescPD ?

        <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL1}>
          <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalPD}>Predador</Text>
          <Text style={DominacaoStyle.previewDesc}>Encanta suas botas com o efeito ativo 'Predador....</Text>
          <Modal isVisible={this.state.isModalPD} onBackdropPress={() => this.setState({ isModalPD: false })}>
              <View style={DominacaoStyle.containerModal}>
                <View style={DominacaoStyle.buttonModal}>
                  <Button transparent onPress={this._toggleModalPD}>
                    <Icon style={{color:'#cb2027'}} name='md-close' />
                  </Button>
                </View>
              <Text style={DominacaoStyle.titleModal}>Predador</Text>
              <Text style={DominacaoStyle.textModal}>Encanta suas botas com o efeito ativo 'Predador.'
                Canalize por 1,5s fora de combate para receber 45% de Velocidade de Movimento por 15s. Ataques
                ou habilidades que causam dano encerram esse efeito, causando de 60 a 140 (+0,2 DdA adicional)(+0,3 PdH) de dano adaptativo adicional.
                Tempo de Recarga: 180s. Inicia o jogo em Tempo de Recarga e entra em Tempo de Recarga se for interrompido durante a canalização.</Text>
              </View>
          </Modal>
        </Animatable.View> : null }

        { this.state.showDescCLS ?

          <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL1}>
            <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalCLS}>Colheita Sombria</Text>
            <Text style={DominacaoStyle.previewDesc}>Campeões, tropas grandes e monstros grandes deixam essên...</Text>
            <Modal isVisible={this.state.isModalCLS} onBackdropPress={() => this.setState({ isModalCLS: false })}>
              <View style={DominacaoStyle.containerModal}>
                <View style={DominacaoStyle.buttonModal}>
                  <Button transparent onPress={this._toggleModalCLS}>
                    <Icon style={{color:'#cb2027'}} name='md-close' />
                  </Button>
                </View>
              <Text style={DominacaoStyle.titleModal}>Colheita Sombria</Text>
              <Text style={DominacaoStyle.textModal}>Campeões, tropas grandes e monstros grandes deixam essências de alma ao morrer. Colete almas para ficar com Alma Carregada. Seu próximo ataque a um Campeão ou estrutura consome a Alma Carregada para causar Dano Adaptativo adicional.
                A Alma Carregada dura 20s, aumentando para 300s após coletar 150 essência(s) de alma.
                Dano adicional: de 40 a 80 (+0.25 de DdA adicional) (+0.2 de PdH) + essências de alma coletadas.
                Campeões - 6 de essência de alma.
                Monstros - 2 de essência de alma.
                Tropas - 4 de essência de alma.</Text>
              </View>
            </Modal>
          </Animatable.View> : null }

        { this.state.showDescCHL ?

          <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL1}>
            <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalCHL}>Chuva de Lâminas</Text>
            <Text style={DominacaoStyle.previewDesc}>Recebe 75% - 125% de Velocidade de Ataque nos primeiros 3...</Text>
            <Modal isVisible={this.state.isModalCHL} onBackdropPress={() => this.setState({ isModalCHL: false })}>
              <View style={DominacaoStyle.containerModal}>
                <View style={DominacaoStyle.buttonModal}>
                  <Button transparent onPress={this._toggleModalCHL}>
                    <Icon style={{color:'#cb2027'}} name='md-close' />
                  </Button>
                </View>
              <Text style={DominacaoStyle.titleModal}>Chuva de Lâminas</Text>
              <Text style={DominacaoStyle.textModal}>Recebe 75% - 125% de Velocidade de Ataque nos primeiros 3 ataques contra Campeões inimigos.
                Caso o intervalo entre os ataques supere 2s, o efeito acabará. Chuva de Lâminas permite exceder temporariamente o limite de Velocidade de Ataque. Tempo de Recarga: 4s fora de combate.</Text>
              </View>
            </Modal>
          </Animatable.View> : null }

        { this.state.showRunasDominacaoList1 ?

          <Animatable.View style={DominacaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
            <TouchableOpacity onPress={this.SelectRuneEL}>
              <Image style={DominacaoStyle.buttonImgSize4}  source={imgEL}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRunePD}>
              <Image style={DominacaoStyle.buttonImgSize4}  source={imgPD}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneCLS}>
              <Image style={DominacaoStyle.buttonImgSize4}  source={imgCLS}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneCHL}>
              <Image style={DominacaoStyle.buttonImgSize4}  source={imgCHL}/>
              </TouchableOpacity>
            </Animatable.View>

           : null}

          </View>

          <View style={DominacaoStyle.containerRunesRow}>

          <Animatable.View style={{height:70}} animation='flipInY' duration={1200} delay={100}>
            <TouchableOpacity onPress={this.SecondListRunes}>
              <Image style={DominacaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG2}/>
            </TouchableOpacity>
          </Animatable.View>

            { this.state.showDescGD ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL2}>
              <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalGD}>Golpe Desleal</Text>
              <Text style={DominacaoStyle.previewDesc}>Causar dano a Campeões com movimento ou ações...</Text>
              <Modal isVisible={this.state.isModalGD} onBackdropPress={() => this.setState({ isModalGD: false })}>
                <View style={DominacaoStyle.containerModal}>
                  <View style={DominacaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalGD}>
                      <Icon style={{color:'#cb2027'}} name='md-close' />
                    </Button>
                  </View>
                  <Text style={DominacaoStyle.titleModal}>Golpe Desleal</Text>
                  <Text style={DominacaoStyle.textModal}>Causar dano a Campeões com movimento ou ações debilitadas causa 12 - 30 de Dano Verdadeiro adicional (com base no nível).
                    Tempo de Recarga: 4s
                    É ativado pelo dano causado após a debilitação.</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

              { this.state.showDescGS ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL2}>
              <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalGS}>Gosto de Sangue</Text>
              <Text style={DominacaoStyle.previewDesc}>Cura ao causar dano a um Campeão inimigo. Cura: 18...</Text>
              <Modal isVisible={this.state.isModalGS}  onBackdropPress={() => this.setState({ isModalGS: false })}>
                <View style={DominacaoStyle.containerModal}>
                  <View style={DominacaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalGS}>
                      <Icon style={{color:'#cb2027'}} name='md-close' />
                    </Button>
                  </View>
                  <Text style={DominacaoStyle.titleModal}>Gosto de Sangue</Text>
                  <Text style={DominacaoStyle.textModal}>Cura ao causar dano a um Campeão inimigo. Cura: 18-35 (+0.20 de DdA adicional,
                    +0.1 de PdH) de Vida (com base no nível). Tempo de Recarga: 20 s</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

            { this.state.showDescIR ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL2}>
              <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalIR}>Impacto Repentino</Text>
              <Text style={DominacaoStyle.previewDesc}>Depois de sair da furtividade ou usar um avanço, salto, teletrans...</Text>
              <Modal isVisible={this.state.isModalIR} onBackdropPress={() => this.setState({ isModalIR: false })}>
                <View style={DominacaoStyle.containerModal}>
                  <View style={DominacaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalIR}>
                      <Icon style={{color:'#cb2027'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={DominacaoStyle.titleModal}>Impacto Repentino</Text>
                <Text style={DominacaoStyle.textModal}>Depois de sair da furtividade ou usar um avanço, salto, teletransporte
                  ou teleporte, causar dano a um Campeão concede 10 de Letalidade e 8 de Penetração Mágica por 5s. Tempo de Recarga: 4s</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

            { this.state.showRunasDominacaoList2 ?

            <Animatable.View style={DominacaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
              <TouchableOpacity onPress={this.SelectRuneGD}>
                <Image style={DominacaoStyle.buttonImgSize}  source={imgGD}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneGS}>
                <Image style={DominacaoStyle.buttonImgSize}  source={imgGS}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneIR}>
                <Image style={DominacaoStyle.buttonImgSize}  source={imgIR}/>
              </TouchableOpacity>
            </Animatable.View> : null}
          </View>

          <View style={DominacaoStyle.containerRunesRow}>

            <Animatable.View style={{height:70}} animation='flipInY' duration={1200} delay={100}>
              <TouchableOpacity  onPress={this.ThirdListRunes}>
                <Image style={DominacaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG3}/>
              </TouchableOpacity>
              </Animatable.View>

              { this.state.showDescSZ ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL3}>
                <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalSZ}>Sentinela Zumbi</Text>
                <Text style={DominacaoStyle.previewDesc}>Ao abater uma sentinela, uma Sentinela Zumbi aliada surge...</Text>
                <Modal isVisible={this.state.isModalSZ} onBackdropPress={() => this.setState({ isModalSZ: false })}>
                  <View style={DominacaoStyle.containerModal}>
                    <View style={DominacaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalSZ}>
                        <Icon style={{color:'#cb2027'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={DominacaoStyle.titleModal}>Sentinela Zumbi</Text>
                    <Text style={DominacaoStyle.textModal}>Ao abater uma sentinela, uma Sentinela Zumbi aliada surge em seu lugar.
                      Além disso, quando suas sentinelas expiram, elas ressuscitam como Sentinelas Zumbis. As Sentinelas Zumbis
                      são visíveis, duram 180s e não afetam seu limite de sentinelas.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null }

              { this.state.showDescPF ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL3}>
                <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalPF}>Poro Fantasma</Text>
                <Text style={DominacaoStyle.previewDesc}>Entre em um arbusto para invocar um Poro depois de uma breve...</Text>
                <Modal isVisible={this.state.isModalPF} onBackdropPress={() => this.setState({ isModalPF: false })}>
                  <View style={DominacaoStyle.containerModal}>
                    <View style={DominacaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalPF}>
                        <Icon style={{color:'#cb2027'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={DominacaoStyle.titleModal}>Poro Fantasma</Text>
                    <Text style={DominacaoStyle.textModal}>Entre em um arbusto para invocar um Poro depois de uma breve canalização. O Poro
                      ficará para trás para conceder visão até que você invoque um novo.
                      Se um inimigo entrar em um arbusto com um Poro, ele o assusta, colocando Poro Fantasma em 3s de Tempo de Recarga.
                      A canalização do Poro é interrompida se você entrar em combate com um Campeão.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null }

             { this.state.showDescGO ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL3}>
                <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalGO}>Globos Oculares</Text>
                <Text style={DominacaoStyle.previewDesc}>Coleta Globos Oculares ao abater Campeões e sentinelas. Conc...</Text>
                <Modal isVisible={this.state.isModalGO} onBackdropPress={() => this.setState({ isModalGO: false })}>
                  <View style={DominacaoStyle.containerModal}>
                    <View style={DominacaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalGO}>
                        <Icon style={{color:'#cb2027'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={DominacaoStyle.titleModal}>Globos Oculares</Text>
                    <Text style={DominacaoStyle.textModal}>Coleta Globos Oculares ao abater Campeões e sentinelas. Concede um adicional adaptativo de 0.6 de Dano de Ataque ou 1
                      de Poder de Habilidade por Globo Ocular coletado.
                      Após completar sua coleção de 20 Globos Oculares, você ganha um adicional de um adicional adaptativo de 6 de Dano de Ataque ou 10 de Poder de Habilidade
                      Coleta 2 Globos Oculares por abates de Campeões e 1 Globos Oculares por abate de sentinela.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null}

             { this.state.showRunasDominacaoList3 ?

            <Animatable.View style={DominacaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
              <TouchableOpacity onPress={this.SelectRuneSZ}>
                <Image style={DominacaoStyle.buttonImgSize}  source={imgSZ}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRunePF}>
                <Image style={DominacaoStyle.buttonImgSize}  source={imgPF}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneGO}>
                <Image style={DominacaoStyle.buttonImgSize}  source={imgGO}/>
              </TouchableOpacity>
            </Animatable.View> : null }
           </View>

          <View style={DominacaoStyle.containerRunesRow}>

          <Animatable.View  style={{height:70}} animation='flipInY' duration={1200} delay={100}>
            <TouchableOpacity onPress={this.FourthListRunes}>
              <Image style={DominacaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG4}/>
            </TouchableOpacity>
          </Animatable.View>

          { this.state.showDescCA ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL4}>
              <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalCA}>Caça Ardilosa</Text>
              <Text style={DominacaoStyle.previewDesc}>Recebe 10% de RTR de itens ativos mais 6% por acúmulo...</Text>
              <Modal isVisible={this.state.isModalCA} onBackdropPress={() => this.setState({ isModalCA: false })}>
                <View style={DominacaoStyle.containerModal}>
                  <View style={DominacaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalCA}>
                      <Icon style={{color:'#cb2027'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={DominacaoStyle.titleModal}>Caça Ardilosa</Text>
                <Text style={DominacaoStyle.textModal}>Recebe 10% de RTR de itens ativos mais 6% por acúmulo de Caçando Recompensas (inclui Amuletos).
                  Recebe um acúmulo de Caçando Recompensas sempre que abater um Campeão inimigo pela primeira vez.</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

            { this.state.showDescCV ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL4}>
              <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalCV}>Caça Voraz</Text>
              <Text style={DominacaoStyle.previewDesc}>Cura um percentual do dano que você causa com suas...</Text>
              <Modal isVisible={this.state.isModalCV} onBackdropPress={() => this.setState({ isModalCV: false })}>
                <View style={DominacaoStyle.containerModal}>
                  <View style={DominacaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalCV}>
                      <Icon style={{color:'#cb2027'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={DominacaoStyle.titleModal}>Caça Voraz</Text>
                <Text style={DominacaoStyle.textModal}>Cura um percentual do dano que você causa com suas habilidades.
                  Cura: 2.5% + 2.5% por acúmulo de Caçando Recompensas.
                  Recebe um acúmulo de Caçando Recompensas sempre que abater um Campeão inimigo pela primeira vez.
                  Cura reduzida a um terço para habilidades de área de ação.</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

             { this.state.showDescCI ?

             <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL4}>
              <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalCI}>Caça Incansável</Text>
              <Text style={DominacaoStyle.previewDesc}>Recebe 8 de Velocidade de Movimento fora de combate...</Text>
              <Modal isVisible={this.state.isModalCI} onBackdropPress={() => this.setState({ isModalCI: false })}>
                <View style={DominacaoStyle.containerModal}>
                  <View style={DominacaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalCI}>
                      <Icon style={{color:'#cb2027'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={DominacaoStyle.titleModal}>Caça Incansável</Text>
                <Text style={DominacaoStyle.textModal}>Recebe 8 de Velocidade de Movimento fora de combate mais 8 por acúmulo de Caçando Recompensas.
                  Recebe um acúmulo de Caçando Recompensas sempre que abater um Campeão inimigo pela primeira vez.</Text>
                </View>
              </Modal>
             </Animatable.View> : null }

             { this.state.showDescCS ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={DominacaoStyle.containerPreviewDescL4}>
              <Text style={DominacaoStyle.titleDesc} onPress={this._toggleModalCS}>Caça Suprema</Text>
              <Text style={DominacaoStyle.previewDesc}>Sua ultimate recebe 5% de Tempo de Recarga reduzido, mais 2%...</Text>
              <Modal isVisible={this.state.isModalCS} onBackdropPress={() => this.setState({ isModalCS: false })}>
                <View style={DominacaoStyle.containerModal}>
                  <View style={DominacaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalCS}>
                      <Icon style={{color:'#cb2027'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={DominacaoStyle.titleModal}>Caça Suprema</Text>
                <Text style={DominacaoStyle.textModal}>Sua ultimate recebe 5% de Tempo de Recarga reduzido, mais 2% adicional
                  por acúmulo de Caçador de Recompensas. Acúmulos de Caçador de Recompensassão recebidos na primeira vez que você conseguir um abate em cada Campeão inimigo.</Text>
                </View>
              </Modal>
              </Animatable.View> : null }

             { this.state.showRunasDominacaoList4 ?

             <Animatable.View style={DominacaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
               <TouchableOpacity onPress={this.SelectRuneCA}>
                <Image style={DominacaoStyle.buttonImgSize4}  source={imgCA}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={this.SelectRuneCV}>
                <Image style={DominacaoStyle.buttonImgSize4}  source={imgCV}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={this.SelectRuneCI}>
                <Image style={DominacaoStyle.buttonImgSize4}  source={imgCI}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={this.SelectRuneCS}>
                <Image style={DominacaoStyle.buttonImgSize4}  source={imgCS}/>
               </TouchableOpacity>
             </Animatable.View> : null }

           </View>
           <View style={{flex:1, justifyContent:'center', marginTop:10}}>
              <AdMobBanner
                adSize="banner"
                adUnitID="ca-app-pub-1942019449408433/4790655235"
                onAdFailedToLoad={error => console.error(error)}/>
            </View>
        </View>

    </Content>

        <Footer>
          <FooterTab style={{backgroundColor:'rgba(0, 0, 0, 0.9)'}}>
            <Button onPress={() => this.sendDataPrecisaoSec()}>
                <Image style={{height:30, width:30}} source={btnPrecisaoFooter}/>
            </Button>
            <Button onPress={() => this.sendDataFeiticariaSec()}>
              <Image style={{height:30, width:30}} source={btnFeiticariaFooter}/>
            </Button>
            <Button onPress={() => this.sendDataDeterminacaoSec()}>
              <Image style={{height:30, width:30}} source={btnDeterminacaoFooter}/>
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

Dominacao.navigationOptions = {
  header: null,
}

export default Dominacao;


