let ajouter=document.getElementById("ajout");
let conteneur=document.getElementById("conteneur");
let formulaire=document.getElementById("formulaire");
let inputs=document.querySelectorAll("#conteneur inputs");


ajouter.addEventListener("click",function() {
    let new_div=document.createElement("div");
    let new_div1=document.createElement("div")
    new_div.innerHTML='<input type="text" name="option" placeholder="Choisissez une option" id="opt1" class="form-control" />';
    new_div1.innerHTML='<input type="text" name="valeur" placeholder="Choisissez une valeur" id="val1" class="form-control" />';
    new_div.classList.add("col-6")
    new_div1.classList.add("col-6")
    conteneur.appendChild(new_div);
    conteneur.appendChild(new_div1);
    conteneur.classList.add("row");
    
    
}
);
formulaire.addEventListener("submit",function (event) {
   
    
    event.preventDefault();
    if (document.getElementById("email").value == "") {
       
        alert("veuillez renseigner le champ email");
        
    }
    else if(inputs.length==0){
        alert("jdjce djdnedjd");
    }

   
    else if (document.getElementById("opt1").value == "") {
       
        alert("veuillez renseigner l option choisi");
        
    }
    else if (document.getElementById("val1").value == "") {
       
        alert("veuillez renseigner la valeur");
        
    }
    else{
        alert("formulaire valide");
    }
   
    
}

);

