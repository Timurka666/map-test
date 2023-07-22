import { Point } from "../store/types";

export function stringifyPoints(points: Point[]) {
    let stringifiedPoints: string[] = [];
    points.forEach((el) => {
        
        stringifiedPoints.push([...el].reverse().join(','));
    })
    return stringifiedPoints.join(';');
}