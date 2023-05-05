let userIcon = document.getElementById("userIcons");
let accWindow = document.getElementById("window");


userIcon.addEventListener("click", function(event){
    accWindow.classList.toggle("window");
    console.log("ho cliccato");
})