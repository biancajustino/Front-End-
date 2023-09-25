
  const valorElement = document.getElementById("valor");
  const aumentarbotao = document.getElementById("aumentar");
  const diminuirbotao = document.getElementById("diminuir");
  const zerarbotao = document.getElementById("zerar");

  let valor = 0;

  function atualizarValor() {
      valorElement.textContent = valor;
  }

  aumentarbotao.addEventListener("click", function () {
      valor++;
      atualizarValor();
  });

  diminuirbotao.addEventListener("click", function () {
      if (valor > 0) {
          valor--;
          atualizarValor();
      } else {
          alert("O valor não pode ser menor que zero!");
      }
  });
  zerarbotao.addEventListener("click", function () {
      valor = 0;
      atualizarValor();
  });