const data = {

gamer:["Zyrox","Kaelix","Ravion","Drayko","Xypher","Velkar","Nyrox","Kryzor","Vexium","Torvex"],

aesthetic:["Lunara","Veluna","Aurelia","Solenne","Elowyn","Celestia","Nymera","Aloura","Serenelle","Lumina"],

dark:["Noctyra","Valthor","Obsyra","Nyxaris","Morvane","Velgrim","Drakonis","Xalthor","Zareth","Umbriel"],

perros:["Max","Rocky","Thor","Zeus","Milo","Luna","Kira","Bruno","Simba","Rex","Nala","Toby"],

gatos:["Michi","Salem","Nube","Leo","Loki","Mora","Kiara","Tom","Shadow","Garfield","Felix","Nina"],

therians:["MoonClaw","SilverFang","NightPaw","WildSpirit","ForestSoul","AshFur","SkyHowl","RiverShade","WolfHeart","ShadowTail"]

};

function generar(tipo){
let lista = data[tipo];
let resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML="";

for(let i=0;i<6;i++){

let base = lista[Math.floor(Math.random()*lista.length)];
let numero = Math.floor(Math.random()*999);
let formato = Math.floor(Math.random()*3);

let nombreFinal;

if(formato===0) nombreFinal = base;
if(formato===1) nombreFinal = base + numero;
if(formato===2) nombreFinal = base + "_" + numero;

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