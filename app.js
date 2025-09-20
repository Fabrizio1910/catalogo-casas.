const catalogo = document.getElementById("catalogo");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementById("closeModal");

function renderCatalogo() {
  propiedades.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <div class="card-body">
        <h3>${p.nombre} - ${p.ciudad}</h3>
        <p><strong>Categoría:</strong> ${p.categoria}</p>
        <p>
          <span class="precio-actual">$${p.precio_actual.toLocaleString()}</span>
          <span class="precio-anterior">$${p.precio_anterior.toLocaleString()}</span>
        </p>
        <button>Ver más</button>
      </div>
    `;

    card.querySelector("button").addEventListener("click", () => {
      showPropertyDetail(p);
    });

    catalogo.appendChild(card);
  });
}

function showPropertyDetail(p) {
  modalBody.innerHTML = `
    <h2>${p.nombre} - ${p.ciudad}</h2>
    <img src="${p.imagen}" alt="${
    p.nombre
  }" style="width:100%; border-radius:8px; margin-bottom:1rem;">
    <p><strong>Categoría:</strong> ${p.categoria}</p>
    <p><strong>Área:</strong> ${p.area}</p>
    <p><strong>Habitaciones:</strong> ${p.habitaciones}</p>
    <p><strong>Baños:</strong> ${p.baños}</p>
    <p><strong>Parqueaderos:</strong> ${p.parqueaderos}</p>
    <p><strong>Precio Actual:</strong> $${p.precio_actual.toLocaleString()}</p>
    <p><strong>Precio Anterior:</strong> <span class="precio-anterior">$${p.precio_anterior.toLocaleString()}</span></p>
    <button style="margin-top:1rem; padding:0.5rem 1rem; background:#27ae60; color:white; border:none; border-radius:6px; cursor:pointer;">Contactar al vendedor</button>
  `;
  modal.style.display = "block";
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

renderCatalogo();
