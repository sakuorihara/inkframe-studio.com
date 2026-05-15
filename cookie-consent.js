// Cookie Consent Manager — Inkframe Studio
(function () {
  const GA_ID = 'G-HY8XE0PWCC';
  const CONSENT_KEY = 'inkframe_cookie_consent';

  function loadGA() {
    if (window._gaLoaded) return;
    window._gaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }

  function hideBanner() {
    var b = document.getElementById('cookie-banner');
    if (b) b.style.display = 'none';
  }

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    hideBanner();
    loadGA();
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    hideBanner();
  }

  function showBanner() {
    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML =
      '<div class="cb-inner">' +
        '<div class="cb-text">' +
          '<p>当サイトはアクセス解析のためクッキーを使用しています。詳細は' +
          '<a href="cookie-policy.html">クッキーポリシー</a>をご参照ください。</p>' +
        '</div>' +
        '<div class="cb-actions">' +
          '<button id="cb-reject">拒否する</button>' +
          '<button id="cb-accept">同意する</button>' +
        '</div>' +
      '</div>';

    var style = document.createElement('style');
    style.textContent =
      '#cookie-banner{position:fixed;bottom:0;left:0;right:0;z-index:9999;' +
      'background:#0d0d0d;border-top:1px solid rgba(255,255,255,0.1);padding:16px 20px;}' +
      '.cb-inner{max-width:960px;margin:0 auto;display:flex;align-items:center;' +
      'justify-content:space-between;gap:16px;flex-wrap:wrap;}' +
      '.cb-text p{font-family:"Noto Sans JP",sans-serif;font-size:13px;' +
      'color:rgba(255,255,255,0.75);line-height:1.6;margin:0;}' +
      '.cb-text a{color:#b89a5a;text-decoration:underline;text-underline-offset:3px;}' +
      '.cb-actions{display:flex;gap:10px;flex-shrink:0;}' +
      '#cb-reject{font-family:"DM Mono",monospace;font-size:11px;letter-spacing:0.1em;' +
      'text-transform:uppercase;background:transparent;border:1px solid rgba(255,255,255,0.25);' +
      'color:rgba(255,255,255,0.5);padding:8px 16px;border-radius:2px;cursor:pointer;}' +
      '#cb-accept{font-family:"DM Mono",monospace;font-size:11px;letter-spacing:0.1em;' +
      'text-transform:uppercase;background:#b89a5a;border:1px solid #b89a5a;' +
      'color:#0d0d0d;padding:8px 20px;border-radius:2px;cursor:pointer;font-weight:500;}' +
      '#cb-reject:hover{border-color:rgba(255,255,255,0.5);color:rgba(255,255,255,0.8);}' +
      '#cb-accept:hover{background:#a08548;}' +
      '@media(max-width:600px){.cb-inner{flex-direction:column;align-items:flex-start;}' +
      '.cb-actions{width:100%;justify-content:flex-end;}}';

    document.head.appendChild(style);
    document.body.appendChild(banner);

    document.getElementById('cb-accept').addEventListener('click', accept);
    document.getElementById('cb-reject').addEventListener('click', reject);
  }

  // 初期化
  var consent = localStorage.getItem(CONSENT_KEY);
  if (consent === 'accepted') {
    loadGA();
  } else if (consent !== 'rejected') {
    document.addEventListener('DOMContentLoaded', showBanner);
  }
})();
