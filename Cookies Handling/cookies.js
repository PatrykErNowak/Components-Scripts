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
      const cookies = document.cookie.split('; ');
      for (const cookie of cookies) {
        const [name, value] = cookie.split('=')
        if (encodeURIComponent(cName) === name) return encodeURIComponent(value)
      }
    }
    return undefined
  }