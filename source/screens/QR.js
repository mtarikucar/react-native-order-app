import React, { Component } from 'react';
import {
  Linking,
  Alert,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class App extends React.Component{ 
ifScaned = e =>{
  Linking.openURL(e.data).catch(err=>
    Alert.alert("invalid qr",e.data));
};

  render() {
    return (
      <QRCodeScanner
        containerStyle={{backgroundColor:"#FFF", flex:1}}
        onRead={this.ifScaned}
        reactivate={true}
        permissionDialogMessage="need permission to access camera"
        reactivateTimeout={10}
        showMarker={true}
        markerStyle={{borderColor:"#FFF", borderRadius:10}}

      />
    );
  }
}
export default App