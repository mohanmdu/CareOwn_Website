export const environment = {
  production: true,
  // Cross-origin call to the hms-api backend - careownitsolutions.com has no
  // /api reverse proxy of its own (unlike hms-website), and CORS on hms-api
  // already allow-lists this origin (see SecurityConfig.corsConfigurationSource),
  // so an absolute URL is simpler than adding a new nginx proxy just for this.
  apiBaseUrl: 'https://api.careownitsolutions.com',
  // Off by default - see RecaptchaVerificationService on the backend for the
  // matching flag. Flip both once real reCAPTCHA keys exist; no code change
  // needed on either side.
  recaptchaEnabled: false,
  recaptchaSiteKey: ''
};
