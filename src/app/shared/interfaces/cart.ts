import { IProducts } from "./products";

export interface ICartProduct {
  _id: string,
  name: string,
  count: number,
  price:number,

  product:IProducts
}