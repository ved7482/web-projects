let main = document.querySelector("#main");
let cursorPointer = document.querySelector("#cursor");

main.addEventListener("mousemove", function(dets) {
    // console.log(dets.x);
    // console.log(dets.y);
    cursorPointer.style.left = dets.x+"px";
    cursorPointer.style.top = dets.y+"px";
})