//team 1
let team1shot = document.querySelector("#teamone-shoot-button");
let team1attempt = document.querySelector ("#teamone-numshots");
let team1goal = document.querySelector ("#teamone-numgoals");

//team 2
let team2shot = document.querySelector("#teamtwo-shoot-button");
let team2attempt = document.querySelector ("#teamtwo-numshots");
let team2goal = document.querySelector ("#teamtwo-numgoals")

//reset
let reset = document.querySelector("#reset-button");
let resetCount = document.querySelector("#num-resets");


//team 1 event
team1shot.addEventListener("click", function() {
    let team1attemptcount = team1attempt.innerHTML++;
    
    if (Math.floor(Math.random() * 11) >= 5) {
      console.log("yes")  
    
}else {
    console.log("no")
    team1goal.innerHTML++;
}
    
})

//team 2 event
team2shot.addEventListener("click", function() {
    let team2attemptcount = team2attempt.innerHTML++;
    
    if (Math.floor(Math.random() * 11) >= 5) {
      console.log("yes")  
    
}else {
    console.log("no")
    team2goal.innerHTML++;
}
    
})

//reset event
reset.addEventListener("click", function() {
    console.log("reset")
    team1attempt.innerHTML = 0;
    team1goal.innerHTML = 0;
    team2attempt.innerHTML = 0;
    team2goal.innerHTML = 0;
    resetCount.innerHTML++;
})