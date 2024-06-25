import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 6.248408899999999,
  lng: -75.6108817
};

function MyComponent({ addresses }: any) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD_p6tMnyQA4eAnODH2FGhvlMUsVIBfCoU"
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {addresses.map(({ address, coordinates }: any) => (
        coordinates ? (
          <Marker
            key={address}
            position={{ lat: coordinates.lat, lng: coordinates.lng }}
          />
        ) : null
      ))}
    </GoogleMap>
  ) : <></>;
}

export default React.memo(MyComponent);
