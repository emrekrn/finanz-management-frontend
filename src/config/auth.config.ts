export const cognitoAuthConfig = {
  authority:
    'https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_M06aaCldH',
  client_id: 'lnd9hoaafpivq2breu170mc2e',
  redirect_uri: 'http://localhost:5173',
  response_type: 'code',
  scope: 'phone openid email',
};

export const signOutRedirect = () => {
  const clientId = 'lnd9hoaafpivq2breu170mc2e';
  const logoutUri = 'http://localhost:5173/login';
  const cognitoDomain =
    'https://eu-central-1m06aacldh.auth.eu-central-1.amazoncognito.com';
  window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};
