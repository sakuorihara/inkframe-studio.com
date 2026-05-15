// Language Switcher — Inkframe Studio
(function () {
  var LANG_KEY = 'inkframe_lang';

  function setLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem(LANG_KEY, lang);
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'ja' ? 'EN' : 'JP';
    // html lang属性も更新
    document.documentElement.lang = lang === 'ja' ? 'ja' : 'en';
  }

  window.toggleLang = function () {
    var current = document.documentElement.getAttribute('data-lang') || 'ja';
    setLang(current === 'ja' ? 'en' : 'ja');
  };

  // 初期化
  document.addEventListener('DOMContentLoaded', function () {
    var saved = localStorage.getItem(LANG_KEY) || 'ja';
    setLang(saved);
  });
})();
