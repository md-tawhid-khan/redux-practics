import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import { RouterProvider } from "react-router-dom";
import Routes from "./routers/routes.tsx";
import { ThemeProvider } from "./provider/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={Routes} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
