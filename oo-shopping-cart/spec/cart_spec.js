var Cart = require('../cart');

describe('Shopping Cart', function(){

  beforeEach(function(){
    var cart = new Cart();
  });

  it('starts out as empty', function(){
    expect(cart.products.length).toEqual(0);
  });

  it('Can create items that have a price and a name', function(){
    cart.addProduct('iPhone 6S', 749);
    expect(cart.product[0].price).toEqual(749);
  });

  it('Allows items to be removed from the cart', function(){
    cart.addProduct('iPhone 6S', 749);
    expect(cart.product.length).toEqual(1);
    cart.removeProduct('iPhone 6S');
    expect(cart.product.length).toEqual(0);
  });

  it('Can total the price of all the items in the cart', function(){
    cart.addProduct('iPhone 6S', 749);
    cart.addProduct('iPad Pro', 1049);
    cart.addProduct('MacBook Pro', 3199);
    expect(cart.total).toEqual(4997);
  });

  it('Can take a percentage discount from the total price', function(){
    cart.addProduct('iPhone 6S', 749);
    cart.addProduct('iPad Pro', 1049);
    cart.addProduct('MacBook Pro', 3199);
    cart.discount(25);
    expect(cart.total).toEqual(3747.75);
  });
});
