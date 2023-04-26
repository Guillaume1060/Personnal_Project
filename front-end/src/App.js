import "./App.scss";
import { Provider } from "react-redux";
import appRoute from "./routes/app.route";
import { useRoutes } from "react-router-dom";
import store from "./store/store";
import classes from "./App.scss";

function App() {
  const routes = useRoutes(appRoute);
  return (
    <>
      <Provider store={store}>
        <main className={classes.parent}>{routes}</main>
      </Provider>
    </>
  );
}
export default App;
