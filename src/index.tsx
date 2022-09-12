import { Provider } from "react-redux";
import "./common.scss";
import { App } from "@components/app/app";
import { store } from "./store/store";
import {createRoot} from "react-dom/client";

const rootElem = document.getElementById("root") as HTMLDivElement;
const root = createRoot(rootElem);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
