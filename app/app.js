// import from model.js
import { changePageContent } from "../model/model.js";

// declared variables
var homeTrips = ".promo-trips .tile-container .bottom a";
var toursTrips = ".tour-grid .bottom a";
var bookTour = ".itinerary a";


// funtion to listen to nav anchor clicks
function initListeners(){
    $("nav .links a").on("click", function(e) {
        let btnID = e.currentTarget.id;
        changePageContent(btnID);
    });
}

// function to listen to homeContent trips button click
$(document).on("click", homeTrips, function(e) {
    let btnID = e.currentTarget.id;
    changePageContent(btnID);
})

// function to listen to toursContent trips button click
$(document).on("click", toursTrips, function(e) {
    let btnID = e.currentTarget.id;
    changePageContent(btnID);
})

// function to listen to tour page book button click
$(document).on("click", bookTour, function(e) {
    let btnID = e.currentTarget.id;
    changePageContent(btnID);
    console.log(btnID);
})

$(document).scroll(function () {
    var $nav = $(".header-wrapper .nav-container");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 30);
});

// call js-jq functions
$(document).ready(function(){
    initListeners();
    changePageContent("home");
})