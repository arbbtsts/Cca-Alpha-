if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')  // ou o nome do arquivo do SW
      .then(reg => console.log('SW registrado', reg))
      .catch(err => console.error('Falha no SW', err));
  });
}
