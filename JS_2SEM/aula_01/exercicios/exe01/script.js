
 function verificarDados() {
        const nome = document.getElementById("nome").value;
        const idade = parseInt(document.getElementById("idade").value);
        const cidade = document.getElementById("cidade").value;

        const progresso = document.getElementById("progresso");
        const progress = document.getElementById("progress");
        let valorProgresso = 0;

        progress.style.display = "block";

        const interval = setInterval(() => {
            valorProgresso += 10;
            progresso.value = valorProgresso;

            if (valorProgresso >= 100) {
                clearInterval(interval);
                progress.style.display = "none";

                if (idade > 190 || idade < 0) {
                    document.getElementById("mensagem").style.color = "red";
                    document.getElementById("mensagem").innerText = "Idade inválida";
                } else {
                    document.getElementById("mensagem").style.color = "green";
                    document.getElementById("mensagem").innerText = `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`;
                }
            }
        }, 200);
    }