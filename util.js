 var test = document.querySelector(".burger_menu")
 function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    //document.getElementById("main").style.marginLeft = "250px";
    test.style.setProperty("display", "none", "important")
    }

function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
   // document.getElementById("main").style.marginLeft = "0";
   test.style.setProperty("display", "block", "important")

}

var burger_menu = $(".burger_menu")



var side_nav_btn = $("div > a");
//first drop-down-menu-item
$(".dropbtn").on("click", function(){
    $("#myDropdown").toggleClass("show")
    $("#myDropdown2").removeClass("show")
    $(side_nav_btn).eq(17).css("margin-top", "0")
      $(side_nav_btn).eq(15).css("margin-top", "0")
    if($("#myDropdown").hasClass("show")){
      $(side_nav_btn).eq(9).css("margin-top", "260px")
      $(side_nav_btn).eq(12).css("margin-top", "260px")
      console.log("win")
    }else{
      $(side_nav_btn).eq(9).css("margin-top", "0")
      $(side_nav_btn).eq(12).css("margin-top", "0")

      console.log("false")

    }

  });
//second drop-down-menu-item

  $(".dropbtn2").on("click", function(){
    $("#myDropdown2").toggleClass("show")
    $("#myDropdown").removeClass("show")
    $(side_nav_btn).eq(9).css("margin-top", "0")
    $(side_nav_btn).eq(12).css("margin-top", "0")

    if($("#myDropdown2").hasClass("show")){
      $(side_nav_btn).eq(17).css("margin-top", "260px")
      $(side_nav_btn).eq(15).css("margin-top", "260px")
      console.log("win")
    }else{
      $(side_nav_btn).eq(17).css("margin-top", "0")
      $(side_nav_btn).eq(15).css("margin-top", "0")

      console.log("false")

    }

  });


//adds-removes active class from menu-items
$( document ).ready(function() {

    var side_nav_btn = $("div > a");
    var yellow_text_navbar= $(".navbar-underline");

    side_nav_btn.on("click", function(){
        side_nav_btn.removeClass("active");
        $(this).addClass("active");
        yellow_text_navbar.html($(this).text())
        //closeNav();
        

    });




});
//arxikh-selida button
function homepageClick(){

  window.location.href = "/Side-bar";

}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  /* Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }*/
/*
var burger_menu = $(".burger_menu")
var close_btn = $(".closebtn")

    burger_menu.on("click", function(){
        $(this).hide()




    });
    close_btn.on("click", function(){
        burger_menu.show()




});*/
