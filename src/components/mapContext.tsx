import { useLeafletContext } from '@react-leaflet/core'
import { useTypedSelector } from '../store';
import { useEffect } from 'react';

export function MapContext() {
    const {map} = useTypedSelector(state => state.map);
    const context = useLeafletContext();

    useEffect(() => {
        context.map.setView(map.center, map.zoom)
    }, [map.center])
    return (<></>)
}