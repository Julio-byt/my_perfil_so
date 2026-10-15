
// MENÚ RESPONSIVO
const botonMenu = document.querySelector(".menu-toggle");
const enlaces = document.querySelector(".nav-links");

botonMenu.addEventListener("click", () => {
    const abierto = enlaces.classList.toggle("activo");

    botonMenu.setAttribute("aria-expanded", abierto);
    botonMenu.setAttribute(
        "aria-label",
        abierto ? "Cerrar menú" : "Abrir menú"
    );
});

// CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN
document.querySelectorAll(".nav-links a").forEach(enlace => {
    enlace.addEventListener("click", () => {
        enlaces.classList.remove("activo");
        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.setAttribute("aria-label", "Abrir menú");
    });
});

// AÑO AUTOMÁTICO
document.getElementById("year").textContent =
    new Date().getFullYear();

// VISOR DE FOTOGRAFÍAS
const visor = document.createElement("div");

visor.className = "visor";
visor.style.cssText = `
    display: none;
    position: fixed;
    inset: 0;
    z-index: 999;
    background: rgba(5, 10, 30, 0.96);
    align-items: center;
    justify-content: center;
    padding: 50px 20px;
    cursor: zoom-out;
`;

visor.innerHTML = `
    <img alt="Fotografía ampliada"
      style="
        max-width: 95%;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 10px;
      ">
`;

document.body.appendChild(visor);

const imagenAmpliada = visor.querySelector("img");

document.querySelectorAll(".foto img").forEach(imagen => {
    imagen.addEventListener("click", () => {
        imagenAmpliada.src = imagen.src;
        imagenAmpliada.alt = imagen.alt;
        visor.style.display = "flex";
    });
});

visor.addEventListener("click", () => {
    visor.style.display = "none";
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        visor.style.display = "none";
    }
});
