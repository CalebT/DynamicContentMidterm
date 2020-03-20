var imgToggleTut = 0

function nextTut() {
    if (imgToggleTut === 0){
        document.querySelector("#imgstut").src = "imgs/tut2.jpg";
        document.querySelector("#step1").style.color = "gray";
        document.querySelector("#step2").style.display = "block";
        document.querySelector("#step3").style.display = "none";
        document.querySelector("#step4").style.display = "none";
        document.querySelector("#tutback").style.display = "block";
        document.querySelector("#tuthome").style.display = "none";
        document.querySelector("#tutnext").style.display = "block";
        imgToggleTut = 1;
    } else if (imgToggleTut === 1){
        document.querySelector("#imgstut").src = "imgs/tut3.jpg";
        document.querySelector("#step1").style.color = "gray";
        document.querySelector("#step2").style.color = "gray";
        document.querySelector("#step3").style.display = "block";
        document.querySelector("#step4").style.display = "none";
        document.querySelector("#tutback").style.display = "block";
        document.querySelector("#tuthome").style.display = "none";
        document.querySelector("#tutnext").style.display = "block";
        imgToggleTut = 2;
    } else if (imgToggleTut === 2){
        document.querySelector("#imgstut").src = "imgs/tut4.jpg";
        document.querySelector("#step1").style.color = "gray";
        document.querySelector("#step2").style.color = "gray";
        document.querySelector("#step3").style.color = "gray";
        document.querySelector("#step4").style.display = "block";
        document.querySelector("#tutback").style.display = "block";
        document.querySelector("#tuthome").style.display = "block";
        document.querySelector("#tutnext").style.display = "none";
        imgToggleTut = 3;
    } else if (imgToggleTut === 3){
        document.querySelector("#imgstut").src = "imgs/tut1.jpg";
        document.querySelector("#step1").style.display = "block";
        document.querySelector("#step2").style.display = "none";
        document.querySelector("#step3").style.display = "none";
        document.querySelector("#step4").style.display = "none";
        document.querySelector("#tutback").style.display = "none";
        document.querySelector("#tuthome").style.display = "block";
        document.querySelector("#tutnext").style.display = "block";
        imgToggleTut = 0;
    }
}

function previousTut() {
    if (imgToggleTut === 0){
        document.querySelector("#imgstut").src = "imgs/tut4.jpg";
        document.querySelector("#step1").style.color = "gray";
        document.querySelector("#step2").style.color = "gray";
        document.querySelector("#step3").style.color = "gray";
        document.querySelector("#step4").style.display = "block";
        document.querySelector("#step4").style.color = "black";
        document.querySelector("#tutback").style.display = "block";
        document.querySelector("#tuthome").style.display = "block";
        document.querySelector("#tutback").style.display = "block";
        document.querySelector("#tutnext").style.display = "none";
        imgToggleTut = 3;
    } else if (imgToggleTut === 3){
        document.querySelector("#imgstut").src = "imgs/tut3.jpg";
        document.querySelector("#step1").style.color = "gray";
        document.querySelector("#step2").style.color = "gray";
        document.querySelector("#step3").style.display = "block";
        document.querySelector("#step3").style.color = "black";
        document.querySelector("#step4").style.display = "none";
        document.querySelector("#tutback").style.display = "block";
        document.querySelector("#tuthome").style.display = "none";
        document.querySelector("#tutnext").style.display = "block";
        imgToggleTut = 2;
    } else if (imgToggleTut === 2){
        document.querySelector("#imgstut").src = "imgs/tut2.jpg";
        document.querySelector("#step1").style.color = "gray";
        document.querySelector("#step2").style.display = "block";
        document.querySelector("#step2").style.color = "black";
        document.querySelector("#step3").style.display = "none";
        document.querySelector("#step4").style.display = "none";
        document.querySelector("#tutback").style.display = "block";
        document.querySelector("#tuthome").style.display = "none";
        document.querySelector("#tutnext").style.display = "block";
        imgToggleTut = 1;
    } else if (imgToggleTut === 1){
        document.querySelector("#imgstut").src = "imgs/tut1.jpg";
        document.querySelector("#step1").style.display = "block";
        document.querySelector("#step1").style.color = "black";
        document.querySelector("#step2").style.display = "none";
        document.querySelector("#step3").style.display = "none";
        document.querySelector("#step4").style.display = "none";
        document.querySelector("#tutback").style.display = "none";
        document.querySelector("#tuthome").style.display = "block";
        document.querySelector("#tutnext").style.display = "block"
        imgToggleTut = 0;
    }
}