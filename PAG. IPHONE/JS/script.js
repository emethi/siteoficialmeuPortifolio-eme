// Seleciona todos os elementos <li> dentro do contêiner com o ID "image-picker"
const buttons = document.querySelectorAll("#image-picker li");

// Seleciona o elemento de imagem com o ID "product-image"
const image = document.querySelector("#product-image");

// Adiciona um evento de clique a cada botão (elemento <li>)
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Imprime o evento de clique no console para depuração
    console.log(e);

    // Remove a classe "selected" de todos os elementos com a classe "color" dentro dos botões
    buttons.forEach((btn) =>
      btn.querySelector(".color").classList.remove("selected")
    );

    // Obtém o botão que foi clicado
    const button = e.target;

    // Obtém o valor do atributo "id" do botão clicado
    const id = button.getAttribute("id");

    // Adiciona a classe "selected" ao elemento com a classe "color" dentro do botão clicado
    button.querySelector(".color").classList.add("selected");

    // Adiciona a classe "changing" à imagem para iniciar a animação de mudança
    image.classList.toggle("changing");

    // Atualiza o atributo "src" da imagem para mudar a imagem exibida
    image.setAttribute("src", `img/iphone_${id}.jpg`);

    // Remove a classe "changing" da imagem após 200ms para finalizar a animação
    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});
