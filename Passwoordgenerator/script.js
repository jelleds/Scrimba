const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")
let charactersEl = document.getElementById("characters-el")
let password1 = ""
let password2 = ""
let maxCharCount = 11


function generatePassword(){
   getTotalAmountOfCharacters()
   resetPassword()

   for(let i = 0; i < maxCharCount; i++){
     let randomNr1 = Math.floor(Math.random() * characters.length)
     let randomNr2 = Math.floor(Math.random() * characters.length)
      password1 += characters[randomNr1]
      password2 += characters[randomNr2]
      console.log(randomNr1)
      console.log(password1)
   }
   renderPassword()
   
}

function renderPassword(){
   charactersEl.textContent = maxCharCount
   passwordEl1.textContent = password1
   passwordEl2.textContent = password2
}
function resetPassword(){
   password1 = ""
   password2 = ""
}

function getTotalAmountOfCharacters(){
   let totalAmountofCharacters = document.getElementById("totalAmountOfCharacters")
   maxCharCount = totalAmountofCharacters.value
   console.log(maxCharCount)
}
function resetAll(){
   password1 = ""
   password2 = ""
   maxCharCount = ""
   passwordEl1.textContent = ""
   passwordEl2.textContent = ""
   charactersEl.textContent = ""
}
