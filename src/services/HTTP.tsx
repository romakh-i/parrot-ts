const API_URL = 'https://ski-rent-api.herokuapp.com/api';

export default class HTTP {
  public static request(url: string, method: string, params: any) {
    const requestParams = {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: ''
    }
    const requestUrl = API_URL + url;

    if (method === 'GET') {
      /* tslint:disable:no-string-literal */
      requestParams.headers['Authorization'] = 'Bearer ' + params.auth;
      delete requestParams.body;
    } else {
      requestParams.body = JSON.stringify(params);
    }
    return fetch(requestUrl, requestParams)
      .then(response => response.json())
      .catch((error) => error);
  }

  public static get = (url: string, params = {}) => HTTP.request(url, 'GET', params);

  public static post = (url: string, params = {}) => HTTP.request(url, 'POST', params);
}