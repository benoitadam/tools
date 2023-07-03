import { RestError } from "./RestError";
import { RestOptions, RestResponseType, RestURL } from "./types";

const acceptJson = 'application/json; charset=utf-8';
const acceptMap: Partial<Record<RestResponseType, string>> = {
  json: acceptJson,
  text: 'text/*; charset=utf-8',
  blob: '*/*',
  document: 'text/html, application/xhtml+xml, application/xml; q=0.9; charset=utf-8',
  arraybuffer: '*/*',
};

export async function xhrRest<T = any>(xhr: XMLHttpRequest, url: RestURL, options: RestOptions<T> = {}): Promise<T> {
    try {
      if (options.onInit) options.onInit(xhr);

      xhr.timeout = options.timeout || 20000;
      xhr.responseType = options.responseType || 'json';

      if (options.params || options.baseUrl) {
        const urlObj = new URL(url, options.baseUrl);
        if (options.params) {
          Object.entries(options.params).forEach(([key, val]) => {
            if (Array.isArray(val)) {
              urlObj.searchParams.delete(key);
              Object.values(val).forEach((p) => urlObj.searchParams.append(key, String(p)));
              return;
            }
            if (typeof val === 'object') {
              urlObj.searchParams.set(key, JSON.stringify(val));
              return;
            }
            urlObj.searchParams.set(key, String(val));
          });
        }
        url = urlObj;
      }
      
      xhr.open((options.method || 'POST').toUpperCase(), url);

      if (options.data) xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      xhr.setRequestHeader('Accept', acceptMap[xhr.responseType] || acceptJson);
      if (options.headers) {
        const headers = typeof options.headers === 'function' ? options.headers() : options.headers;
        Object.entries(headers).forEach(([k, v]) => xhr.setRequestHeader(k, v));
      }

      if (options.onProgress) {
        const onProgress = options.onProgress;
        xhr.addEventListener('progress', (e) => onProgress(e, e.loaded / e.total));
      }
      
      const body = options.data ? JSON.stringify(options.data) : options.formData;

      const waitResponse = new Promise((resolve, reject) => {
        xhr.onload = resolve;
        xhr.onerror = reject;
      });

      if (options.send) options.send(xhr, body);
      else xhr.send(body);

      await waitResponse;

      if (xhr.status >= 400) throw xhr.status;

      if (options.onSuccess) options.onSuccess(xhr.response as T, xhr);

      // console.debug('Rest success', url, options, xhr.response);
      return xhr.response as T;
    }
    catch (err) {
      // console.debug('Rest error', url, options, err);
      const error = new RestError(xhr);
      if (options.onError) options.onError(error, xhr);
      throw error;
    }
  }