//Recuperer les actions le button et le menu-deroulant pour les manipuler
let button = document.querySelector("#button");
let menuDeroulant = document.querySelector("#menu-deroulant");

//Recuper l'info de quand le user clic sur le bouton
button.addEventListener("click", function () {
  //Verification via la console que ca fonctionne bien
  console.log("click");
  //Toggle la class css open au menu deroulant
  menuDeroulant.classList.toggle("open");
  //Toggle la class css rotate au bouton
  button.classList.toggle("rotate");
});

//Recuperer les actions de chaque cases du form
document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#my-form"); //le formulaire en tant que tel
  let firstName = document.querySelector("#firstName"); //prénom
  let lastName = document.querySelector("#lastName"); //nom
  let age = document.querySelector("#age"); //age
  let country = document.querySelector("#country"); //select avec les pays
  let email = document.querySelector("#email"); //pays
  let adresse = document.querySelector("#adresse"); //adresse
  let city = document.querySelector("#ville"); //ville
  let codepostal = document.querySelector("#codepostal"); //code postale
  let errors = document.querySelector(".errors"); //la div erreur pour pouvoir la remplir
  let checkbox = document.querySelector("#accepterConditions"); //case a cocher
  let errorsCD = document.querySelector(".errorsCD"); //la div erreur de la case a cocher pour pouvoir la remplir
  let validation = document.querySelector(".validation"); //le submit
  let mdp = document.querySelector("#mdp"); // mdp
  let mdpv = document.querySelector("#v-mdp"); // mdp verification
  //Quand le bouton submit est appuyé :
  form.addEventListener("submit", function (event) {
    event.preventDefault(); //on ne recharge pas la page
    errors.innerHTML = ""; //on vide les divs d'erreurs
    errorsCD.innerHTML = ""; //on vide les dics d'erreurs

    //Si la prénom a une longueur inferieur ou = a 2 ->
    if (firstName.value.length <= 2) {
      //Background en rouge et message d'erreur dans la div d'errors
      firstName.style.backgroundColor = "#9e4242";
      errors.innerHTML +=
        "<div>Veuillez renseigner un prénom avec deux caractères minimum.</div>";
    } else {
      firstName.style.backgroundColor = "#78cc82"; // sinon background en vert
    }
    // Longueur inferieur ou egale a 2 ->
    if (lastName.value.length <= 2) {
      // Bcolor rouge et message d'erreur
      lastName.style.backgroundColor = "#9e4242";
      errors.innerHTML +=
        "<div>Veuillez renseigner un nom avec deux caractères minimum.</div>";
    } else {
      lastName.style.backgroundColor = "#78cc82"; // sinon bcolor vert
    }
    // Verif si age entre 19 et 69
    if (age.value < 18 || age.value > 70) {
      //Si non, BColor rouge et erreur
      age.style.backgroundColor = "#9e4242";
      errors.innerHTML +=
        "<div>Veuillez renseigner un âge entre 18 et 70 ans.</div>";
    } else {
      //si oui BColor vert
      age.style.backgroundColor = "#78cc82";
    }
    // Verif si un pays n'a pas été choisi dans le select
    // si oui
    if (country.value === "null") {
      //BColor rouge et erreur
      country.style.backgroundColor = "#9e4242";
      errors.innerHTML +=
        "<div>Veuillez sélectionner un pays dans la liste.</div>";
    } else {
      // Si non BColor vert
      country.style.backgroundColor = "#78cc82";
    }
    // Verif de la taille de l'email et si elle contient un '@' (si ok -> BColor vert, si non -> erreur + BColor rouge)
    if (email.value.length <= 2 || !email.value.includes("@")) {
      email.style.backgroundColor = "#9e4242";
      errors.innerHTML += "<div>Veuillez renseigner un email valide.</div>";
    } else {
      email.style.backgroundColor = "#78cc82";
    }
    // Verif qu'une adresse d'une longueur d'au moins deux caractere a été rentré (si ok -> BColor vert, si non -> erreur + BColor rouge)
    if (adresse.value.length <= 2) {
      adresse.style.backgroundColor = "#9e4242";
      errors.innerHTML += "<div>Veuillez renseigner une adresse valide.</div>";
    } else {
      adresse.style.backgroundColor = "#78cc82";
    }
    // Verif qu'une ville d'une longueur d'au moins deux caractere a été rentré (si ok -> BColor vert, si non -> erreur + BColor rouge)
    if (city.value.length <= 2) {
      city.style.backgroundColor = "#9e4242";
      errors.innerHTML += "<div>Veuillez renseigner une ville valide.</div>";
    } else {
      city.style.backgroundColor = "#78cc82";
    }
    // Verif si le code postal est d'une longueur exact de 5 caractere (si ok -> BColor vert, si non -> erreur + BColor rouge)
    if (codepostal.value.length !== 5) {
      codepostal.style.backgroundColor = "#9e4242";
      errors.innerHTML +=
        "<div>Veuillez renseigner un code postal valide.</div>";
    } else {
      codepostal.style.backgroundColor = "#78cc82";
    }
    // Verif que le mdp fait au moins 6 caracteres (si ok -> BColor vert, si non -> erreur + BColor rouge)
    if (mdp.value.length <= 6) {
      mdp.style.backgroundColor = "#9e4242";
      errors.innerHTML +=
        "<div>Veuillez renseigner un mot de passe de plus de 6 caractères.</div>";
    } else {
      mdp.style.backgroundColor = "#78cc82";
    }
    // Verif si le mdp contient des caractetes alphanumeriques et au moins un chiffre (si ok -> BColor vert, si non -> erreur + BColor rouge)
    if (!/[a-zA-Z]/.test(mdp.value) || !/\d/.test(mdp.value)) {
      errors.innerHTML +=
        "<div>Veuillez renseigner un mot de passe avec des lettres et des chiffres.</div>";
    } else {
      mdp.style.backgroundColor = "#78cc82";
    }
    // Verif que le mdp et sa verification correspondent (si ok -> BColor vert, si non -> erreur + BColor rouge)
    if (mdp.value !== mdpv.value) {
      mdpv.style.backgroundColor = "#78cc82";
      mdp.style.backgroundColor = "#78cc82";
      errors.innerHTML += "<div>Les mots de passe ne correspondent pas.</div>";
    } else {
      mdp.style.backgroundColor = "#9e4242";
      mdpv.style.backgroundColor = "#9e4242";
    }
    // Verif que les conditions sont validé par la case a cocher (si ok -> BColor vert, si non -> erreur + BColor rouge)
    if (!checkbox.checked) {
      checkbox.style.backgroundColor = "#9e4242";
      errorsCD.innerHTML += "<div>Vous devez accepter les conditions</div>";
    } else {
      checkbox.style.backgroundColor = "#78cc82";
    }
    console.log(errors); // verif dans la console des errors pour voir si tout s'affiche
    //Si aucune erreur dans errors
    if (errors.innerHTML === "") {
      //Si aucune erreur dans la case a cocher
      if (errorsCD.innerHTML === "") {
        //Afficher Formulaire envoyé
        validation.innerHTML += "<div>Formulaire Envoyé</div>";
        //et reset le contenu du form
        form.reset();
      }
    }
  });
});
