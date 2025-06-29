import { use } from 'react';
import { useAuth } from 'react-oidc-context';
import { GuestContext } from '../context/GuestContext.tsx';
import { Outlet } from 'react-router';

export default function ProtectedRoute() {
  const auth = useAuth();
  const guest = use(GuestContext);

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (!auth.isAuthenticated && !guest.isGuest) {
    console.log('auth loading', auth.isLoading);
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  console.log('isAuthenticated', auth.user);
  console.log('isGuest', guest.isGuest);
  return <Outlet />;
}
