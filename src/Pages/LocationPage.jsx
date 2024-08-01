/* eslint-disable react/no-unknown-property */
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const LocationPage = () => {
    const position = [42.8756, 74.6089]; 

    useEffect(() => {
        L.DomUtil.get('map').style.height = '100%';
    }, []);

    return (
        <div className="location-container">
            <MapContainer center={position} zoom={17} id="map">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>Министерство экономики, Чуй проспекти, 106</Popup>
                </Marker>
            </MapContainer>
            <style jsx>{`
                .location-container {
                    height: 80vh; /* Увеличена высота контейнера */
                    width: 90vw; /* Ширина 90% от ширины окна */
                    background-color: #1e1e1e;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                #map {
                    height: 100%; /* Высота карты установлена на 100% высоты контейнера */
                    width: 100%;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </div>
    );
};

export default LocationPage;
