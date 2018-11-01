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
  $("#item1").click(function(e) {
    $(location).attr("href", "outfit1.html");
  });

  //Popup for outfit1 item1
  $(".popup").click(myFunction);
  function myFunction(event) {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
  }

}
