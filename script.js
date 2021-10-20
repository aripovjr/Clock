const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondsEl = document.querySelector('.seconds')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle') 

const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
const months = ['Jan','Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

toggleEl.addEventListener('click', (e)=>{

    const html = document.querySelector('html')
        if(html.classList.contains('dark')){

            html.classList.remove('dark')
            e.target.innerHTML= 'Dark mode'
        }else{
            html.classList.add('dark')
            e.target.innerHTML= 'Light mode'
    }
})

function setTime(){
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

}
setTime()


const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
