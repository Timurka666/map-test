import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { IResponse, Point } from "../types"
import { stringifyPoints } from "../../helpers/stringifyPoints"

export const mapApi = createApi({
    reducerPath: 'map/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://router.project-osrm.org/route/v1/car'
    }),
    endpoints: (build) => ({
        getRoute: build.query<IResponse, Point[]>({
            query: (points) => ({
                url: `/${stringifyPoints(points)}?continue_straight=false`,
            }),
        })
    })
})

export const {useGetRouteQuery, useLazyGetRouteQuery} = mapApi