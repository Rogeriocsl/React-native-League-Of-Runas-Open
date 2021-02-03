import React, {Component} from 'react';
import { View,  Image,  TouchableOpacity,  ImageBackground} from 'react-native';
import { Content, Text, Button, Footer, FooterTab, Icon, Toast } from 'native-base';
import * as Animatable from 'react-native-animatable';
import Modal from "react-native-modal";
import FeiticariaStyle from './feiticaria-style';
import { AdMobBanner } from 'react-native-admob';
import { btnDfF, imgIA, imgCM, imgIG, imgOA, imgFF,
  imgMN, imgTD, imgCL, imgFA, imgCH, imgCSA, imgTC, btnInspiracaoFooter, btnFeiticariaFooter,
  btnDeterminacaoFooter, btnDominacaoFooter, feiticariaBack, btnPrecisaoFooter,
} from '../imageProvider';

class Feiticaria extends Component {

  constructor(props){
    super(props);
    this.state ={
      verifyDesc:false, verifyDescL2:false, verifyDescL3:false, verifyDescL4:false,
      showDescIA:false, showDescCM:false, showDescCM:false, showDescOA:false, showDescFF:false, showDescMN:false,
      showDescTD:false, showDescCL:false, showDescFA:false, showDescCH:false, showDescCSA:false, showDescTC:false,
      isModalIA: false, isModalCM: false, isModalIG: false, isModalOA: false,  isModalFF: false, isModalMN: false,
      isModalTD: false, isModalCL: false, isModalFA: false, isModalCH: false, isModalCSA: false, isModalTC: false,
      showRunasFeiticariaList1:true, showRunasFeiticariaList2: false, showRunasFeiticariaList3: false,
      showRunasFeiticariaList4: false, buttonDefaultG1 : btnDfF, buttonDefaultG2 : btnDfF, buttonDefaultG3 : btnDfF,
      buttonDefaultG4 : btnDfF, RunaFeiticaria1: '', RunaFeiticaria2: '', RunaFeiticaria3: '', RunaFeiticaria4: '',
      pagType: 'Feiticaria'
    }
}

//#region Modal Function
  _toggleModalIA = () =>
    this.setState({ isModalIA: !this.state.isModalIA });

  _toggleModalCM = () =>
    this.setState({ isModalCM: !this.state.isModalCM });

  _toggleModalIG = () =>
    this.setState({ isModalIG: !this.state.isModalIG });

  _toggleModalOA = () =>
    this.setState({ isModalOA: !this.state.isModalOA });

  _toggleModalFF = () =>
    this.setState({ isModalFF: !this.state.isModalFF });

  _toggleModalMN = () =>
    this.setState({ isModalMN: !this.state.isModalMN });

  _toggleModalTD = () =>
    this.setState({ isModalTD: !this.state.isModalTD });

  _toggleModalCL = () =>
    this.setState({ isModalCL: !this.state.isModalCL });

  _toggleModalFA = () =>
    this.setState({ isModalFA: !this.state.isModalFA });

  _toggleModalCH = () =>
    this.setState({ isModalCH: !this.state.isModalCH });

  _toggleModalCSA = () =>
    this.setState({ isModalCSA: !this.state.isModalCSA });

  _toggleModalTC = () =>
    this.setState({ isModalTC: !this.state.isModalTC });

//#endregion end Modal Function

//#region Runas Function
  FirstListRunes = () => {
    if(this.state.showRunasFeiticariaList1 == true){
      this.setState({showRunasFeiticariaList1: false, showDescIA: false, showDescCM: false, showDescIG: false})
    }else{
      this.setState({showRunasFeiticariaList1: true, showRunasFeiticariaList2: false, showDescIA: false, showDescCM: false, showDescIG: false})
    }
  }

  SelectRuneIA = () => {
    if(this.state.verifyDescL2 == false){
    this.setState({showRunasFeiticariaList1: false,
      showRunasFeiticariaList2:true,
      buttonDefaultG1: imgIA, RunaFeiticaria1: 'INVOCAR AERY' })
    }else{
      this.setState({showRunasFeiticariaList1: false,
      buttonDefaultG1: imgIA, RunaFeiticaria1: 'INVOCAR AERY'})
    }if(this.showDescIA == true){
      this.setState({showDescIA:false})
    }else{
      this.setState({showDescIA:true})
      }
    }

  SelectRuneCM = () => {
    if(this.state.verifyDescL2 == false){
    this.setState({showRunasFeiticariaList1: false,
      showRunasFeiticariaList2:true,
      buttonDefaultG1: imgCM, RunaFeiticaria1: 'COMETA ARCANO'})
    }else{
      this.setState({showRunasFeiticariaList1: false,
      buttonDefaultG1: imgCM, RunaFeiticaria1: 'COMETA ARCANO'})
    }if(this.showDescCM == true){
      this.setState({showDescCM:false})
    }else{
      this.setState({showDescCM:true})
      }
    }

  SelectRuneIG = () => {
    if(this.state.verifyDescL2 == false){
      this.setState({showRunasFeiticariaList1: false,
        showRunasFeiticariaList2:true,
        buttonDefaultG1: imgIG, RunaFeiticaria1: 'ÍMPETO GRADUAL'})
      }else{
        this.setState({showRunasFeiticariaList1: false,
        buttonDefaultG1: imgIG, RunaFeiticaria1: 'ÍMPETO GRADUAL'})
      }if(this.showDescIG == true){
        this.setState({showDescIG:false})
      }else{
        this.setState({showDescIG:true})
        }
  }

  SecondListRunes = () => {
    if(this.state.showRunasFeiticariaList2 == true){
      this.setState({showRunasFeiticariaList2: false, showDescOA: false, showDescFF: false, showDescMN: false})
    }else{
      this.setState({showRunasFeiticariaList2: true, showRunasFeiticariaList3: false, showDescOA: false, showDescFF: false, showDescMN: false})
    }
  }

  SelectRuneOA = () => {
    if(this.state.verifyDescL3 == false){
      this.setState({showRunasFeiticariaList2: false,
        showRunasFeiticariaList3:true,
        buttonDefaultG2: imgOA, RunaFeiticaria2: 'ORBE ANULADOR'})
      }else{
        this.setState({showRunasFeiticariaList2: false,
          buttonDefaultG2: imgOA, RunaFeiticaria2: 'ORBE ANULADOR'})
      }if(this.showDescOA == true){
        this.setState({showDescOA:false})
      }else{
        this.setState({showDescOA:true, verifyDescL2:true})
      }
  }

  SelectRuneFF = () => {
    if(this.state.verifyDescL3 == false){
      this.setState({showRunasFeiticariaList2: false,
        showRunasFeiticariaList3:true,
        buttonDefaultG2: imgFF, RunaFeiticaria2: 'FAIXA DE FLUXO DE MANA'})
      }else{
        this.setState({showRunasFeiticariaList2: false,
          buttonDefaultG2: imgFF, RunaFeiticaria2: 'FAIXA DE FLUXO DE MANA'})
      }if(this.showDescFF == true){
        this.setState({showDescFF:false})
      }else{
        this.setState({showDescFF:true, verifyDescL2: true})
      }
  }

  SelectRuneMN = () => {
    if(this.state.verifyDescL3 == false){
      this.setState({showRunasFeiticariaList2: false,
        showRunasFeiticariaList3:true,
        buttonDefaultG2: imgMN, RunaFeiticaria2: 'MANTO DE NIMBUS'})
      }else{
        this.setState({showRunasFeiticariaList2: false,
          buttonDefaultG2: imgMN, RunaFeiticaria2: 'MANTO DE NIMBUS'})
      }if(this.showDescMN == true){
        this.setState({showDescMN:false})
      }else{
        this.setState({showDescMN:true, verifyDescL2: true})
      }
  }

  ThirdListRunes = () => {
    if(this.state.showRunasFeiticariaList3 == true){
      this.setState({showRunasFeiticariaList3: false, showDescTD: false, showDescCL: false, showDescFA: false})
    }else{
      this.setState({showRunasFeiticariaList3: true, showRunasFeiticariaList4:false,  showDescTD: false, showDescCL: false, showDescFA: false})
    }
  }

  SelectRuneTD = () => {
    if(this.state.verifyDescL4 == false){
      this.setState({showRunasFeiticariaList3: false,
        showRunasFeiticariaList4:true,
        buttonDefaultG3: imgTD, RunaFeiticaria3: 'TRANSCENDÊNCIA'})
      }else{
        this.setState({showRunasFeiticariaList3: false,
          buttonDefaultG3: imgTD, RunaFeiticaria3: 'TRANSCENDÊNCIA'})
      }if(this.showDescTD == true){
        this.setState({showDescTD:false})
      }else{
        this.setState({showDescTD:true, verifyDescL3:true })
      }
  }

  SelectRuneCL = () => {
    if(this.state.verifyDescL4 == false){
      this.setState({showRunasFeiticariaList3: false,
        showRunasFeiticariaList4:true,
        buttonDefaultG3: imgCL, RunaFeiticaria3: 'CELERIDADE'})
      }else{
        this.setState({showRunasFeiticariaList3: false,
          buttonDefaultG3: imgCL, RunaFeiticaria3: 'CELERIDADE'})
      }if(this.showDescCL == true){
        this.setState({showDescCL:false})
      }else{
        this.setState({showDescCL:true, verifyDescL3:true })
      }
  }

  SelectRuneFA = () => {
    if(this.state.verifyDescL4 == false){
      this.setState({showRunasFeiticariaList3: false,
        showRunasFeiticariaList4:true,
        buttonDefaultG3: imgFA, RunaFeiticaria3: 'FOCO ABSOLUTO'})
      }else{
        this.setState({showRunasFeiticariaList3: false,
          buttonDefaultG3: imgFA, RunaFeiticaria3: 'FOCO ABSOLUTO'})
      }if(this.showDescFA == true){
        this.setState({showDescFA:false})
      }else{
        this.setState({showDescFA:true, verifyDescL3:true})
      }
  }

  FourthListRunes = () => {
    if(this.state.showRunasFeiticariaList4 == true){
      this.setState({showRunasFeiticariaList4: false, showDescCH: false, showDescCSA: false, showDescTC: false})
    }else{
      this.setState({showRunasFeiticariaList4: true,  showDescCH: false, showDescCSA: false, showDescTC: false})
    }
  }

  SelectRuneCH = () => {
    this.setState({showRunasFeiticariaList4: false,
      buttonDefaultG4: imgCH, RunaFeiticaria4: 'CHAMUSCAR'})
    if(this.showDescCH == true){
      this.setState({showDescCH:false})
    }else{
      this.setState({showDescCH:true, verifyDescL4:true })
    }
  }

  SelectRuneCSA = () => {
    this.setState({showRunasFeiticariaList4: false,
      buttonDefaultG4: imgCSA, RunaFeiticaria4: 'CAMINHAR SOB AS ÁGUAS'})
    if(this.showDescCSA == true){
      this.setState({showDescCSA:false})
    }else{
      this.setState({showDescCSA:true, verifyDescL4:true })
    }
  }

  SelectRuneTC = () => {
    this.setState({showRunasFeiticariaList4: false,
      buttonDefaultG4: imgTC, RunaFeiticaria4: 'TEMPESTADE CRESCENTE'})
    if(this.showDescTC == true){
      this.setState({showDescTC:false})
    }else{
      this.setState({showDescTC:true, verifyDescL4:true })
    }
  }
//#endregion end Runas Function

//#region Runas Secundary Function
sendDataDominacaoSec = () => {
  if(this.state.RunaFeiticaria1 === '' | this.state.RunaFeiticaria2 === '' | this.state.RunaFeiticaria3  === '' | this.state.RunaFeiticaria4 === ''){
    Toast.show({
      text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
      position: 'top',
      type: 'danger',
      duration: 2250
    })
  }else{
    this.props.navigation.navigate('DominacaoSecScreen', {
      RunaSelect1: this.state.RunaFeiticaria1,
      RunaSelect2: this.state.RunaFeiticaria2,
      RunaSelect3: this.state.RunaFeiticaria3,
      RunaSelect4: this.state.RunaFeiticaria4,
      RunaType: this.state.pagType,
    });
    this.props.navigation.navigate('DominacaoSecScreen')
  }
}

sendDataPrecisaoSec = () => {
  if(this.state.RunaFeiticaria1 === '' | this.state.RunaFeiticaria2 === '' | this.state.RunaFeiticaria3  === '' | this.state.RunaFeiticaria4 === ''){
    Toast.show({
      text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
      position: 'top',
      type: 'danger',
      duration: 2250
    })
  }else{
    this.props.navigation.navigate('PrecisaoSecScreen', {
      RunaSelect1: this.state.RunaFeiticaria1,
      RunaSelect2: this.state.RunaFeiticaria2,
      RunaSelect3: this.state.RunaFeiticaria3,
      RunaSelect4: this.state.RunaFeiticaria4,
      RunaType: this.state.pagType,
    });
    this.props.navigation.navigate('PrecisaoSecScreen')
  }
}

sendDataDeterminacaoSec= () => {
  if(this.state.RunaFeiticaria1 === '' | this.state.RunaFeiticaria2 === '' | this.state.RunaFeiticaria3  === '' | this.state.RunaFeiticaria4 === ''){
    Toast.show({
      text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
      position: 'top',
      type: 'danger',
      duration: 2250
    })
  }else{
    this.props.navigation.navigate('DeterminacaoSecScreen', {
      RunaSelect1: this.state.RunaFeiticaria1,
      RunaSelect2: this.state.RunaFeiticaria2,
      RunaSelect3: this.state.RunaFeiticaria3,
      RunaSelect4: this.state.RunaFeiticaria4,
      RunaType: this.state.pagType,
    });
    this.props.navigation.navigate('DeterminacaoSecScreen')
  }
}

sendDataInspiracaoSec = () => {
  if(this.state.RunaFeiticaria1 === '' | this.state.RunaFeiticaria2 === '' | this.state.RunaFeiticaria3  === '' | this.state.RunaFeiticaria4 === ''){
    Toast.show({
      text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
      position: 'top',
      type: 'danger',
      duration: 2250
    })
  }else{
    this.props.navigation.navigate('InspiracaoSecScreen', {
      RunaSelect1: this.state.RunaFeiticaria1,
      RunaSelect2: this.state.RunaFeiticaria2,
      RunaSelect3: this.state.RunaFeiticaria3,
      RunaSelect4: this.state.RunaFeiticaria4,
      RunaType: this.state.pagType,
    });
    this.props.navigation.navigate('InspiracaoSecScreen')
  }
}
//#endregion Runas Secundary Function

  render(){
    return(
      <ImageBackground style={FeiticariaStyle.imgBack} source={feiticariaBack}>

      <Content style={FeiticariaStyle.backFeiticaria}>
        <View style={FeiticariaStyle.containerRunes}>
          <View style={FeiticariaStyle.containerHeaderRune}>
            <Image style={FeiticariaStyle.containerHeaderImg} source={btnFeiticariaFooter} />
            <View style={FeiticariaStyle.containerHeaderText}>
              <Text style={FeiticariaStyle.headerTitle}>FEITIÇARIA</Text>
              <Text style={FeiticariaStyle.headerDesc}>Habilidades fortalecidas e manipulação de recursos.</Text>
            </View>
          </View>

        <View style={FeiticariaStyle.containerRunesRow} >
          <Animatable.View style={{height:70}} animation='flipInY' duration={1200} delay={100}>
            <TouchableOpacity onPress={this.FirstListRunes}>
              <Image style={FeiticariaStyle.buttonImgDefault}  source={this.state.buttonDefaultG1}/>
            </TouchableOpacity>
          </Animatable.View>

        { this.state.showDescIA ?

        <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL1}>
          <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalIA}>Invocar Aery</Text>
          <Text style={FeiticariaStyle.previewDesc}>Seus ataques e habilidades enviam aery até um alvo...</Text>
          <Modal isVisible={this.state.isModalIA} onBackdropPress={() => this.setState({ isModalIA: false })}>
            <View style={FeiticariaStyle.containerModal}>
              <View style={FeiticariaStyle.buttonModal}>
                <Button transparent onPress={this._toggleModalIA}>
                  <Icon style={{color:'#3e7cc2'}} name='md-close' />
                </Button>
              </View>
              <Text style={FeiticariaStyle.titleModal}>Invocar Aery</Text>
              <Text style={FeiticariaStyle.textModal}>Seus ataques e habilidades enviam aery até um alvo, causando dano a inimigos ou
                protegendo aliados com um escudo. dano: de 20 a 60 com base no nível (+0.10 de pdh e +0.15 de dda adicional)
                escudo: de 30 a 80 com base no nível (+0.25 de pdh e +0.40 de dda adicional)
                aery não pode ser enviada novamente antes de retornar para você.</Text>
            </View>
          </Modal>
        </Animatable.View> : null }

        { this.state.showDescCM ?

        <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL1}>
          <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalCM}>Cometa Arcano</Text>
          <Text style={FeiticariaStyle.previewDesc}>Ao causar dano a um campeão com uma habilidade, um cometa...</Text>
          <Modal isVisible={this.state.isModalCM} onBackdropPress={() => this.setState({ isModalCM: false })}>
              <View style={FeiticariaStyle.containerModal}>
                <View style={FeiticariaStyle.buttonModal}>
                  <Button transparent onPress={this._toggleModalCM}>
                    <Icon style={{color:'#3e7cc2'}} name='md-close' />
                  </Button>
                </View>
              <Text style={FeiticariaStyle.titleModal}>Cometa Arcano</Text>
              <Text style={FeiticariaStyle.textModal}>Ao causar dano a um campeão com uma habilidade, um cometa é lançado onde
                ele estiver ou, se cometa arcano estiver em tempo de recarga, o tempo é reduzido.
                Dano adaptativo: de 30 a 100. com base no nível (+0.20 de pdh e +0.35 de dda adicional)
                Tempo de recarga: 20 - 8s
                Tempo de recarga:alvo único: 20%. área de ação: 10%. dano ao longo do tempo: 5%.</Text>
              </View>
          </Modal>
        </Animatable.View> : null }

        { this.state.showDescIG ?

          <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL1}>
            <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalIG}>Ímpeto Gradual</Text>
            <Text style={FeiticariaStyle.previewDesc}>Atingir um campeão inimigo com 3 ataques ou habilidades separ...</Text>
            <Modal isVisible={this.state.isModalIG} onBackdropPress={() => this.setState({ isModalIG: false })}>
              <View style={FeiticariaStyle.containerModal}>
                <View style={FeiticariaStyle.buttonModal}>
                  <Button transparent onPress={this._toggleModalIG}>
                    <Icon style={{color:'#3e7cc2'}} name='md-close' />
                  </Button>
                </View>
              <Text style={FeiticariaStyle.titleModal}>Ímpeto Gradual</Text>
              <Text style={FeiticariaStyle.textModal}>Atingir um campeão inimigo com 3 ataques ou habilidades separadas dentro de 3s
                concede de 15 a 40% de velocidade de movimento com base no nível. duração: 3s tempo de recarga: 15s corpo a corpo: além
                disso, recebe 75% de resistência à redução de velocidade enquanto durar o efeito.</Text>
              </View>
            </Modal>
          </Animatable.View> : null }


          { this.state.showRunasFeiticariaList1 ?

          <Animatable.View style={FeiticariaStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
            <TouchableOpacity onPress={this.SelectRuneIA}>
              <Image style={FeiticariaStyle.buttonImgSize}  source={imgIA}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneCM}>
              <Image style={FeiticariaStyle.buttonImgSize}  source={imgCM}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneIG}>
              <Image style={FeiticariaStyle.buttonImgSize}  source={imgIG}/>
              </TouchableOpacity>
            </Animatable.View>

           : null}

          </View>

          <View style={FeiticariaStyle.containerRunesRow}>

          <Animatable.View style={{height:70}} animation='flipInY' duration={1200} delay={100}>
            <TouchableOpacity onPress={this.SecondListRunes}>
              <Image style={FeiticariaStyle.buttonImgDefault}  source={this.state.buttonDefaultG2}/>
            </TouchableOpacity>
          </Animatable.View>

            { this.state.showDescOA ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL2}>
              <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalOA}>Orbe Anulador</Text>
              <Text style={FeiticariaStyle.previewDesc}>Ao receber dano mágico que reduziria sua vida a menos de...</Text>
              <Modal isVisible={this.state.isModalOA} onBackdropPress={() => this.setState({ isModalOA: false })}>
                <View style={FeiticariaStyle.containerModal}>
                  <View style={FeiticariaStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalOA}>
                      <Icon style={{color:'#3e7cc2'}} name='md-close' />
                    </Button>
                  </View>
                  <Text style={FeiticariaStyle.titleModal}>Orbe Anulador</Text>
                  <Text style={FeiticariaStyle.textModal}>Ao receber dano mágico que reduziria sua vida a menos de 30%, você ganha um escudo
                    que absorve 40 - 120 de dano mágico com base no nível (+0.10 de pdh e +0.15 de dda adicional) por 4s. tempo de
                    recarga: 60s.</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

              { this.state.showDescFF ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL2}>
              <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalFF}>Faixa De Fluxo De Mana</Text>
              <Text style={FeiticariaStyle.previewDesc}>A cada 60s, a próxima habilidade utilizada tem seu custo...</Text>
              <Modal isVisible={this.state.isModalFF}  onBackdropPress={() => this.setState({ isModalFF: false })}>
                <View style={FeiticariaStyle.containerModal}>
                  <View style={FeiticariaStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalFF}>
                      <Icon style={{color:'#3e7cc2'}} name='md-close' />
                    </Button>
                  </View>
                  <Text style={FeiticariaStyle.titleModal}>Faixa De Fluxo De Mana</Text>
                  <Text style={FeiticariaStyle.textModal}>A cada 60s, a próxima habilidade utilizada tem seu custo de mana ou de energia recuperado e restaura
                    8% da sua mana ou energia perdida.</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

            { this.state.showDescMN ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL2}>
              <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalMN}>Manto de Nimbus</Text>
              <Text style={FeiticariaStyle.previewDesc}>Logo após a conjuração da sua ultimate, concede um aumen...</Text>
              <Modal isVisible={this.state.isModalMN} onBackdropPress={() => this.setState({ isModalMN: false })}>
                <View style={FeiticariaStyle.containerModal}>
                  <View style={FeiticariaStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalMN}>
                      <Icon style={{color:'#3e7cc2'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={FeiticariaStyle.titleModal}>Manto de Nimbus</Text>
                <Text style={FeiticariaStyle.textModal}>Logo após a conjuração da sua ultimate, concede um aumento de velocidade de movimento
                  que decai gradualmente, dura 2.5s e permite atravessar unidades. aumento: 100 de velocidade de movimento tempo de recarga: 60s,
                  diminuído com a redução de tempo de recarga.</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

            { this.state.showRunasFeiticariaList2 ?

            <Animatable.View style={FeiticariaStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
              <TouchableOpacity onPress={this.SelectRuneOA}>
                <Image style={FeiticariaStyle.buttonImgSize}  source={imgOA}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneFF}>
                <Image style={FeiticariaStyle.buttonImgSize}  source={imgFF}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneMN}>
                <Image style={FeiticariaStyle.buttonImgSize}  source={imgMN}/>
              </TouchableOpacity>
            </Animatable.View> : null}
          </View>

          <View style={FeiticariaStyle.containerRunesRow}>

            <Animatable.View style={{height:70}} animation='flipInY' duration={1200} delay={100}>
              <TouchableOpacity  onPress={this.ThirdListRunes}>
                <Image style={FeiticariaStyle.buttonImgDefault}  source={this.state.buttonDefaultG3}/>
              </TouchableOpacity>
              </Animatable.View>

              { this.state.showDescTD ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL3}>
                <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalTD}>Transcendência</Text>
                <Text style={FeiticariaStyle.previewDesc}>Recebe 3% de Velocidade de Ataque mais um adicional de...</Text>
                <Modal isVisible={this.state.isModalTD} onBackdropPress={() => this.setState({ isModalTD: false })}>
                  <View style={FeiticariaStyle.containerModal}>
                    <View style={FeiticariaStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalTD}>
                        <Icon style={{color:'#3e7cc2'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={FeiticariaStyle.titleModal}>TRANSCENDÊNCIA</Text>
                    <Text style={FeiticariaStyle.textModal}>Recebe 3% de Velocidade de Ataque mais um adicional de 1.5% para cada acúmulo de Lenda (máx. de 10 acúmulos).
                    Ganha progresso em acúmulos de Lenda por cada abate de Campeão, monstro épico, monstro grande e tropa.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null }

              { this.state.showDescCL ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL3}>
                <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalCL}>Celeridade</Text>
                <Text style={FeiticariaStyle.previewDesc}>Recebe 10% de redução do tempo de recarga quando...</Text>
                <Modal isVisible={this.state.isModalCL} onBackdropPress={() => this.setState({ isModalCL: false })}>
                  <View style={FeiticariaStyle.containerModal}>
                    <View style={FeiticariaStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalCL}>
                        <Icon style={{color:'#3e7cc2'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={FeiticariaStyle.titleModal}>Celeridade</Text>
                    <Text style={FeiticariaStyle.textModal}>Recebe 10% de redução do tempo de recarga quando atinge o nível 10.
                      cada percentual de rtr acima do limite de rtr é convertido em um adicional adaptativo de 1.2 de dano de ataque
                      ou 2 de poder de habilidade.</Text>
                  </View>
                </Modal>
              </Animatable.View> : null }

             { this.state.showDescFA ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL3}>
                <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalFA}>Foco absoluto</Text>
                <Text style={FeiticariaStyle.previewDesc}>Acima de 70% de vida, recebe um adicional adaptativo de...</Text>
                <Modal isVisible={this.state.isModalFA} onBackdropPress={() => this.setState({ isModalFA: false })}>
                  <View style={FeiticariaStyle.containerModal}>
                    <View style={FeiticariaStyle.buttonModal}>
                      <Button transparent onPress={this._toggleModalFA}>
                        <Icon style={{color:'#3e7cc2'}} name='md-close' />
                      </Button>
                    </View>
                    <Text style={FeiticariaStyle.titleModal}>Foco absoluto</Text>
                    <Text style={FeiticariaStyle.textModal}>Acima de 70% de vida, recebe um adicional adaptativo de até 24 de dano de ataque ou 40
                      de poder de habilidade (com base no nível)</Text>
                  </View>
                </Modal>
              </Animatable.View> : null}

             { this.state.showRunasFeiticariaList3 ?

            <Animatable.View style={FeiticariaStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
              <TouchableOpacity onPress={this.SelectRuneTD}>
                <Image style={FeiticariaStyle.buttonImgSize}  source={imgTD}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneCL}>
                <Image style={FeiticariaStyle.buttonImgSize}  source={imgCL}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneFA}>
                <Image style={FeiticariaStyle.buttonImgSize}  source={imgFA}/>
              </TouchableOpacity>
            </Animatable.View> : null }
           </View>

          <View style={FeiticariaStyle.containerRunesRow}>

          <Animatable.View  style={{height:70}} animation='flipInY' duration={1200} delay={100}>
            <TouchableOpacity onPress={this.FourthListRunes}>
              <Image style={FeiticariaStyle.buttonImgDefault}  source={this.state.buttonDefaultG4}/>
            </TouchableOpacity>
          </Animatable.View>

          { this.state.showDescCH ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL4}>
              <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalCH}>Chamuscar</Text>
              <Text style={FeiticariaStyle.previewDesc}>Apróxima habilidade que atingir o alvo ateia fogo a campeões...</Text>
              <Modal isVisible={this.state.isModalCH} onBackdropPress={() => this.setState({ isModalCH: false })}>
                <View style={FeiticariaStyle.containerModal}>
                  <View style={FeiticariaStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalCH}>
                      <Icon style={{color:'#3e7cc2'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={FeiticariaStyle.titleModal}>Chamuscar</Text>
                <Text style={FeiticariaStyle.textModal}>Apróxima habilidade que atingir o alvo ateia fogo a campeões, causando de 30 a 60
                  de dano mágico adicional com base no nível após 1s. tempo de recarga: 20s.</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

            { this.state.showDescCSA ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL4}>
              <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalCSA}>Caminhar Sob As Águas</Text>
              <Text style={FeiticariaStyle.previewDesc}>Recebe 25 de velocidade de movimento e um adicional...</Text>
              <Modal isVisible={this.state.isModalCSA} onBackdropPress={() => this.setState({ isModalCSA: false })}>
                <View style={FeiticariaStyle.containerModal}>
                  <View style={FeiticariaStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalCSA}>
                      <Icon style={{color:'#3e7cc2'}} name='md-close' />
                    </Button>
                  </View>
                <Text style={FeiticariaStyle.titleModal}>Caminhar Sob As Águas</Text>
                <Text style={FeiticariaStyle.textModal}>Recebe 25 de velocidade de movimento e um adicional adaptativo de até 18 de dano de
                  ataque ou 30 de poder de habilidade (com base no nível) enquanto estiver no rio.</Text>
                </View>
              </Modal>
            </Animatable.View> : null }

             { this.state.showDescTC ?

             <Animatable.View animation='lightSpeedIn' duration={800} style={FeiticariaStyle.containerPreviewDescL4}>
              <Text style={FeiticariaStyle.titleDesc} onPress={this._toggleModalTC}>Tempestade Crescente</Text>
              <Text style={FeiticariaStyle.previewDesc}>A cada 10 mins, recebe pdh ou dda adaptativos...</Text>
              <Modal isVisible={this.state.isModalTC} onBackdropPress={() => this.setState({ isModalTC: false })}>
                <View style={FeiticariaStyle.containerModal}>
                  <View style={FeiticariaStyle.buttonModal}>
                    <Button transparent onPress={this._toggleModalTC}>
                      <Icon style={{color:'#3e7cc2'}} name='md-close' />
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

             { this.state.showRunasFeiticariaList4 ?

             <Animatable.View style={FeiticariaStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
               <TouchableOpacity onPress={this.SelectRuneCH}>
                <Image style={FeiticariaStyle.buttonImgSize}  source={imgCH}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={this.SelectRuneCSA}>
                <Image style={FeiticariaStyle.buttonImgSize}  source={imgCSA}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={this.SelectRuneTC}>
                <Image style={FeiticariaStyle.buttonImgSize}  source={imgTC}/>
               </TouchableOpacity>
             </Animatable.View> : null }

           </View>
           <View style={{flex:1, justifyContent:'center', marginTop:10}}>
              <AdMobBanner
                adSize="banner"
                adUnitID="ca-app-pub-1942019449408433/6138825103"
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

Feiticaria.navigationOptions = {
  header: null,
}

export default Feiticaria;


