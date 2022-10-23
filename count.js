
const hours = document.getElementsByClassName('hour-digits');
const hoursDigit1 = document.getElementsByClassName('hour-digit-1');
const hoursDigit2 = document.getElementsByClassName('hour-digit-2');
const minutesDigit1 = document.getElementsByClassName('minutes-digit-1');
const minutesDigit2 = document.getElementsByClassName('minutes-digit-2');
const secondsDigit1 = document.getElementsByClassName('seconds-digit-1');
const secondsDigit2 = document.getElementsByClassName('seconds-digit-2');

function counterInc(){
    today = new Date();
    hoursDigit1[0].textContent = Math.floor(today.getHours()/10);
    hoursDigit2[0].textContent = today.getHours()%10;
    
    minutesDigit1[0].textContent = Math.floor(today.getMinutes()/10);
    minutesDigit2[0].textContent = today.getMinutes()%10;
    
    secondsDigit1[0].textContent = Math.floor(today.getSeconds()/10);
    secondsDigit2[0].textContent = today.getSeconds()%10;
    // console.log(today.getHours());
}


setInterval(counterInc, 1000)