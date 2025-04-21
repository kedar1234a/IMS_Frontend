import { Component} from '@angular/core';
import { ElectronicsNavComponent } from '../../../Components/navbar/store-navbars/electronics-nav/electronics-nav.component';
import { AddToCartService } from '../../../Services/AddToCartService/add-to-cart-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-electronics-add-to-cart',
  standalone: true,
  imports: [ElectronicsNavComponent, CommonModule],
  templateUrl: './electronics-add-to-cart.component.html',
  styleUrl: './electronics-add-to-cart.component.css'
})
export class ElectronicsAddToCartComponent{
  GST: number = 18;
  subtotal: number = 0;
  tax: number = 0;
  grandTotal: number = 0;
  item = '';
  constructor(private CartService: AddToCartService){}
  update_quantity(item: any, type: 'increase' | 'decrease'): void {
    // if (type === 'decrease' && item.quantity > 1) {
    //   item.quantity--;
    // } else if (type === 'increase') {
    //   item.quantity++;
    // }
    // console.log(this.item);
  
    
    item.total = item.product_price * item.quantity;
  }
}
