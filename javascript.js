var randomNum = () => { 
    return Math.floor(Math.random() * 8)
}

const trophyNum = randomNum()    
var skullNum = randomNum()
while (trophyNum === skullNum) {
    skullNum = randomNum()
}
const changeToEmoji = (parameter) => {
   
    if (trophyNum === parameter)  {
       document.getElementById(parameter).innerHTML = "🏆"
       alert("Congrats you win!") 
    } else if (skullNum === parameter) {
       document.getElementById(parameter).innerHTML = "☠️"
       alert("Bye Felicia!")
    } else {
        document.getElementById(parameter).innerHTML = "🌲"
    }
} 