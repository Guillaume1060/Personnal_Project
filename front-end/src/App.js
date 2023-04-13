import "./App.scss";
import { Provider } from "react-redux";
import appRoute from "./routes/app.route";
import { useRoutes } from "react-router-dom";
import store from "./store/store";
// import NavBar from "./containers/nav/NavBar";

function App() {
  const routes = useRoutes(appRoute);
  return (
    <>
      <Provider store={store}>
        {/* <NavBar /> */}
        <main>{routes}</main>
      </Provider>
    </>
  );
}
export default App;
