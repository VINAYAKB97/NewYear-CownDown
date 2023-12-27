let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();
console.log(currentYear);

const newYearTime = new Date(`january 1 ${currentYear + 1} 00:00:00`);
console.log(newYearTime);

//update countdown
function updateCountdowntime(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    // console.log(diff);
}
setInterval(updateCountdowntime,1000);
updateCountdowntime();
