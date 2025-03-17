// JAI SHREE RAM

function changeTime() {
    var dt = new Date();
    // console.log(dt);
    // console.log(dt.getHours()%12);
    // console.log(dt.getMinutes());
    var time = dt.getHours()%12 + ":" + dt.getMinutes();
    // console.log(time);
    
    dt.getHours() % 12 < 0 ? time += " PM" : time += " AM";
    // console.log(time);
    
    document.querySelector(".time").textContent = time;
}

function changeDateAndtime() {
    var dnt = new Date();
    var str = dnt.getDate() + "/" + (dnt.getMonth() + 1) + "/" + dnt.getFullYear() + "   " + "[ " + dnt.getHours()%12 + ":" + dnt.getMinutes();
    
    dnt.getHours() % 12 < 0 ? str += " PM" + " ]" : str += " AM" + " ]";

    document.querySelector(".date-and-time").textContent = str;
}

setInterval(function () {
    changeTime();
    changeDateAndtime();
},1000)