// Starting a new game
function startGame() {
  var messageElement = document.getElementById("messages");
  /* ! - It's called the "Non-null assertion operator" 
  and it tells the compiler that messageElement is not null.
  Do not confuse this with a 'null safety operator' of other languages (a?.b?.c?.d?).
  This simply tells typescript compiler that a variable is not null,
  which may be false and it will crash at runtime */

  messageElement!.innerText = "Welcome to Mutimath! Starting new game...";
}

document.getElementById("startGame")!.addEventListener("click", startGame);
