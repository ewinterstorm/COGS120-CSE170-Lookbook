/*var itemData = [
  {'itemname': 'Dress', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/45466208_018_f?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':1, 'itemcost': '$40'},
  {'itemname': 'Bag', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47834106_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':2, 'itemcost': '$20'},
  {'itemname': 'Sunglasses', 'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/34643320_007_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':3, 'itemcost': '$10'}
]*/

$(document).ready(function() {
  initializePage();
})

function initializePage() {


  /*-------------------ADD TO CART-------------------*/

  //ITEM1
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

  //ITEM2
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

  //ITEM3
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


  //ITEM1 add to cart
  $("#item1 .addcart").click(addCart1);
    function addCart1(event) {
        localStorage.setItem('item1',JSON.stringify({'itemsize': item1size, 'itemqty': item1qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/45466208_018_f?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'itemcost': '$40','shiptime': '2','index': 1}));
        localStorage.setItem('yes1', JSON.stringify(1));
        console.log(localStorage.getItem('yes1'));
    };

  //ITEM2 add to cart
  $("#item2 .addcart").click(addCart2);
  function addCart2(event) {
    localStorage.setItem('item2',JSON.stringify({'itemsize': item2size, 'itemqty': item2qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47834106_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain','itemcost': '$20','shiptime': '1','index': 2}));
    localStorage.setItem('yes2', 1);
  };

  //ITEM3 add to cart
  $("#item3 .addcart").click(addCart3);
  function addCart3(event) {
    localStorage.setItem('item3',JSON.stringify({'itemsize': item3size, 'itemqty': item3qty, 'itemimg': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/34643320_007_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain','itemcost': '$10','shiptime': '2','index': 3}));
    localStorage.setItem('yes3', 1);
  }

  console.log(JSON.parse(localStorage.getItem('yes1')));









}
