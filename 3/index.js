(function() {

  const fetchData = () => {
    const urls = [
      'https://jsonplaceholder.typicode.com/todos?_limit=20',
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    ];
    
    const requests = urls.map(url => fetch(url));

    Promise.all(requests)
      .then(() => console.log('оба ответа получены'))
      .catch(e => console.log(e));
  }

  fetchData();

})();