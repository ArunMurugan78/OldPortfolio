const imgsub = document.querySelector('#imgsub');

const changeText = () => {
    if (imgsub.innerHTML == "Web Developer") {
        imgsub.innerHTML = "ML Enthusiast";
    } else {
        imgsub.innerHTML = "Web Developer";
    }
    setTimeout(changeText, 3000);
}
changeText();