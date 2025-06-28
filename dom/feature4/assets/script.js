// JAI SHREE HARI
function multipleImagePointer() {
    let elem = document.querySelectorAll(".elem");
    
    elem.forEach(function(val, idx) {
        
        val.addEventListener("mouseenter", function() {
            val.childNodes[3].style.opacity = 1;
        })
        
        val.addEventListener("mouseleave", function() {
            val.childNodes[3].style.opacity = 0;
        })
        
        val.addEventListener("mousemove", function(dets) {
            
            // val.childNodes[3].style.left = `${(dets.x / window.innerWidth) * 100}%`;      
            val.childNodes[3].style.left = dets.x+"px";      
            val.childNodes[3].style.top = dets.y+"px";      
            // val.childNodes[3].style.top = `${(dets.y/ ((idx + 1)*val.offsetHeight)) * 100}%`;      
        })
    })
}         

multipleImagePointer();