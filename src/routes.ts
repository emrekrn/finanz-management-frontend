import { createBrowserRouter, type DataRouter } from 'react-router';
import Login from './pages/login/Login.tsx';
import { PUBLIC_ROUTES, ROUTES } from './shared/constants.tsx';
import ProtectedRoute from './shared/ProtectedRoute.tsx';
import Dashboard from './pages/dashboard/Dashboard.tsx';
import Layout from './shared/components/Layout.tsx';
import Budget from './pages/budget/Budget.tsx';
import Investments from './pages/investments/Investments.tsx';

export const router: DataRouter = createBrowserRouter([
  {
    path: PUBLIC_ROUTES.Login,
    Component: Login,
  },
  {
    path: ROUTES.Dashboard,
    Component: ProtectedRoute,
    children: [
      {
        Component: Layout,
        children: [
          {
            index: true,
            Component: Dashboard,
          },
          {
            path: ROUTES.Budget,
            Component: Budget,
          },
          {
            path: ROUTES.Investments,
            Component: Investments,
          },
        ],
      },
    ],
  },
]);
