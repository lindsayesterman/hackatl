
// countdown //
const countdown = () => {
    const countDate = new Date('October 14, 2022 00:00:00').getTime()
    const now = new Date().getTime()
    const gap = countDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    // calculate countdown
    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMin = Math.floor((gap % hour) / minute)
    const textSec = Math.floor((gap % minute) / second)

    document.querySelector('.day').innerText = textDay
    document.querySelector('.hour').innerText = textHour
    document.querySelector('.min').innerText = textMin
    document.querySelector('.sec').innerText = textSec
}

if(document.querySelector('.day')) setInterval(countdown, 1000)
// end countdown //


// image slider //
if(document.querySelector('#radio1')){
    var counter = 1;
    setInterval(() => {
        document.querySelector(`#radio${counter}`).checked = true;
        counter++;
        if(counter > 6){
            counter = 1;
        }
    }, 5000)
}
// end image slider //


// faq accordian //
let accButton = document.getElementsByClassName('label')
console.log(accButton)

for(let i = 0; i < accButton.length; i++){
    accButton[i].addEventListener('click', () => {
        console.log('clicked')
        this.classList.toggle("active")

        let panel = this.nextElementSibling
        console.log(panel)
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
}
// end faq accordian //
