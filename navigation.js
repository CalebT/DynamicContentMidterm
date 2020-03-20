function learn() {
    document.querySelector("#fallacyselector").style.display = "block";
    document.querySelector("#mainpage").style.display = "none";
}

function sideHome() {
    document.querySelector("#mainpage").style.display = "block";
    document.querySelector("#fallacyselector").style.display = "none";
    document.querySelector("#strawman").style.display = "none";
    document.querySelector("#genetic").style.display = "none";
    document.querySelector("#appeal").style.display = "none";
    document.querySelector("#quiz-body").style.display = "none";
    document.querySelector("#tutorialpage").style.display = "none";
}

function appeal() {
    document.querySelector("#appeal").style.display = "block";
    document.querySelector("#mainpage").style.display = "none";
    document.querySelector("#fallacyselector").style.display = "none";
    document.querySelector("#strawman").style.display = "none";
    document.querySelector("#genetic").style.display = "none";
    document.querySelector("#quiz-body").style.display = "none";
    document.querySelector("#tutorialpage").style.display = "none";
}

function genetic() {
    document.querySelector("#appeal").style.display = "none";
    document.querySelector("#mainpage").style.display = "none";
    document.querySelector("#fallacyselector").style.display = "none";
    document.querySelector("#strawman").style.display = "none";
    document.querySelector("#genetic").style.display = "block";
    document.querySelector("#quiz-body").style.display = "none";
    document.querySelector("#tutorialpage").style.display = "none";
}

function strawman() {
    document.querySelector("#appeal").style.display = "none";
    document.querySelector("#mainpage").style.display = "none";
    document.querySelector("#fallacyselector").style.display = "none";
    document.querySelector("#strawman").style.display = "block";
    document.querySelector("#genetic").style.display = "none";
    document.querySelector("#quiz-body").style.display = "none";
    document.querySelector("#tutorialpage").style.display = "none";
}


function nextFal1() {
    document.querySelector("#appeal").style.display = "none";
    document.querySelector("#genetic").style.display = "block";
}
function prevFal1() {
    document.querySelector("#appeal").style.display = "none";
    document.querySelector("#strawman").style.display = "block";
}


function nextFal2() {
    document.querySelector("#genetic").style.display = "none";
    document.querySelector("#strawman").style.display = "block";
}
function prevFal2() {
    document.querySelector("#genetic").style.display = "none";
    document.querySelector("#appeal").style.display = "block";
}


function nextFal3() {
    document.querySelector("#strawman").style.display = "none";
    document.querySelector("#appeal").style.display = "block";
}
function prevFal3() {
    document.querySelector("#strawman").style.display = "none";
    document.querySelector("#genetic").style.display = "block";
}

function quiz() {
    document.querySelector("#quiz-body").style.display = "block";
    document.querySelector("#appeal").style.display = "none";
    document.querySelector("#mainpage").style.display = "none";
    document.querySelector("#fallacyselector").style.display = "none";
    document.querySelector("#strawman").style.display = "none";
    document.querySelector("#genetic").style.display = "none";
    document.querySelector("#tutorialpage").style.display = "none";
}

function tutorial() {
    document.querySelector("#tutorialpage").style.display = "block";
    document.querySelector("#appeal").style.display = "none";
    document.querySelector("#mainpage").style.display = "none";
    document.querySelector("#fallacyselector").style.display = "none";
    document.querySelector("#strawman").style.display = "none";
    document.querySelector("#genetic").style.display = "none";
    document.querySelector("#quiz-body").style.display = "none";
}