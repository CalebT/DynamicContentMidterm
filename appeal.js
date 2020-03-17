var imgToggle = 0

function nextImage() {
    if (imgToggle === 0){
        document.querySelector(".fallacy-image").src = "president.svg";
        imgToggle = 1;
    } else if (imgToggle === 1){
        document.querySelector(".fallacy-image").src = "oprah.svg";
        imgToggle = 2;
    } else if (imgToggle === 2){
        document.querySelector(".fallacy-image").src = "Doctor.svg";
        imgToggle = 0;
    }
}

function previousImage() {
    if (imgToggle === 0){
        document.querySelector(".fallacy-image").src = "oprah.svg";
        imgToggle = 2;
    } else if (imgToggle === 2){
        document.querySelector(".fallacy-image").src = "president.svg";
        imgToggle = 1;
    } else if (imgToggle === 1){
        document.querySelector(".fallacy-image").src = "Doctor.svg";
        imgToggle = 0;
    }
}