(function() {

  const init = () => {
    const searchString = location.search.substr(1);
    const params = new URLSearchParams(searchString);
    const entries = params.entries();
    const objectOfParams = paramsToObject(entries);

    const sizeList = document.querySelectorAll('[name=size]');
    const colorList = document.querySelectorAll('[name=color]');
    const manufacturerList = document.querySelectorAll('option');
    const sale = document.getElementById('sale');
    const formItems = [...sizeList, ...colorList, ...manufacturerList, sale];

    for (const item of formItems) {
      switch (item.nodeName) {
        case 'INPUT':
          markItem(item, 'checked', item.name, objectOfParams);
          break;
    
        case 'OPTION':
          markItem(item, 'selected', item.parentNode.name, objectOfParams);
          break;
      }
    }

    formItems.forEach(item => item.addEventListener('click', changeURL));
  }

  const paramsToObject = entries => {
    const result = {};

    for (const entry of entries) {
      const [key, value] = entry;
      
      if (!result[key]) {
        result[key] = value;
      } else {
        result[key] = Array.isArray(result[key]) 
          ? [...result[key], value]
          : [result[key], value];
      }
    }

    return result;
  }

  const markItem = (item, attr, itemName, obj) => {
    if (!Array.isArray(obj[itemName]) && item.value === obj[itemName]) {
      item.setAttribute(attr, true);
    }

    if (Array.isArray(obj[itemName])) {
      for (const name of obj[itemName]) {
        if (item.value === name) {
          item.setAttribute(attr, true);
        }
      }
    }
  }

  const changeURL = evt => {
    if (evt.target.name === 'sale') {
      return;
    }

    const base = `${location.origin}${location.pathname}`;
    const search = `${new URLSearchParams(new FormData(evt.target.form))}`;
    const url = search ? `${base}?${search}` : base;
    console.log(url);
  }

  init();

})();