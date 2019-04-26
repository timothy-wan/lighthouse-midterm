$(()=>{

  function populateStorage() {
    localStorage.setItem('1', '4');
    localStorage.setItem('2', '3');
    localStorage.setItem('3', '2');
  }
  populateStorage();

  function writeItemQuantities() {

  }


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
      localStorage.setItem(foodid, newQuantity);
      $(event.target).siblings('div').html(newQuantity);
    }
  })
});