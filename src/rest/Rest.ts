import { xhrRest } from './xhrRest';
import { RestData, RestOptions, RestURL } from './types';

export class Rest {
  constructor(public baseOptions?: RestOptions) {}

  new(baseOptions?: RestOptions) {
    return new Rest(baseOptions);
  }

  newXhr() {
    return new XMLHttpRequest();
  }

  send<T = any>(url: RestURL, options: RestOptions<T> = {}) {
    const xhr = this.newXhr();
    if (this.baseOptions) {
      options = { ...this.baseOptions, ...options };
    }
    return xhrRest<T>(xhr, url, options);
  }

  get<T = any>(url: RestURL, options: RestOptions<T> = {}) {
    return this.send<T>(url, { method: 'GET', ...options });
  }

  delete<T = any>(url: RestURL, options: RestOptions<T> = {}) {
    return this.send<T>(url, { method: 'DELETE', ...options });
  }

  post<T = any>(url: RestURL, data?: RestData, options: RestOptions<T> = {}) {
    return this.send<T>(url, { method: 'POST', data, ...options });
  }

  patch<T = any>(url: RestURL, data?: RestData, options: RestOptions<T> = {}) {
    return this.send<T>(url, { method: 'PATCH', data, ...options });
  }

  put<T = any>(url: RestURL, data?: RestData, options: RestOptions<T> = {}) {
    return this.send<T>(url, { method: 'PUT', data, ...options });
  }

  upload<T = any>(url: RestURL, name: string, file: File, fileName?: string, options: RestOptions<T> = {}) {
    const formData = new FormData();
    formData.append(name, file, fileName || file.name);
    return this.send<T>(url, { method: 'POST', formData, ...options });
  }
}
