export type Point = [number, number]
export interface IRoute {
    name: string,
    points: Point[]
}
export interface IStateRoutes {
    routes: IRoute[]
}

export interface IStateCurrentRoute {
    route: IRoute
}

export interface IResponse {
	code: string;
	routes: Routes[];
	waypoints: Waypoints[];
}

export interface Legs {
	steps: any[];
	summary: string;
	weight: number;
	duration: number;
	distance: number;
}

export interface Routes {
	legs: Legs[];
	weight_name: string;
	weight: number;
	duration: number;
	distance: number;
}

export interface Waypoints {
	hint: string;
	distance: number;
	name: string;
	location: Point;
}

export interface IMapState {
    map: {
        center: Point,
        zoom: number,
        polylinePoints: Point[],
        marks: Point[]
    }

}