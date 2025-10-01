import { PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
    authority: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_2WzRTJJHg',
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin + '/login',
    clientId: '696t50h3t1a9lhtrslo62cu07n',
    usePushedAuthorisationRequests: false,
    scope: 'openid email',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    ignoreNonceAfterRefresh: true,
    customParamsAuthRequest: {
      prompt: 'login',
      // login, consent
    },
    maxIdTokenIatOffsetAllowedInSeconds: 600,
  }
}
