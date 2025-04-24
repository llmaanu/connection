document.getElementById("loginBtn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;
    const mensagem = document.getElementById("mensagem");
  
    try {
      const response = await fetch("https://back-spider.vercel.app/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Login deu certo
        window.location.href = "../feed/feed.html";
      } else {
        mensagem.textContent = data.message || "Credenciais inválidas.";
      }
    } catch (error) {
      mensagem.textContent = "Erro de conexão com o servidor.";
    }
  });
  