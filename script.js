let userIcon = document.getElementById("userIcons");
let accWindow = document.getElementById("window");


userIcon.addEventListener("click", function(event){
    accWindow.classList.toggle("window");
    console.log("ho cliccato");
})

let bookmarkIcons = document.getElementsByClassName("bookmark_icon");

for (const bookmarkIcon of bookmarkIcons) {
    bookmarkIcon.addEventListener("click", function(event){
        event.target.classList.toggle("material-symbols-rounded");
        event.target.classList.toggle("material-symbols-outlined");
    });
}