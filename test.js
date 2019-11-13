let tablo=['Dans la vie on ne fait pas ce que l on veut mais on est responsable de ce que lon est.',
'La vie, cest comme une bicyclette, il faut avancer pour ne pas perdre l équilibre.',
'Pour critiquer les gens il faut les connaître, et pour les connaître, il faut les aimer.',
'Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d ennuis te seront épargnés.',
'L une des plus grandes douleurs est d aimer une personne que tu ne peux pas avoir.'];

let bouton=document.getElementById("click5");
bouton.addEventListener("click",function()
{
    
    let random=Math.floor(Math.random()* (5 - 0) + 0);
    tablo[random];
    mess.innerText=tablo[random];
}
);

let mess=document.getElementById("message");
let champ=document.getElementById("hu");
champ.addEventListener("keyup",function ()
 {
     mess.innerText=champ.value;
    
});