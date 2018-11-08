$(document).ready(function() {
  initializePage();
})

function initializePage() {
/*-------------------CART TEMPLATE-------------------*/
  var recentcartData = localStorage.getItem('cart');
  //var recentcartData = JSON.parse(recentcart);
  var source3 = $("#cart-template").html();
  var template3 = Handlebars.compile(source3);

  var parentDiv3 = $("#templatedCart");

  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < recentcartData.length; i++) {
    var curData3 = recentcartData[i];
    var curHtml3= template3(curData3);
    parentDiv3.append(curHtml3);
  };
}
