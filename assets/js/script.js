document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("#formulario");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

  formulario.addEventListener("submit", function(event) {
      event.preventDefault();

      const campoName = document.querySelector("#name");
      const errName = document.querySelector("#errName");
      const campoEmail = document.querySelector("#email");
      const errEmail = document.querySelector("#errEmail");
      const campoSubject = document.querySelector("#subject");
      const errSubject = document.querySelector("#errSubject");
      const campoMessage = document.querySelector("#message");

      let valido = true;

      // === Valida Nome ===
      if (campoName.value.trim().length < 3) {
          errName.textContent = "O nome deve ter no mínimo 3 caracteres.";
          // adiciona as duas classes: 'erro' (estilo) e 'ativo' (animação)
          errName.classList.add("erro", "ativo");
          campoName.classList.remove("valido");
          if (valido) campoName.focus();
          valido = false;
      } else {
          errName.textContent = "";
          // remove ambas as classes quando corrigido
          errName.classList.remove("ativo", "erro");
          campoName.classList.add("valido");
      }

      // === Valida Email ===
      if (!emailRegex.test(campoEmail.value.trim())) {
          errEmail.textContent = "Digite um e-mail válido.";
          errEmail.classList.add("erro", "ativo");
          campoEmail.classList.remove("valido");
          if (valido) campoEmail.focus();
          valido = false;
      } else {
          errEmail.textContent = "";
          errEmail.classList.remove("ativo", "erro");
          campoEmail.classList.add("valido");
      }

      // === Valida Assunto ===
      if (campoSubject.value.trim().length < 5) {
          errSubject.textContent = "O assunto deve ter no mínimo 5 caracteres.";
          errSubject.classList.add("erro", "ativo");
          campoSubject.classList.remove("valido");
          if (valido) campoSubject.focus();
          valido = false;
      } else {
          errSubject.textContent = "";
          errSubject.classList.remove("ativo", "erro");
          campoSubject.classList.add("valido");
      }

      // === Se tudo OK ===
      if (valido) {
          const msgSucesso = document.querySelector("#msgSucesso");
          msgSucesso.textContent = "Mensagem enviada com sucesso ✅";
          msgSucesso.classList.add("ativo");

          formulario.reset();

          // Remove status visual dos campos
          [campoName, campoEmail, campoSubject, campoMessage].forEach(campo => {
              campo.classList.remove("valido");
          });

          // Faz a mensagem desaparecer suavemente após 3 segundos
          setTimeout(() => {
              msgSucesso.classList.remove("ativo");
              msgSucesso.textContent = "";
          }, 3000);
      }
  });
});
