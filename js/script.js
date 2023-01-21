



let finDate = new Date("Dec 31, 2022 23:59:59").getTime()



let counter = setInterval(()=>{
  let nowDate = new Date().getTime()

  let diff = finDate - nowDate
  let days = Math.floor(diff / 1000 / 60 / 60 / 24)
  let hours = Math.floor(diff % (1000 *60 *60 *24) / (1000*60*60))
  let minutes = Math.floor(diff % (1000 *60 *60 ) / (1000*60))
  let seconds = Math.floor(diff % (1000 *60  ) / (1000))


  
  document.querySelector(".days span").innerHTML = days
  document.querySelector(".hours span").innerHTML = hours == 0? `0${hours}`: hours
  document.querySelector(".minutes span").innerHTML = minutes== 0? `0${minutes}`: minutes
  document.querySelector(".seconds span").innerHTML = seconds== 0? `0${seconds}`: seconds

},1000)