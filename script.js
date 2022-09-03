// Created my Michalis Karatsioris

// tabs functionality in about me section
var tabcategories = document.getElementsByClassName("tab-categories");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for (category of tabcategories){
        category.classList.remove("active-category");
    }
    for (content of tabcontents){
        content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-category");
    document.getElementById(tabname).classList.add("active-tab");
}

// responsive navigation bar
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

// Form Info to email













// Created my Michalis Karatsioris
