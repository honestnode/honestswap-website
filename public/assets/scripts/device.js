(() => {
  const root = document.getElementById('root');
  if (root) {
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
      root.setAttribute('class', 'mobile');
    } else {
      root.setAttribute('class', 'pc');
    }
  }
})();