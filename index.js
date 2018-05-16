const app = "I don't do much.";
const cats = ["Milo", "Otis", "Garfield"];
var kittens = ["Milo", "Otis", "Garfield"];
var otherKitten; "Broom";

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

function appendKitten(Broom){
  const appendKitten = [...cats, "Broom"]
  
}