import ReactDOM from "react-dom/client";
import "./index.css";
import ReduxProvider from "./feature/ReduxProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReduxProvider>
    <RouterProvider router={router} />
  </ReduxProvider>
);
