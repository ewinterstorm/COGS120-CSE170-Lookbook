var outfitData = [
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48013312_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index': 1},
  {'outfitpic': 'https://i-h2.pinimg.com/564x/7f/92/68/7f9268f40d509c5c85155a0b5e58d772.jpg', 'index': 2},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48013312_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index': 3},
  {'outfitpic': 'https://i-h2.pinimg.com/564x/fb/49/94/fb4994e119fc00f4f28ce60f2d371437.jpg', 'index': 4},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48013312_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index': 5},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48013312_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index': 6}
]

$(document).ready(function() {
  initializePage();
})

function initializePage() {
  /*-------------------NAV BAR-------------------*/
  /* Set the width of the side navigation to 250px */
  $(".opennav").click(openNav);
  function openNav(event) {
      document.getElementById("mySidenav").style.width = "180px";
  }

  /* Set the width of the side navigation to 0 */
  $(".closenav").click(closeNav);
  function closeNav(event) {
      document.getElementById("mySidenav").style.width = "0";
  }

  /*-------------------BUTTON PRESSES-------------------*/
  //Press back button while at an outfit
  $(".backhome").click(function(e) {
    $(location).attr("href", "index.html");
  });

  function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}


  /*-------------------OUTFIT TEMPLATE-------------------*/

  var source   = $("#outfit-template").html();
  var template = Handlebars.compile(source);

  var parentDiv = $("#templatedOutfits");

  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < outfitData.length; i++) {
    var curData = outfitData[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  };

}
