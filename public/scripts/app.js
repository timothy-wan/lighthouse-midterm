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

$(() => {
  let cart = window.localStorage;
  $.get('api/foods', function(foods) {
    for(foodid in cart) {
      if(cart[foodid]) {
        $('#test').append('<p>hi</p>');
      }
    }
  });
  // for(foodid in test) {
  //   if(test[foodid]) {
  //     // console.log(test[foodid]);
  //   } 
  //   // console.log("not in cart");
  // }
  // // console.log(test);
})
