import axios from "axios";

axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  responseType: "json",
});

export const get = <T>(url: string, options?: any) => {
  const data = axios.get<T>(url, options).then(
    (res) => res.data,
    (err) => {
      console.log(err);
    }
  );

  return data;
};
