import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider } from "react-oidc-context";
import { RouterProvider } from "react-router";
import { router } from "./routes.ts";

const cognitoAuthConfig = {
  authority:
    "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_M06aaCldH",
  client_id: "lnd9hoaafpivq2breu170mc2e",
  redirect_uri: "http://localhost:5173",
  response_type: "code",
  scope: "phone openid email",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <div className="w-screen">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>,
);
