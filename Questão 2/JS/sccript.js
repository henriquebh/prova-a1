const botao = document.querySelector("#btn1");
var input = document.querySelector("#item");
botao.addEventListener("submit", function () {
  let poke = input;
  if (poke) {
    const lista = document.querySelector("#listapokemon");
    const item = document.createElement("li");
    const botaoLista = document.createElement("button");

    item.textContent = poke;
    botaoLista.textContent = "Apagar";
    lista.appendChild(item);
    lista.appendChild(botaoLista);

    botaoLista.addEventListener("click", function () {
      lista.removeChild(item);
      lista.removeChild(botaoLista);
    });
  } else {
    alert("Você não digitou o nome do pokemon capturado");
  }
});

//}
