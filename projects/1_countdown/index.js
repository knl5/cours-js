/* var now = new Date();
const time = now.getTime();
//console.log(time);
const d = new Date('May 05, 2022 10:05:00');
console.log(d.getTime());May 05, 2022 10:05:00:000
//("may 05, 2022 10:05:00").getTime(); */
const getTimeLeft = (endDate) => {
    const now = new Date().getTime()
    const timeleft = endDate - now;
    return timeleft;
}

// Time calculations for days, hours, minutes seconds and millisecondes
function countdown(timeLeft) {
    const calcDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const calcHours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const calcMinutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const calcSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    const calcMillis = Math.floor(calcSeconds * 1000);

    document.querySelector('#days').innerText = calcDays;
    document.querySelector('#hours').innerText = calcHours;
    document.querySelector('#minutes').innerText = calcMinutes;
    document.querySelector('#seconds').innerText = calcSeconds;
    document.querySelector('#millis').innerText = calcMillis;
}

const endDate = new Date('May 05, 2022 10:05:00').getTime();

function displayMessage() {
    if(getTimeLeft(endDate) >= 0){
        setInterval(() => {
            countdown(getTimeLeft(endDate));
        }, 1000)
    } else {
        alert('TIME UP, it is my birthday !');
    }
}

displayMessage(); 


