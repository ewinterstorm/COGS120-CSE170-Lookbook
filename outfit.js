var itemData = [
  {'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48013312_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':1},
  {'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48013312_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':2},
  {'itempic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48013312_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index':3}
]

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



  /*-------------------POP OUT-------------------*/
  //Popup for outfit1 item1
  $(".popup").click(myFunction);
  function myFunction(event) {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
  }
}
