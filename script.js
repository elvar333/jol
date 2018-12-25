let countDownDate = new Date("Dec 24, 2019 18:00:00 GMT+0000").getTime();

let x = setInterval(function () {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("timer").innerHTML =
        days + "d " + hours + "klst " + minutes + "m " + seconds + "s ";
}, 1000);