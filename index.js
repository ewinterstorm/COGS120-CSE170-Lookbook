var outfitData = [
  {'outfitpic': 'Outfit1.jpeg', 'index': 1, 'Season': 'Spring'},
  {'outfitpic': 'https://i-h2.pinimg.com/564x/7f/92/68/7f9268f40d509c5c85155a0b5e58d772.jpg', 'index': 2, 'Season': 'Summer'},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/45416070_011_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index': 3, 'Season': 'Winter'},
  {'outfitpic': 'https://i-h2.pinimg.com/564x/fb/49/94/fb4994e119fc00f4f28ce60f2d371437.jpg', 'index': 4, 'Season': 'Summer'},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48013312_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index': 5, 'Season': 'Fall'}/*,
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48013312_020_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index': 6, 'Season': 'Fall'}*/
]

$(document).ready(function() {
  initializePage();
})

function initializePage() {
  localStorage.setItem('yes1', 0);
  localStorage.setItem('yes2', 0);
  localStorage.setItem('yes3', 0);

  /*-------------------FOR LOGIN-------------------*/
  $('.login_btn').click(function(e){
    console.log("inside");
    $('#navlogin').text('Profile');
  });

  /*-------------------FILTERS-------------------*/
// to get this to work like in class, comment out the "STEP 1" parts
// above between BEGIN and END.
var source   = $("#outfit-template").html();
var template = Handlebars.compile(source);

var parentDiv = $("#templatedOutfits");

var name = window.localStorage.getItem('currFilter');

$("#Spring").click(function(e){

  $('#currfilter').text('Spring');

  for (var i = 0; i < outfitData.length; i++) {
    var curData = outfitData[i];
    var outfitnum = "#outfit" + (i+1);
    if (curData.Season != 'Spring') {
      $(outfitnum).hide();
    }
    else{
      $(outfitnum).show();
    }
  }
});

$("#Summer").click(function(e){

  $('#currfilter').text('Summer');

  for (var i = 0; i < outfitData.length; i++) {
    var curData = outfitData[i];
    var outfitnum = "#outfit" + (i+1);
    if (curData.Season != 'Summer') {
      $(outfitnum).hide();
    }
    else{
      $(outfitnum).show();
    }
  }
});

$("#Fall").click(function(e){

  $('#currfilter').text('Fall');

  for (var i = 0; i < outfitData.length; i++) {
    var curData = outfitData[i];
    var outfitnum = "#outfit" + (i+1);
    if (curData.Season != 'Fall') {
      $(outfitnum).hide();
    }
    else{
      $(outfitnum).show();
    }
  }
});

$("#Winter").click(function(e){

  $('#currfilter').text('Winter');

  for (var i = 0; i < outfitData.length; i++) {
    var curData = outfitData[i];
    var outfitnum = "#outfit" + (i+1);
    if (curData.Season != 'Winter') {
      $(outfitnum).hide();
    }
    else{
      $(outfitnum).show();
    }
  }
});


$(".delfilters").click(function(e){

  $('#currfilter').text('None');

  for (var i = 0; i < outfitData.length; i++) {
    var curData = outfitData[i];
    var outfitnum = "#outfit" + (i+1);
    $(outfitnum).show();
  }
});


  /*-------------------NAV BAR-------------------*/
  /* Set the width of the side navigation to 250px */
  $(".opennav").click(openNav);
  function openNav(event) {
      document.getElementById("mySidenav").style.width = "200px";
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
