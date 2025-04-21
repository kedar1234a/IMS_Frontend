import { Injectable } from '@angular/core';
import { AddToCart } from '../../model/addToCart-data';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  private cart: CartItem[] = [];

  constructor() {}

  addToCart(item: CartItem): void {
    const existingItem = this.cart.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cart.push({ ...item });
    }
  }

  removeFromCart(id: number): void {
    this.cart = this.cart.filter(item => item.id !== id);
  }

  clearCart(): void {
    this.cart = [];
  }

  getItems(): CartItem[] {
    return this.cart;
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getItemCount(): number {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }


  

}
