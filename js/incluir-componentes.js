// incluir-componentes.js - Carga dinámica del navbar y footer
document.addEventListener("DOMContentLoaded", () => {
  includeHTML("componentes/navbar.html", "navbar");
  includeHTML("componentes/footer.html", "footer");
});

function includeHTML(file, elementId) {
  fetch(`/${file}`)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => console.error(`Error al incluir ${file}:`, error));
}
