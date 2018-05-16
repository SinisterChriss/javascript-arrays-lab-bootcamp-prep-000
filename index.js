const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garfield"];
var otherKitten; "Bob";

function destructivelyAppendKitten(){
  kittens.push("Ralph");
}

function destructivelyPrependKitten(){
  kittens.unshift("Bob");
  
}

function destructivelyRemoveLastKitten(){
  kittens = kittens.slice(1);
  
}