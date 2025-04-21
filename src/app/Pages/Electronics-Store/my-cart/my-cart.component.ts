import { Component, OnInit } from '@angular/core';
import { ElectronicsNavComponent } from "../../../Components/navbar/store-navbars/electronics-nav/electronics-nav.component";
import { CommonModule } from '@angular/common';
import { AddToCartService ,CartItem} from '../../../Services/AddToCartService/add-to-cart-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-cart',
  standalone: true,
  imports: [ElectronicsNavComponent,CommonModule,FormsModule],
  templateUrl: './my-cart.component.html',
  styleUrl: './my-cart.component.css'
})
export class MyCartComponent implements OnInit{
  items: CartItem[] = [];
  total: number = 0;

  constructor(private cartService:AddToCartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.updateTotal();
  }

  updateTotal(): void {
    this.total = this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  removeItem(id: number): void {
    this.cartService.removeFromCart(id);
    this.items = this.cartService.getItems();
    this.updateTotal();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.items = [];
    this.total = 0;
  }

  exicuteBill(){}
}
