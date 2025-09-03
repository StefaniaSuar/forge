// JavaScript
let likesPost1 = document.querySelector("#likes1");
let likesPost2 = document.querySelector("#likes2");
let likesPost3 = document.querySelector("#likes3");

let cont1 = 0;
let cont2 = 0;
let cont3 = 0;

function contador1(){
  cont1++;
  likesPost1.innerText = cont1 + " like(s)";
}

function contador2(){
  cont2++;
  likesPost2.innerText = cont2 + " like(s)";
}

function contador3(){
  cont3++;
  likesPost3.innerText = cont3 + " like(s)";
}
