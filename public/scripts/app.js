/* global $ */

// filters users local storage and returns obj containing food data
const filterStorage = (storage) => {
  let cart = {};
  for(let keys in storage) {
    if(typeof storage[keys] === 'string') {
      cart[keys] = Number(storage[keys])
    }
  }
  return cart;
}

// returns how many items are currently in users cart from local storage
const calculateCartQuantity = (cart) => {
  let total = 0;
  for(let item in cart) {
    if(cart[item]) {
      total += cart[item];
    }
  }
  return total;
}

// returns matched food data from storage of users cart
const matchFood = (cart, foods) => {
  let result = {};
  for(let item in cart) {
    if(cart[item]) {
      foods.forEach((food) => {
        if(food.id == item) {
          food.quantity = cart[item];
          result[item] = food;
        }
      });
    }
  }
  return result;
}

// helper function to draw the individual menu items of the users cart
const drawCartItems = (food, ul) => {
  let priceTotal = (food.quantity * food.price).toFixed(2)
  // make html tags
  let li = $('<li>').addClass('list-group-item d-flex justify-content-between lh-condensed');
  let div1 = $('<div>');
  let div2 = $('<div>');
  let div3 = $('<div>').addClass('counterprice');
  let div4 = $('<div>').addClass('wrapper text-center');
  let div5 = $('<div>').addClass('quantity');
  let div6 = $('<div>').addClass('count').text(localStorage.getItem(food.id));
  let button1 = $('<button>').addClass('decrement').text('-').attr('data-foodid', food.id);
  let button2 = $('<button>').addClass('increment').text('+').attr('data-foodid', food.id);
  let h5 = $('<h5>').addClass('my-0').text(food.name);
  let small = $('<small>').addClass('text-muted').text(food.description);
  let span1 = $('<span>').addClass('text-muted text-right').text(`$ ${priceTotal}`);
  let span2 = $('<span>').addClass('text-muted text-right').text(`$ ${food.price}${food.unitprice}`);

  // append tags
  div2.append(h5)
     .append(small);
  div5.append(button1)
      .append(div6)
      .append(button2);
  div4.append(div5);
  div3.append(div4)
      .append(span2)
      .append(span1);
  div1.append(div2);
  li.append(div1)
    .append(div3);
  ul.append(li);
}

// helper function to draw the subtotal, tax, and total of users cart
const drawPriceElement = (ul, label, amount) => {
  let li = $('<li>').addClass('list-group-item d-flex justify-content-between');
  let span1 = $('<span>').text(label);
  let span2 = $('<span>').addClass('text-muted').text(`$ ${amount}`);
  let strong = $('<strong>').text(`$ ${amount}`);
  if(label === 'Total CAD') {
    li.append(span1)
      .append(strong);
    ul.append(li);
  } else {
    li.append(span1)
      .append(span2);
    ul.append(li);
  }

}

// draws the users whole cart
const drawCart = (foods, total) => {
  let subtotal = 0;
  // make html tags
  let div = $('<div>').addClass('col-md-12 order-md-2 mb-4');
  let div2 = $('<div>').addClass('d-flex justify-content-end');
  let button = $('<button>').addClass('btn btn-light checkout').text('Checkout');
  let h4 = $('<h4>').addClass('d-flex justify-content-between align-items-center mb-3');
  let span1 = $('<span>').addClass('text-muted').text('Your Cart');
  let span2 = $('<span>').addClass('badge badge-secondary badge-pill').text(total);
  let ul = $('<ul>').addClass('list-group mb-3');
  let ul2 = $('<ul>').addClass('list-group mb-3');
  let hr = $('<hr>').addClass('mb-4');

  // append tags
  h4.append(span1)
    .append(span2);
  div.append(h4)
     .append(ul);
  div2.append(button);

  for(let item in foods) {
    drawCartItems(foods[item], ul);
    subtotal += foods[item].price * foods[item].quantity;
  }
  let taxes = (subtotal * 0.05).toFixed(2);
  let totalPrice = (subtotal * 1.05).toFixed(2);
  drawPriceElement(ul2, 'Subtotal', subtotal.toFixed(2));
  drawPriceElement(ul2, 'Tax (5%)', taxes);
  drawPriceElement(ul2, 'Total CAD', totalPrice);
  $(div).append(ul2);
  $('#container').append(div).append(div2).append(hr);
}

// passes food data in users cart to draw cart for user
const renderCart = (cart, total) => {
  $.get('api/foods', function(foods) {
    let foodInfo = matchFood(cart, foods);
    drawCart(foodInfo, total);
  });
}

// renders page to notify user when they have an empty cart
const renderEmptyCart = () => {
  let div = $('<div>').addClass('text-center');
  let h1 = $('<h1>').text('Your cart');
  let span = $('<span>').text("Your cart is empty.");
  let br = $('<br>');
  let a = $('<a>').addClass('btn btn-info').attr('href', '/menu').attr('role', 'button').text('Continue Browsing Here');
  div.append(h1)
     .append(span)
     .append(br)
     .append(a);
  $('#container').append(div);
}

// listener function for quantity selector
function quantityCounter(event){
  let buttonType = $(event.target).attr('class');
  let foodid = $(event.target).attr('data-foodid');
  if (buttonType === 'increment') {
    let oldQuantity = Number(localStorage.getItem(foodid));
    let newQuantity = oldQuantity + 1;
    localStorage.setItem(foodid, newQuantity);
    $(event.target).siblings('div').html(newQuantity);
    location.reload();
  }
  if (buttonType === 'decrement') {
    let oldQuantity = Number(localStorage.getItem(foodid));
    let newQuantity = oldQuantity - 1;
    if (newQuantity >= 0) {
      localStorage.setItem(foodid, newQuantity);
      $(event.target).siblings('div').html(newQuantity);
      location.reload();
    }
  }
}
const cart = filterStorage(window.localStorage);
const total = calculateCartQuantity(cart);

const postCart = () => {
  $.get('api/foods', function(foods) {
    let foodInfo = matchFood(cart, foods);
    $.post('/cart', {cart: foodInfo}, (res) => {
      if(res.result==true){
         window.location = res.url;
         localStorage.clear();
      } else{
        alert("There was an error creating your order");
      }

    });
  });
}

$(() => {
  if(total) {
    $('#container').empty();
    renderCart(cart, total);
    $('#container').on('click', '.quantity', quantityCounter);
    $('#container').on('click', '.checkout', postCart);
  } else {
    renderEmptyCart();
  }

})
