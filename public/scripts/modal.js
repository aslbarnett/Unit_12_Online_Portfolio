var contactButton = document.getElementById('main-site-contact');
var mainSiteOverlay = document.getElementById('main-site-overlay');
var mainSiteCloseButton = document.getElementById('main-site-close-button');

contactButton.addEventListener('click', function() {
    mainSiteOverlay.style.display = 'block';
});

mainSiteCloseButton.addEventListener('click', function() {
    mainSiteOverlay.style.display = 'none';
});