const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garfield"];
var otherKitten; "Broom"; //Probably not needed

function destructivelyAppendKitten(){
  kittens.push("Ralph");
}

function destructivelyPrependKitten(){
  kittens.unshift("Bob");
  
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  
}

function appendKitten(){
  return [...kittens, "Broom"];
  
}

function prependKitten(){
  return ["Arnold", ...kittens];
}

function removeLastKitten(){
  return kittens.unshift()
}

function removeFirstKitten(){
  return kittens.slice(0)
}