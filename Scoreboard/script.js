let homeScore = document.getElementById('home-score')
let awayScore = document.getElementById('away-score')
let home3Pointers = document.getElementById('home3Pointers')
let away3Pointers = document.getElementById('away3Pointers')

let homeCount = 0
let awayCount = 0
let home3Pcounter = 0
let away3Pcounter = 0

//Home score board
function add1Home(){
  homeCount ++
  homeScore.innerText = homeCount
}
function add2Home(){
  homeCount += 2
  homeScore.innerText = homeCount
}
function add3Home(){
  homeCount += 3
  homeScore.innerText = homeCount

  home3Pcounter ++
  home3Pointers.innerText = "3-pointers: " +  home3Pcounter
}

//Away score board
function add1Away(){
  awayCount ++
  awayScore.innerText = awayCount
}
function add2Away(){
  awayCount += 2
  awayScore.innerText = awayCount
}
function add3Away(){
  awayCount += 3
  awayScore.innerText = awayCount

  away3Pcounter ++
  away3Pointers.innerText = "3-pointers: " +  away3Pcounter
}

//restart btn
function restartBtn(){
  homeCount = 0
  awayCount = 0
  home3Pcounter = 0
  away3Pcounter = 0

  awayScore.innerText = 0
  homeScore.innerText = 0
  home3Pointers.innerText = "3-pointers: "
  away3Pointers.innerText = "3-pointers: "
  

 
}