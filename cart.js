var newcart;

$(document).ready(function() {
  initializePage();
})

function initializePage() {

  /*-------------------CART TEMPLATE-------------------*/
    //var recentcartData = JSON.parse(localStorage.getItem('cart'));
    //var size = JSON.parse(localStorage.getItem('cartsize'));
    //console.log("outside");
    /*for (var i = 0; i < size; i++) {
      //var counter = recentcartData.counters[i];
      console.log("done");
    }*/
    newcart = [];
    var yes1 = JSON.parse(localStorage.getItem('yes1'));
    var yes2 = JSON.parse(localStorage.getItem('yes2'));
    var yes3 = JSON.parse(localStorage.getItem('yes3'));
    if (yes1 == 1){
      var item1 = JSON.parse(localStorage.getItem('item1'));
      newcart.push(item1);
    }
    console.log(item1);
    if (yes2 == 1){
      var item2 = JSON.parse(localStorage.getItem('item2'));
      newcart.push(item2);
    }

    console.log(item2);
    if (yes3 == 1){
      var item3 = JSON.parse(localStorage.getItem('item3'));
      newcart.push(item3);
    }

    console.log(newcart);
    console.log(newcart.length);
    var length = newcart.length;


    //var recentcartData = JSON.parse(recentcart);
    var source = $("#cart-template").html();
    var template = Handlebars.compile(source);

    var parentDiv = $("#templatedCart");

    // now iterate through the complexData list and keep appending:
    for (var i = 0; i < length; i++) {
      console.log('inhere' + i);
      var curData = newcart[i];
      var curHtml= template(curData);
      parentDiv.append(curHtml);
    };

    $(".deleteitems").click(del);
    function del(event){
      localStorage.setItem('item1', "");
      localStorage.setItem('item2', "");
      localStorage.setItem('item3', "");
      newcart = [];
      $(".cartitem").hide();
    }
      /*
      for (var i = 0; i < newcart.length; i++) {
        var curData3 = newcart[i];
        var curHtml3= template3(curData3);*/
        //parentDiv3.html(<div>No Cart Items!</div>);
      //};

      /*console.log(newcart);
      var index = ;
      if (index > -1) {
        newcart.splice(index, 1);
      }
      console.log(newcart);

      for (var i = 0; i < newcart.length; i++) {
        var curData3 = newcart[i];
        var curHtml3= template3(curData3);
        parentDiv3.html(curHtml3);
      };
    });*/

}
