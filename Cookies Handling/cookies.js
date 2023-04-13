function setCookie(cName, cValue, options) {
    const opts = {
      days: 0,
      path: '/',
      domain: '',
      secure: false,
      ...options,
    };
  
    if (window.navigator.cookieEnabled) {
      const name = encodeURIComponent(cName);
      const value = encodeURIComponent(cValue);
      let cookieText = `${name}=${value}`;
  
      if (typeof Number(opts.days) === 'number' && opts.days !== 0) {
        const oneDay = 1000 * 60 * 60 * 24;
        const expireDate = new Date(Date.now() + oneDay * Number(opts.days));
        cookieText += `; expires=${expireDate.toUTCString()}`;
      }
      if (opts.path !== '/') cookieText += `; path=${opts.path}`;
      if (opts.domain) cookieText += `; domain=${opts.domain}`;
      if (opts.secure === true) cookieText += `; secure`;
  
      document.cookie = cookieText;
    }
  }
  
  function getCookie(cName) {
    if (document.cookie !== '') {
      const name = encodeURIComponent(cName);
      const cookies = document.cookie.split(';');
      let cookieValue;
  
      cookies.forEach((cookie) => {
        const test = cookie.trim().startsWith(name);
        if (test) {
          cookieValue = cookie.substring(cookie.indexOf('=') + 1);
        }
      });
      return cookieValue;
    }
  }