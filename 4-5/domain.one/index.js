window.onload = () => {
  const iFrame = document.getElementById('receiver');
  const iFrameWindow = iFrame.contentWindow;
  const RECEIVER_URL = iFrame.src;

  const addToStorage = (key, value) => {
    iFrameWindow.postMessage({
        key,
        value,
        action: 'localStorage.setItem(key, JSON.stringify(value))'
      },
      RECEIVER_URL
    );
    console.log(`The data with the key "${key}" was written`);
  }

  const readFromStorage = key => {
    iFrameWindow.postMessage({
        key,
        action: 'console.log(JSON.parse(localStorage.getItem(key)))'
      }, 
      RECEIVER_URL
    );
  }

  const removeFromStorage = key => {
    iFrameWindow.postMessage({
        key,
        action: 'localStorage.removeItem(key)'
      },
      RECEIVER_URL
    );
    console.log(`The data with the key "${key}" was removed`);
  }

  addToStorage('test key', 'test value');
  readFromStorage('test key');
  removeFromStorage('test key');
}