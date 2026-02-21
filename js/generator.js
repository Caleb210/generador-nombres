const data = {

gamer:[
"Nova","Blaze","Rex","Vortex","Ghost","Fury","Shadow","Titan","Venom",
"Drift","Phantom","Sniper","Rogue","Storm","Zero","Inferno","Pulse"
],

aesthetic:[
"Luna","Velvet","Angel","Nova","Bloom","Aura","Dream","Ivy","Skye",
"Pearl","Misty","Cloud","Honey","Willow","Sage","Glow"
],

dark:[
"Noctis","Obsidian","Void","Raven","Grim","Nyx","Phantom",
"Eclipse","Ash","Hex","Dagger","Venom","Crypt"
],

perros:[
"Max","Rocky","Thor","Luna","Kira","Rex","Milo","Bruno",
"Nala","Simba","Zeus","Coco","Duke","Odin","Toby","Roxy"
],

gatos:[
"Salem","Leo","Loki","Mora","Kiara","Shadow",
"Nube","Felix","Misha","Zara","Oreo","Simba"
],

therians:[
"Wolf","Fang","Claw","Spirit","Howl","Ash",
"Moon","Forest","Alpha","Wild","Ember","River"
],

instagram:[
"Vibes","World","Era","Daily","Zone","Official",
"Online","Hub","Life","Mood","Studio"
],

tiktok:[
"Clips","Live","Viral","Trend","Wave",
"Media","TV","Shorts","Creator"
]

};

const prefijos = ["x","its","real","the","official","im","hey","xo"];
const sufijos = ["x","tv","live","zone","hub","era"];
const simbolos = ["_",".","__","x","99","07"];

function random(arr){
return arr[Math.floor(Math.random()*arr.length)];
}

function generar(tipo){

let lista = data[tipo];
let resultadoDiv = document.getElementById("resultado");
let nombreBase = document.getElementById("nombreBase").value.trim();

resultadoDiv.innerHTML="";

for(let i=0;i<15;i++){

let nombreFinal;

// 🐶🐱 MODO MASCOTA (sin números ni símbolos)
if(tipo === "perros" || tipo === "gatos"){

let palabra1 = random(lista);
let palabra2 = random(lista);

let formato = Math.floor(Math.random()*4);

switch(formato){

case 0:
nombreFinal = palabra1;
break;

case 1:
nombreFinal = palabra1 + " " + palabra2;
break;

case 2:
nombreFinal = palabra1 + "ito";
break;

case 3:
nombreFinal = palabra1 + "y";
break;

}

}

// 🔥 RESTO DE CATEGORÍAS (modo username)
else{

if(nombreBase === ""){
nombreBase = "User";
}

let palabra1 = random(lista);
let palabra2 = random(lista);
let pref = random(prefijos);
let suf = random(sufijos);
let simb = random(simbolos);
let numero = Math.floor(Math.random()*999);

let formato = Math.floor(Math.random()*8);

switch(formato){

case 0:
nombreFinal = nombreBase + palabra1;
break;

case 1:
nombreFinal = palabra1 + nombreBase;
break;

case 2:
nombreFinal = nombreBase + simb + palabra1;
break;

case 3:
nombreFinal = pref + nombreBase + suf;
break;

case 4:
nombreFinal = nombreBase + palabra1 + palabra2;
break;

case 5:
nombreFinal = nombreBase + numero;
break;

case 6:
nombreFinal = pref + nombreBase + simb + palabra1;
break;

case 7:
nombreFinal = palabra1 + palabra2 + numero;
break;

}

}

let div = document.createElement("div");
div.className="nombre-item";
div.innerText = nombreFinal;

div.onclick=function(){
navigator.clipboard.writeText(nombreFinal);
alert("Copiado: "+nombreFinal);
};

resultadoDiv.appendChild(div);

}

}