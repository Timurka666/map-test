import { createSlice } from "@reduxjs/toolkit";
import { IStateRoutes } from "../types";

const initialState: IStateRoutes = {
    routes: [
        {
            name: 'Route 1',
            points: [[59.84660399, 30.29496392], [59.82934196, 30.42423701], [59.83567701, 30.38064206]]
        },
        {
            name: 'Route 2',
            points: [[59.82934196, 30.42423701], [59.82761295, 30.41705607], [59.84660399, 30.29496392]]
        },
        {
            name: 'Route 3',
            points: [[59.83567701, 30.38064206], [59.84660399, 30.29496392], [59.82761295, 30.41705607]]
        }
    ]
}

export const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {

    }
})