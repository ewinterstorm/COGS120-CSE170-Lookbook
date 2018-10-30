$(document).ready(function() {
  initializePage();
})

function initializePage() {
  $("#item1").click(function(e) {
    $(location).attr("href", "outfit1.html");
  });

  $(".backhome").click(function(e) {
    $(location).attr("href", "index.html");
  });

  $(".cart").click(function(e) {
    $(location).attr("href", "cart.html");
  });
/*
  function toOutfit() {
    $(location).attr('href',"outfit1.html");
  }*/
}
