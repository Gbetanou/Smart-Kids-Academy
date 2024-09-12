// Sélectionne l'élément popup et le lien de contact
var popup = document.getElementById('popupContact');
var contactLink = document.getElementById('contact-link');
var closeBtn = document.querySelector('.close');

// Fonction pour afficher le popup lorsque "Contacts" est cliqué
contactLink.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le lien de rediriger
    popup.style.display = 'block'; // Affiche le popup
});

// Fonction pour fermer le popup lorsque l'utilisateur clique sur le "X"
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none'; // Cache le popup
});

// Fermer le popup si l'utilisateur clique en dehors de la zone de contenu
window.addEventListener('click', function(event) {
    if (event.target == popup) {
        popup.style.display = 'none'; // Cache le popup
    }
});
