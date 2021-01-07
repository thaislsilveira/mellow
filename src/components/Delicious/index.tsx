import React from 'react';

import L from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';

import { Container } from './styles';

import point from '../../assets/marker.png';
import google from '../../assets/google-play.png';
import appStore from '../../assets/app-store-badge.png';

const Delicious: React.FC = () => {
  const iconPoint = new L.Icon({
    iconUrl: point,
    iconRetinaUrl: point,
    className: 'div-cion',
  });
  return (
    <Container>
      <div className="content-left">
        <div className="content-top">
          <h1>Delicious</h1>
          <h1>Planet-friendly food</h1>
          <p>
            Culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptartem
          </p>
          <button type="button" className="card-button">
            LET’S TRY
          </button>
        </div>
        <div className="content-bottom">
          <p>Download on iOS and android for free</p>
          <div className="content-bottom-images">
            <div className="content-bottom-image">
              <img src={appStore} alt="App Store" />
            </div>
            <div className="content-bottom-image">
              <img src={google} alt="Google store" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-right">
        <Map
          center={[-23.5854458, -46.6883662]}
          zoom={16}
          style={{ width: '100%', height: 280 }}
          dragging={false}
          touchZoom={false}
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />

          <Marker
            title="Mellow"
            alt="Mellow"
            interactive={false}
            icon={iconPoint}
            position={[-23.5854458, -46.6883662]}
          />
        </Map>
      </div>
    </Container>
  );
};

export default Delicious;
