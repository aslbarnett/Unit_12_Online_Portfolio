var welcomeSection = document.getElementById('main-site-welcome');
var developmentSection = document.getElementById('main-site-development');
var martialArtsSection = document.getElementById('main-site-martial-arts');

var developmentButton = document.getElementById('development-button');
var martialArtsButton = document.getElementById('martial-arts-button');



developmentButton.addEventListener('click', function() {
    if (welcomeSection.style.display !== 'none') {
        welcomeSection.style.display = 'none';
    }
    if (martialArtsSection.style.display !== 'none') {
        martialArtsSection.style.display = 'none';
    }
    developmentSection.style.display = 'flex';
});

martialArtsButton.addEventListener('click', function() {
    if (welcomeSection.style.display !== 'none') {
        welcomeSection.style.display = 'none';
    }
    if (developmentSection.style.display !== 'none') {
        developmentSection.style.display = 'none';
    }
    martialArtsSection.style.display = 'flex';
});