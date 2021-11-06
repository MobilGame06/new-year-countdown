const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const small1 = document.getElementById('small1')
const small2 = document.getElementById('small2')
const small3 = document.getElementById('small3')
const small4 = document.getElementById('small4')
const text = document.getElementById('text')

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 1 ${currentYear +1} 00:00:00`);
//const newYearTime = new Date(`November 6 ${currentYear} 12:00:00`);

//Update Countdown
function updateCountdowntime(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff/1000 /60 /60 /24);
    const h = Math.floor(diff/1000 /60 /60)% 24;
    const m = Math.floor(diff/1000 /60 )% 60;
    const s = Math.floor(diff/1000)% 60;
    //d = 0
    //h = 0
    //m = 0
    //s = 0
    if(d < 0 && h < 0 && m < 0 && s < 00){
        console.log("Happy New Year")
        days.style.display = 'block';
        days.style.display = 'none';
        small1.style.display = 'block';
        small1.style.display = 'none';

        hours.style.display = 'block';
        hours.style.display = 'none';
        small2.style.display = 'block';
        small2.style.display = 'none';

        minutes.style.display = 'block';
        minutes.style.display = 'none';
        small3.style.display = 'block';
        small3.style.display = 'none';

        seconds.style.display = 'block';
        seconds.style.display = 'none';
        small4.style.display = 'block';
        small4.style.display = 'none';

        text.innerHTML = `Happy new year ${currentYear}`

        

    }else{
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
    }
    
}

setInterval(updateCountdowntime, 1000);