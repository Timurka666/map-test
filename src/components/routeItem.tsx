import { IRoute } from "../store/types";
import { useActions, useTypedSelector } from "../store";

export function RouteItem(props: IRoute) {
    const {setRoute} = useActions()
    const {name} = useTypedSelector(state => state.currentRoute.route)
    return (
        <tr onClick={() => {setRoute(props)}} className={name === props.name ? "selected-row" : ""}>
            <td>{props.name}</td>
            <td>{props.points[0][0]}<br/>{props.points[0][1]}</td>
            <td>{props.points[1][0]}<br/>{props.points[1][1]}</td>
            <td>{props.points[2][0]}<br/>{props.points[2][1]}</td>
        </tr>
    )
}