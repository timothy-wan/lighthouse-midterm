function writeItemQuantities() {
  const $counts = $(".count")
  $.each($counts, function(i, val){
    const itemID = $(val).siblings().eq(0).attr('data-foodid');
    if (localStorage.getItem(itemID)) {
      $(val).html(localStorage.getItem(itemID))
    }
  })
}

function quantityCounter(event){
  let buttonType = $(event.target).attr('class');
  let foodid = $(event.target).attr('data-foodid');
  if (buttonType === 'increment') {
    let oldQuantity = Number(localStorage.getItem(foodid));
    let newQuantity = oldQuantity + 1;
    localStorage.setItem(foodid, newQuantity);
    $(event.target).siblings('div').html(newQuantity);
  }
  if (buttonType === 'decrement') {
    let oldQuantity = Number(localStorage.getItem(foodid));
    let newQuantity = oldQuantity - 1;
    if (newQuantity >= 0) {
      localStorage.setItem(foodid, newQuantity);
      $(event.target).siblings('div').html(newQuantity);
    }
  }
}

const filterStorage = (storage) => {
  let cart = {};
  for(let keys in storage) {
    if(typeof storage[keys] === 'string') {
      cart[keys] = Number(storage[keys])
    }
  }
  return cart;
}

const calculateCartQuantity = (cart) => {
  let total = 0;
  for(let item in cart) {
    if(cart[item]) {
      total += cart[item];
    }
  }
  return total;
}

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

const drawCartItems = (food, ul) => {
  // make html tags
  let li = $('<li>').addClass('list-group-item d-flex justify-content-between lh-condensed');
  let div = $('<div>');
  let h5 = $('<h5>').addClass('my-0').text(food.name);
  let small = $('<small>').addClass('text-muted').text(food.description);
  let span = $('<span>').addClass('text-muted').text(food.quantity * food.price);

  // append tags
  div.append(h5)
     .append(small);
  li.append(div)
    .append(span);
  ul.append(li);
}

const drawCart = (foods, total) => {
  // make html tags
  let div = $('<div>').addClass('col-md-12 order-md-2 mb-4');
  let h4 = $('<h4>').addClass('d-flex justify-content-between align-items-center mb-3');
  let span1 = $('<span>').addClass('text-muted').text('Your Cart');
  let span2 = $('<span>').addClass('badge badge-secondary badge-pill').text(total);
  let ul = $('<ul>').addClass('list-group mb-3');

  // append tags
  h4.append(span1)
    .append(span2);
  div.append(h4)
     .append(ul);

  for(let item in foods) {
    drawCartItems(foods[item], ul);
  }
  
  $('#test').prepend(div);
}

$(() => {
  let cart = filterStorage(window.localStorage);
  let total = calculateCartQuantity(cart);
  $.get('api/foods', function(foods) {
    let foodInfo = matchFood(cart, foods);
    console.log(foodInfo);
    drawCart(foodInfo, total);
  });
})
