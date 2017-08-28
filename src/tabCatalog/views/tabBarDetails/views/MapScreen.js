import React from 'react';
import MapView from 'react-native-maps';

import { BasicScreen } from '../../../../styles/BasicScreen'

const minMax = (items) => items.reduce(
  (acc, val) => {
    acc[0] = ( acc[0] === undefined || val < acc[0] ) ? val : acc[0];
    acc[1] = ( acc[1] === undefined || val > acc[1] ) ? val : acc[1];
    return acc;
  },[]
);

const center = (coord) => 0.5 * (coord[1] + coord[0]);
const delta = (coord) => coord[1] - coord[0] + 0.02;

export const MapScreen = ({screenProps}) => {
  const { id, companies } = screenProps;
  const company = companies.find((el) => el.id === id);
  const points = company.locations.filter(({point})=>point);
  if (!points) { return null; }

  const latitude = minMax(points.map(({point:{latitude}})=>latitude));
  const longitude = minMax(points.map(({point:{longitude}})=>longitude));
  return (
    <BasicScreen>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: center(latitude),
          longitude: center(longitude),
          latitudeDelta: delta(latitude),
          longitudeDelta: delta(longitude),
        }}
      >
        { points.map(({address, point})=>(
          <MapView.Marker
            coordinate={point}
            title={address}
            key={address}
          />
        ))}
      </MapView>
    </BasicScreen>
  );
};

MapScreen.navigationOptions = {
  tabBarLabel: 'Карта',
};
