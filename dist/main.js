(()=>{"use strict";document.getElementById("content").innerHTML+=' \n    <div id="header">\n    <div class="headerButton" id="home">Home</div>\n    <div class="headerButton" id="about">About</div>\n    <div class="headerButton" id="contact">Contact</div>\n</div>\n<img src="IMG_6343.jpeg" alt="premiers 2022" class="background">\n<div id= overlay>\n    <div id="overlayMain">Berlin Crocodiles</div>\n    <div id="overlayMinor">Australian Rules Football Club</div>\n</div>\n',document.addEventListener("click",(function(d){"about"===d.target.id?document.getElementById("content").innerHTML+=' \n    <div id="header">\n    <div class="headerButton" id="home">Home</div>\n    <div class="headerButton" id="about">About</div>\n    <div class="headerButton" id="contact">Contact</div>\n</div>\n<img src="IMG_6343.jpeg" alt="premiers 2022" class="background">\n<div id= overlay>\n    <div id="overlayMain">ABOUT</div>\n    <div id="overlayMinor">Australian Rules Football Club</div>\n</div>\n':"contact"===d.target.id?document.getElementById("content").innerHTML+=' \n    <div id="header">\n    <div class="headerButton" id="home">Home</div>\n    <div class="headerButton" id="about">About</div>\n    <div class="headerButton" id="contact">Contact</div>\n</div>\n<img src="IMG_6343.jpeg" alt="premiers 2022" class="background">\n<div id= overlay>\n    <div id="overlayMain">Contact</div>\n    <div id="overlayMinor">Australian Rules Football Club</div>\n</div>\n':d.target.id}))})();