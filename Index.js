// Función para manejar la intersección de las secciones
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Eliminar la clase hidden-section para hacerla visible
      entry.target.classList.remove("hidden-section");

      // Agregar la clase animated a cada tarjeta de producto/oferta
      const cards = entry.target.querySelectorAll(".card");
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("animated");
        }, index * 200); // Retraso en la animación para cada tarjeta
      });

      // Dejar de observar la sección para dejar de rastrearla
      observer.unobserve(entry.target);
    }
  });
}

// Crear un Intersection Observer
const sectionObserver = new IntersectionObserver(handleIntersection, {
  root: null,
  threshold: 0.2, // Ajusta este umbral según sea necesario
});

// Observar los elementos de ambas secciones
const productosSection = document.querySelector("#productos");
const ofertasSection = document.querySelector("#ofertas");

if (productosSection) {
  sectionObserver.observe(productosSection);
}
if (ofertasSection) {
  sectionObserver.observe(ofertasSection);
}
