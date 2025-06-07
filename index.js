'use strict';

// 🚨 错误 1: 不可写的全局属性赋值 (TypeError)
NaN = 42;

class ShoppingCart {
  constructor() {
    this.items = [];
    this.discount = 0.1;
  }

  // 🚨 错误 2: 异步函数未处理 Promise (逻辑错误)
  async applyDiscount() {
    this.items.forEach((item) => {
      item.price *= 1 - this.discount; // 🚨 错误 3: this 指向问题
    });
  }

  // 🚨 错误 4: 错误的数组方法名 (TypeError)
  addItem(...newItems) {
    this.items = this.items.push(...newItems);
  }
}

// 🚨 错误 5: 变量提升导致的意外覆盖 (逻辑错误)
var totalPrice = 0;

function calculateTotal() {
  if (true) {
    // 🚨 错误 6: 块作用域变量错误使用 var
    var taxRate = 0.08;
  }

  // 🚨 错误 7: 尝试访问未声明的变量 (ReferenceError)
  return totalPrice * (1 + texRate);
}

// 🚨 错误 8: 错误的事件监听参数类型 (TypeError)
document.addEventListener('click', console.log('Clicked!'));

// 使用示例
const cart = new ShoppingCart();
cart.addItem({ name: 'Book', price: 30 }, { name: 'Pen', price: 2 });

setTimeout(() => {
  cart.applyDiscount();
}, 1000);

totalPrice = cart.items.reduce((sum, item) => sum + item.price, 0);
console.log('Total:', calculateTotal());
