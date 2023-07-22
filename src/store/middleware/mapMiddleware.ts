import { createListenerMiddleware } from "@reduxjs/toolkit";
import { currentRouteSlice } from "../slices/currentRoute";
import { mapSlice } from "../slices/mapSlice";

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
    actionCreator: currentRouteSlice.actions.setRoute,
    effect: (action, listenerApi) => {
        let lat = 0;
        let lng = 0;
        action.payload.points.forEach(el => {
            lat += el[0];
            lng += el[1];
        })
        listenerApi.dispatch(mapSlice.actions.setCenter([lat/action.payload.points.length, lng/action.payload.points.length]))
        listenerApi.dispatch(mapSlice.actions.setMarkers(action.payload.points));
    }
})