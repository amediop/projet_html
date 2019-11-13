let formulaire=document.getElementById("message_form");
let inputs = document.getElementsByTagName("input");
let mess=document.getElementById("error");


formulaire.addEventListener("change",function (event) {
   
    let error="";
    event.preventDefault();
    if (document.getElementById("nom").value == "") {
       
        error += "nom vide";
        mess.classList.add("alert-danger");
        
    }
    else if (document.getElementById("email").value == "") {
        error += "l email est vide";
        mess.classList.add("alert-danger");
       
    }
    else if (document.getElementById("email").value != document.getElementById("confirm_email").value) {
       
        error += "les emails ne corresponde pas";
        mess.classList.add("alert-danger");
    }
    else if (document.getElementById("message").value.length <3) {
       
       error += "lsaisir un long message";
       mess.classList.add("alert-danger");
    }
    if(error === ""){
        mess.innerText="formulaire valide";
        mess.classList.add("alert-success");
        document.querySelector('btn') = true;
    }
    
    else{
        
      mess.innerText=error;
    }
    
}
);