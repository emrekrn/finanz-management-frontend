import { Button } from "@mui/material";
import "./App.css";
import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();
  const signOutRedirect = () => {
    const clientId = "lnd9hoaafpivq2breu170mc2e";
    const logoutUri = "";
    const cognitoDomain =
      "https://eu-central-1m06aacldh.auth.eu-central-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <div> ID Token: {auth.user?.id_token} </div>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <div className="bg-amber-200">Tailwind PoC</div>

        <button onClick={() => auth.removeUser()}>Sign out</button>
        <Button variant="contained">Hello world</Button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
}

export default App;
