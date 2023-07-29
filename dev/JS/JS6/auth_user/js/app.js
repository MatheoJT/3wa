// Ecoute du formulaire
const form = document.querySelector("form");
form.addEventListener("submit", handleFormSubmit);

// Fonction pour gérer l'envoi du formulaire
function handleFormSubmit(event) {
  event.preventDefault();

  // Récupération des données du formulaire
  const formData = new FormData(this);

    // Vérification des données
  if(formData.get('name') === "" || formData.get('email') === "" || formData.get('password') === "" || formData.get('birthday') === "") {
        showNotification("Veuillez remplir tous les champs", "danger");
        return;
    }

    this.reset();

  // Envoi des données via fetch a user_controller.php
  fetch("./server/user_controller.php", {
    method: "post",
    body: formData,
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
        console.log(data);
      if (data.success) {
        // Affichage de la notification de succès
        showNotification("Utilisateur ajouté avec succès", "success");
      } else {
        // Affichage de la notification d'erreur
        showNotification("Une erreur est survenue", "danger");
      }
    });
}


function showNotification(message, type) {
  const notification = document.createElement("div");
  notification.classList.add("alert", "alert-" + type);
  notification.innerText = message;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 3000);
}
