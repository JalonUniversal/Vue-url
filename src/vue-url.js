export default {
  install(Vue) {
    /**
     * To parse Original UrlString, get host/port/path/query in this process
     * @param {String} urlString Original UrlString to be parsed
     */
    function parse(urlString) {
      if (!urlString) {
        throw new Error('urlString String is necessary when you want to parse the queries!');
      }
      const AchorElement = document.createElement('a');
      AchorElement.href = decodeURI(urlString);

      const protocol = AchorElement.protocol ? AchorElement.protocol.replace(':', '') : 'unkown protocol';
      const host = AchorElement.host;
      const port = AchorElement.port;
      const path = AchorElement.pathname.replace(/^([^\/])/, '/$1');
      const hash = AchorElement.hash.replace('#', '');
      const queryString = AchorElement.search.replace(/^\?/, '');
      const queries = queryString.split('&');
      const queryObj = Object.create(null);
      const len = queries.length;
      for (let k = 0; k < len; k++) {
        const _each = queries[k].split('=');
        queryObj[_each[0]] = _each[1];
      }
      return {
        url: urlString,
        protocol: protocol,
        host: host,
        port: port,
        path: path,
        query: queryObj,
        queryString: queryString,
        hash: hash
      }
    }
    /**
     * Transform Query Object to Query String and append it to the end of Url
     * @param {String} url The base Url String
     * @param {Object} query Target Query Object
     */
    function append(url, query) {
      if (!url || url.indexOf('?') !== -1) {
        throw new Error('Right Format of Url is necessary!');
      };
      let queries = [];
      for (let k in query) {
        queries.push(`${k}=${query[k]}`);
      }
      const finalUrl = encodeURI(`${url}?${queries.join('&')}`);
      return finalUrl;
    }
    const urlTools = {
      parse,
      append
    }
    // mount $url object to Vue instance
    Vue.prototype.$url = urlTools
  }
};