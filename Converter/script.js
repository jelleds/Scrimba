const convertNumber = document.getElementById('convert-number')
const convertBtn = document.getElementById("convert-btn")
const convertLength = document.getElementById('convert-length')
const convertVolume = document.getElementById('convert-volume')
const convertMass = document.getElementById('convert-mass')

let numberToConvert = convertNumber.value

convertBtn.addEventListener('click',function(){
   
  numberToConvert = convertNumber.value

   let sentenceLength = `
      ${numberToConvert} meters = ${meterToFeet()} feet | ${numberToConvert} feet = ${feetToMeter()} meter
   `

   let sentenceVolume = `
   ${numberToConvert} liters = ${literToGallon()} gallons | ${numberToConvert} gallons = ${gallonToLiter()} liters
   `
   
   let sentenceMass = `
   ${numberToConvert} kilo = ${kiloToPound()} pounds | ${numberToConvert} pounds = ${poundToKilo()} kilo's
   `
   
   convertLength.innerHTML = sentenceLength
   convertVolume.innerHTML = sentenceVolume
   convertMass.innerHTML = sentenceMass
})


function meterToFeet(){
   return (numberToConvert * 3.281).toFixed(3)
}
function feetToMeter(){
   return (numberToConvert / 3.281).toFixed(3)
}

function literToGallon(){
   return (numberToConvert * 0.264).toFixed(3)
}
function gallonToLiter(){
   return (numberToConvert / 0.264).toFixed(3)
}

function kiloToPound(){
   return (numberToConvert * 2.204).toFixed(3)
}
function poundToKilo(){
   return (numberToConvert / 2.204).toFixed(3)
}



/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/