import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import AppRoutes from "./router/AppRoutes.jsx";
import { store } from "./app/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </QueryClientProvider>,
);
