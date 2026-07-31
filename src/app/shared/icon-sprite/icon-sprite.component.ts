import { Component } from '@angular/core';

/**
 * Single source of truth for every icon on the site - mounted once in
 * app.component.html (display:none, a pure <symbol> definitions block) and
 * referenced everywhere via IconComponent's <use href="#i-name">. Hand-drawn
 * simple stroke icons rather than a generic icon-font/library, so every
 * product/module card gets a shape that actually matches its meaning instead
 * of a reused placeholder.
 */
@Component({
  selector: 'app-icon-sprite',
  standalone: true,
  template: `
    <svg width="0" height="0" style="position:absolute" aria-hidden="true">
      <defs>
        <symbol id="i-heart-pulse" viewBox="0 0 24 24"
          ><path
            d="M12 20.5s-7.5-4.6-10-9.2C.4 8 2 4.5 5.5 4c2-.3 3.9.6 5 2.2 1.1-1.6 3-2.5 5-2.2 3.5.5 5.1 4 3.5 7.3-2.5 4.6-10 9.2-10 9.2Z"
          /><path d="M4 11.5h2.5l1.3-2.6 1.7 4.3 1.3-2.9.9 1.7h6.3" /></symbol>
        <symbol id="i-stetho" viewBox="0 0 24 24"
          ><path d="M6 3v6.5a4.5 4.5 0 0 0 9 0V3" /><path d="M6 3H4.5M15 3h1.5" /><circle cx="19" cy="15" r="2.5" /><path
            d="M15 9.5v2A6.5 6.5 0 0 1 8.5 18H8a4 4 0 0 0 0 8"
        /></symbol>
        <symbol id="i-bed" viewBox="0 0 24 24"
          ><path d="M2.5 19v-6.5A2.5 2.5 0 0 1 5 10h5.5v3" /><path d="M13 13h6a2.5 2.5 0 0 1 2.5 2.5V19" /><path
            d="M2.5 16h19v3"
          /><circle cx="6.8" cy="10" r="1.4" /></symbol>
        <symbol id="i-receipt" viewBox="0 0 24 24"
          ><path d="M6 3h12v18l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3Z" /><path d="M8.5 8h7M8.5 11.5h7M8.5 15h4" /></symbol>
        <symbol id="i-pill" viewBox="0 0 24 24"
          ><rect x="3.5" y="8.5" width="17" height="7" rx="3.5" transform="rotate(-35 12 12)" /><path
            d="M10.7 7.7 13.3 16.3"
            transform="rotate(-35 12 12)"
        /></symbol>
        <symbol id="i-flask" viewBox="0 0 24 24"
          ><path d="M9 3h6" /><path
            d="M10 3v6.5L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.5V3"
          /><path d="M7.5 15h9" /></symbol>
        <symbol id="i-shield" viewBox="0 0 24 24"
          ><path d="M12 3 4.5 6v6c0 5 3.4 8.4 7.5 9.9 4.1-1.5 7.5-4.9 7.5-9.9V6Z" /><path d="m8.5 12 2.5 2.5L16 9" /></symbol>
        <symbol id="i-box" viewBox="0 0 24 24"
          ><path d="M3.5 8 12 3.5 20.5 8 12 12.5 3.5 8Z" /><path d="M3.5 8v9L12 21.5 20.5 17V8" /><path
            d="M12 12.5V21.5"
        /></symbol>
        <symbol id="i-id-card" viewBox="0 0 24 24"
          ><rect x="2.5" y="5.5" width="19" height="13" rx="2" /><circle cx="8" cy="11" r="2" /><path
            d="M5.5 15.5c.5-1.8 2-2.5 2.5-2.5s2 .7 2.5 2.5"
          /><path d="M14 9.5h5M14 12.5h5M14 15.5h3" /></symbol>
        <symbol id="i-clipboard" viewBox="0 0 24 24"
          ><rect x="5" y="4.5" width="14" height="17" rx="2" /><rect x="9" y="3" width="6" height="3" rx="1" /><path
            d="M8.5 10.5h7M8.5 14h7M8.5 17.5h4"
        /></symbol>
        <symbol id="i-ot-light" viewBox="0 0 24 24"
          ><circle cx="12" cy="8.5" r="4.5" /><path d="M12 13v3M9 19h6M10.5 16h3" /></symbol>
        <symbol id="i-scan" viewBox="0 0 24 24"
          ><circle cx="12" cy="12" r="8" /><path d="M12 4v4M12 16v4M4 12h4M16 12h4" /><circle
            cx="12"
            cy="12"
            r="1.3"
            fill="currentColor"
            stroke="none"
        /></symbol>
        <symbol id="i-droplet" viewBox="0 0 24 24"
          ><path d="M12 3.5s6 7 6 11.5a6 6 0 1 1-12 0c0-4.5 6-11.5 6-11.5Z" /></symbol>
        <symbol id="i-chart-bar" viewBox="0 0 24 24"><path d="M5 20v-7M11 20V6M17 20v-11" /><path d="M3 20.5h18" /></symbol>
        <symbol id="i-grid" viewBox="0 0 24 24"
          ><rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.5" /><rect x="13" y="3.5" width="7.5" height="7.5" rx="1.5" /><rect
            x="3.5"
            y="13"
            width="7.5"
            height="7.5"
            rx="1.5"
          /><rect x="13" y="13" width="7.5" height="7.5" rx="1.5" /></symbol>
        <symbol id="i-cloud" viewBox="0 0 24 24"
          ><path d="M7 18h10.5a3.5 3.5 0 0 0 .5-6.96A5.5 5.5 0 0 0 7.2 9.1 4.5 4.5 0 0 0 7 18Z" /></symbol>
        <symbol id="i-qr" viewBox="0 0 24 24"
          ><rect x="3.5" y="3.5" width="6" height="6" /><rect x="14.5" y="3.5" width="6" height="6" /><rect
            x="3.5"
            y="14.5"
            width="6"
            height="6"
          /><path d="M14.5 15h2.5v2.5M20.5 15v2M17 20.5h3.5" /></symbol>
        <symbol id="i-layers" viewBox="0 0 24 24"
          ><path d="m12 3 8.5 4.5L12 12 3.5 7.5Z" /><path d="m3.5 12 8.5 4.5 8.5-4.5" /><path
            d="m3.5 16.5 8.5 4.5 8.5-4.5"
        /></symbol>
        <symbol id="i-headset" viewBox="0 0 24 24"
          ><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect
            x="17"
            y="13"
            width="4"
            height="6"
            rx="1.5"
          /><path d="M20 19v.5a3 3 0 0 1-3 3h-3.5" /></symbol>
        <symbol id="i-tag" viewBox="0 0 24 24"
          ><path
            d="M12.5 3.5H19a1.5 1.5 0 0 1 1.5 1.5v6.5a1.5 1.5 0 0 1-.44 1.06l-8 8a1.5 1.5 0 0 1-2.12 0l-6.5-6.5a1.5 1.5 0 0 1 0-2.12l8-8a1.5 1.5 0 0 1 1.06-.44Z"
          /><circle cx="16" cy="8" r="1.4" fill="currentColor" stroke="none" /></symbol>
        <symbol id="i-chat" viewBox="0 0 24 24"
          ><path d="M4 5.5h16v10.5H9.5L5 20v-4H4Z" /><path d="M8 9.5h8M8 12.5h5" /></symbol>
        <symbol id="i-trend" viewBox="0 0 24 24"><path d="M4 16.5 9.5 11l3.5 3.5L20 7" /><path d="M15 7h5v5" /></symbol>
        <symbol id="i-mic" viewBox="0 0 24 24"
          ><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M6 11a6 6 0 0 0 12 0" /><path
            d="M12 17v4M9 21h6"
        /></symbol>
        <symbol id="i-ocr" viewBox="0 0 24 24"
          ><rect x="5" y="3.5" width="14" height="17" rx="2" /><path d="M8.5 8h7M8.5 11.5h7M8.5 15h4" /><path
            d="M3 8h1.5M3 14h1.5M19.5 8H21M19.5 14H21"
        /></symbol>
        <symbol id="i-prescription" viewBox="0 0 24 24"
          ><path d="M7 20V5h4.2a3.2 3.2 0 1 1 0 6.4H7" /><path d="m10.5 11.4 4.5 8.6" /><path d="M17 4v5M14.5 6.5h5" /></symbol>
        <symbol id="i-close" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18" /></symbol>
        <symbol id="i-search" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m19.5 19.5-4.3-4.3" /></symbol>
        <symbol id="i-gear" viewBox="0 0 24 24"
          ><circle cx="12" cy="12" r="3.2" /><path
            d="M12 4v2.4M12 17.6V20M4 12h2.4M17.6 12H20M6.3 6.3l1.7 1.7M16 16l1.7 1.7M6.3 17.7 8 16M16 8l1.7-1.7"
        /></symbol>
        <symbol id="i-migrate" viewBox="0 0 24 24"><path d="M8 8 4 12l4 4" /><path d="M4 12h9" /><path d="M16 8l4 4-4 4" /><path d="M20 12h-9" /></symbol>
        <symbol id="i-graduation" viewBox="0 0 24 24"
          ><path d="M12 4 2.5 8.5 12 13l9.5-4.5Z" /><path
            d="M6 11v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5"
          /><path d="M21.5 8.5V14" /></symbol>
        <symbol id="i-rocket" viewBox="0 0 24 24"
          ><path
            d="M12 2.5c3 1 5 4 5 8 0 2-1 4-2 5l-3 3-3-3c-1-1-2-3-2-5 0-4 2-7 5-8Z"
          /><circle cx="12" cy="9.5" r="1.6" /><path d="M9 15.5 6.5 18M15 15.5l2.5 2.5" /></symbol>
        <symbol id="i-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></symbol>
        <symbol id="i-pin" viewBox="0 0 24 24"
          ><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.4" /></symbol>
        <symbol id="i-phone" viewBox="0 0 24 24"
          ><path
            d="M5.5 4h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2 4.5 1.5v3a2 2 0 0 1-2.2 2C9.6 20 4 14.4 3.5 6.2A2 2 0 0 1 5.5 4Z"
        /></symbol>
        <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="m4 6.5 8 6 8-6" /></symbol>
        <symbol id="i-whatsapp" viewBox="0 0 24 24"
          ><path d="M12 21a9 9 0 1 0-7.8-4.5L3 21l4.7-1.2A9 9 0 0 0 12 21Z" /><path
            d="M8.7 8.4c.2-.4.4-.4.6-.4h.5c.2 0 .3.1.5.4.2.4.6 1.3.6 1.4.1.1.1.2 0 .4-.1.1-.1.2-.2.3-.1.2-.2.3-.3.4-.2.2-.3.3-.1.6.1.3.7 1.1 1.5 1.8 1 .9 1.8 1.2 2.1 1.3.2.1.4.1.5-.1.1-.2.6-.6.7-.8.2-.2.3-.2.5-.1l1.3.6c.2.1.3.1.3.3.1.1.1.7-.2 1.3-.2.6-1.3 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.8-.2-1.4-.5-2.4-1-4-3.5-4.1-3.7-.1-.1-1-1.3-1-2.5 0-1.2.6-1.8.8-2Z"
        /></symbol>
        <symbol id="i-fb" viewBox="0 0 24 24"
          ><path d="M14 21v-7h2.4l.4-3H14V9c0-.9.2-1.5 1.6-1.5H17V5c-.3 0-1.3-.1-2.3-.1-2.3 0-3.7 1.4-3.7 4v2H8.5v3H11v7Z" /></symbol>
        <symbol id="i-ig" viewBox="0 0 24 24"
          ><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1"
        /></symbol>
        <symbol id="i-yt" viewBox="0 0 24 24"
          ><rect x="2.5" y="6" width="19" height="12" rx="3.5" /><path fill="currentColor" stroke="none" d="M10.5 9.5v5l4.5-2.5Z" /></symbol>
        <symbol id="i-linkedin" viewBox="0 0 24 24"
          ><rect x="3.5" y="3.5" width="17" height="17" rx="3" /><circle cx="8" cy="8.2" r="1.1" fill="currentColor" stroke="none" /><path
            d="M8 11v6M12 11v6M12 13.3c0-1.4 1-2.3 2.3-2.3 1.5 0 2.2 1 2.2 2.7V17"
        /></symbol>
        <symbol id="i-calendar" viewBox="0 0 24 24"
          ><rect x="3.5" y="5" width="17" height="16" rx="2.5" /><path d="M8 3v4M16 3v4M3.5 10h17" /></symbol>
        <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M4 12h16M13 5l7 7-7 7" /></symbol>
        <symbol id="i-check" viewBox="0 0 24 24"><path d="m4 12.5 5 5L20 6.5" /></symbol>
        <symbol id="i-building" viewBox="0 0 24 24"
          ><path d="M5 21V5a1 1 0 0 1 1-1h4v17M14 21V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12" /><path
            d="M8 8h1M8 12h1M8 16h1M17 12h1M17 16h1"
        /></symbol>
        <symbol id="i-users" viewBox="0 0 24 24"
          ><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" /><circle cx="17" cy="8.5" r="2.5" /><path
            d="M16 14.3c2.6.3 4.5 2.3 4.5 5.2"
        /></symbol>
        <symbol id="i-target" viewBox="0 0 24 24"
          ><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"
        /></symbol>
        <symbol id="i-eye" viewBox="0 0 24 24"
          ><path d="M2 12s3.8-6.5 10-6.5S22 12 22 12s-3.8 6.5-10 6.5S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></symbol>
        <symbol id="i-sparkle" viewBox="0 0 24 24"
          ><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><path
            d="m6 6 2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"
        /></symbol>
        <symbol id="i-play" viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5Z" /></symbol>
        <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></symbol>
        <symbol id="i-globe" viewBox="0 0 24 24"
          ><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 4 6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-6-4-9s1.5-6.5 4-9Z" /></symbol>
        <symbol id="i-smartphone" viewBox="0 0 24 24"><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M10.5 19h3" /></symbol>
      </defs>
    </svg>
  `
})
export class IconSpriteComponent {}
