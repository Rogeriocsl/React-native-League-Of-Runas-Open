import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, TouchableOpacity, Alert } from 'react-native';
import { Content, Icon } from 'native-base';
import { myrunas, imgCS, btnDfDE, imgEL, imgPD, imgCLS, imgCHL, imgGD, imgGS, imgIR, imgSZ, imgPF, imgGO, imgCA, imgCV, imgCI,
  imgIA, imgOA, imgTD, imgCL, imgFF, imgMN, imgCSA, imgCH, imgFA, imgTC, imgPA, imgRF, imgAP, imgCQ, imgCE, imgTF, imgPE, imgLL,
   imgLT, imgGM, imgDC, imgAM, imgAMV, imgPCH, imgGP, imgDM, imgFV, imgOS, imgCD, imgVR, imgCT, imgCEX, imgRV, imgIB, imgAG, imgCP,
   imgLFD, imgFH, imgBM, imgSP, imgMF, imgPT, imgEB, imgPC, imgTDT, imgVA, imgLE, imgIG, imgCM, logo
} from '../imageProvider';
import MPstyle from './minha-pagina-style';
import { AdMobBanner } from 'react-native-admob';
import { captureScreen } from "react-native-view-shot";
import Share from 'react-native-share';
import firebase from 'react-native-firebase'

let nameP = ''
let nameRP = ''
let nameRS = ''
let runa1 = ''
let runa2 = ''
let runa3 = ''
let runa4 = ''
let runa5 = ''
let runa6 = ''
let uid = ''
const ref = firebase.firestore()

class MPagina extends Component {
  constructor(props){
    super(props);
      this.state = {
        btn: btnDfDE, btn2: btnDfDE, btn3: btnDfDE, btn4: btnDfDE, btn5: btnDfDE, btn6: btnDfDE,
        uid : '', ndoc: ''

      }
  }

  componentDidMount(){
    this.teste();

  }





  teste = () => {

    if(nameRS === 'Dominacao'){
      if(runa1 === 'ELETROCUTAR'){
        this.setState({btn: imgEL})
      }else if(runa1 === 'PREDADOR'){
        this.setState({btn: imgPD})
      }else if(runa1 === 'COLHEITA SOMBRIA'){
        this.setState({btn: imgCLS})
      }else if(runa1 === 'CHUVA DE LÂMINAS'){
        this.setState({btn: imgCHL})
      }if(runa2 === 'GOLPE DESLEAL'){
        this.setState({btn2: imgGD})
      }else if(runa2 === 'GOSTO DE SANGUE'){
        this.setState({btn2: imgGS})
      }else if(runa2 === 'IMPACTO REPENTINO'){
        this.setState({btn2: imgIR})
      }if(runa3 === 'SENTINELA ZUMBI'){
        this.setState({btn3: imgSZ})
      }else if(runa3 === 'PORO FANTASMA'){
        this.setState({btn3: imgPF})
      }else if(runa3 === 'GLOBOS OCULARES'){
        this.setState({btn3: imgGO})
      }if(runa4 === 'CAÇA ARDILOSA'){
        this.setState({btn4: imgCA})
      }else if(runa4 === 'CAÇA VORAZ'){
        this.setState({btn4: imgCV})
      }else if(runa4 === 'CAÇA INCANSÁVEL'){
        this.setState({btn4: imgCI})
      }else if(runa4 === 'CAÇA SUPREMA'){
        this.setState({btn4: imgCS})
      }
    }if(nameRP === 'DOMINACAO'){
      if(runa5 === 'GOLPE DESLEAL'){
        this.setState({btn5: imgGD})
      }else if(runa5 === 'GOSTO DE SANGUE'){
        this.setState({btn5: imgGS})
      }else if(runa5 === 'IMPACTO REPENTINO'){
        this.setState({btn5: imgIR})
      }if(runa5 === 'SENTINELA ZUMBI'){
        this.setState({btn5: imgSZ})
      }else if(runa5 === 'PORO FANTASMA'){
        this.setState({btn5: imgPF})
      }else if(runa5 === 'GLOBOS OCULARES'){
        this.setState({btn5: imgGO})
      }if(runa5 === 'CAÇA ARDILOSA'){
        this.setState({btn5: imgCA})
      }else if(runa5 === 'CAÇA VORAZ'){
        this.setState({btn5: imgCV})
      }else if(runa5 === 'CAÇA INCANSÁVEL'){
        this.setState({btn5: imgCI})
      }else if(runa5 === 'CAÇA SUPREMA'){
        this.setState({btn5: imgCS})
      }
    }if(nameRP === 'DOMINACAO'){
      if(runa6 === 'GOLPE DESLEAL'){
        this.setState({btn6: imgGD})
      }else if(runa6 === 'GOSTO DE SANGUE'){
        this.setState({btn6: imgGS})
      }else if(runa6 === 'IMPACTO REPENTINO'){
        this.setState({btn6: imgIR})
      }if(runa6 === 'SENTINELA ZUMBI'){
        this.setState({btn6: imgSZ})
      }else if(runa6 === 'PORO FANTASMA'){
        this.setState({btn6: imgPF})
      }else if(runa6 === 'GLOBOS OCULARES'){
        this.setState({btn6: imgGO})
      }if(runa6 === 'CAÇA ARDILOSA'){
        this.setState({btn6: imgCA})
      }else if(runa6 === 'CAÇA VORAZ'){
        this.setState({btn6: imgCV})
      }else if(runa6 === 'CAÇA INCANSÁVEL'){
        this.setState({btn6: imgCI})
      }else if(runa6 === 'CAÇA SUPREMA'){
        this.setState({btn6: imgCS})
      }
    }

    if(nameRS === 'Feiticaria'){
      if(runa1 === 'INVOCAR AERY'){
        this.setState({btn: imgIA})
      }else if(runa1 === 'COMETA ARCANO'){
        this.setState({btn: imgCM})
      }else if(runa1 === 'ÍMPETO GRADUAL'){
        this.setState({btn: imgIG})
      }if(runa2 === 'ORBE ANULADOR'){
        this.setState({btn2: imgOA})
      }else if(runa2 === 'FAIXA DE FLUXO DE MANA'){
        this.setState({btn2: imgFF})
      }else if(runa2 === 'MANTO DE NIMBUS'){
        this.setState({btn2: imgMN})
      }if(runa3 === 'TRANSCENDÊNCIA'){
        this.setState({btn3: imgTD})
      }else if(runa3 === 'CELERIDADE'){
        this.setState({btn3: imgCL})
      }else if(runa3 === 'FOCO ABSOLUTO'){
        this.setState({btn3: imgFA})
      }if(runa4 === 'CHAMUSCAR'){
        this.setState({btn4: imgCH})
      }else if(runa4 === 'CAMINHAR SOB AS ÁGUAS'){
        this.setState({btn4: imgCSA})
      }else if(runa4 === 'TEMPESTADE CRESCENTE'){
        this.setState({btn4: imgTC})
      }
    }if(nameRP === 'FEITICARIA'){
      if(runa5 === 'ORBE ANULADOR'){
        this.setState({btn5: imgOA})
      }else if(runa5 === 'FAIXA DE FLUXO DE MANA'){
        this.setState({btn5: imgFF})
      }else if(runa5 === 'MANTO DE NIMBUS'){
        this.setState({btn5: imgMN})
      }if(runa5 === 'TRANSCENDÊNCIA'){
        this.setState({btn5: imgTD})
      }else if(runa5 === 'CELERIDADE'){
        this.setState({btn5: imgCL})
      }else if(runa5 === 'FOCO ABSOLUTO'){
        this.setState({btn5: imgFA})
      }if(runa5 === 'CHAMUSCAR'){
        this.setState({btn5: imgCH})
      }else if(runa5 === 'CAMINHAR SOB AS ÁGUAS'){
        this.setState({btn5: imgCSA})
      }else if(runa5 === 'TEMPESTADE CRESCENTE'){
        this.setState({btn5: imgTC})
      }
    }if(nameRP === 'FEITICARIA'){
     if(runa6 === 'ORBE ANULADOR'){
        this.setState({btn6: imgOA})
      }else if(runa6 === 'FAIXA DE FLUXO DE MANA'){
        this.setState({btn6: imgFF})
      }else if(runa6 === 'MANTO DE NIMBUS'){
        this.setState({btn6: imgMN})
      }if(runa6 === 'TRANSCENDÊNCIA'){
        this.setState({btn6: imgTD})
      }else if(runa6 === 'CELERIDADE'){
        this.setState({btn6: imgCL})
      }else if(runa6 === 'FOCO ABSOLUTO'){
        this.setState({btn6: imgFA})
      }if(runa6 === 'CHAMUSCAR'){
        this.setState({btn6: imgCH})
      }else if(runa6 === 'CAMINHAR SOB AS ÁGUAS'){
        this.setState({btn6: imgCSA})
      }else if(runa6 === 'TEMPESTADE CRESCENTE'){
        this.setState({btn6: imgTC})
      }
    }

    if(nameRS === 'Precisao'){
      if(runa1 === 'PRESSIONE O ATAQUE'){
        this.setState({btn: imgPA})
      }else if(runa1 === 'RITMO FATAL'){
        this.setState({btn: imgRF})
      }else if(runa1 === 'AGILIDADE NOS PÉS'){
        this.setState({btn: imgAP})
      }else if(runa1 === 'CONQUISTADOR'){
        this.setState({btn: imgCQ})
      }if(runa2 === 'CURA EXCESSIVA'){
        this.setState({btn2: imgCE})
      }else if(runa2 === 'TRIUNFO'){
        this.setState({btn2: imgTF})
      }else if(runa2 === 'PRESENÇA DE ESPÍRITO'){
        this.setState({btn2: imgPE})
      }if(runa3 === 'LENDA: ESPONTANEIDADE'){
        this.setState({btn3: imgLE})
      }else if(runa3 === 'LENDA: TENACIDADE'){
        this.setState({btn3: imgLT})
      }else if(runa3 === 'LENDA: LINHAGEM'){
        this.setState({btn3: imgLL})
      }if(runa4 === 'GOLPE DE MISERICÓRDIA'){
        this.setState({btn4: imgGM})
      }else if(runa4 === 'DILACERAR'){
        this.setState({btn4: imgDC})
      }else if(runa4 === 'ATÉ A MORTE'){
        this.setState({btn4: imgAM})
      }
    }if(nameRP === 'PRECISAO'){
      if(runa5 === 'CURA EXCESSIVA'){
        this.setState({btn5: imgCE})
      }else if(runa5 === 'TRIUNFO'){
        this.setState({btn5: imgTF})
      }else if(runa5 === 'PRESENÇA DE ESPÍRITO'){
        this.setState({btn5: imgPE})
      }if(runa5 === 'LENDA: ESPONTANEIDADE'){
        this.setState({btn5: imgLE})
      }else if(runa5 === 'LENDA: TENACIDADE'){
        this.setState({btn5: imgLT})
      }else if(runa5 === 'LENDA: LINHAGEM'){
        this.setState({btn5: imgLL})
      }if(runa5 === 'GOLPE DE MISERICÓRDIA'){
        this.setState({btn5: imgGM})
      }else if(runa5 === 'DILACERAR'){
        this.setState({btn5: imgDC})
      }else if(runa5 === 'ATÉ A MORTE'){
        this.setState({btn5: imgAM})
      }
    }if(nameRP === 'PRECISAO'){
      if(runa6 === 'CURA EXCESSIVA'){
        this.setState({btn6: imgCE})
      }else if(runa6 === 'TRIUNFO'){
        this.setState({btn6: imgTF})
      }else if(runa6 === 'PRESENÇA DE ESPÍRITO'){
        this.setState({btn6: imgPE})
      }if(runa6 === 'LENDA: ESPONTANEIDADE'){
        this.setState({btn6: imgLE})
      }else if(runa6 === 'LENDA: TENACIDADE'){
        this.setState({btn6: imgLT})
      }else if(runa6 === 'LENDA: LINHAGEM'){
        this.setState({btn6: imgLL})
      }if(runa6 === 'GOLPE DE MISERICÓRDIA'){
        this.setState({btn6: imgGM})
      }else if(runa6 === 'DILACERAR'){
        this.setState({btn6: imgDC})
      }else if(runa6 === 'ATÉ A MORTE'){
        this.setState({btn6: imgAM})
      }
    }

    if(nameRS === 'Determinacao'){
      if(runa1 === 'APERTO DOS MORTOS-VIVOS'){
        this.setState({btn: imgAMV})
      }else if(runa1 === 'PÓS-CHOQUE'){
        this.setState({btn: imgPCH})
      }else if(runa1 === 'GUARDIÃO'){
        this.setState({btn: imgGP})
      }if(runa2 === 'DEMOLIR'){
        this.setState({btn2: imgDM})
      }else if(runa2 === 'FONTE DA VIDA'){
        this.setState({btn2: imgFV})
      }else if(runa2 === 'OSSO REVESTIDO'){
        this.setState({btn2: imgOS})
      }if(runa3 === 'CONDICIONAMENTO'){
        this.setState({btn3: imgCD})
      }else if(runa3 === 'VENTOS REVIGORANTES'){
        this.setState({btn3: imgVR})
      }else if(runa3 === 'CRISÁLIDA'){
        this.setState({btn3: imgCT})
      }if(runa4 === 'CRESCIMENTO EXCESSIVO'){
        this.setState({btn4: imgCEX})
      }else if(runa4 === 'REVITALIZAR'){
        this.setState({btn4: imgRV})
      }else if(runa4 === 'INABALÁVEL'){
        this.setState({btn4: imgIB})
      }
    }if(nameRP === 'DETERMINACAO'){
      if(runa5 === 'DEMOLIR'){
        this.setState({btn5: imgDM})
      }else if(runa5 === 'FONTE DA VIDA'){
        this.setState({btn5: imgFV})
      }else if(runa5 === 'OSSO REVESTIDO'){
        this.setState({btn5: imgOS})
      }if(runa5 === 'CONDICIONAMENTO'){
        this.setState({btn5: imgCD})
      }else if(runa5 === 'VENTOS REVIGORANTES'){
        this.setState({btn5: imgVR})
      }else if(runa5 === 'CRISÁLIDA'){
        this.setState({btn5: imgCT})
      }if(runa5 === 'CRESCIMENTO EXCESSIVO'){
        this.setState({btn5: imgCEX})
      }else if(runa5 === 'REVITALIZAR'){
        this.setState({btn5: imgRV})
      }else if(runa5 === 'INABALÁVEL'){
        this.setState({btn5: imgIB})
      }
    }if(nameRP === 'DETERMINACAO'){
      if(runa6 === 'DEMOLIR'){
        this.setState({btn6: imgDM})
      }else if(runa6 === 'FONTE DA VIDA'){
        this.setState({btn6: imgFV})
      }else if(runa6 === 'OSSO REVESTIDO'){
        this.setState({btn6: imgOS})
      }if(runa6 === 'CONDICIONAMENTO'){
        this.setState({btn6: imgCD})
      }else if(runa6 === 'VENTOS REVIGORANTES'){
        this.setState({btn6: imgVR})
      }else if(runa6 === 'CRISÁLIDA'){
        this.setState({btn6: imgCT})
      }if(runa6 === 'CRESCIMENTO EXCESSIVO'){
        this.setState({btn6: imgCEX})
      }else if(runa6 === 'REVITALIZAR'){
        this.setState({btn6: imgRV})
      }else if(runa6 === 'INABALÁVEL'){
        this.setState({btn6: imgIB})
      }
    }

    if(nameRS === 'Inspiracao'){
      if(runa1 === 'APRIMORAMENTO GLACIAL'){
        this.setState({btn: imgAG})
      }else if(runa1 === 'CLEPTOMANCIA'){
        this.setState({btn: imgCP})
      }else if(runa1 === 'LIVRO DE FEITIÇOS DESLACRADO'){
        this.setState({btn: imgLFD})
      }if(runa2 === 'FLASHTRAÇÃO HEXTEC'){
        this.setState({btn2: imgFH})
      }else if(runa2 === 'CALÇADOS MÁGICOS'){
        this.setState({btn2: imgBM})
      }else if(runa2 === 'SINCRONIA PERFEITA'){
        this.setState({btn2: imgSP})
      }if(runa3 === 'MERCADO DO FUTURO'){
        this.setState({btn3: imgMF})
      }else if(runa3 === 'PULVERIZADOR DE TROPAS'){
        this.setState({btn3: imgPT})
      }else if(runa3 === 'ENTREGA DE BISCOITOS'){
        this.setState({btn3: imgEB})
      }if(runa4 === 'PERSPICÁCIA CÓSMICA'){
        this.setState({btn4: imgPC})
      }else if(runa4 === 'VELOCIDADE DE APROXIMAÇÃO'){
        this.setState({btn4: imgVA})
      }else if(runa4 === 'TÔNICO DE DISTORÇÃO NO TEMPO'){
        this.setState({btn4: imgTDT})
      }
    }if(nameRP === 'INSPIRACAO'){
      if(runa5 === 'FLASHTRAÇÃO HEXTEC'){
        this.setState({btn5: imgFH})
      }else if(runa5 === 'CALÇADOS MÁGICOS'){
        this.setState({btn5: imgBM})
      }else if(runa5 === 'SINCRONIA PERFEITA'){
        this.setState({btn5: imgSP})
      }if(runa5 === 'MERCADO DO FUTURO'){
        this.setState({btn5: imgMF})
      }else if(runa5 === 'PULVERIZADOR DE TROPAS'){
        this.setState({btn5: imgPT})
      }else if(runa5 === 'ENTREGA DE BISCOITOS'){
        this.setState({btn5: imgEB})
      }if(runa5 === 'PERSPICÁCIA CÓSMICA'){
        this.setState({btn5: imgPC})
      }else if(runa5 === 'VELOCIDADE DE APROXIMAÇÃO'){
        this.setState({btn5: imgVA})
      }else if(runa5 === 'TÔNICO DE DISTORÇÃO NO TEMPO'){
        this.setState({btn5: imgTDT})
      }
    }if(nameRP === 'INSPIRACAO'){
      if(runa6 === 'FLASHTRAÇÃO HEXTEC'){
        this.setState({btn6: imgFH})
      }else if(runa6 === 'CALÇADOS MÁGICOS'){
        this.setState({btn6: imgBM})
      }else if(runa6 === 'SINCRONIA PERFEITA'){
        this.setState({btn6: imgSP})
      }if(runa6 === 'MERCADO DO FUTURO'){
        this.setState({btn6: imgMF})
      }else if(runa6 === 'PULVERIZADOR DE TROPAS'){
        this.setState({btn6: imgPT})
      }else if(runa6 === 'ENTREGA DE BISCOITOS'){
        this.setState({btn6: imgEB})
      }if(runa6 === 'PERSPICÁCIA CÓSMICA'){
        this.setState({btn6: imgPC})
      }else if(runa6 === 'VELOCIDADE DE APROXIMAÇÃO'){
        this.setState({btn6: imgVA})
      }else if(runa6 === 'TÔNICO DE DISTORÇÃO NO TEMPO'){
        this.setState({btn6: imgTDT})
      }
    }
}

  onShare = () => {
      captureScreen({
        format: 'jpg',
        quality: 0.7,
        result :'tmpfile'
      }).then(
          uri => {
            Share.open({
              title: 'League Of Runas',
              message: 'League Of Runas, Disponivel na Play Store.',
              url: uri,
            });
          },
          error => console.error('snapshot', error)
        );
    };

  delete = () => {
    const navigationDelete = () =>  this.props.navigation.navigate('MyRunasScreen');
    ref.collection(uid).doc(nameP).delete().then(function() {
      console.log("Document successfully deleted!");
      Alert.alert('Aviso!', 'Apagada com sucessso')
      navigationDelete()
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  }



  render() {


    const { navigation } = this.props;
    nameP = navigation.state.params.colecaoP,
    nameRP = navigation.state.params.colecaoRP,
    nameRS = navigation.state.params.colecaoRS,
    runa1 = navigation.state.params.colecao1,
    runa2 = navigation.state.params.colecao2,
    runa3 = navigation.state.params.colecao3,
    runa4 = navigation.state.params.colecao4,
    runa5 = navigation.state.params.colecao5,
    runa6 = navigation.state.params.colecao6
    uid = navigation.state.params.uid

    return(
      <ImageBackground source={myrunas} style={MPstyle.containerBack} >
      <Content style={MPstyle.container}>
          <View style={MPstyle.containerLogo}>
            <Image style={MPstyle.logo} source={logo} />
          </View>
          <View style={MPstyle.containerItems}>
            <View style={MPstyle.containerNomePage}>
              <Text style={MPstyle.nomePage}>{nameP}</Text>
            </View>
            <View style={MPstyle.containerRuna1}>
              <Image style={MPstyle.imgR1R6} source={this.state.btn}/>
              <Text style={MPstyle.textR1R6}>{runa1}</Text>
            </View>
            <View style={MPstyle.containerR2R6}>
              <Image style={MPstyle.imgR1R6} source={this.state.btn2}/>
              <Text style={MPstyle.textR1R6}>{runa2}</Text>
            </View>
            <View style={MPstyle.containerR2R6}>
              <Image style={MPstyle.imgR1R6} source={this.state.btn3}/>
              <Text style={MPstyle.textR1R6}>{runa3}</Text>
            </View>
            <View style={MPstyle.containerR2R6}>
              <Image style={MPstyle.imgR1R6} source={this.state.btn4}/>
              <Text style={MPstyle.textR1R6}>{runa4}</Text>
            </View>
            <View style={MPstyle.containerR2R6}>
              <Image style={MPstyle.imgR1R6} source={this.state.btn5}/>
              <Text style={MPstyle.textR1R6}>{runa5}</Text>
            </View>
            <View style={MPstyle.containerR2R6}>
              <Image style={MPstyle.imgR1R6} source={this.state.btn6}/>
              <Text style={MPstyle.textR1R6}>{runa6}</Text>
            </View>
          </View>

          <View style={{flexDirection:'row', marginTop:20, marginBottom:10, justifyContent:'flex-end'}}>
            <View  style={{ alignItems:'center'}}>
              <TouchableOpacity onPress={() => this.onShare()} style={{alignItems:'center', marginRight:10}}>
                <Icon name="share" style={{color:'#e8a157'}} />
                <Text style={{color:"#fff", borderRadius:5, backgroundColor:'#000016'}}>Compartilhar</Text>
              </TouchableOpacity>
            </View>
            <View  style={{flexDirection:'row', alignItems:'center', marginRight:10}}>
              <TouchableOpacity onPress={() => this.delete()} style={{alignItems:'center'}}>
                <Icon name="trash" style={{color:'#e8a157'}} />
                <Text style={{color:"#fff", backgroundColor:'#000016'}}>Apagar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{alignItems:'center'}}>
            <AdMobBanner
              adSize="banner"
              adUnitID="ca-app-pub-1942019449408433/8387899716"
              onAdFailedToLoad={error => console.error(error)}/>
          </View>

      </Content>

        </ImageBackground>




    );
  }
}

MPagina.navigationOptions = {
  header: null,
}
export default MPagina;



