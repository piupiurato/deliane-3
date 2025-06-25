function tocarMusica() {
  const audio = document.getElementById("musica");
  const overlay = document.getElementById("overlay");

  audio.play()
    .then(() => {
      overlay.style.display = "none";
    })
    .catch((e) => {
      alert("Ocorreu um erro ao tentar tocar a música. 😢");
      console.error(e);
    });
}

function criarCoracoes() {
  const heartsContainer = document.querySelector('.hearts');
  const heart = document.createElement('div');
  heart.classList.add('heart-fall');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (2 + Math.random() * 3) + 's';
  heart.textContent = '❤️';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(criarCoracoes, 300);
