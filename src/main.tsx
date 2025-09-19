// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

/* Ionic core setup */
import { setupIonicReact } from "@ionic/react";
setupIonicReact();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN!}        // Tu dominio Auth0
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID!}  // Tu Client ID Auth0
      authorizationParams={{
        redirect_uri: "myapp://callback", // Scheme que registraste en Auth0
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
