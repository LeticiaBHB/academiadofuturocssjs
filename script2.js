// Função para alternar a classe 'active' no clique do ícone do menu hambúrguer
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.menu-items').classList.toggle('active');
  });
  
// Função para calcular o IMC
function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var resultado = document.getElementById('imc-result');
  
    if (!isNaN(peso) && !isNaN(altura)) {
      var imc = peso / (altura * altura);
      resultado.textContent = 'Seu IMC é: ' + imc.toFixed(2);
    } else {
      resultado.textContent = 'Por favor, insira valores válidos.';
    }
  }
  
  // Event listener para o botão de cálculo do IMC
  document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura * altura);
    var resultado = document.getElementById("resultado");
    resultado.value = "Seu IMC é: " + imc.toFixed(2);
  });
  
  // Função para exibir os vídeos
  function exibirVideo(videoId) {
    var videoContainer = document.getElementById('video-container');
    var videoIframe = document.getElementById('video-iframe');
    videoIframe.src = 'https://www.youtube.com/embed/' + videoId;
    videoContainer.style.display = 'block';
  }
  
// Função para abrir o modal de compra
function abrirModal(plano, preco) {
    let modal = document.getElementById("modal");
    let modalPlano = document.getElementById("modal-plano");
    let modalPreco = document.getElementById("modal-preco");

    modalPlano.textContent = "Plano: " + plano;
    modalPreco.textContent = "Preço: R$ " + preco;

    modal.style.display = "block";
}


// Event listener para o botão de compra
document.getElementById("botao-comprar").addEventListener("click", function () {
    abrirModal("Plano Padrão", "100,00");
});

// Event listener para o botão de confirmar compra no modal
document.getElementById("confirmar").addEventListener("click", function () {
    alert("Compra confirmada com sucesso!");
    let modal = document.getElementById("modal");
    modal.style.display = "none";
});

// Event listener para fechar o modal
document.getElementsByClassName("close")[0].addEventListener("click", function () {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
});



  // Event listeners para os botões de exibição dos vídeos
  document.getElementById('btn-video1').addEventListener('click', function(event) {
    event.preventDefault();
    exibirVideo('video1Id');
  });
  
  document.getElementById('btn-video2').addEventListener('click', function(event) {
    event.preventDefault();
    exibirVideo('video2Id');
  });
  
  document.getElementById('btn-video3').addEventListener('click', function(event) {
    event.preventDefault();
    exibirVideo('video3Id');
  });

  // JavaScript para reproduzir os vídeos automaticamente quando estiverem visíveis na tela
window.addEventListener("DOMContentLoaded", function() {
    var videos = document.querySelectorAll("video");

    function playVideoWhenVisible(video) {
        var rect = video.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        // Reproduzir o vídeo quando estiver 1/3 visível na tela
        if (elemTop < window.innerHeight / 3 && elemBottom >= 0) {
            video.play();
        } else {
            video.pause();
        }
    }

    window.addEventListener("scroll", function() {
        videos.forEach(function(video) {
            playVideoWhenVisible(video);
        });
    });

    // Reproduzir os vídeos automaticamente quando estiverem visíveis na tela no carregamento da página
    videos.forEach(function(video) {
        playVideoWhenVisible(video);
    });
});

  