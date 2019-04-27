$(()=>{

  //check to see if oder status has changed on the server every 10 seconds
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