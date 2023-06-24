export type ReqMethod = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
export type ReqURL = string | URL;
export type ReqResponse<T = any> = { ok: boolean, data?: T, xhr: XMLHttpRequest };
export type ReqParams = Record<string, undefined | string | number | (string | number)[]>;
export type ReqData = any;
export type ReqResponseType = XMLHttpRequestResponseType; // | 'json' | 'text' | 'html' | 'blob' | 'stream';
export type ReqOptions<T = any> = {
  method?: ReqMethod;
  headers?: Record<string, string>|(() => Record<string, string>);
  baseUrl?: string;
  timeout?: number;
  params?: ReqParams;
  data?: ReqData;
  formData?: FormData;
  responseType?: XMLHttpRequestResponseType;
  send?: (xhr: XMLHttpRequest, body: string | FormData | undefined) => void;
  onInit?: (xhr: XMLHttpRequest) => void;
  onError?: (error: ReqError, xhr: XMLHttpRequest) => void;
  onSuccess?: (data: T, xhr: XMLHttpRequest) => void;
  onProgress?: (e: ProgressEvent<XMLHttpRequestEventTarget>, progress: number) => void;
};

const acceptJson = 'application/json; charset=utf-8';
const acceptMap: Partial<Record<ReqResponseType, string>> = {
  json: acceptJson,
  text: 'text/*; charset=utf-8',
  blob: '*/*',
  document: 'text/html, application/xhtml+xml, application/xml; q=0.9; charset=utf-8',
  arraybuffer: '*/*',
};

export class ReqError extends Error {
  code: string;
  constructor(public xhr: XMLHttpRequest) {
    const r = xhr.response;
    super(String(r && r.message || r || xhr.statusText));
    this.code = String(r && r.code || xhr.status);
  }
}

export class Req {
  constructor(public baseOptions?: ReqOptions) {}

  newXhr() {
    return new XMLHttpRequest();
  }

  async send<T = any>(url: ReqURL, options: ReqOptions<T> = {}): Promise<T> {
    const xhr = this.newXhr();
    
    try {
      if (this.baseOptions) options = { ...this.baseOptions, ...options };

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

      console.debug('Req success', url, options, xhr.response);
      return xhr.response as T;
    }
    catch (err) {
      console.debug('Req error', url, options, err);
      const error = new ReqError(xhr);
      if (options.onError) options.onError(error, xhr);
      throw error;
    }
  }

  async get<T = any>(url: ReqURL, options: ReqOptions<T> = {}) {
    return this.send<T>(url, { method: 'GET', ...options });
  }

  async delete<T = any>(url: ReqURL, options: ReqOptions<T> = {}) {
    return this.send<T>(url, { method: 'DELETE', ...options });
  }

  async post<T = any>(url: ReqURL, data?: ReqData, options: ReqOptions<T> = {}) {
    return this.send<T>(url, { method: 'POST', data, ...options });
  }

  async patch<T = any>(url: ReqURL, data?: ReqData, options: ReqOptions<T> = {}) {
    return this.send<T>(url, { method: 'PATCH', data, ...options });
  }

  async put<T = any>(url: ReqURL, data?: ReqData, options: ReqOptions<T> = {}) {
    return this.send<T>(url, { method: 'PUT', data, ...options });
  }

  async upload<T = any>(url: ReqURL, name: string, file: File, fileName?: string, options: ReqOptions<T> = {}) {
    const formData = new FormData();
    formData.append(name, file, fileName || file.name);
    return this.send<T>(url, { method: 'POST', formData, ...options });
  }
}

export const req = new Req();
export default req;
