document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const userInput = document.querySelector("#usuario");
  const passInput = document.querySelector("#password");
  const toggleBtn = document.querySelector("#togglePassword");

  // Mostrar / ocultar contraseña (si existe el botón)
  if (toggleBtn && passInput) {
    toggleBtn.addEventListener("click", () => {
      const type = passInput.getAttribute("type") === "password" ? "text" : "password";
      passInput.setAttribute("type", type);
      toggleBtn.textContent = type === "password" ? "Mostrar" : "Ocultar";
    });
  }

  // Validación básica visual
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // evita envío real

      const usuario = userInput?.value.trim();
      const password = passInput?.value.trim();

      if (!usuario || !password) {
        alert("Por favor, complete todos los campos.");
        return;
      }

      // Simulación educativa
      alert(
        "⚠️ Simulación educativa\n\n" +
        "Este formulario NO envía datos reales.\n" +
        "Solo replica el comportamiento visual."
      );

      // Limpia campos
      form.reset();
    });
  }
});
