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
  const append = [...kittens, "Broom"];
  
}

function prependKitten(){
  
}

function removeLastKitten(){
  kittens.slice(-1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}