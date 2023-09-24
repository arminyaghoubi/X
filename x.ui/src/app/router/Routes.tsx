import { createBrowserRouter, RouterObject } from "react-router-dom";
import App from "../layout/App";

export const routes: RouterObject[] = [
    {
        path: '/',
        element: <App />
    }
]

export const router = createBrowserRouter(routes);
