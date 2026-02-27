// Inline script injected in <head> to prevent flash of wrong theme (FOWT).
// Runs before React hydration. Sets data-theme and data-no-transition on <html>.
export const themeScript = `
(function(){
  try {
    var m = document.cookie.match(/(?:^|;\\s*)theme=(dark|light)/);
    var t = m ? m[1] : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', t);
    document.documentElement.setAttribute('data-no-transition', '');
  } catch(e) {}
})();
`;
