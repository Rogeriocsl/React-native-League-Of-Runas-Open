import React, {Component} from 'react';
import { View,  Image,  TouchableOpacity,  ImageBackground} from 'react-native';
import { Content, Text, Button, Footer, FooterTab, Icon, Toast } from 'native-base';
import * as Animatable from 'react-native-animatable';
import Modal from "react-native-modal";
import InspiracaoStyle from './inspiracao-style';
import { AdMobBanner } from 'react-native-admob';
import { btnDfI, imgAG, imgCP, imgLFD, imgFH, imgBM,
  imgSP, imgMF, imgPT, imgEB, imgPC, imgVA, imgTDT, btnInspiracaoFooter, btnFeiticariaFooter,
  btnPrecisaoFooter, btnDeterminacaoFooter, btnDominacaoFooter, inspiracaoBack,
} from '../imageProvider';

class Inspiracao extends Component {

  constructor(props){
    super(props);
    this.state ={
      verifyDesc:false, verifyDescL2:false, verifyDescL3:false, verifyDescL4:false,
      showDescAG:false, showDescCP:false, showDescLFD:false, showDescFH:false, showDescBM:false, showDescSP:false,
      showDescMF:false, showDescPT:false, showDescEB:false, showDescPC:false, showDescVA:false, showDescTDT:false,
      isModalAG: false, isModalCP: false, isModalLFD: false, isModalFH: false,  isModalBM: false, isModalSP: false,
      isModalMF: false, isModalPT: false, isModalEB: false, isModalPC: false, isModalVA: false, isModalTDT: false,
      showRunasInspiracaoList1:true, showRunasInspiracaoList2: false, showRunasInspiracaoList3: false,
      showRunasInspiracaoList4: false, buttonDefaultG1 : btnDfI, buttonDefaultG2 : btnDfI, buttonDefaultG3 : btnDfI,
      buttonDefaultG4 : btnDfI, RunaInspiracao1: '', RunaInspiracao2: '', RunaInspiracao3: '', RunaInspiracao4: '',
      pagType: 'Inspiracao'
    }
}

//#region Modal Function
  _toggleModalAG = () =>
    this.setState({ isModalAG: !this.state.isModalAG });

  _toggleModalCP = () =>
    this.setState({ isModalCP: !this.state.isModalCP });

  _toggleModalLFD = () =>
    this.setState({ isModalLFD: !this.state.isModalLFD });

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

//#endregion end Modal Function

//#region Runas Function
  FirstListRunes = () => {
    if(this.state.showRunasInspiracaoList1 == true){
      this.setState({showRunasInspiracaoList1: false, showDescAG: false, showDescCP: false, showDescLFD: false})
    }else{
      this.setState({showRunasInspiracaoList1: true, showRunasInspiracaoList2: false, showDescAG: false, showDescCP: false, showDescLFD: false})
    }
  }

  SelectRuneAG = () => {
    if(this.state.verifyDescL2 == false){
    this.setState({showRunasInspiracaoList1: false,
      showRunasInspiracaoList2:true,
      buttonDefaultG1: imgAG, RunaInspiracao1: 'APRIMORAMENTO GLACIAL' })
    }else{
      this.setState({showRunasInspiracaoList1: false,
      buttonDefaultG1: imgAG, RunaInspiracao1: 'APRIMORAMENTO GLACIAL'})
    }if(this.showDescAG == true){
      this.setState({showDescAG:false})
    }else{
      this.setState({showDescAG:true})
      }
    }

  SelectRuneCP = () => {
    if(this.state.verifyDescL2 == false){
    this.setState({showRunasInspiracaoList1: false,
      showRunasInspiracaoList2:true,
      buttonDefaultG1: imgCP, RunaInspiracao1: 'CLEPTOMANCIA'})
    }else{
      this.setState({showRunasInspiracaoList1: false,
      buttonDefaultG1: imgCP, RunaInspiracao1: 'CLEPTOMANCIA'})
    }if(this.showDescCP == true){
      this.setState({showDescCP:false})
    }else{
      this.setState({showDescCP:true})
      }
    }

  SelectRuneLFD = () => {
    if(this.state.verifyDescL2 == false){
      this.setState({showRunasInspiracaoList1: false,
        showRunasInspiracaoList2:true,
        buttonDefaultG1: imgLFD, RunaInspiracao1: 'LIVRO DE FEITIÇOS DESLACRADO'})
      }else{
        this.setState({showRunasInspiracaoList1: false,
        buttonDefaultG1: imgLFD, RunaInspiracao1: 'LIVRO DE FEITIÇOS DESLACRADO'})
      }if(this.showDescLFD == true){
        this.setState({showDescLFD:false})
      }else{
        this.setState({showDescLFD:true})
        }
  }

  SecondListRunes = () => {
    if(this.state.showRunasInspiracaoList2 == true){
      this.setState({showRunasInspiracaoList2: false, showDescFH: false, showDescBM: false, showDescSP: false})
    }else{
      this.setState({showRunasInspiracaoList2: true, showRunasInspiracaoList3: false, showDescFH: false, showDescBM: false, showDescSP: false})
    }
  }

  SelectRuneFH = () => {
    if(this.state.verifyDescL3 == false){
      this.setState({showRunasInspiracaoList2: false,
        showRunasInspiracaoList3:true,
        buttonDefaultG2: imgFH, RunaInspiracao2: 'FLASHTRAÇÃO HEXTEC'})
      }else{
        this.setState({showRunasInspiracaoList2: false,
          buttonDefaultG2: imgFH, RunaInspiracao2: 'FLASHTRAÇÃO HEXTEC'})
      }if(this.showDescFH == true){
        this.setState({showDescFH:false})
      }else{
        this.setState({showDescFH:true, verifyDescL2:true})
      }
  }

  SelectRuneBM = () => {
    if(this.state.verifyDescL3 == false){
      this.setState({showRunasInspiracaoList2: false,
        showRunasInspiracaoList3:true,
        buttonDefaultG2: imgBM, RunaInspiracao2: 'CALÇADOS MÁGICOS'})
      }else{
        this.setState({showRunasInspiracaoList2: false,
          buttonDefaultG2: imgBM, RunaInspiracao2: 'CALÇADOS MÁGICOS'})
      }if(this.showDescBM == true){
        this.setState({showDescBM:false})
      }else{
        this.setState({showDescBM:true, verifyDescL2: true})
      }
  }

  SelectRuneSP = () => {
    if(this.state.verifyDescL3 == false){
      this.setState({showRunasInspiracaoList2: false,
        showRunasInspiracaoList3:true,
        buttonDefaultG2: imgSP, RunaInspiracao2: 'SINCRONIA PERFEITA'})
      }else{
        this.setState({showRunasInspiracaoList2: false,
          buttonDefaultG2: imgSP, RunaInspiracao2: 'SINCRONIA PERFEITA'})
      }if(this.showDescSP == true){
        this.setState({showDescSP:false})
      }else{
        this.setState({showDescSP:true, verifyDescL2: true})
      }
  }

  ThirdListRunes = () => {
    if(this.state.showRunasInspiracaoList3 == true){
      this.setState({showRunasInspiracaoList3: false, showDescMF: false, showDescPT: false, showDescEB: false})
    }else{
      this.setState({showRunasInspiracaoList3: true, showRunasInspiracaoList4:false,  showDescMF: false, showDescPT: false, showDescEB: false})
    }
  }

  SelectRuneMF = () => {
    if(this.state.verifyDescL4 == false){
      this.setState({showRunasInspiracaoList3: false,
        showRunasInspiracaoList4:true,
        buttonDefaultG3: imgMF, RunaInspiracao3: 'MERCADO DO FUTURO'})
      }else{
        this.setState({showRunasInspiracaoList3: false,
          buttonDefaultG3: imgMF, RunaInspiracao3: 'MERCADO DO FUTURO'})
      }if(this.showDescMF == true){
        this.setState({showDescMF:false})
      }else{
        this.setState({showDescMF:true, verifyDescL3:true })
      }
  }

  SelectRunePT = () => {
    if(this.state.verifyDescL4 == false){
      this.setState({showRunasInspiracaoList3: false,
        showRunasInspiracaoList4:true,
        buttonDefaultG3: imgPT, RunaInspiracao3: 'PULVERIZADOR DE TROPAS'})
      }else{
        this.setState({showRunasInspiracaoList3: false,
          buttonDefaultG3: imgPT, RunaInspiracao3: 'PULVERIZADOR DE TROPAS'})
      }if(this.showDescPT == true){
        this.setState({showDescPT:false})
      }else{
        this.setState({showDescPT:true, verifyDescL3:true })
      }
  }

  SelectRuneEB = () => {
    if(this.state.verifyDescL4 == false){
      this.setState({showRunasInspiracaoList3: false,
        showRunasInspiracaoList4:true,
        buttonDefaultG3: imgEB, RunaInspiracao3: 'ENTREGA DE BISCOITOS'})
      }else{
        this.setState({showRunasInspiracaoList3: false,
          buttonDefaultG3: imgEB, RunaInspiracao3: 'ENTREGA DE BISCOITOS'})
      }if(this.showDescEB == true){
        this.setState({showDescEB:false})
      }else{
        this.setState({showDescEB:true, verifyDescL3:true})
      }
  }

  FourthListRunes = () => {
    if(this.state.showRunasInspiracaoList4 == true){
      this.setState({showRunasInspiracaoList4: false, showDescPC: false, showDescVA: false, showDescTDT: false})
    }else{
      this.setState({showRunasInspiracaoList4: true,  showDescPC: false, showDescVA: false, showDescTDT: false})
    }
  }

  SelectRunePC = () => {
    this.setState({showRunasInspiracaoList4: false,
      buttonDefaultG4: imgPC, RunaInspiracao4: 'PERSPICÁCIA CÓSMICA'})
    if(this.showDescPC == true){
      this.setState({showDescPC:false})
    }else{
      this.setState({showDescPC:true, verifyDescL4:true })
    }
  }

  SelectRuneVA = () => {
    this.setState({showRunasInspiracaoList4: false,
      buttonDefaultG4: imgVA, RunaInspiracao4: 'VELOCIDADE DE APROXIMAÇÃO'})
    if(this.showDescVA == true){
      this.setState({showDescVA:false})
    }else{
      this.setState({showDescVA:true, verifyDescL4:true })
    }
  }

  SelectRuneTDT = () => {
    this.setState({showRunasInspiracaoList4: false,
      buttonDefaultG4: imgTDT, RunaInspiracao4: 'TÔNICO DE DISTORÇÃO NO TEMPO'})
    if(this.showDescTDT == true){
      this.setState({showDescTDT:false})
    }else{
      this.setState({showDescTDT:true, verifyDescL4:true })
    }
  }
//#endregion end Runas Function

//#region Runas Secundary Function
sendDataDominacaoSec = () => {
  if(this.state.RunaInspiracao1 === '' | this.state.RunaInspiracao2 === '' | this.state.RunaInspiracao3  === '' | this.state.RunaInspiracao4 === ''){
    Toast.show({
      text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
      position: 'top',
      type: 'danger',
      duration: 2250
    })
  }else{
    this.props.navigation.navigate('DominacaoSecScreen', {
      RunaSelect1: this.state.RunaInspiracao1,
      RunaSelect2: this.state.RunaInspiracao2,
      RunaSelect3: this.state.RunaInspiracao3,
      RunaSelect4: this.state.RunaInspiracao4,
      RunaType: this.state.pagType,
    });
    this.props.navigation.navigate('DominacaoSecScreen')
  }
}

sendDataPrecisaoSec = () => {
  if(this.state.RunaInspiracao1 === '' | this.state.RunaInspiracao2 === '' | this.state.RunaInspiracao3  === '' | this.state.RunaInspiracao4 === ''){
    Toast.show({
      text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
      position: 'top',
      type: 'danger',
      duration: 2250
    })
  }else{
    this.props.navigation.navigate('PrecisaoSecScreen', {
      RunaSelect1: this.state.RunaInspiracao1,
      RunaSelect2: this.state.RunaInspiracao2,
      RunaSelect3: this.state.RunaInspiracao3,
      RunaSelect4: this.state.RunaInspiracao4,
      RunaType: this.state.pagType,
    });
    this.props.navigation.navigate('PrecisaoSecScreen')
  }
}

sendDataDeterminacaoSec= () => {
  if(this.state.RunaInspiracao1 === '' | this.state.RunaInspiracao2 === '' | this.state.RunaInspiracao3  === '' | this.state.RunaInspiracao4 === ''){
    Toast.show({
      text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
      position: 'top',
      type: 'danger',
      duration: 2250
    })
  }else{
    this.props.navigation.navigate('DeterminacaoSecScreen', {
      RunaSelect1: this.state.RunaInspiracao1,
      RunaSelect2: this.state.RunaInspiracao2,
      RunaSelect3: this.state.RunaInspiracao3,
      RunaSelect4: this.state.RunaInspiracao4,
      RunaType: this.state.pagType,
    });
    this.props.navigation.navigate('DeterminacaoSecScreen')
  }
}

sendDataFeiticariaSec = () => {
  if(this.state.RunaInspiracao1 === '' | this.state.RunaInspiracao2 === '' | this.state.RunaInspiracao3  === '' | this.state.RunaInspiracao4 === ''){
    Toast.show({
      text: 'Você deve escolher suas runas, antes de ir para uma pagina secundaria.',
      position: 'top',
      type: 'danger',
      duration: 2250
    })
  }else{
    this.props.navigation.navigate('FeiticariaSecScreen', {
      RunaSelect1: this.state.RunaInspiracao1,
      RunaSelect2: this.state.RunaInspiracao2,
      RunaSelect3: this.state.RunaInspiracao3,
      RunaSelect4: this.state.RunaInspiracao4,
      RunaType: this.state.pagType,
    });
    this.props.navigation.navigate('FeiticariaSecScreen')
  }
}
//#endregion Runas Secundary Function

  render(){
    return(
      <ImageBackground style={InspiracaoStyle.imgBack} source={inspiracaoBack}>

      <Content style={InspiracaoStyle.backInspiracao}>
        <View style={InspiracaoStyle.containerRunes}>
          <View style={InspiracaoStyle.containerHeaderRune}>
            <Image style={InspiracaoStyle.containerHeaderImg} source={btnInspiracaoFooter} />
            <View style={InspiracaoStyle.containerHeaderText}>
              <Text style={InspiracaoStyle.headerTitle}>INSPIRAÇÃO</Text>
              <Text style={InspiracaoStyle.headerDesc}>Ferramentas criativas e distorção das regras.</Text>
            </View>
          </View>

        <View style={InspiracaoStyle.containerRunesRow} >
          <Animatable.View style={{height:70}} animation='flipInY' duration={1200} delay={100}>
            <TouchableOpacity onPress={this.FirstListRunes}>
              <Image style={InspiracaoStyle.buttonImgDefault4}  source={this.state.buttonDefaultG1}/>
            </TouchableOpacity>
          </Animatable.View>

        { this.state.showDescAG ?

        <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL1}>
          <Text style={InspiracaoStyle.titleDesc} onPress={this._toggleModalAG}>Aprimoramento Glacial</Text>
          <Text style={InspiracaoStyle.previewDesc}>Usar ataques básicos contra um Campeão reduz a vel...</Text>
          <Modal isVisible={this.state.isModalAG} onBackdropPress={() => this.setState({ isModalAG: false })}>
            <View style={InspiracaoStyle.containerModal}>
              <View style={InspiracaoStyle.buttonModal}>
                <Button transparent onPress={this._toggleModalAG}>
                  <Icon style={{color:'#3e7cc2'}} name='md-close' />
                </Button>
              </View>
              <Text style={InspiracaoStyle.titleModal}>Aprimoramento Glacial</Text>
              <Text style={InspiracaoStyle.textModal}>Usar ataques básicos contra um Campeão reduz a velocidade dele por 2s. A força da redução de velocidade aumenta conforme sua duração.
                À distância: Ataques à distância causam redução de velocidade de até 20% - 40%
                Corpo a corpo: Ataques corpo a corpo causam redução de velocidade de até 40% a 50%
                Reduzir a velocidade de um Campeão com itens ativos faz com que um raio de gelo o atravesse, congelando o solo ao seu redor por 5s e reduzindo a velocidade de todas as unidades na área em 50%.
                Tempo de Recarga: 7-4s por unidade.</Text>
            </View>
          </Modal>
        </Animatable.View> : null }

        { this.state.showDescCP ?

        <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL1}>
          <Text style={InspiracaoStyle.titleDesc} onPress={this._toggleModalCP}>Cleptomancia</Text>
          <Text style={InspiracaoStyle.previewDesc}>Após usar uma habilidade, seu próximo ataque contra...</Text>
          <Modal isVisible={this.state.isModalCP} onBackdropPress={() => this.setState({ isModalCP: false })}>
              <View style={InspiracaoStyle.containerModal}>
                <View style={InspiracaoStyle.buttonModal}>
                  <Button transparent onPress={this._toggleModalCP}>
                    <Icon style={{color:'#3e7cc2'}} name='md-close' />
                  </Button>
                </View>
              <Text style={InspiracaoStyle.titleModal}>Cleptomancia</Text>
              <Text style={InspiracaoStyle.textModal}>Após usar uma habilidade, seu próximo ataque contra um Campeão
                concederá ouro adicional. Você também tem a chance de conseguir um consumível.</Text>
              </View>
          </Modal>
        </Animatable.View> : null }

        { this.state.showDescLFD ?

          <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL1}>
            <Text style={InspiracaoStyle.titleDescL} onPress={this._toggleModalLFD}>Livro de Feitiços Deslacrado</Text>
            <Text style={InspiracaoStyle.previewDesc}>Recebe um Fragmento de Invocador aos 2 mins e outro...</Text>
            <Modal isVisible={this.state.isModalLFD} onBackdropPress={() => this.setState({ isModalLFD: false })}>
              <View style={InspiracaoStyle.containerModal}>
                <View style={InspiracaoStyle.buttonModal}>
                  <Button transparent onPress={this._toggleModalLFD}>
                    <Icon style={{color:'#3e7cc2'}} name='md-close' />
                  </Button>
                </View>
              <Text style={InspiracaoStyle.titleModal}>Livro de Feitiços Deslacrado</Text>
              <Text style={InspiracaoStyle.textModal}>Recebe um Fragmento de Invocador aos 2 mins e outro a cada 6 mins depois disso (máx. de 2 Fragmentos).
                Enquanto estiver perto da loja, você pode trocar 1 Fragmento de Invocador para substituir um Feitiço de Invocador por um diferente.
                Além disso, os Tempos de Recarga dos seus Feitiços de Invocador são reduzidos em 25%.
                Golpear: Comprar Golpear não dará acesso a itens de Golpear. Você não pode ter dois Feitiços de Invocador iguais.</Text>
              </View>
            </Modal>
          </Animatable.View> : null }


          { this.state.showRunasInspiracaoList1 ?

          <Animatable.View style={InspiracaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
            <TouchableOpacity onPress={this.SelectRuneAG}>
              <Image style={InspiracaoStyle.buttonImgSize}  source={imgAG}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneCP}>
              <Image style={InspiracaoStyle.buttonImgSize}  source={imgCP}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneLFD}>
              <Image style={InspiracaoStyle.buttonImgSize}  source={imgLFD}/>
              </TouchableOpacity>
            </Animatable.View>

           : null}

          </View>

          <View style={InspiracaoStyle.containerRunesRow}>

          <Animatable.View style={{height:70}} animation='flipInY' duration={1200} delay={100}>
            <TouchableOpacity onPress={this.SecondListRunes}>
              <Image style={InspiracaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG2}/>
            </TouchableOpacity>
          </Animatable.View>

            { this.state.showDescFH ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL2}>
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

            <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL2}>
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

            <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL2}>
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

            { this.state.showRunasInspiracaoList2 ?

            <Animatable.View style={InspiracaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
              <TouchableOpacity onPress={this.SelectRuneFH}>
                <Image style={InspiracaoStyle.buttonImgSize}  source={imgFH}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneBM}>
                <Image style={InspiracaoStyle.buttonImgSize}  source={imgBM}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneSP}>
                <Image style={InspiracaoStyle.buttonImgSize}  source={imgSP}/>
              </TouchableOpacity>
            </Animatable.View> : null}
          </View>

          <View style={InspiracaoStyle.containerRunesRow}>

            <Animatable.View style={{height:70}} animation='flipInY' duration={1200} delay={100}>
              <TouchableOpacity  onPress={this.ThirdListRunes}>
                <Image style={InspiracaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG3}/>
              </TouchableOpacity>
              </Animatable.View>

              { this.state.showDescMF ?

              <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL3}>
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

              <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL3}>
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

              <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL3}>
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

             { this.state.showRunasInspiracaoList3 ?

            <Animatable.View style={InspiracaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
              <TouchableOpacity onPress={this.SelectRuneMF}>
                <Image style={InspiracaoStyle.buttonImgSize}  source={imgMF}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRunePT}>
                <Image style={InspiracaoStyle.buttonImgSize}  source={imgPT}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.SelectRuneEB}>
                <Image style={InspiracaoStyle.buttonImgSize}  source={imgEB}/>
              </TouchableOpacity>
            </Animatable.View> : null }
           </View>

          <View style={InspiracaoStyle.containerRunesRow}>

          <Animatable.View  style={{height:70}} animation='flipInY' duration={1200} delay={100}>
            <TouchableOpacity onPress={this.FourthListRunes}>
              <Image style={InspiracaoStyle.buttonImgDefault}  source={this.state.buttonDefaultG4}/>
            </TouchableOpacity>
          </Animatable.View>

          { this.state.showDescPC ?

            <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL4}>
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

            <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL4}>
              <Text style={InspiracaoStyle.titleDescL} onPress={this._toggleModalVA}>Velocidade de Aproximação</Text>
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

             <Animatable.View animation='lightSpeedIn' duration={800} style={InspiracaoStyle.containerPreviewDescL4}>
              <Text style={InspiracaoStyle.titleDescLL} onPress={this._toggleModalTDT}>Tônico de Distorção no Tempo</Text>
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

             { this.state.showRunasInspiracaoList4 ?

             <Animatable.View style={InspiracaoStyle.containerRowButtons} animation='flipInX' duration={1000} delay={100}>
               <TouchableOpacity onPress={this.SelectRunePC}>
                <Image style={InspiracaoStyle.buttonImgSize}  source={imgPC}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={this.SelectRuneVA}>
                <Image style={InspiracaoStyle.buttonImgSize}  source={imgVA}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={this.SelectRuneTDT}>
                <Image style={InspiracaoStyle.buttonImgSize}  source={imgTDT}/>
               </TouchableOpacity>
             </Animatable.View> : null }

           </View>
           <View style={{flex:1, justifyContent:'center', marginTop:10}}>
              <AdMobBanner
                adSize="banner"
                adUnitID="ca-app-pub-1942019449408433/8733198851"
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
            <Button onPress={() => this.sendDataDeterminacaoSec()}>
              <Image style={{height:30, width:30}} source={btnDeterminacaoFooter}/>
            </Button>
          </FooterTab>
        </Footer>
        </ImageBackground>

    );
  }
}

Inspiracao.navigationOptions = {
  header: null,
}

export default Inspiracao;


