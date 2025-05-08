document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const descrizione = document.getElementById("descrizione").value.trim();

  if (!nome || !email || !descrizione) {
    alert("Per favore compila tutti i campi.");
    return;
  }

  const message = `Ciao, sono ${nome}.\nEmail: ${email}\n\nDescrizione del mio caso:\n${descrizione}\n\nVorrei ricevere una consulenza da BlockUnlock-Pro. Grazie!`;
  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/44772781821?text=${encodedMsg}`;

  window.open(whatsappUrl, "_blank");
});
