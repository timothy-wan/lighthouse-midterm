/* global $ */

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

function showDescription(){
  let description = $(this).siblings('.description').text();
  let css = {
    width: '300px',
    left: window.innerWidth/2 - this.width/2,
    top: window.innerHeight/2 - this.height/2,
    border: '1px solid black',
    'border-radius': '10px'
  }

  let buttonCss = {
    position: 'absolute',
    top: '10px',
    right: '10px'
  }

  let textCss = {
    'font-size': '18px',
    'padding-top': '45px',
    'padding-bottom': '20px'

  }
  let $close = $('<button>').addClass('btn btn-light clearfix').css(buttonCss).text('x').attr('id','close');
  let $div =  $('<div>').addClass('descriptionBox container text-center').css(css).appendTo('body');
  $close.appendTo($div);
  let $text = $('<p>').text(description).css(textCss).appendTo($div);
  $close.on('click', function(){
    $(this).parent().remove();
  })


}

$(()=>{
  writeItemQuantities()
  $('.quantity').on('click', quantityCounter);
  $('.food img').on('click', showDescription);
});