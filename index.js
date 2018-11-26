var outfitData = [
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/45466208_018_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index': 1, 'Season': 'Spring', 'Style': 'Casual', 'Dress': 1, 'Sweater': 0, 'Skirt': 0, 'Pant':0},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47310701_026_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index': 2, 'Season': 'Summer', 'Style': 'Casual', 'Dress': 0, 'Sweater': 1, 'Skirt': 0, 'Pant':1},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/43306216_024_b?$redesign-zoom-5x$&amp;hei=2175&amp;qlt=80&amp;fit=constrain', 'index': 3, 'Season': 'Winter', 'Style': 'Casual', 'Dress': 0, 'Sweater': 1, 'Skirt': 0, 'Pant':1},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/48249775_053_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index': 4, 'Season': 'Summer', 'Style': 'Pastel', 'Dress': 0, 'Sweater': 0, 'Skirt': 1, 'Pant':0},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/43113000_015_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index': 5, 'Season': 'Fall', 'Style': 'Chic', 'Dress': 0, 'Sweater': 1, 'Skirt': 1, 'Pant':0},
  {'outfitpic': 'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/47941026_031_b?$xlarge$&amp;hei=900&amp;qlt=80&amp;fit=constrain', 'index': 6, 'Season': 'Fall', 'Style': 'Vintage', 'Dress': 0, 'Sweater': 0, 'Skirt': 0, 'Pant':1}
]

/* Set acceptable usernames and passwords for login*/
var userpass1 = {'username':'iamuser1', 'password':'170'};
var userpass2 = {'username':'iamuser2', 'password':'120'};

localStorage.setItem('userpass1', JSON.stringify(userpass1));
localStorage.setItem('userpass2', JSON.stringify(userpass2));


$(document).ready(function() {
  initializePage();
})

function initializePage() {

  /*-------------------LOGIN----------------*/
  $("#loginchange").click(function(e) {
    /*Check if username and password are correct*/
    var userin = $('#username').val();
    var passin = $('#password').val();
    if (userin == (JSON.parse(localStorage.getItem('userpass1'))).username && passin == (JSON.parse(localStorage.getItem('userpass1'))).password ) {
      localStorage.setItem('loggedin', 1);
      localStorage.setItem('user', 1);
      window.location.replace("index.html");
    }

    else if (userin == (JSON.parse(localStorage.getItem('userpass2'))).username && passin == (JSON.parse(localStorage.getItem('userpass2'))).password ) {
      localStorage.setItem('loggedin', 1);
      localStorage.setItem('user', 2);
      $('#loggedin').attr("href", "index.html");
      console.log('user2');
      window.location.replace("index.html");
    }

    else{
      console.log('alert');
      alert("Incorrect Username or Password!")
    }
  });

  $("#loggedout").click(function(e) {
    localStorage.setItem('loggedin', 0);
  });

  //check if logged in
  var loginstatus = localStorage.getItem('loggedin');
  console.log(loginstatus);
  if (loginstatus == 1){
    $('#loggedin').html("<div class='navbtn hvr-grow' id='navlogin'>Profile</div>");
    $('#loggedin').attr("href", "profile.html");
  }
  else{
    $('#loggedin').html("<div class='navbtn hvr-grow' id='navlogin'>Login</div>");
    $('#loggedin').attr("href", "login.html");
  }

  /*-------------------SEASON FILTERS-------------------*/
  var name = window.localStorage.getItem('currFilter');

  $("#Spring").click(function(e){
    $('#currfilter').text('Spring');
    $("#Spring").html("<span class='hvr-grow' style='color:#fb91b2'>Spring</span>");
    $("#Fall").html("<span class='hvr-grow'>Fall</span>");
    $("#Summer").html("<span class='hvr-grow'>Summer</span>");
    $("#Winter").html("<span class='hvr-grow'>Winter</span>");
    $("#Pastel").html("<span class='hvr-grow'>Pastel</span>");
    $("#Casual").html("<span class='hvr-grow'>Casual</span>");
    $("#Chic").html("<span class='hvr-grow'>Chic</span>");
    $("#Vintage").html("<span class='hvr-grow'>Vintage</span>");
    $("#Dresses").html("<span class='hvr-grow'>Dresses</span>");
    $("#Sweaters").html("<span class='hvr-grow'>Sweaters</span>");
    $("#Skirts").html("<span class='hvr-grow'>Skirts</span>");
    $("#Pants").html("<span class='hvr-grow'>Pants</span>");

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
    $("#Summer").html("<span class='hvr-grow' style='color:#fb91b2'>Summer</span>");
    $("#Spring").html("<span class='hvr-grow'>Spring</span>");
    $("#Fall").html("<span class='hvr-grow'>Fall</span>");
    $("#Winter").html("<span class='hvr-grow'>Winter</span>");
    $("#Pastel").html("<span class='hvr-grow'>Pastel</span>");
    $("#Casual").html("<span class='hvr-grow'>Casual</span>");
    $("#Chic").html("<span class='hvr-grow'>Chic</span>");
    $("#Vintage").html("<span class='hvr-grow'>Vintage</span>");
    $("#Dresses").html("<span class='hvr-grow'>Dresses</span>");
    $("#Sweaters").html("<span class='hvr-grow'>Sweaters</span>");
    $("#Skirts").html("<span class='hvr-grow'>Skirts</span>");
    $("#Pants").html("<span class='hvr-grow'>Pants</span>");

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
    $("#Fall").html("<span class='hvr-grow' style='color:#fb91b2'>Fall</span>");
    $("#Spring").html("<span class='hvr-grow'>Spring</span>");
    $("#Summer").html("<span class='hvr-grow'>Summer</span>");
    $("#Winter").html("<span class='hvr-grow'>Winter</span>");
    $("#Pastel").html("<span class='hvr-grow'>Pastel</span>");
    $("#Casual").html("<span class='hvr-grow'>Casual</span>");
    $("#Chic").html("<span class='hvr-grow'>Chic</span>");
    $("#Vintage").html("<span class='hvr-grow'>Vintage</span>");
    $("#Dresses").html("<span class='hvr-grow'>Dresses</span>");
    $("#Sweaters").html("<span class='hvr-grow'>Sweaters</span>");
    $("#Skirts").html("<span class='hvr-grow'>Skirts</span>");
    $("#Pants").html("<span class='hvr-grow'>Pants</span>");

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
    $("#Winter").html("<span class='hvr-grow' style='color:#fb91b2'>Winter</span>");
    $("#Spring").html("<span class='hvr-grow'>Spring</span>");
    $("#Summer").html("<span class='hvr-grow'>Summer</span>");
    $("#Fall").html("<span class='hvr-grow'>Fall</span>");
    $("#Pastel").html("<span class='hvr-grow'>Pastel</span>");
    $("#Casual").html("<span class='hvr-grow'>Casual</span>");
    $("#Chic").html("<span class='hvr-grow'>Chic</span>");
    $("#Vintage").html("<span class='hvr-grow'>Vintage</span>");
    $("#Dresses").html("<span class='hvr-grow'>Dresses</span>");
    $("#Sweaters").html("<span class='hvr-grow'>Sweaters</span>");
    $("#Skirts").html("<span class='hvr-grow'>Skirts</span>");
    $("#Pants").html("<span class='hvr-grow'>Pants</span>");

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

  /*-------------------STYLE FILTERS-------------------*/
  $("#Pastel").click(function(e){
    $('#currfilter').text('Pastel');
    $("#Pastel").html("<span class='hvr-grow' style='color:#fb91b2'>Pastel</span>");
    $("#Casual").html("<span class='hvr-grow'>Casual</span>");
    $("#Chic").html("<span class='hvr-grow'>Chic</span>");
    $("#Vintage").html("<span class='hvr-grow'>Vintage</span>");
    $("#Spring").html("<span class='hvr-grow'>Spring</span>");
    $("#Fall").html("<span class='hvr-grow'>Fall</span>");
    $("#Summer").html("<span class='hvr-grow'>Summer</span>");
    $("#Winter").html("<span class='hvr-grow'>Winter</span>");
    $("#Dresses").html("<span class='hvr-grow'>Dresses</span>");
    $("#Sweaters").html("<span class='hvr-grow'>Sweaters</span>");
    $("#Skirts").html("<span class='hvr-grow'>Skirts</span>");
    $("#Pants").html("<span class='hvr-grow'>Pants</span>");

    for (var i = 0; i < outfitData.length; i++) {
      var curData = outfitData[i];
      var outfitnum = "#outfit" + (i+1);
      if (curData.Style != 'Pastel') {
        $(outfitnum).hide();
      }
      else{
        $(outfitnum).show();
      }
    }
  });

  $("#Casual").click(function(e){
    $('#currfilter').text('Casual');
    $("#Casual").html("<span class='hvr-grow' style='color:#fb91b2'>Casual</span>");
    $("#Pastel").html("<span class='hvr-grow'>Pastel</span>");
    $("#Chic").html("<span class='hvr-grow'>Chic</span>");
    $("#Vintage").html("<span class='hvr-grow'>Vintage</span>");
    $("#Spring").html("<span class='hvr-grow'>Spring</span>");
    $("#Fall").html("<span class='hvr-grow'>Fall</span>");
    $("#Summer").html("<span class='hvr-grow'>Summer</span>");
    $("#Winter").html("<span class='hvr-grow'>Winter</span>");
    $("#Dresses").html("<span class='hvr-grow'>Dresses</span>");
    $("#Sweaters").html("<span class='hvr-grow'>Sweaters</span>");
    $("#Skirts").html("<span class='hvr-grow'>Skirts</span>");
    $("#Pants").html("<span class='hvr-grow'>Pants</span>");

    for (var i = 0; i < outfitData.length; i++) {
      var curData = outfitData[i];
      var outfitnum = "#outfit" + (i+1);
      if (curData.Style != 'Casual') {
        $(outfitnum).hide();
      }
      else{
        $(outfitnum).show();
      }
    }
  });

  $("#Chic").click(function(e){
    $('#currfilter').text('Chic');
    $("#Chic").html("<span class='hvr-grow' style='color:#fb91b2'>Chic</span>");
    $("#Casual").html("<span class='hvr-grow'>Casual</span>");
    $("#Pastel").html("<span class='hvr-grow'>Pastel</span>");
    $("#Vintage").html("<span class='hvr-grow'>Vintage</span>");
    $("#Spring").html("<span class='hvr-grow'>Spring</span>");
    $("#Fall").html("<span class='hvr-grow'>Fall</span>");
    $("#Summer").html("<span class='hvr-grow'>Summer</span>");
    $("#Winter").html("<span class='hvr-grow'>Winter</span>");
    $("#Dresses").html("<span class='hvr-grow'>Dresses</span>");
    $("#Sweaters").html("<span class='hvr-grow'>Sweaters</span>");
    $("#Skirts").html("<span class='hvr-grow'>Skirts</span>");
    $("#Pants").html("<span class='hvr-grow'>Pants</span>");

    for (var i = 0; i < outfitData.length; i++) {
      var curData = outfitData[i];
      var outfitnum = "#outfit" + (i+1);
      if (curData.Style != 'Chic') {
        $(outfitnum).hide();
      }
      else{
        $(outfitnum).show();
      }
    }
  });

  $("#Vintage").click(function(e){
    $('#currfilter').text('Vintage');
    $("#Vintage").html("<span class='hvr-grow' style='color:#fb91b2'>Vintage</span>");
    $("#Casual").html("<span class='hvr-grow'>Casual</span>");
    $("#Chic").html("<span class='hvr-grow'>Chic</span>");
    $("#Pastel").html("<span class='hvr-grow'>Pastel</span>");
    $("#Spring").html("<span class='hvr-grow'>Spring</span>");
    $("#Fall").html("<span class='hvr-grow'>Fall</span>");
    $("#Summer").html("<span class='hvr-grow'>Summer</span>");
    $("#Winter").html("<span class='hvr-grow'>Winter</span>");
    $("#Dresses").html("<span class='hvr-grow'>Dresses</span>");
    $("#Sweaters").html("<span class='hvr-grow'>Sweaters</span>");
    $("#Skirts").html("<span class='hvr-grow'>Skirts</span>");
    $("#Pants").html("<span class='hvr-grow'>Pants</span>");

    for (var i = 0; i < outfitData.length; i++) {
      var curData = outfitData[i];
      var outfitnum = "#outfit" + (i+1);
      if (curData.Style != 'Vintage') {
        $(outfitnum).hide();
      }
      else{
        $(outfitnum).show();
      }
    }
  });


  /*-------------------ITEM TYPE FILTERS-------------------*/
  $("#Dresses").click(function(e){
    $('#currfilter').text('Dresses');
    $("#Dresses").html("<span class='hvr-grow' style='color:#fb91b2'>Dresses</span>");
    $("#Sweaters").html("<span class='hvr-grow'>Sweaters</span>");
    $("#Skirts").html("<span class='hvr-grow'>Skirts</span>");
    $("#Pants").html("<span class='hvr-grow'>Pants</span>");
    $("#Vintage").html("<span class='hvr-grow'>Vintage</span>");
    $("#Casual").html("<span class='hvr-grow'>Casual</span>");
    $("#Chic").html("<span class='hvr-grow'>Chic</span>");
    $("#Pastel").html("<span class='hvr-grow'>Pastel</span>");
    $("#Spring").html("<span class='hvr-grow'>Spring</span>");
    $("#Fall").html("<span class='hvr-grow'>Fall</span>");
    $("#Summer").html("<span class='hvr-grow'>Summer</span>");
    $("#Winter").html("<span class='hvr-grow'>Winter</span>");

    for (var i = 0; i < outfitData.length; i++) {
      var curData = outfitData[i];
      var outfitnum = "#outfit" + (i+1);
      if (curData.Dress != 1) {
        $(outfitnum).hide();
      }
      else{
        $(outfitnum).show();
      }
    }
  });

  $("#Sweaters").click(function(e){
    $('#currfilter').text('Sweaters');
    $("#Sweaters").html("<span class='hvr-grow' style='color:#fb91b2'>Sweaters</span>");
    $("#Dresses").html("<span class='hvr-grow'>Dresses</span>");
    $("#Skirts").html("<span class='hvr-grow'>Skirts</span>");
    $("#Pants").html("<span class='hvr-grow'>Pants</span>");
    $("#Vintage").html("<span class='hvr-grow'>Vintage</span>");
    $("#Casual").html("<span class='hvr-grow'>Casual</span>");
    $("#Chic").html("<span class='hvr-grow'>Chic</span>");
    $("#Pastel").html("<span class='hvr-grow'>Pastel</span>");
    $("#Spring").html("<span class='hvr-grow'>Spring</span>");
    $("#Fall").html("<span class='hvr-grow'>Fall</span>");
    $("#Summer").html("<span class='hvr-grow'>Summer</span>");
    $("#Winter").html("<span class='hvr-grow'>Winter</span>");

    for (var i = 0; i < outfitData.length; i++) {
      var curData = outfitData[i];
      var outfitnum = "#outfit" + (i+1);
      if (curData.Sweater != 1) {
        $(outfitnum).hide();
      }
      else{
        $(outfitnum).show();
      }
    }
  });

  $("#Skirts").click(function(e){
    $('#currfilter').text('Skirts');
    $("#Skirts").html("<span class='hvr-grow' style='color:#fb91b2'>Skirts</span>");
    $("#Sweaters").html("<span class='hvr-grow'>Sweaters</span>");
    $("#Dresses").html("<span class='hvr-grow'>Dresses</span>");
    $("#Pants").html("<span class='hvr-grow'>Pants</span>");
    $("#Vintage").html("<span class='hvr-grow'>Vintage</span>");
    $("#Casual").html("<span class='hvr-grow'>Casual</span>");
    $("#Chic").html("<span class='hvr-grow'>Chic</span>");
    $("#Pastel").html("<span class='hvr-grow'>Pastel</span>");
    $("#Spring").html("<span class='hvr-grow'>Spring</span>");
    $("#Fall").html("<span class='hvr-grow'>Fall</span>");
    $("#Summer").html("<span class='hvr-grow'>Summer</span>");
    $("#Winter").html("<span class='hvr-grow'>Winter</span>");

    for (var i = 0; i < outfitData.length; i++) {
      var curData = outfitData[i];
      var outfitnum = "#outfit" + (i+1);
      if (curData.Skirt != 1) {
        $(outfitnum).hide();
      }
      else{
        $(outfitnum).show();
      }
    }
  });

  $("#Pants").click(function(e){
    $('#currfilter').text('Pants');
    $("#Pants").html("<span class='hvr-grow' style='color:#fb91b2'>Pants</span>");
    $("#Sweaters").html("<span class='hvr-grow'>Sweaters</span>");
    $("#Skirts").html("<span class='hvr-grow'>Skirts</span>");
    $("#Dresses").html("<span class='hvr-grow'>Dresses</span>");
    $("#Vintage").html("<span class='hvr-grow'>Vintage</span>");
    $("#Casual").html("<span class='hvr-grow'>Casual</span>");
    $("#Chic").html("<span class='hvr-grow'>Chic</span>");
    $("#Pastel").html("<span class='hvr-grow'>Pastel</span>");
    $("#Spring").html("<span class='hvr-grow'>Spring</span>");
    $("#Fall").html("<span class='hvr-grow'>Fall</span>");
    $("#Summer").html("<span class='hvr-grow'>Summer</span>");
    $("#Winter").html("<span class='hvr-grow'>Winter</span>");

    for (var i = 0; i < outfitData.length; i++) {
      var curData = outfitData[i];
      var outfitnum = "#outfit" + (i+1);
      if (curData.Pant != 1) {
        $(outfitnum).hide();
      }
      else{
        $(outfitnum).show();
      }
    }
  });


  /*-------------------DELETE FILTERS-------------------*/
  $(".delfilters").click(function(e){
    $('#currfilter').text('None');
    $("#Spring").html("<span class='hvr-grow'>Spring</span>");
    $("#Fall").html("<span class='hvr-grow'>Fall</span>");
    $("#Summer").html("<span class='hvr-grow'>Summer</span>");
    $("#Winter").html("<span class='hvr-grow'>Winter</span>");
    $("#Pastel").html("<span class='hvr-grow'>Pastel</span>");
    $("#Casual").html("<span class='hvr-grow'>Casual</span>");
    $("#Chic").html("<span class='hvr-grow'>Chic</span>");
    $("#Vintage").html("<span class='hvr-grow'>Vintage</span>");
    $("#Dresses").html("<span class='hvr-grow'>Dresses</span>");
    $("#Sweaters").html("<span class='hvr-grow'>Sweaters</span>");
    $("#Skirts").html("<span class='hvr-grow'>Skirts</span>");
    $("#Pants").html("<span class='hvr-grow'>Pants</span>");

    for (var i = 0; i < outfitData.length; i++) {
      var curData = outfitData[i];
      var outfitnum = "#outfit" + (i+1);
      $(outfitnum).show();
    }
  });

  /*-------------------BUTTON PRESSES-------------------*/
  //Press back button while at an outfit
  $(".backhome").click(function(e) {
    $(location).attr("href", "index.html");
  });

  /*-------------------OUTFIT TEMPLATE-------------------*/
  localStorage.setItem('yes1', 0);
  localStorage.setItem('yes2', 0);
  localStorage.setItem('yes3', 0);

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
