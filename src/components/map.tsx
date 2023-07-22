import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import icon from "leaflet/dist/images/marker-icon.png";
import { Icon } from 'leaflet';
import { useTypedSelector } from '../store';
import { useLazyGetRouteQuery } from '../store/api';
import { useEffect } from 'react';
import { MapContext } from './mapContext';


export function MapComponent() {
    const {route} = useTypedSelector(state => state.currentRoute);
    const {map} = useTypedSelector(state => state.map);
    const [trigger, result] = useLazyGetRouteQuery();
    const {isError} = result;
    
    useEffect(() => {
        trigger(route.points);

    }, [route.points])

    useEffect(() => {
        if (isError) {
            alert('Something went wrong. Try again later.');
        }
    }, [isError])

    return (
        <MapContainer center={map.center} zoom={map.zoom}>
            <MapContext />
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {map.marks.map((el, i) => (
                <Marker position={el} icon={new Icon({iconUrl: icon, iconSize: [25, 41]})} key={i}>
                    <Popup>
                        {i}
                    </Popup>
                </Marker>
            ))}
            <Polyline
            pathOptions={{color: "lime"}}
            positions={map.polylinePoints}
            />
        </MapContainer>
    )
}