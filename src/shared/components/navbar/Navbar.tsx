import { NavLink } from 'react-router';
import { ROUTES } from '../../constants.tsx';
import Button from '@mui/material/Button';
import { signOutRedirect } from '../../../config/auth.config.ts';
import clsx from 'clsx';

export default function Navbar() {
  const onLogout = () => signOutRedirect();
  const routes = Object.entries(ROUTES);

  return (
    <div className="flex h-16 w-screen justify-center border-b border-white">
      <div className="container flex h-full items-center justify-between">
        <h1 className="text-2xl">FinTrack</h1>
        <div className="flex items-center gap-5">
          {routes.map(([name, route]) => (
            <NavLink
              key={name}
              to={route}
              className={({ isActive }) =>
                clsx(
                  'hover:text-white',
                  isActive ? 'text-white' : 'text-zinc-400'
                )
              }
            >
              {name}
            </NavLink>
          ))}

          <Button className="text-zinc-400 hover:text-white" onClick={onLogout}>
            Sign out
          </Button>
        </div>
      </div>
    </div>
  );
}
