export const oktaConfig = {
  clientId: '0oa3kjod8gwQd7agW5d7',
  issuer: 'https://dev-78152297.okta.com/oauth2/default',
  redirectUri: `http://localhost:8080/login/callback`,
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
