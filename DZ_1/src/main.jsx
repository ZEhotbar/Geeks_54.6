import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AppRedux from "./AppRedux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRedux />
  </Provider>
);
