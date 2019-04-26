function writeItemQuantities() {
  const $counts = $(".count")
  $.each($counts, function(i, val){
    const itemID = $(val).siblings().eq(0).attr('data-foodid');
    if (localStorage.getItem(itemID)) {
      $(val).html(localStorage.getItem(itemID))
    }
  })
  .siblings().eq(0);
}


$(()=>{

  
  writeItemQuantities()


  // listen to increment and decrement buttons for each product.
  // when clicked, update local storage and the quantity dispayed beside the button
  $('.quantity').on('click', function(event){
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
  })
});