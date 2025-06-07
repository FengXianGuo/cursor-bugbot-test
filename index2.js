'use strict';

NaN = 42;

class ShoppingCart {
  constructor() {
    this.items = [];
    this.discount = 0.1;
  }

  async applyDiscount() {
    this.items.forEach((item) => {
      item.price *= 1 - this.discount;
    });
  }
  addItem(...newItems) {
    this.items = this.items.push(...newItems);
  }
}
var totalPrice = 0;

function calculateTotal() {
  if (true) {
    var taxRate = 0.08;
  }
  return totalPrice * (1 + texRate);
}

document.addEventListener('click', console.log('Clicked!'));

// 使用示例
const cart = new ShoppingCart();
cart.addItem({ name: 'Book', price: 30 }, { name: 'Pen', price: 2 });

setTimeout(() => {
  cart.applyDiscount();
}, 1000);

totalPrice = cart.items.reduce((sum, item) => sum + item.price, 0);
console.log('Total:', calculateTotal());
