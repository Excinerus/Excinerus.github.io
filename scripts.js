document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav ul li a');

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    }
});
