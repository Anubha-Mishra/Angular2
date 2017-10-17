import { Component, OnInit } from '@angular/core';
import {Item} from './item';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  cart : Item[];
  total : number;

  ngOnInit() {
      this.cart = [ new Item(1, "Angular2", 450, 1,false),
                    new Item(2, "Angular In Action", 600, 2,true),
                    new Item(3, "AngularHook", 200, 4,true)];
      this.calculateTotal();
  }

  calculateTotal() {
      this.total = 0;
      for (var item of this.cart) {
          this.total += (item.price * item.qty) - ( item.giftWrap ? 300  : 0);
      }
  }

  deleteItem(id: number) {
      // take confirmation
      var result = confirm("Do you really want to delete??");
      if (!result)
          return;

      // find position of the item in the cart and delete from cart
      for (var i = 0; i < this.cart.length; i++) {
          var item = this.cart[i];
          if (item.id == id) {
              this.cart.splice(i, 1);
              this.calculateTotal();
              break;
          }
      }
  }

}
