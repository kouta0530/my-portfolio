import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

const request = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
});

export const get = <T>(url: string, options?: any) => {
  const data = request.get<T>(url, options).then(
    (res) => camelcaseKeys(res.data),
    (err) => {
      console.log(err);
    }
  );

  return data;
};
