import { AxiosConfig } from "../api/Api";

export async function getAllProducts() {
  return await AxiosConfig({endpoint: '/Product', method: 'GET'});
}
