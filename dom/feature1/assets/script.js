// JAI SHREE HARI 

let isStatus = document.querySelector("h5");
let btn = document.querySelector("#btn");
let flag = 0;

btn.addEventListener("click", function() {
    if(flag == 0) {
        isStatus.innerHTML = "Friends";
        isStatus.style.color = "#009966";
        btn.innerHTML = "Remove Friend";
        btn.style.color = "#000";
        btn.style.backgroundColor = "#D1D5DC";
        flag = 1;
    }
    else {
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "#EC003F";
        btn.innerHTML = "Add Friend";
        btn.style.color = "#fff";
        btn.style.backgroundColor = "#00B8DB";
        flag = 0;
    }
})
