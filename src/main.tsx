import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AuthProvider } from 'react-oidc-context';
import { RouterProvider } from 'react-router';
import { router } from './routes.ts';
import {
  GlobalStyles,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { theme } from './config/mui.config.ts';
import { cognitoAuthConfig } from './config/auth.config.ts';
import { GuestProvider } from './context/GuestContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <GuestProvider>
        <StyledEngineProvider enableCssLayer>
          <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
          <ThemeProvider theme={theme}>
            <div className="h-screen w-screen bg-zinc-900">
              <RouterProvider router={router} />
            </div>
          </ThemeProvider>
        </StyledEngineProvider>
      </GuestProvider>
    </AuthProvider>
  </StrictMode>
);
