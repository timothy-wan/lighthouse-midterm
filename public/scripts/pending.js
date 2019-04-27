$(()=>{

  //check to see if oder status has changed on the server every 10 seconds

  setInterval(function(){
    if ($('#status').data('orderstatus') === 'pending') {

      //pending dots
      let $dots = $('#dots')
      if ($dots.text() === '') {
        $dots.text('.');
      } else if ($dots.text() === '.') {
        $dots.text('..')
      } else if ($dots.text() === '..') {
        $dots.text('...')
      }else if ($dots.text() === '...') {
        $dots.text('')
      }

      //crab animation
      let $img = $('#animation img');
      let imgsrc = $img.attr('src');
      if (imgsrc === '/images/animation/pot1.png') {
        $img.attr('src', '/images/animation/pot2.png');
      } else {
        $img.attr('src', '/images/animation/pot1.png');
      }
    }
  }, 1000)

  setInterval(function(){
    if ($('#status').data('orderstatus') === 'pending') {
      $.get('/api/orders', function(orders){
        let orderid = $('#order').data('orderid');

        // TODO this is really stupid, we need a database helper to get 1 order
        let serverOrderStatus = orders.filter(o => o.id === orderid)[0].status;
        console.log('current order status: ', serverOrderStatus);
      })
    }
  }, 10000);
})