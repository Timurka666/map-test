import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRoute, IStateCurrentRoute } from "../types";
const initialState: IStateCurrentRoute = {
    route: {
        name: 'Route 1',
        points: [[59.84660399, 30.29496392], [59.82934196, 30.42423701], [59.83567701, 30.38064206]]
    }
}
export const currentRouteSlice = createSlice({
    name: 'currentRoute',
    initialState,
    reducers: {
        setRoute: (state, action: PayloadAction<IRoute>) => {
            state.route = {...action.payload}
        }
    }
})