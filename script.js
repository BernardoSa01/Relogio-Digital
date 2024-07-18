const watchHours = document.querySelector('#hours')
const watchMinutes = document.querySelector('#minutes')
const watchSeconds = document.querySelector('#seconds')

const digitalWatch = setInterval(function time() {
  let dateToday = new Date()
  let hours = dateToday.getHours()
  let minutes = dateToday.getMinutes()
  let seconds = dateToday.getSeconds()

  if (hours < 10) hours = '0' + hours
  
  if (minutes < 10) minutes = '0' + minutes

  if(seconds < 10) seconds = '0' + seconds

  // verificar toFixed |^
  watchHours.textContent = hours
  watchMinutes.textContent = minutes
  watchSeconds.textContent = seconds
})

