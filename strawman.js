var imgToggle3 = 0

function nextImage3() {
    if (imgToggle3 === 0){
        document.querySelector(".fallacy-image3").src = "q2.png";
        imgToggle3 = 1;
    } else if (imgToggle3 === 1){
        document.querySelector(".fallacy-image3").src = "q3.png";
        imgToggle3 = 2;
    } else if (imgToggle3 === 2){
        document.querySelector(".fallacy-image3").src = "q1.png";
        imgToggle3 = 0;
    }
}

function previousImage3() {
    if (imgToggle3 === 0){
        document.querySelector(".fallacy-image3").src ="q3.png"
        imgToggle3 = 2;
    } else if (imgToggle3 === 2){
        document.querySelector(".fallacy-image3").src = "q2.png";
        imgToggle3 = 1;
    } else if (imgToggle3 === 1){
        document.querySelector(".fallacy-image3").src = "q1.png";
        imgToggle3 = 0;
    }
}