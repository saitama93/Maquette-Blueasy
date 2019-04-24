/*  #######  VARIABLES GLOBAL  ######### */

fullName = document.querySelector('#fullName');
mail = document.querySelector('#mail');
msg = document.querySelector('#message');
send = document.querySelector('#envoi');
checkingMsg = false;
checkingFullName = false;
checkingMail = false;


/*  #######  EVENEMENTS  ####### */

fullName.addEventListener('blur', validationFullName);
mail.addEventListener('blur', validationMail);
msg.addEventListener('blur', validationMsg);
send.addEventListener('click', sendForm);


/*  #########  FONCTIONS  ######### */

// sendForm();

/*  ###### FONCTION D'ENVOI DU FORMULAIRE */

function sendForm(e) {

  if (checkingMail === true && checkingFullName === true && checkingMsg === true){

   
    msgErrorValider.innerHTML =" ";

  }else{

    e.preventDefault();
    errorSubmit.innerHTML = "Remplir tous les champs.";
  }
}



/*  #########  FONCTION CHAMP FULL NAME  ######### */

function validationFullName(){

    res = /^[A-Za-z é-]{2,25}$/;
    msgError = document.querySelector('#errorName');
    
  if(fullName.value.match(res)){

    msgError.innerHTML = " ";
    checkingFullName = true;

  } else if(fullName.value === ""){

    msgError.innerHTML = "Ce champ ne peux être vide.";
    checkingFullName = false;

  }else{

    msgError.innerHTML = "Saisie invalide.";
    checkingFullName = false;
  }
//   sendForm();
}


/*  #########  FONCTION CHAMP MAIL  ######### */

function validationMail() {

  msgError = document.querySelector('#errorMail');
  res = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 

  if(mail.value.match(res)){
      
    msgError.innerHTML = "";
    checkingMail = true;
  }else if (mail.value === ""){

    msgError.innerHTML = "Ce champ ne peux être vide.";
    checkingMail = false;
  }else{

    msgError.innerHTML = "Saisie invalide.";
    checkingMail = false;
  }
//   sendForm();
}

/*  ###### FONCTION CHAMP MESSAGE */

function validationMsg(){

  msgError = document.querySelector('#errorMessage');
  res = /^[^<>,<|>]+$/;

  if(msg.value.match(res) ){

    msgError.innerHTML = "";
    checkingMsg = true;
  }else if (msg.value === ""){

    msgError.innerHTML = "Ce champ ne peux être vide.";
    checkingMsg = false;
   }else{

    msgErrorinnerHTML = "Saisie invalide.";
    checkingMsg = false;
  }
//   sendForm();
}