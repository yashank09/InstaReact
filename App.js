import React from 'react';
import {View, StatusBar } from 'react-native';

import Insta from './components/PicCard';

export default class App extends React.Component {
  render() {
    return (
      <View style={{paddingTop: StatusBar.currentHeight}}>
        <Insta />
      </View>
    );
  }
}
