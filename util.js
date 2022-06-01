 function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    //document.getElementById("main").style.marginLeft = "250px";
    
   
    
}

function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
   // document.getElementById("main").style.marginLeft = "0";
    
    
    
}

$( document ).ready(function() {

    var side_nav_btn = $("div > a");
    var yellow_text_navbar= $(".navbar-underline");

    side_nav_btn.on("click", function(){
        side_nav_btn.removeClass("active");
        $(this).addClass("active");
        yellow_text_navbar.html($(this).text())
        //closeNav();
        burger_menu.show()

    });




});
function homepageClick(){

  window.location.href = "index.html";

}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
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
  }
/*
var burger_menu = $(".burger_menu")
var close_btn = $(".closebtn")

    burger_menu.on("click", function(){
        $(this).hide()




    });
    close_btn.on("click", function(){
        burger_menu.show()




});*/
