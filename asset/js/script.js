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

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filtrage");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var ulContent = document.getElementById("li-container");
var btns = ulContent.getElementsByClassName("imag");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}