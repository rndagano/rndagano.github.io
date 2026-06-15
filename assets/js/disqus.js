(function () {
  var btn = document.getElementById('load-comments');
  if (!btn) return;
  btn.addEventListener('click', function () {
    btn.disabled = true;
    btn.textContent = 'Loading…';
    window.disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = window.location.pathname;
    };
    var s = document.createElement('script');
    s.src = 'https://rndagano.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (document.head || document.body).appendChild(s);
  });
})();
