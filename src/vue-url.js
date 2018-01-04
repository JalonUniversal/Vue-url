export default {
	install(Vue) {
		function Instance() {
			this.parse = () => {
				const query = window.location.search.replace(/^\?/, '').split('&');
				const queryObj = {};
				for(let k = 0; k < query.length; k++){
					const element = query[k].split('=');
					queryObj[element[0]] = element[1];
				}
				return queryObj;
			}
			this.parseSingle = (url, type = 'http') => {
				const protocol = type === 'http' ? 'http' : 'https';
				const protocolRegExp = new RegExp(type + '://');
				let formatUrl = url.replace(protocolRegExp, '').split('/');
				let query = formatUrl[formatUrl.length - 1];
				const firstSymbol = query.indexOf('?');
				query = query.slice(firstSymbol, query.length);
				query = query.split('&');
				let queryObj = {};
				for(let k = 0; k < query.length; k++) {
					const element = query[k].split('=');
					queryObj[element[0]] = element[1];
				}
				return queryObj;
			}
			this.append = (url, query = {}) => {
				if(!url || url.indexOf('?') != -1) return url;
				let queries = [];
				for(let k in query) {
					queries.push(`${k}=${query[k]}`);
				}
				return `${url}?${queries.join('&')}`;
			}
		}
		var __instance = __instance || new Instance();
		Vue.prototype.$url = __instance;
	}
}