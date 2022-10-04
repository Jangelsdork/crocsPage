// var div = document.createElement('div');
// div.setAttribute('class', 'homeInput');


import populateHome from './home.js'
import populateAbout from './about.js'
import populateContact from './contact.js'

populateHome()

document.addEventListener("click", function(e){
    if(e.target.id === "about"){
        populateAbout()
    } 
    else if (e.target.id === "contact"){
        populateContact()
    } 
    else if(e.target.id === "home"){
        populateHome()
    }})