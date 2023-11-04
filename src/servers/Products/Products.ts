import { AxiosConfig } from "../api/Api";

export type ProductType = {
  categoryDisplay: string;
  id: string;
  name: string;
  category: number;
  discount: number;
  price: number;
  description: string;
  stockQuantity: number;
  createdAt: Date;
  discountExpirationDate: Date;
  updatedAt: Date;
  reviews: Reviews[];
  address: Address
}

type Reviews = {
  comment: string;
  id: string
  productId: string;
}

type Address = {
  city: string; 
  state: string; 
  zipCode: string; 
  street: string;
}

export async function getAllProducts() {
  return await AxiosConfig({ endpoint: '/Product', method: 'GET' });
}

export async function getProductById(id:string) {
  return await AxiosConfig({ endpoint: `/Product/${id}`, method: 'GET' });
}

export async function updateProductById(id:string, payload: ProductType) {
  return await AxiosConfig({ 
    endpoint: `/Product/${id}`, 
    body: payload, 
    method: 'PUT' 
  });
}

export async function deleteProduct(id: string) {
  return await AxiosConfig({ endpoint: `/Product/${id}`, method: 'DELETE' });
}

export async function createProduct(payload: ProductType) {
  return await AxiosConfig({ 
    endpoint: `/Product`, 
    method: 'POST', 
    body: payload
  });
}
