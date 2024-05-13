document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário
  
    const formData = new FormData(this);
    const feedbackData = {};
    formData.forEach((value, key) => {
      feedbackData[key] = value;
    });
  
    // Corpo do e-mail
    const body = `Nome: ${feedbackData.name}\nEmail: ${feedbackData.email}\nMensagem: ${feedbackData.message}`;
  
    // Codifica os dados do e-mail para o formato URI
    const mailtoLink = `mailto:renatovalenteprof43@outlook.com?subject=Feedback&body=${encodeURIComponent(body)}`;
  
    // Abre o cliente de e-mail padrão com os campos preenchidos
    window.location.href = mailtoLink;
  });
  