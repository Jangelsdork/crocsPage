export default function populateHome(){
    // console.log("alled jut");
    document.getElementById("content").innerHTML += ` 
    <div id="header">
    <div class="headerButton">Home</div>
    <div class="headerButton">About</div>
    <div class="headerButton">Contact</div>
</div>
<img src="IMG_6343.jpeg" alt="premiers 2022" class="background">
<div id= overlay>
    <div id="overlayMain">Berlin Crocodiles</div>
    <div id="overlayMinor">Australian Rules Football Club</div>
</div>
`;
}