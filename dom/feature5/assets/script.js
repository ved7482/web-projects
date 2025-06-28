// JAI SHREE HARI 

let arr = [
    {dp: "./assets/images/pikachu-avatar.png",
      story: "./assets/images/pokeQuiz.jpg"    
    },
    {dp: "https://images.unsplash.com/photo-1567722949105-5fa8af992d77?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://i.pinimg.com/736x/fb/c0/d6/fbc0d6b3f2cfcbd1c92d63550e892085.jpg"    
    },
    {dp: "https://plus.unsplash.com/premium_photo-1681335986095-5a9585e77246?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://plus.unsplash.com/premium_photo-1681335985809-22600ebed275?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"    
    },
    {dp: "https://i.pinimg.com/736x/49/93/d0/4993d087d118c629ef20729ad60c47ab.jpg",
      story: "https://i.pinimg.com/736x/fa/da/10/fada10dfe4c8199be7d31bea5c4d5208.jpg"    
    },
    {dp: "https://plus.unsplash.com/premium_photo-1723673008982-f3d54aaaffc5?q=80&w=1092&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://plus.unsplash.com/premium_photo-1723708819546-f7623a03b1b4?q=80&w=1059&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    
    },
    {dp: "https://images.unsplash.com/photo-1556347961-f9521a88cb8a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://plus.unsplash.com/premium_photo-1707674003351-87ca4e43dccc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    
    },
    {dp: "https://i.pinimg.com/736x/01/ec/0f/01ec0f72752daf0f1ede27928f7b75b3.jpg",
      story: "https://i.pinimg.com/736x/d5/ed/13/d5ed130a96636ad8895b8b69ad8a679b.jpg"    
    }
];

let stories = document.querySelector("#stories");
let clutter = "";
arr.forEach((elem, idx) => {
    clutter += `<div class="story w-24 aspect-square rounded-full overflow-hidden inline-block mr-2 border-2 border-amber-600">
    <img id="${idx}" class="w-full h-full object-cover object-center" src="${elem.dp}" alt="">
    </div>`;
});

// console.log(clutter);
stories.innerHTML = clutter;

stories.addEventListener("click", function(dets) {
    // console.log(arr[dets.target.id].story);
    document.querySelector("#fullScreen").style.display = "block";
    document.querySelector("#fullScreen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(() => {
        document.querySelector("#fullScreen").style.display = "none";
    }, 2600);
});