import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from "react-native-maps";


class Map extends React.Component {
  render() {
    return (
      <MapView
        style={{ height: "100%" }}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 38.027050,
          longitude: 32.5096,
          latitudeDelta: 0.004,
          longitudeDelta: 0.004
        }}>
        <Marker coordinate={{ latitude: 38.027050, longitude: 32.5096, }} title="RAC-LAB laboratuvarı" />
        <Circle center={{ latitude: 38.027050, longitude: 32.5096, }}
          radius={40}
          fillColor={"rgba(0,0,10,0.3)"} />
      </MapView>
    )
  }
}
export default Map