import React, { Component } from 'react';
import { YellowBox,} from 'react-native';
import { Root } from "native-base";
import {  RootNavigator } from './src/Navigation/app-navigator';



export default class App extends Component {
  constructor(props) {
    super(props);
      YellowBox.ignoreWarnings(
        ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

    }
  render() {
    return (
      <Root>
        <RootNavigator />
      </Root>
      );
    }
}