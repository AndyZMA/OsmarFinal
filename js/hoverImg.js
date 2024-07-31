document.addEventListener("DOMContentLoaded", function() {
    var logoImg = document.getElementById('logo-img');

    logoImg.addEventListener('mouseover', function() {
        this.src = 'img/logo/COLOR=G_G.png';
    });

    logoImg.addEventListener('mouseout', function() {
        this.src = 'img/logo/logoW.png';
    });
});