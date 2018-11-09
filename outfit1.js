var itemData = [
  {'itemname': 'Dress', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/45466208_018_f?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':1, 'itemcost': '$40'},
  {'itemname': 'Bag', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47834106_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':2, 'itemcost': '$20'},
  {'itemname': 'Sunglasses', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/34643320_007_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':3, 'itemcost': '$10'}
]

// Update to local storage value.
var cartData =[];

localStorage.setItem('yes1', 0);
localStorage.setItem('yes2', 0);
localStorage.setItem('yes3', 0);

$(document).ready(function() {
  initializePage();
})

function initializePage() {

  localStorage.setItem('cartsize', 0);
  /*-------------------ITEM TEMPLATE-------------------*/
  var source2 = $("#item-template").html();
  var template2 = Handlebars.compile(source2);

  var parentDiv2 = $("#templatedItems");

  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < itemData.length; i++) {
    var curData2 = itemData[i];
    var curHtml2= template2(curData2);
    parentDiv2.append(curHtml2);
  };

  console.log(localStorage);

  // cartData = localStorage.getItem("cart");

  /*-------------------ADD TO CART-------------------*/

  var item1size = localStorage.getItem('item1size');
  $('select[name=item1size]').val(item1size);

  $('select[name=item1size]').change(function() {
     localStorage.setItem('item1size', $(this).val());
  });

  var item1qty = localStorage.getItem('item1qty');
  $('select[name=item1qty]').val(item1qty);

  $('select[name=item1qty]').change(function() {
     localStorage.setItem('item1qty', $(this).val());
  });




  var item2size = localStorage.getItem('item2size');
  $('select[name=item2size]').val(item2size);

  $('select[name=item2size]').change(function() {
     localStorage.setItem('item2size', $(this).val());
  });

  var item2qty = localStorage.getItem('item2qty');
  $('select[name=item2qty]').val(item2qty);

  $('select[name=item2qty]').change(function() {
     localStorage.setItem('item2qty', $(this).val());
  });



  var item3size = localStorage.getItem('item3size');
  $('select[name=item3size]').val(item3size);

  $('select[name=item3size]').change(function() {
     localStorage.setItem('item3size', $(this).val());
  });

  var item3qty = localStorage.getItem('item3qty');
  $('select[name=item3qty]').val(item1qty);

  $('select[name=item3qty]').change(function() {
     localStorage.setItem('item3qty', $(this).val());
  });



    $("#item1 .addcart").click(addCart1);
      function addCart1(event) {
          localStorage.setItem('item1',JSON.stringify({'itemsize': item1size, 'itemqty': item1qty, 'itemimg': 'Outfit1.jpeg','index': 1}));
          localStorage.setItem('yes1', 1);
      };

      $("#item2 .addcart").click(addCart2);
      function addCart2(event) {
        console.log('item2');
        localStorage.setItem('item2',JSON.stringify({'itemsize': item2size, 'itemqty': item2qty, 'itemimg': 'Outfit1.jpeg','index': 2}));
        localStorage.setItem('yes2', 1);
      };
      $("#item3 .addcart").click(addCart3);
      function addCart3(event) {
        console.log('item3');
        localStorage.setItem('item3',JSON.stringify({'itemsize': item3size, 'itemqty': item3qty, 'itemimg': 'Outfit1.jpeg','index': 3}));
        localStorage.setItem('yes3', 1);
      }




  /*-------------------POP OUT-------------------*/

    $("#myPopup1").hide();
    $("#myPopup2").hide();
    $("#myPopup3").hide();
    $('#cartitem1').click(function(e){
      $("#myPopup1").fadeIn().fadeOut();
    });
    $('#cartitem2').click(function(e){
      $("#myPopup2").fadeIn().fadeOut();
    });
    $('#cartitem3').click(function(e){
      $("#myPopup3").fadeIn().fadeOut();
    });
}
