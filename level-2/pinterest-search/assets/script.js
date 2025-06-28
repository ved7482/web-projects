// JAI SHREE HARI
var arr = [
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "porsche", image: "https://i.pinimg.com/736x/7d/8e/53/7d8e534bc93b9b52842df40abb79d4d0.jpg"},
    {name: "Pikachu", image: "https://i.pinimg.com/736x/bb/54/3f/bb543feec97c5d66dfd0551d55034032.jpg"},
    {name: "pokemon", image: "https://i.pinimg.com/736x/2f/52/c4/2f52c4208f309441025aa751a70338d6.jpg"},
    {name: "greninja", image: "https://i.pinimg.com/736x/a9/41/6d/a9416d3119c268bd16763082bddedc97.jpg"},
    {name: "Black hole", image: "https://i.pinimg.com/736x/16/1e/f2/161ef2ef1bbf83cd91f56ea9c4902da2.jpg"},
    {name: "Chess", image: "https://i.pinimg.com/736x/bf/ca/1f/bfca1f7f986c62fec967243f229360c3.jpg"},
    {name: "Ash", image: "https://i.pinimg.com/736x/89/23/ed/8923ed291a988c6ffaf61278a7e7c11d.jpg"},
    {name: "Temple", image: "https://i.pinimg.com/736x/ae/83/f1/ae83f13dabf779d5204cd69e5806635f.jpg"},
    {name: "Mountains and Temple", image: "https://i.pinimg.com/736x/aa/ea/3d/aaea3ddd5bf645986031fb9e1d2efcff.jpg"},
    {name: "Ram", image: "https://i.pinimg.com/736x/c6/04/f6/c604f6b63ad12a82c8c1591920242b8e.jpg"},
    {name: "Sunset Kerala Ricefield", image: "https://i.pinimg.com/736x/75/16/5f/75165f907686d006633b7ec874e371a9.jpg"}
]

function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })

    document.querySelector(".container")
    .innerHTML = clutter;
}

function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    

    input
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })

    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input
    .addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })
    document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}

handleSearchFunctionality();
showTheCards();