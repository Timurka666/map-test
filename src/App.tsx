import { Provider } from "react-redux";
import { MapComponent } from "./components/map";
import { RouteItem } from "./components/routeItem";
import { store } from "./store";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <Provider store={store}>
      <Layout hasSider={true}>
        <Navbar />
        <Content style={{height: "100vh"}}>
          <MapComponent />
        </Content>
      </Layout>
    </Provider>
  );
}

export default App;
