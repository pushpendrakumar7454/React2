import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./app/store.js";
import AppRoutes from "./router/AppRoutes.jsx";

import Loader from "./shared/ui/components/Loader.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}

      <AppRoutes />

      <ToastContainer />
    </>
  );
};


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);