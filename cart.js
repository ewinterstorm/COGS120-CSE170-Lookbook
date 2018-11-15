//var newcart;

$(document).ready(function() {
  initializePage();
})

function initializePage() {
  /*-------------------CHECK LOGIN-------------------*/
  var loginstatus = localStorage.getItem('loggedin');
  if (loginstatus == 1){
    $('#loggedin').html("<div class='navbtn hvr-grow' id='navlogin'>Profile</div>");
    $('#loggedin').attr("href", "profile.html");
  }
  else{
    $('#loggedin').html("<div class='navbtn hvr-grow' id='navlogin'>Login</div>");
    $('#loggedin').attr("href", "login.html");
  }

  /*-------------------CART TEMPLATE-------------------*/

    //Check if items have been added to local storage

    /*var yes1;
    var yes2;
    var yes3;
    console.log(JSON.parse(localStorage.getItem('yes1')))
    if (localStorage.getItem('yes1') != null){
      yes1 = JSON.parse(localStorage.getItem('yes1'));
      console.log(yes1);
    };
    if (localStorage.getItem('yes2') != null) {
      yes2 = JSON.parse(localStorage.getItem('yes2'));
    };
    if (localStorage.getItem('yes3') != null) {
      yes3 = JSON.parse(localStorage.getItem('yes3'));
    };

    console.log(yes1);
    console.log(yes2);
    console.log(yes3);

    if (newcart == null) {
      newcart = [];
    };

    //If item has been added to local storage, get item data and push to cart array
    if (yes1 == 1){
      var item1 = JSON.parse(localStorage.getItem('item1'));
      newcart.push(item1);
    }

    if (yes2 == 1){
      var item2 = JSON.parse(localStorage.getItem('item2'));
      newcart.push(item2);
    }

    if (yes3 == 1){
      var item3 = JSON.parse(localStorage.getItem('item3'));
      newcart.push(item3);
    }*/

    var newcart = JSON.parse(localStorage.getItem('cart'));
    console.log(newcart);
    if (newcart == null) {
      newcart = [];
    }

    var length = newcart.length;

    //var recentcartData = JSON.parse(recentcart);
    var source = $("#cart-template").html();
    var template = Handlebars.compile(source);

    var parentDiv = $("#templatedCart");

    // now iterate through the complexData list and keep appending:
    for (var i = 0; i < length; i++) {
      var curData = newcart[i];
      var curHtml= template(curData);
      parentDiv.append(curHtml);
    };


    $(".deleteitems").click(del);
    function del(event){
      var cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
      $(".cartitem").hide();
    }


}
