// enregistre une réference pour chaque element du formulaire
const form = document.getElementById('registrationForm');
const lastname = document.getElementById('lastname');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address1 = document.getElementById('address1');
const address2 = document.getElementById('address2');
const ville = document.getElementById('ville');
const codepostal = document.getElementById('code-postal');
const password = document.getElementById('password');

const myModal = new bootstrap.Modal(document.getElementById('myModal'));
const nom = document.getElementById('nomModal');
const prenom = document.getElementById('prenomModal');
const courriel = document.getElementById('courrielModal');
const phoneM = document.getElementById('phoneModal');
const adress1M = document.getElementById('address1Modal');
const adress2M = document.getElementById('address2Modal');
const villeM = document.getElementById('villeModal');
const codepostalM = document.getElementById('codepostalModal');

/*  Ajout d'un EventListener sur le formulaire pour empêcher
    la soumission du formulaire avant la validation des inputs. */
    form.addEventListener('submit', e => {
        e.preventDefault(); // empêche la soumission du formulaire

        validateInputs() // validation des inputs
    });

// fonction qui recoit un element html un message d'erreur en paramètre
const setError = (element, message) =>{
    const inputControl = element.parentElement; // recupere le parent de l'element en paramètre
    const errorDisplay = inputControl.querySelector('.error') // selectionner les balises de classe error
    const myInput = inputControl.querySelector('input'); // selectionner les balises input

    errorDisplay.innerText = message;
    errorDisplay.style.fontSize = "small"; // Add small font-size when error validation
    errorDisplay.style.color = "#ff3860";   // Add red color to the error text validation
    myInput.style.borderColor= '#ff3860';
}

const setSuccess = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const myInput = inputControl.querySelector('input');

    errorDisplay.innerText = message;
    errorDisplay.style.fontSize = "small";
    errorDisplay.style.color = "#09c372";   // Add green color to the .error class
    myInput.style.borderColor= '#09c372';
}

// Implémentation de la fonction validateInputs
const validateInputs = () => {
    const lastnameValue = lastname.value.trim();
    const firstnameValue = firstname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const villeValue = ville.value.trim();
    const codepostalValue = codepostal.value.trim();
    const address1Value = address1.value.trim();
    const address2Value = address2.value.trim();
    const passwordValue = password.value.trim();
    

    var testValidation = false;

// conditions de validation pour chaque value
    // validation du nom
    if(lastnameValue === ''){
        setError(lastname, 'Nom obligatoire');
        testValidation = true;
    }else if(!lastnameValue.match(/^[A-Za-z]{2,20}$/)){
        setError(lastname, 'le nom doit être composé uniquement de lettres(entre 2 et 20 lettres max)');
        testValidation = true;
    }else{
        setSuccess(lastname, 'C\'est parfait!');
    }
    // validation du prénom
    if(firstnameValue === ''){
        setError(firstname, 'Prénom obligatoire');
        testValidation = true;
    }else if(!firstnameValue.match(/^[A-Za-z]{2,20}$/)){
        setError(firstname, 'le prénom doit être composé uniquement de lettres(entre 2 et 20 lettres max)');
        testValidation = true;
    }else{
        setSuccess(firstname, 'C\'est parfait!');
    }
    // validation du courriel
    if(emailValue === ''){
        setError(email, 'Courriel obligatoire');
        testValidation = true;
    }else if(!emailValue.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        setError(email, 'format du courriel non autorisé ! ');
        testValidation = true;
    }else{
        setSuccess(email, 'C\'est parfait!');
    }
    // validation du telephone
    if(phoneValue ===''){
        setError(phone, 'Numéro de téléphone obligatoire');
        testValidation = true;
    }else if(!phoneValue.match(/^\([0-9]{3}\)[\s][0-9]{3}-[0-9]{4}$/)){
        setError(phone, 'N° non valide, Format a respecter: (XXX) XXX-XXXX');
        testValidation = true;
    }else{
        setSuccess(phone, 'C\'est parfait!');
    }
    //validation ville
    if(villeValue === ''){
        setError(ville, 'Ville obligatoire');
        testValidation = true;
    }else if(!villeValue.match(/^[A-Za-z]{2,20}$/)){
        setError(ville, 'Format de ville non respecté: > 2 lettres');
        testValidation = true;
    }else{
        setSuccess(ville, 'C\'est parfait!');
    }
    // validation du code postal
    if(codepostalValue === ''){
        setError(codepostal, 'Le code postal est obligatoire');
        testValidation = true;
    }else if(!codepostalValue.match(/^[A-Za-z0-9]{6}$/)){
        setError(codepostal, 'Format a respecter: H2J1W4');
        testValidation = true;
    }else{
        setSuccess(codepostal, 'C\'est parfait!');
    }
    // validation de l'adresse_Partie1
    if(address1Value === ''){
        setError(address1, 'Cette partie de l\'adresse est obligatoire');
        testValidation = true;
    }else if(!address1Value.match(/^[a-zA-Z0-9_|\-\s]{2,40}$/)){
        setError(address1, 'Format a respecter');
        testValidation = true;
    }else{
        setSuccess(address1, 'C\'est parfait!');
    }
    // validation de l'adresse_Partie2
    if(address2Value === ''){
        setError(address2, 'Cette partie de l\'adresse obligatoire');
        testValidation = true;
    }else if(!address2Value.match(/^[[a-zA-Z0-9_|\-\s]{2,40}$/)){
        setError(address2, 'Format a respecter: entre 2 et 30 caractères');
        testValidation = true;
    }else{
        setSuccess(address2, 'C\'est parfait!');
    }
    // validation mot de passe
    if(passwordValue === ''){
        setError(password, "Mot de passe obligatoire");
        testValidation = true;
    }else if(!passwordValue.match(/^[[a-zA-Z0-9_|\-\s]{2,8}$/)){
        setError(password, 'Format a respecter: entre 2 et 8 caractères');
        testValidation = true;
    }else{
        setSuccess(address2, 'C\'est parfait!');
    }
    // affichage du modal.
    console.log(testValidation);
    if(!testValidation){
        nom.innerHTML = lastnameValue
        prenom.innerHTML = firstnameValue
        courriel.innerHTML = emailValue
        phoneM.innerHTML = phoneValue
        
        myModal.show();
    }
};


const closeModal = () => {
    myModal.hide()
    nom.innerHTML = ""
    prenom.innerHTML = ""
    courriel.innerHTML = ""
    phoneM.innerHTML = ""
}