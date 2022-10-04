export default function populateAbout(){
    document.getElementById("content").innerHTML += ` 
    <div id="header">
    <div class="headerButton" id="home">Home</div>
    <div class="headerButton" id="about">About</div>
    <div class="headerButton" id="contact">Contact</div>
</div>
<img src="IMG_6343.jpeg" alt="premiers 2022" class="background">
<div id= overlay>
    <div id="overlayMain">ABOUT</div>
    <div id="overlayMinor">Australian Rules Football Club</div>
</div>
`;
}