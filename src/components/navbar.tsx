import { Layout } from "antd";
import { useTypedSelector } from "../store";
import { RouteItem } from "./routeItem";

export function Navbar() {
    const {routes} = useTypedSelector(state => state.routes)

    return (
        <Layout.Sider style={{backgroundColor: 'white'}} width={350}>

            <table className="routes-table">
                <tr>
                    <th>Routes</th>
                    <th>Point 1</th>
                    <th>Point 2</th>
                    <th>Point 3</th>
                </tr>
                {routes.map((el, i) => (
                    <RouteItem name={el.name} points={el.points} key={i} />
                ))}
            </table>
        </Layout.Sider>
    )
}