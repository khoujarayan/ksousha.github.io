document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher le rechargement de la page
    // Afficher le toast de confirmation
    var toast = new bootstrap.Toast(document.getElementById('emailToast'));
    toast.show();
    
    // Fermer la modale après envoi
    var modal = bootstrap.Modal.getInstance(document.getElementById('emailModal'));
    modal.hide();
    
    // Réinitialiser le formulaire
    document.getElementById('emailForm').reset();
});

// Sélectionner toutes les icônes
const icons = document.querySelectorAll('.icones a i');

// Ajouter l'événement de hover
icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.add('fa-2x');  // Ajouter la classe fa-2x lors du hover
    });
    icon.addEventListener('mouseleave', () => {
        icon.classList.remove('fa-2x');  // Retirer la classe fa-2x quand la souris part
    });
});




// Auto slide du carrousel

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const carousel = document.querySelector(`#carouselExampleAutoplaying`);
    if (carousel) {
        carousel.removeAttribute('data-bs-ride'); 
    }
}

if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    const carousel = document.querySelector(`#carouselExampleAutoplaying`);
    if (carousel) {
        carousel.setAttribute('data-bs-ride','carousel'); 
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const headings = document.querySelectorAll('h1');
    headings.forEach(heading => {
        heading.setAttribute('tabindex', '0');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.setAttribute('tabindex', '0');
    });
});