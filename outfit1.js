var itemData = [
  {'itemname': 'Dress', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/45466208_018_f?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':1},
  {'itemname': 'Bag', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47834106_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':2},
  {'itemname': 'Sunglasses', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/34643320_007_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':3}
]

var cartData =[];

$(document).ready(function() {
  initializePage();
})

function initializePage() {

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


  $(".addcart").click(addCart);
  function addCart(event) {
      var number=localStorage.getItem('itemnumber');
      cartData.push({'itemsize': item1size, 'itemqty': item1qty, 'itemimg': itemData[0],'index': 1})
      localStorage.setItem('cart', cartData);
  }



  /*-------------------POP OUT-------------------*/
  //Popup for outfit1 item1
  $(".popup").click(myFunction);
  function myFunction(event) {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
  }
}
