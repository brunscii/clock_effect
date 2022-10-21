const hours = document.getElementsByClassName('hour-digits');
const hoursDigit1 = document.getElementsByClassName('hour-digit-1');
const hoursDigit2 = document.getElementsByClassName('hour-digit-2');
const minutesDigit1 = document.getElementsByClassName('minutes-digit-1');
const minutesDigit2 = document.getElementsByClassName('minutes-digit-2');
const secondsDigit1 = document.getElementsByClassName('seconds-digit-1');
const secondsDigit2 = document.getElementsByClassName('seconds-digit-2');


const digits = [0,1,2,3,4,5,6,7,8,9];

let counter = 0;

function countUp(numbers, element, place){
    // console.log(hoursDigit1.innerHTML);
    if(element){
        if(place == 1){
            element[0].style.transform='translateY(' + -2.3*(counter%numbers.length) + 'rem )';
        }
        else if (counter > place){
            element[0].style.transform='translateY(' + -2.3*Math.floor(counter/place) + 'rem )';
        }
        // hoursDigit2[0].style.transform='translateY(' + -2.4*digits[counter] + 'rem )';
    }
    if (counter > 43,200,000){
        counter = 0;
    }
}

function counterInc(){
    counter++;
    hoursCounter1()
    hoursCounter2()
    minutesCounter1()
    minutesCounter2()
    secondsCounter1()
    secondsCounter2()
}

function hoursCounter1(){
    countUp([0,1],hoursDigit1,43,200,000);
}
function hoursCounter2(){
    countUp(digits,hoursDigit2);
}
function minutesCounter1(){
    countUp([0,1,2,3,4,5],minutesDigit1,600);
}
function minutesCounter2(){
    countUp(digits,minutesCounter2,60);
}
function secondsCounter1(){
    countUp([0,1,2,3,4,5],secondsDigit1,10);
}
function secondsCounter2(){
    countUp(digits,secondsDigit2,1);
}

setInterval(counterInc, 1000)