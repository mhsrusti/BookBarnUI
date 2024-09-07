import { ICart } from "../cart/cart.models";

export interface ICartItems extends ICart
{
    cartItemId:number,
    bookId:number,
    quantity:number
}