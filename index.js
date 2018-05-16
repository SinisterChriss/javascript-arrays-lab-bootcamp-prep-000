const app = "Broom";
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

function appendKitten(kittens){
  const app = [...kittens, "Broom"];
  
}