import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableHighlight, FlatList, Image, StatusBar, View } from 'react-native';
import { Container, Header, Content, Button, Toast } from "native-base";

let sucesso= 'sucesso'
class Sobre extends Component {

    teste(){
        if(sucesso === 'sucesso'){
        Toast.show({
            text: 'Sua pagina de runas foi salva.',
            position: 'top',
            type: 'success',
            duration: 2250
          })
        }else{
            Toast.show({
                text: 'Você já utiliza esse nome em uma de suas paginas de runas.',
                position: 'top',
                type: 'danger',
                duration: 2250
              })
        }

    }
    constructor(props) {
        super(props);
      }

      render() {
        return (
        <View>
            <Button onPress={() => this.teste()}>
                <Text>teste</Text>
            </Button>
        </View>
    );
}
}


Sobre.navigationOptions = {
    header: null,
}

export default Sobre;