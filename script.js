
document.querySelectorAll(".menu-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const navbar = button.closest(".navbar");
    const links = navbar.querySelector(".nav-links");

    const isOpen = links.classList.toggle("open");

    button.setAttribute("aria-expanded", String(isOpen));
    button.textContent = isOpen ? "✕" : "☰";
  });
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    const navbar = link.closest(".navbar");
    const links = navbar.querySelector(".nav-links");
    const button = navbar.querySelector(".menu-toggle");

    links.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
    button.textContent = "☰";
  });
});
