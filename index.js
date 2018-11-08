var outfitData = [
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48013312_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain"', 'index': 1},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48013312_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain"', 'index': 2},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48013312_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain"', 'index': 3},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48013312_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain"', 'index': 4},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48013312_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain"', 'index': 5},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48013312_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain"', 'index': 6}
]


$(document).ready(function() {
  initializePage();
})

function initializePage() {
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

  //Press back button while at an outfit
  $(".backhome").click(function(e) {
    $(location).attr("href", "index.html");
  });

  //Press cart button
  $(".cart").click(function(e) {
    $(location).attr("href", "cart.html");
  });

  //Go to outfit1
  $("#outfit1").click(function(e) {
    $(location).attr("href", "outfit1.html");
  });

  $("#outfit2").click(function(e) {
    $(location).attr("href", "outfit2.html");
  });

  $("#outfit3").click(function(e) {
    $(location).attr("href", "outfit3.html");
  });

  $("#outfit4").click(function(e) {
    $(location).attr("href", "outfit4.html");
  });

  $("#outfit5").click(function(e) {
    $(location).attr("href", "outfit5.html");
  });

  $("#outfit6").click(function(e) {
    $(location).attr("href", "outfit6.html");
  });


  var source   = $("#outfit-template").html();
  var template = Handlebars.compile(source);

  var parentDiv = $("#templatedOutfits");

  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < outfitData.length; i++) {
    var curData = outfitData[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  };



  //Popup for outfit1 item1
  $(".popup").click(myFunction);
  function myFunction(event) {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
  }

}
