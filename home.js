$(document).ready(function() {
  initializePage();
})

function initializePage() {
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





  //Popup for outfit1 item1
  $(".popup").click(myFunction);
  function myFunction(event) {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
  }

}
