import { createBrowserRouter, type DataRouter } from "react-router";
import App from "./App.tsx";

export const router: DataRouter = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
]);
