import React, {Component} from 'react';
import { View,  Image,  TouchableOpacity,  ImageBackground} from 'react-native';
import { Content, Text, Button, Footer, FooterTab, Icon, Toast } from 'native-base';
import * as Animatable from 'react-native-animatable';
import Modal from "react-native-modal";
import PrecisaoStyle from './precisao-style';
import { AdMobBanner } from 'react-native-admob';
import { precisaoBack, btnDF, imgPA, imgRF, imgAP, imgCQ, imgCE, imgTF,
  imgPE, imgLE, imgLT, imgLL, imgGM, imgDC, imgAM, btnInspiracaoFooter, btnPrecisaoFooter,
  btnFeiticariaFooter, btnDeterminacaoFooter, btnDominacaoFooter,
} from '../imageProvider';

class Precisao extends Component {

  constructor(props){
    super(props);
    this.state ={
      verifyDesc:false, verifyDescL2:false, verifyDescL3:false, verifyDescL4:false, showDescPA:false,
      showDescRF:false, showDescAP:false, showDescCQ:false, showDescCE:false, showDescTF:false, showDescPE:false,
      showDescLE:false, showDescLT:false, showDescLL:false, showDescGM:false, showDescDC:false, showDescAM:false,
      isModalPA: false, isModalRF: false, isModalAP: false, isModalCQ: false,  isModalCE: false, isModalTF: false,
      isModalPE: false, isModalLE: false, isModalLT: false, isModalLL: false, isModalGM: false, isModalDC: false,
      isModalAM: false, showRunasPrecisaoList1:true, showRunasPrecisaoList2: false, showRunasPrecisaoList3: false,
      showRunasPrecisaoList4: false, buttonDefaultG1 : btnDF, buttonDefaultG2 : btnDF, buttonDefaultG3 : btnDF,
      buttonDefaultG4 : btnDF, RunaPrecisao1: '', RunaPrecisao2: '', RunaPrecisao3: '', RunaPrecisao4: '',
      pagType: 'Precisao'
    }
}

//#region Modal Function
  _toggleModalPA = () =>
    this.setState({ isModalPA: !this.state.isModalPA });

  _toggleModalRF = () =>
    this.setState({ isModalRF: !this.state.isModalRF });

  _toggleModalAP = () =>
    this.setState({ isModalAP: !this.state.isModalAP });

  _toggleModalCQ = () =>
    this.setState({ isModalCQ: !this.state.isModalCQ });

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

//#endregion end Modal Function

//#region Runas Function
  FirstListRunes = () => {
    if(this.state.showRunasPrecisaoList1 == true){
      this.setState({showRunasPrecisaoList1: false, showDescPA: false, showDescAP: false, showDescRF: false, showDescCQ: false})
    }else{
      this.setState({showRunasPrecisaoList1: true, showRunasPrecisaoList2: false, showDescPA: false, showDescAP: false, showDescRF: false, showDescCQ: false})
    }
  }

  SelectRunePA = () => {
    if(this.state.verifyDescL2 == false){
    this.setState({showRunasPrecisaoList1: false,
      showRunasPrecisaoList2:true,
      buttonDefaultG1: imgPA, RunaPrecisao1: 'PRESSIONE O ATAQUE' })
    }else{
      this.setState({showRunasPrecisaoList1: false,
      buttonDefaultG1: imgPA, RunaPrecisao1: 'PRESSIONE O ATAQUE'})
    }if(this.showDescPA == true){
      this.setState({showDescPA:false})
    }else{
      this.setState({showDescPA:true})
      }
    }

  SelectRuneRF = () => {
    if(this.state.verifyDescL2 == false){
    this.setState({showRunasPrecisaoList1: false,
      showRunasPrecisaoList2:true,
      buttonDefaultG1: imgRF, RunaPrecisao1: 'RITMO FATAL'})
    }else{
      this.setState({showRunasPrecisaoList1: false,
      buttonDefaultG1: imgRF, RunaPrecisao1: 'RITMO FATAL'})
    }if(this.showDescRF == true){
      this.setState({showDescRF:false})
    }else{
      this.setState({showDescRF:true})
      }
    }

  SelectRuneAP = () => {
    if(this.state.verifyDescL2 == false){
      this.setState({showRunasPrecisaoList1: false,
        showRunasPrecisaoList2:true,
        buttonDefaultG1: imgAP, RunaPrecisao1: 'AGILIDADE NOS PÉS'})
      }else{
        this.setState({showRunasPrecisaoList1: false,
        buttonDefaultG1: imgAP, RunaPrecisao1: 'AGILIDADE NOS PÉS'})
      }if(this.showDescAP == true){
        this.setState({showDescAP:false})
      }else{
        this.setState({showDescAP:true})
        }
  }

  SelectRuneCQ = () => {
    if(this.state.verifyDescL2 == false){
      this.setState({showRunasPrecisaoList1: false,
        showRunasPrecisaoList2:true,
        buttonDefaultG1: imgCQ, RunaPrecisao1: 'CONQUISTADOR'})
      }else{
        this.setState({showRunasPrecisaoList1: false,
        buttonDefaultG1: imgCQ, RunaPrecisao1: 'CONQUISTADOR'})
      }if(this.showDescCQ == true){
        this.setState({showDescCQ:false})
      }else{
        this.setState({showDescCQ:true})
        }
  }

  SecondListRunes = () => {
    if(this.state.showRunasPrecisaoList2 == true){
      this.setState({showRunasPrecisaoList2: false, showDescCE: false, showDescTF: false, showDescPE: false})
    }else{
      this.setState({showRunasPrecisaoList2: true, showRunasPrecisaoList3: false, showDescCE: false, showDescTF: false, showDescPE: false})
    }
  }

  SelectRuneCE = () => {
    if(this.state.verifyDescL3 == false){
      this.setState({showRunasPrecisaoList2: false,
        showRunasPrecisaoList3:true,
        buttonDefaultG2: imgCE, RunaPrecisao2: 'CURA EXCESSIVA'})
      }else{
        this.setState({showRunasPrecisaoList2: false,
          buttonDefaultG2: imgCE, RunaPrecisao2: 'CURA EXCESSIVA'})
      }if(this.showDescCE == true){
        this.setState({showDescCE:false})
      }else{
        this.setState({showDescCE:true, verifyDescL2:true})
      }
  }

  SelectRuneTF = () => {
    if(this.state.verifyDescL3 == false){
      this.setState({showRunasPrecisaoList2: false,
        showRunasPrecisaoList3:true,
        buttonDefaultG2: imgTF, RunaPrecisao2: 'TRIUNFO'})
      }else{
        this.setState({showRunasPrecisaoList2: false,
          buttonDefaultG2: imgTF, RunaPrecisao2: 'TRIUNFO'})
      }if(this.showDescTF == true){
        this.setState({showDescTF:false})
      }else{
        this.setState({showDescTF:true, verifyDescL2: true})
      }
  }

  SelectRunePE = () => {
    if(this.state.verifyDescL3 == false){
      this.setState({showRunasPrecisaoList2: false,
        showRunasPrecisaoList3:true,
        buttonDefaultG2: imgPE, RunaPrecisao2: 'PRESENÇA DE ESPÍRITO'})
      }else{
        this.setState({showRunasPrecisaoList2: false,
          buttonDefaultG2: imgPE, RunaPrecisao2: 'PRESENÇA DE ESPÍRITO'})
      }if(this.showDescPE == true){
        this.setState({showDescPE:false})
      }else{
        this.setState({showDescPE:true, verifyDescL2: true})
      }
  }

  ThirdListRunes = () => {
    if(this.state.showRunasPrecisaoList3 == true){
      this.setState({showRunasPrecisaoList3: false, showDescLE: false, showDescLT: false, showDescLL: false})
    }else{
      this.setState({showRunasPrecisaoList3: true, showRunasPrecisaoList4:false,  showDescLE: false, showDescLT: false, showDescLL: false})
    }
  }

  SelectRuneLE = () => {
    if(this.state.verifyDescL4 == false){
      this.setState({showRunasPrecisaoList3: false,
        showRunasPrecisaoList4:true,
        buttonDefaultG3: imgLE, RunaPrecisao3: 'LENDA: ESPONTANEIDADE'})
      }else{
        this.setState({showRunasPrecisaoList3: false,
          buttonDefaultG3: imgLE, RunaPrecisao3: 'LENDA: ESPONTANEIDADE'})
      }if(this.showDescLE == true){
        this.setState({showDescLE:false})
      }else{
        this.setState({showDescLE:true, verifyDescL3:true })
      }
  }

  SelectRuneLT = () => {
    if(this.state.verifyDescL4 == false){
      this.setState({showRunasPrecisaoList3: false,
        showRunasPrecisaoList4:true,
        buttonDefaultG3: imgLT, RunaPrecisao3: 'LENDA: TENACIDADE'})
      }else{
        this.setState({showRunasPrecisaoList3: false,
          buttonDefaultG3: imgLT, RunaPrecisao3: 'LENDA: TENACIDADE'})
      }if(this.showDescLT == true){
        this.setState({showDescLT:false})
      }else{
        this.setState({showDescLT:true, verifyDescL3:true })
      }
  }

  SelectRuneLL = () => {
    if(this.state.verifyDescL4 == false){
      this.setState({showRunasPrecisaoList3: false,
        showRunasPrecisaoList4:true,
        buttonDefaultG3: imgLL, RunaPrecisao3: 'LENDA: LINHAGEM'})
      }else{
        this.setState({showRunasPrecisaoList3: false,
          buttonDefaultG3: imgLL, RunaPrecisao3: 'LENDA: LINHAGEM'})
      }if(this.showDescLL == true){
        this.setState({showDescLL:false})
      }else{
        this.setState({showDescLL:true, verifyDescL3:true})
      }
  }

  FourthListRunes = () => {
    if(this.state.showRunasPrecisaoList4 == true){
      this.setState({showRunasPrecisaoList4: false, showDescGM: false, showDescDC: false, showDescAM: false})
    }else{
      this.setState({showRunasPrecisaoList4: true,  showDescGM: false, showDescDC: false, showDescAM: false})
    }
  }

  SelectRuneGM = () => {
    this.setState({showRunasPrecisaoList4: false,
      buttonDefaultG4: imgGM, RunaPrecisao4: 'GOLPE DE MISERICÓRDIA'})
    if(this.showDescGM == true){
      this.setState({showDescGM:false})
    }else{
      this.setState({showDescGM:true, verifyDescL4:true })
    }
  }

  SelectRuneDC = () => {
    this.setState({showRunasPrecisaoList4: false,
      buttonDefaultG4: imgDC, RunaPrecisao4: 'DILACERAR'})
    if(this.showDescDC == true){
      this.setState({showDescDC:false})
    }else{
      this.setState({showDescDC:true, verifyDescL4:true })
    }
  }

  SelectRuneAM = () => {
    this.setState({showRunasPrecisaoList4: false,
      buttonDefaultG4: imgAM, RunaPrecisao4: 'ATÉ A MORTE'})
    if(this.showDescAM == true){
      this.setState({showDescAM:false})
    }else{
      this.setState({showDescAM:true, verifyDescL4:true })
    }
  }
//#endregion end Runas Function

//#region Runas Secundary Function
  sendDataDominacaoSec = () => {
    if(this.state.RunaPrecisao1 === '' | this.state.RunaPrecisao2 === '' | this.state.RunaPrecisao3  === '' | this.state.RunaPrecisao4 === ''){
      Toast.show({
        text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
        position: 'top',
        type: 'danger',
        duration: 2250
      })
    }else{
      this.props.navigation.navigate('DominacaoSecScreen', {
        RunaSelect1: this.state.RunaPrecisao1,
        RunaSelect2: this.state.RunaPrecisao2,
        RunaSelect3: this.state.RunaPrecisao3,
        RunaSelect4: this.state.RunaPrecisao4,
        RunaType: this.state.pagType,
      });
      this.props.navigation.navigate('DominacaoSecScreen')
    }
  }

  sendDataFeiticariaSec = () => {
    if(this.state.RunaPrecisao1 === '' | this.state.RunaPrecisao2 === '' | this.state.RunaPrecisao3  === '' | this.state.RunaPrecisao4 === ''){
      Toast.show({
        text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
        position: 'top',
        type: 'danger',
        duration: 2250
      })
    }else{
      this.props.navigation.navigate('FeiticariaSecScreen', {
        RunaSelect1: this.state.RunaPrecisao1,
        RunaSelect2: this.state.RunaPrecisao2,
        RunaSelect3: this.state.RunaPrecisao3,
        RunaSelect4: this.state.RunaPrecisao4,
        RunaType: this.state.pagType,
      });
      this.props.navigation.navigate('FeiticariaSecScreen')
    }
  }

  sendDataDeterminacaoSec= () => {
    if(this.state.RunaPrecisao1 === '' | this.state.RunaPrecisao2 === '' | this.state.RunaPrecisao3  === '' | this.state.RunaPrecisao4 === ''){
      Toast.show({
        text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
        position: 'top',
        type: 'danger',
        duration: 2250
      })
    }else{
      this.props.navigation.navigate('DeterminacaoSecScreen', {
        RunaSelect1: this.state.RunaPrecisao1,
        RunaSelect2: this.state.RunaPrecisao2,
        RunaSelect3: this.state.RunaPrecisao3,
        RunaSelect4: this.state.RunaPrecisao4,
        RunaType: this.state.pagType,
      });
      this.props.navigation.navigate('DeterminacaoSecScreen')
    }
  }

  sendDataInspiracaoSec = () => {
    if(this.state.RunaPrecisao1 === '' | this.state.RunaPrecisao2 === '' | this.state.RunaPrecisao3  === '' | this.state.RunaPrecisao4 === ''){
      Toast.show({
        text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
        position: 'top',
        type: 'danger',
        duration: 2250
      })
    }else{
      this.props.navigation.navigate('InspiracaoSecScreen', {
        RunaSelect1: this.state.RunaPrecisao1,
        RunaSelect2: this.state.RunaPrecisao2,
        RunaSelect3: this.state.RunaPrecisao3,
        RunaSelect4: this.state.RunaPrecisao4,
        RunaType: this.state.pagType,
      });
      this.props.navigation.navigate('InspiracaoSecScreen')
    }
  }
//#endregion Runas Secundary Function

  render(){
    return(
      <ImageBackground style={PrecisaoStyle.imgBack} source={precisaoBack}>

      <Content style={PrecisaoStyle.backPrecisao}>
        <View style={PrecisaoStyle.containerRunes}>
          <View style={PrecisaoStyle.containerHeaderRune}>
            <Image style={PrecisaoStyle.containerHeaderImg} source={btnPrecisaoFooter} />
            <View style={PrecisaoStyle.containerHeaderText}>
              <Text style={PrecisaoStyle.headerTitle}>PRECISÃO</Text>
              <Text style={PrecisaoStyle.headerDesc}>Ataques aprimorados e sustentação de dano.</Text>
            </View>
          </View>

        <View style={PrecisaoStyle.containerRunesRow} >
          <Animatable.View style={{height:70}} animation='flipInY' duration={1200} delay={100}>
            <TouchableOpacity onPress={this.FirstListRunes}>
              <Image style={PrecisaoStyle.buttonImgDefault4}  source={this.state.buttonDefaultG1}/>
            </TouchableOpacity>
          </Animatable.View>

        { this.state.showDescPA ?

        <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL1}>
          <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalPA}>Pressione o Ataque</Text>
          <Text style={PrecisaoStyle.previewDesc}>Acertar um Campeão inimigo com 3 ataques básicos consecutivos...</Text>
          <Modal isVisible={this.state.isModalPA} onBackdropPress={() => this.setState({ isModalPA: false })}>
            <View style={PrecisaoStyle.containerModal}>
              <View style={PrecisaoStyle.buttonModal}>
                <Button transparent onPress={this._toggleModalPA}>
                  <Icon style={{color:'#e8a157'}} name='md-close' />
                </Button>
              </View>
              <Text style={PrecisaoStyle.titleModal}>Pressione o Ataque</Text>
              <Text style={PrecisaoStyle.textModal}>Acertar um Campeão inimigo com 3 ataques básicos consecutivos
              causa de 30 a 120 de Dano Adaptativo adicional (com base no nível) e o deixa vulnerável,
              aumentando o dano recebido de todas as fontes em 12% por 6s.</Text>
            </View>
          </Modal>
        </Animatable.View> : null }

        { this.state.showDescRF ?

        <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL1}>
          <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalRF}>Ritmo Fatal</Text>
          <Text style={PrecisaoStyle.previewDesc}>1.5s após causar dano a um Campeão, você ganha de 30...</Text>
          <Modal isVisible={this.state.isModalRF} onBackdropPress={() => this.setState({ isModalRF: false })}>
              <View style={PrecisaoStyle.containerModal}>
                <View style={PrecisaoStyle.buttonModal}>
                  <Button transparent onPress={this._toggleModalRF}>
                    <Icon style={{color:'#e8a157'}} name='md-close' />
                  </Button>
                </View>
              <Text style={PrecisaoStyle.titleModal}>Ritmo Fatal</Text>
              <Text style={PrecisaoStyle.textModal}>1.5s após causar dano a um Campeão, você ganha de 30 a 80% de
                Velocidade de Ataque (baseado no nível) por 3s. Atacar um Campeão estende o efeito para 6s.
                Tempo de Recarga: 10 s Ritmo Fatal permite que você exceda temporariamente a Velocidade de Ataque limite.</Text>
              </View>
          </Modal>
        </Animatable.View> : null }

        { this.state.showDescAP ?

          <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL1}>
            <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalAP}>Agilidade nos Pés</Text>
            <Text style={PrecisaoStyle.previewDesc}>Atacar e se movimentar gera acúmulos de Energia. Com...</Text>
            <Modal isVisible={this.state.isModalAP} onBackdropPress={() => this.setState({ isModalAP: false })}>
              <View style={PrecisaoStyle.containerModal}>
                <View style={PrecisaoStyle.buttonModal}>
                  <Button transparent onPress={this._toggleModalAP}>
                    <Icon style={{color:'#e8a157'}} name='md-close' />
                  </Button>
                </View>
              <Text style={PrecisaoStyle.titleModal}>Agilidade nos Pés</Text>
              <Text style={PrecisaoStyle.textModal}>Atacar e se movimentar gera acúmulos de Energia. Com 100 acúmulos, seu próximo ataque é Energizado.
              Ataques Energizados curam você em 5 a 50 (+0.10 de DdA adicional, +0.20 de PdH) e concedem +30% de Velocidade de Movimento por 1s.
              A cura é 60% tão eficaz quando usada em uma tropa.</Text>
              </View>
            </Modal>
          </Animatable.View> : null }

          { this.state.showDescCQ ?

          <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL1}>
            <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalCQ}>Conquistador</Text>
            <Text style={PrecisaoStyle.previewDesc}>Após 4 segundos em combate, seu primeiro ataque contra...</Text>
            <Modal isVisible={this.state.isModalCQ} onBackdropPress={() => this.setState({ isModalCQ: false })}>
              <View style={PrecisaoStyle.containerModal}>
                <View style={PrecisaoStyle.buttonModal}>
                  <Button transparent onPress={this._toggleModalCQ}>
                    <Icon style={{color:'#e8a157'}} name='md-close' />
                  </Button>
                </View>
              <Text style={PrecisaoStyle.titleModal}>Conquistador</Text>
              <Text style={PrecisaoStyle.textModal}>Após 4 segundos em combate, seu primeiro ataque contra um campeão inimigo lhe concede 10 a 35 de dda,
                com base no nível, por 3 segundos e converte 20% do seu dano a campeões em dano verdadeiro.</Text>
              </View>
            </Modal>
          </Animatable.View> : null }

          { this.state.showRunasPrecisaoList1 ?

          <Animatable.View style={PrecisaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
            <TouchableOpacity onPress={this.SelectRunePA}>
              <Image style={PrecisaoStyle.buttonImgSize4}  source={imgPA}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneRF}>
              <Image style={PrecisaoStyle.buttonImgSize4}  source={imgRF}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneAP}>
              <Image style={PrecisaoStyle.buttonImgSize4}  source={imgAP}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneCQ}>
              <Image style={PrecisaoStyle.buttonImgSize4}  source={imgCQ}/>
              </TouchableOpacity>
            </Animatable.View>

           : null}

          </View>

          <View style={PrecisaoStyle.containerRunesRow}>

          <Animatable.View style={{height:70}} animation='flipInY' duration={1200} delay={100}>
            <TouchableOpacity onPress={this.SecondListRunes}>
              <Image style={PrecisaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG2}/>
            </TouchableOpacity>
          </Animatable.View>

            { this.state.showDescCE ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL2}>
              <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalCE}>Cura Excessiva</Text>
              <Text style={PrecisaoStyle.previewDesc}>A cura excedente sobre você é convertida em um escud...</Text>
              <Modal isVisible={this.state.isModalCE} onBackdropPress={() => this.setState({ isModalCE: false })}>
                <View style={PrecisaoStyle.containerModal}>
                  <View style={PrecisaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalCE}>
                      <Icon style={{color:'#e8a157'}} name='md-close' />
                    </Button>
                  </View>
                  <Text style={PrecisaoStyle.titleModal}>Cura Excessiva</Text>
                  <Text style={PrecisaoStyle.textModal}>A cura excedente sobre você é convertida em um escudo de até 10% da sua Vida total + 10.
                  O escudo é gerado de 30% da sua cura excedente ou até 300% da cura excedente de aliados.</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

              { this.state.showDescTF ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL2}>
              <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalTF}>Triunfo</Text>
              <Text style={PrecisaoStyle.previewDesc}>Abates restauram 15% da sua Vida perdida e concedem 25...</Text>
              <Modal isVisible={this.state.isModalTF}  onBackdropPress={() => this.setState({ isModalTF: false })}>
                <View style={PrecisaoStyle.containerModal}>
                  <View style={PrecisaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalTF}>
                      <Icon style={{color:'#e8a157'}} name='md-close' />
                    </Button>
                  </View>
                  <Text style={PrecisaoStyle.titleModal}>Triunfo</Text>
                  <Text style={PrecisaoStyle.textModal}>Abates restauram 15% da sua Vida perdida e concedem 25 de ouro adicional.</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

            { this.state.showDescPE ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL2}>
              <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalPE}>Presença de Espírito</Text>
              <Text style={PrecisaoStyle.previewDesc}>Por 5s após subir de nível ou realizar um abate...</Text>
              <Modal isVisible={this.state.isModalPE} onBackdropPress={() => this.setState({ isModalPE: false })}>
                <View style={PrecisaoStyle.containerModal}>
                  <View style={PrecisaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalPE}>
                      <Icon style={{color:'#e8a157'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={PrecisaoStyle.titleModal}>Presença de Espírito</Text>
                <Text style={PrecisaoStyle.textModal}>Por 5s após subir de nível ou realizar um abate, qualquer Mana gasta é totalmente restaurada.</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

            { this.state.showRunasPrecisaoList2 ?

            <Animatable.View style={PrecisaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
              <TouchableOpacity onPress={this.SelectRuneCE}>
                <Image style={PrecisaoStyle.buttonImgSize}  source={imgCE}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneTF}>
                <Image style={PrecisaoStyle.buttonImgSize}  source={imgTF}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRunePE}>
                <Image style={PrecisaoStyle.buttonImgSize}  source={imgPE}/>
              </TouchableOpacity>
            </Animatable.View> : null}
          </View>

          <View style={PrecisaoStyle.containerRunesRow}>

            <Animatable.View style={{height:70}} animation='flipInY' duration={1200} delay={100}>
              <TouchableOpacity  onPress={this.ThirdListRunes}>
                <Image style={PrecisaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG3}/>
              </TouchableOpacity>
              </Animatable.View>

              { this.state.showDescLE ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL3}>
                <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalLE}>Lenda: Espontaneidade</Text>
                <Text style={PrecisaoStyle.previewDesc}>Recebe 3% de Velocidade de Ataque mais um adicional de...</Text>
                <Modal isVisible={this.state.isModalLE} onBackdropPress={() => this.setState({ isModalLE: false })}>
                  <View style={PrecisaoStyle.containerModal}>
                    <View style={PrecisaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalLE}>
                        <Icon style={{color:'#e8a157'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={PrecisaoStyle.titleModal}>Lenda: Espontaneidade</Text>
                    <Text style={PrecisaoStyle.textModal}>Recebe 3% de Velocidade de Ataque mais um adicional de 1.5% para cada acúmulo de Lenda (máx. de 10 acúmulos).
                    Ganha progresso em acúmulos de Lenda por cada abate de Campeão, monstro épico, monstro grande e tropa.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null }

              { this.state.showDescLT ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL3}>
                <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalLT}>Lenda: Tenacidade</Text>
                <Text style={PrecisaoStyle.previewDesc}>Recebe 5% de Tenacidade mais um adicional de 1.5% por...</Text>
                <Modal isVisible={this.state.isModalLT} onBackdropPress={() => this.setState({ isModalLT: false })}>
                  <View style={PrecisaoStyle.containerModal}>
                    <View style={PrecisaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalLT}>
                        <Icon style={{color:'#e8a157'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={PrecisaoStyle.titleModal}>Lenda: Tenacidade</Text>
                    <Text style={PrecisaoStyle.textModal}>Recebe 5% de Tenacidade mais um adicional de 1.5% por cada acúmulo de Lenda (máx. de 10 acúmulos).
                    Ganha progresso em acúmulos de Lenda por cada abate de Campeão, monstro épico, monstro grande e tropa.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null }

             { this.state.showDescLL ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL3}>
                <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalLL}>Lenda: Linhagem</Text>
                <Text style={PrecisaoStyle.previewDesc}>Ganha 0.8% de Roubo de Vida por cada acúmulo de Lenda...</Text>
                <Modal isVisible={this.state.isModalLL} onBackdropPress={() => this.setState({ isModalLL: false })}>
                  <View style={PrecisaoStyle.containerModal}>
                    <View style={PrecisaoStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalLL}>
                        <Icon style={{color:'#e8a157'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={PrecisaoStyle.titleModal}>Lenda: Linhagem</Text>
                    <Text style={PrecisaoStyle.textModal}>Ganha 0.8% de Roubo de Vida por cada acúmulo de Lenda (máx. de 10 acúmulos).
                    Ganha progresso em acúmulos de Lenda por cada abate de Campeão, monstro épico, monstro grande e tropa.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null}

             { this.state.showRunasPrecisaoList3 ?

            <Animatable.View style={PrecisaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
              <TouchableOpacity onPress={this.SelectRuneLE}>
                <Image style={PrecisaoStyle.buttonImgSize}  source={imgLE}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneLT}>
                <Image style={PrecisaoStyle.buttonImgSize}  source={imgLT}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneLL}>
                <Image style={PrecisaoStyle.buttonImgSize}  source={imgLL}/>
              </TouchableOpacity>
            </Animatable.View> : null }
           </View>

          <View style={PrecisaoStyle.containerRunesRow}>

          <Animatable.View  style={{height:70}} animation='flipInY' duration={1200} delay={100}>
            <TouchableOpacity onPress={this.FourthListRunes}>
              <Image style={PrecisaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG4}/>
            </TouchableOpacity>
          </Animatable.View>

          { this.state.showDescGM ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL4}>
              <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalGM}>Golpe de Misericórdia</Text>
              <Text style={PrecisaoStyle.previewDesc}>Causa 10% a mais de dano a Campeões que estejam com Vi...</Text>
              <Modal isVisible={this.state.isModalGM} onBackdropPress={() => this.setState({ isModalGM: false })}>
                <View style={PrecisaoStyle.containerModal}>
                  <View style={PrecisaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalGM}>
                      <Icon style={{color:'#e8a157'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={PrecisaoStyle.titleModal}>Golpe de Misericórdia</Text>
                <Text style={PrecisaoStyle.textModal}>Causa 10% a mais de dano a Campeões que estejam com Vida abaixo de 40%.
                  Além disso, abater Campeões concede um adicional adaptativo de 9 de Dano de Ataque ou 15 de Poder de Habilidade por 10s.</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

            { this.state.showDescDC ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL4}>
              <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalDC}>Dilacerar</Text>
              <Text style={PrecisaoStyle.previewDesc}>Causa até 4% a mais de dano a Campeões com 150 a...</Text>
              <Modal isVisible={this.state.isModalDC} onBackdropPress={() => this.setState({ isModalDC: false })}>
                <View style={PrecisaoStyle.containerModal}>
                  <View style={PrecisaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalDC}>
                      <Icon style={{color:'#e8a157'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={PrecisaoStyle.titleModal}>Dilacerar</Text>
                <Text style={PrecisaoStyle.textModal}>Causa até 4% a mais de dano a Campeões com 150 a mais de Vida máxima do que você, aumentando para 10% com 2000 a mais de Vida máxima.</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

             { this.state.showDescAM ?

             <Animatable.View animation='lightSpeedIn' duration={800} style={PrecisaoStyle.containerPreviewDescL4}>
              <Text style={PrecisaoStyle.titleDesc} onPress={this._toggleModalAM}>Até a Morte</Text>
              <Text style={PrecisaoStyle.previewDesc}>Causa de 5% a 12% a mais de dano a Campeões...</Text>
              <Modal isVisible={this.state.isModalAM} onBackdropPress={() => this.setState({ isModalAM: false })}>
                <View style={PrecisaoStyle.containerModal}>
                  <View style={PrecisaoStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalAM}>
                      <Icon style={{color:'#e8a157'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={PrecisaoStyle.titleModal}>Até a Morte</Text>
                <Text style={PrecisaoStyle.textModal}>Causa de 5% a 12% a mais de dano a Campeões enquanto sua Vida estiver abaixo de 60%. O dano máximo é atingido com 30% de Vida.</Text>
                </View>
              </Modal>
             </Animatable.View> : null }

             { this.state.showRunasPrecisaoList4 ?

             <Animatable.View style={PrecisaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
               <TouchableOpacity onPress={this.SelectRuneGM}>
                <Image style={PrecisaoStyle.buttonImgSize}  source={imgGM}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={this.SelectRuneDC}>
                <Image style={PrecisaoStyle.buttonImgSize}  source={imgDC}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={this.SelectRuneAM}>
                <Image style={PrecisaoStyle.buttonImgSize}  source={imgAM}/>
               </TouchableOpacity>
             </Animatable.View> : null }

           </View>
           <View style={{ flex:1, justifyContent:'center', marginTop:10}}>
              <AdMobBanner
                adSize="banner"
                adUnitID="ca-app-pub-1942019449408433/6706372136"
                onAdFailedToLoad={error => console.error(error)}/>
            </View>
        </View>

    </Content>



        <Footer>
          <FooterTab style={{backgroundColor:'rgba(0, 0, 0, 0.9)'}}>
            <Button onPress={() => this.sendDataDominacaoSec()}>
                <Image style={{height:30, width:30}} source={btnDominacaoFooter}/>
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

Precisao.navigationOptions = {
  header: null,
}

export default Precisao;


