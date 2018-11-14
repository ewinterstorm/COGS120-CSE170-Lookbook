var outfitData = [
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/45466208_018_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index': 1, 'Season': 'Spring'},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47310701_026_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index': 2, 'Season': 'Summer'},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/43306216_024_b?$redesign-zoom-5x$&amp;hei=2175&amp;qlt=80&amp;fit=constrain', 'index': 3, 'Season': 'Winter'},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48249775_053_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index': 4, 'Season': 'Summer'},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/43113000_015_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index': 5, 'Season': 'Fall'},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47941026_031_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index': 6, 'Season': 'Fall'}
]

$(document).ready(function() {
  initializePage();
})

function initializePage() {
  localStorage.setItem('yes1', 0);
  localStorage.setItem('yes2', 0);
  localStorage.setItem('yes3', 0);

  localStorage.setItem('checklogin',0);

  /*-------------------FOR LOGIN-------------------*/


  $('.navbtn').click(function(e){
    console.log("inside");
    localStorage.setItem('checklogin','1');
  });

  var check = JSON.parse(localStorage.getItem('checklogin'));
  console.log(check);
  if (check == 1){
    console.log("made it");
    //$('#navlogin').html(<div class="navbtn hvr-grow" id="navlogin">Profile</div>);
  }

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
  /*$(".opennav").click(openNav);
  function openNav(event) {
      document.getElementById("mySidenav").style.width = "200px";
  }*/

  /* Set the width of the side navigation to 0 */
  /*$(".closenav").click(closeNav);
  function closeNav(event) {
      document.getElementById("mySidenav").style.width = "0";
  }*/

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
