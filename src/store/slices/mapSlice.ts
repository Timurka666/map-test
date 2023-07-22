import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMapState, Point } from "../types";
import { mapApi } from "../api";


const initialState: IMapState = {
    map: {
        center: [59.837972975, 30.359600465],
        zoom: 13,
        polylinePoints: [],
        marks: []
    }
}

export const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setCenter: (state, action: PayloadAction<Point>) => {
            state.map.center = [...action.payload];
        },
        setMarkers: (state, action: PayloadAction<Point[]>) => {
            state.map.marks = [...action.payload];
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(mapApi.endpoints.getRoute.matchFulfilled, (state, action) => {
            const {waypoints} = action.payload;
            state.map.polylinePoints = [];
            waypoints.forEach((el) => {
                state.map.polylinePoints = [...state.map.polylinePoints, [...el.location].reverse() as Point]
            })
        })
    },
})