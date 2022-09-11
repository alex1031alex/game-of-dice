import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./common.scss";
import { App } from "@components/app/app";
import { store } from "./store/store";


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);