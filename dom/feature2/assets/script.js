// JAI SHREE HARI

let con = document.querySelector("#container");
let heart = document.querySelector("#heartIcon");

con.addEventListener("dblclick", function() {
    heart.style.scale = 1;
    heart.style.opacity = 0.9;

    setTimeout(function() {
        heart.style.opacity = 0;
    }, 1000);
    setTimeout(function() {
        heart.style.scale = 0;
    }, 2000);

    console.log("hello Ji");

});
