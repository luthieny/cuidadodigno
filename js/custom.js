(function($) {

  // Add smooth scrolling to all links in navbar
  $(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a").on('click', function(event) {

    var hash = this.hash;
    if (hash) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }

  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar-default").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

})(jQuery);

  // Obtener todos los elementos que contienen la descripción
  const expandableItems = document.querySelectorAll('.expandable-item');

  // Agregar un event listener a cada elemento para el clic
  expandableItems.forEach(item => {
    item.addEventListener('click', () => {
      // Verificar si la pantalla es pequeña (usando la misma media query que en el CSS)
      if (window.innerWidth <= 768) {
        // Alternar la clase 'active' para mostrar u ocultar la descripción
        item.querySelector('.expandable-content').classList.toggle('active');
      }
    });
  });