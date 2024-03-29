import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider domain="dev-5rczyhx1ym8w7jsz.us.auth0.com"
    clientId="wtvOppbYrrVgkICrCn00lBnCZOEoCnZM"
    authorizationParams={{
      redirect_uri: "https://full-stack-project-alpha-gold.vercel.app"
    }}
    audience="http://localhost:8000"
    scope="openid profile email"
    >
        <App />

    </Auth0Provider>
  </React.StrictMode>
);
