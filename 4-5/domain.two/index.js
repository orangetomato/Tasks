window.onload = () => {
  const SENDER_URL = 'http://127.0.0.1:5500';

  const receiveMessage = evt => {
    if (evt.origin !== SENDER_URL) {
      return;
    }

    new Function('key', 'value', evt.data[action])(evt.data[key], evt.data[value] = '');
  }

  window.addEventListener('message', receiveMessage);
}