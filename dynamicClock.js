let hour = document.getElementById('Hour');
let min = document.getElementById('Min');
let sec = document.getElementById('Sec');
let bar = document.getElementById('Bar');


function
timeFunc() {
    let time = new Date();
    let Hour = time.getHours();
    let Min = time.getMinutes();
    let Sec = time.getSeconds();
    hour.innerHTML = Hour
    min.innerHTML = Min
    sec.innerHTML = Sec
    bar.style.width = Sec / 60 * 100 + '%'
}

setInterval(timeFunc, 1000)
