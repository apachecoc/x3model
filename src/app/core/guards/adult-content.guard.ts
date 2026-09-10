import { CanActivateFn } from '@angular/router';

const CONSENT_KEY = 'x3-adult-consent';

export const adultContentGuard: CanActivateFn = () => {
  if (localStorage.getItem(CONSENT_KEY) === 'accepted') {
    return true;
  }

  const accepted = window.confirm('3X es una plataforma para mayores de 18 anos. Confirma que eres mayor de edad.');
  if (accepted) {
    localStorage.setItem(CONSENT_KEY, 'accepted');
  }

  return accepted;
};
