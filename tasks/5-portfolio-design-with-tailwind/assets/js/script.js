// JAI SHREE RAM

// time changing functionality
(function () {

    function changeTime() {
        var dt = new Date();
        // console.log(dt);
        // console.log(dt.getHours()%12);
        // console.log(dt.getMinutes());
        var minutes = dt.getMinutes().toString().padStart(2, '0');
        var time = dt.getHours() % 12 + ":" + minutes;
        // console.log(time);
        
        dt.getHours() % 12 < 0 ? time += " PM" : time += " AM";
        // console.log(time);
        
        document.querySelector(".time").textContent = time;
    }
    
    function changeDateAndtime() {
        var dnt = new Date();
        var minutes = dnt.getMinutes().toString().padStart(2, '0');
        var str = dnt.getDate() + "/" + (dnt.getMonth() + 1) + "/" + dnt.getFullYear() + "   " + "[ " + (dnt.getHours() % 12 || 12) + ":" + minutes;

        dnt.getHours() % 12 < 0 ? str += " PM" + " ]" : str += " AM" + " ]";

        document.querySelector(".date-and-time").textContent = str;
    }

    setInterval(function () {
        changeTime();
        changeDateAndtime();
    }, 1000)

})() // instant call just after declaration


// animating Icons

function animateIcons() {
    // Track previous mouse position for smoother transitions
    let prevCoords = { x: 0, y: 0 };
    let targetCoords = { x: 0, y: 0 };
    let currentCoords = { x: 0, y: 0 };
    
    // Smoothing factor (lower = smoother but slower)
    const smoothFactor = 0.1;
    
    // Create constants for animation parameters
    const translateMultipliers = [0.055, 0.03, 0.09, 0.07];
    
    // Increased rotation multipliers for more dramatic effect
    const rotationMultipliers = [0.3, 0.25, 0.4, 0.35];
    
    // Increased maximum rotation values
    const rotationMax = 20; // Maximum rotation in degrees (increased from 12)
    const animationDuration = 1.8;
    
    // Handle mouse movement
    document.body.addEventListener("mousemove", (e) => {
        // Get centered coordinates
        targetCoords = {
            x: e.clientX - (window.innerWidth / 2),
            y: (window.innerHeight / 2) - e.clientY
        };
    });
    
    // Animation loop for smoother transitions
    function update() {
        // Calculate new position with smoothing
        currentCoords.x += (targetCoords.x - currentCoords.x) * smoothFactor;
        currentCoords.y += (targetCoords.y - currentCoords.y) * smoothFactor;
        
        // Calculate velocity for rotation effect
        const velocityX = currentCoords.x - prevCoords.x;
        const velocityY = currentCoords.y - prevCoords.y;
        
        // Update icons
        document.querySelectorAll(".infosection img").forEach((icon, idx) => {
            // Calculate rotation based on mouse velocity and direction
            const rotationX = -velocityY * rotationMultipliers[idx];
            const rotationY = velocityX * rotationMultipliers[idx];
            
            // Added more prominent Z rotation for that extra spin effect
            const rotationZ = (velocityX + velocityY) * rotationMultipliers[idx] * 0.8;
            
            // Clamp rotation values
            const clampedRotX = Math.max(-rotationMax, Math.min(rotationMax, rotationX));
            const clampedRotY = Math.max(-rotationMax, Math.min(rotationMax, rotationY));
            const clampedRotZ = Math.max(-rotationMax, Math.min(rotationMax, rotationZ));
            
            // Add a base rotation even when mouse isn't moving
            const baseRotation = {
                x: Math.sin(Date.now() * 0.001 + idx) * 2,
                y: Math.cos(Date.now() * 0.001 + idx * 2) * 2,
                z: Math.sin(Date.now() * 0.0005 + idx * 0.5) * 1
            };
            
            // Apply transformations with GSAP
            gsap.to(icon, {
                x: currentCoords.x * translateMultipliers[idx],
                y: -1 * (currentCoords.y * translateMultipliers[idx]),
                rotationX: clampedRotX + baseRotation.x,
                rotationY: clampedRotY + baseRotation.y,
                rotationZ: clampedRotZ + baseRotation.z,
                duration: animationDuration,
                ease: "power2.out"
            });
        });
        
        // Store current position for next frame
        prevCoords.x = currentCoords.x;
        prevCoords.y = currentCoords.y;
        
        // Continue the animation loop
        requestAnimationFrame(update);
    }
    
    // Start the animation loop
    update();
    
    // Add parallax effect when page is loaded
    window.addEventListener("load", () => {
        document.querySelectorAll(".infosection img").forEach((icon, idx) => {
            // Initial more dramatic random position and rotation
            gsap.set(icon, {
                x: (Math.random() - 0.5) * 30 * translateMultipliers[idx],
                y: (Math.random() - 0.5) * 30 * translateMultipliers[idx],
                rotationX: (Math.random() - 0.5) * 15,
                rotationY: (Math.random() - 0.5) * 15,
                rotationZ: (Math.random() - 0.5) * 10
            });
            
            // Entry animation with more bounce
            gsap.to(icon, {
                x: 0,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                duration: 2.5,
                delay: idx * 0.2,
                ease: "elastic.out(1.2, 0.6)"
            });
        });
    });
}

animateIcons();