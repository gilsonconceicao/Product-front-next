import axios, { AxiosRequestConfig } from "axios";

interface AxiosConfigType {
  method: Method;
  endpoint: string;
  body?: AxiosRequestConfig<any> | any
  params?: AxiosRequestConfig<any>
}

export const AxiosConfig = async ({ method, endpoint, body, params }: AxiosConfigType) => {
  return await axios({
    baseURL: `http://localhost:8080${endpoint}`,
    method, 
    data: body, 
    params, 
    headers: {
      "Content-Type": "application/json"
    }
  });
}

type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK';