particlesJS.load('particles-js', 'assets/particles.json');

let today = new Date();
let countDownDate = new Date(`Dec 24, ${today.getFullYear()} 18:00:00 GMT+0000`).getTime();

let int = setInterval(function () {
    let now = new Date().getTime();

    let dTime = countDownDate - now;

    let days = Math.floor(dTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dTime % (1000 * 60)) / (1000));

    if (dTime < 0) {
        clearInterval(int);
        document.getElementById("text1").innerHTML = "";
        document.getElementById("text2").innerHTML = "";
        document.getElementById("timer").innerHTML = "Gleðileg jól!";
    } else {
        document.getElementById("timer").innerHTML = `${days}d ${hours}klst ${minutes}m ${seconds}s`;
    }
}, 1000);
