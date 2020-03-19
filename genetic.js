var imgToggle2 = 0

function nextImage2() {
    if (imgToggle2 === 0){
        document.querySelector(".fallacy-image2").src = "genetic2.jpg";
        imgToggle2 = 1;
    } else if (imgToggle2 === 1){
        document.querySelector(".fallacy-image2").src = "genetic3.jpg";
        imgToggle2 = 2;
    } else if (imgToggle2 === 2){
        document.querySelector(".fallacy-image2").src = "genetic1.jpg";
        imgToggle2 = 0;
    }
}

function previousImage2() {
    if (imgToggle2 === 0){
        document.querySelector(".fallacy-image2").src ="genetic3.jpg"
        imgToggle2 = 2;
    } else if (imgToggle2 === 2){
        document.querySelector(".fallacy-image2").src = "genetic2.jpg";
        imgToggle2 = 1;
    } else if (imgToggle2 === 1){
        document.querySelector(".fallacy-image2").src = "genetic1.jpg";
        imgToggle2 = 0;
    }
}