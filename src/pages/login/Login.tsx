import Button from '@mui/material/Button';
import { useAuth } from 'react-oidc-context';
import { use } from 'react';
import { GuestContext } from '../../context/GuestContext.tsx';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../shared/constants.tsx';

export default function Login() {
  const auth = useAuth();
  const guest = use(GuestContext);
  const navigate = useNavigate();
  console.log('isGuest', guest.isGuest);
  console.log('isAuthenticated', auth.isAuthenticated);

  function continueAsGuest() {
    guest.changeIsGuest(true);
    navigate(ROUTES.Dashboard);
  }

  if (auth.isAuthenticated || guest.isGuest) {
    navigate(ROUTES.Dashboard);
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8">
      <h1 className="text-4xl">FinTrack</h1>
      <div className="flex flex-col gap-4">
        <Button
          className="w-50"
          variant="outlined"
          onClick={() => auth.signinRedirect()}
        >
          Sign in
        </Button>
        <Button
          className="w-50"
          variant="outlined"
          color="secondary"
          onClick={() => continueAsGuest()}
        >
          Continue as guest
        </Button>
      </div>
    </div>
  );
}
