import { combineReducers, configureStore, bindActionCreators  } from "@reduxjs/toolkit";
import { routesSlice } from "./slices/routesSlice";
import { currentRouteSlice } from "./slices/currentRoute";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { mapApi } from "./api";
import { mapSlice } from "./slices/mapSlice";
import { listenerMiddleware } from "./middleware/mapMiddleware";

const reducer = combineReducers({
    [mapApi.reducerPath]: mapApi.reducer,
    [routesSlice.name]: routesSlice.reducer,
    [currentRouteSlice.name]: currentRouteSlice.reducer,
    [mapSlice.name]: mapSlice.reducer
})

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({serializableCheck: false}).prepend(listenerMiddleware.middleware).concat(mapApi.middleware)
    },
})

export type RootState = ReturnType<typeof store['getState']>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const actions = {
    ...routesSlice.actions,
    ...currentRouteSlice.actions,
    ...mapSlice.actions
}

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(actions, dispatch);
};