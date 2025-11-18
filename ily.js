const container = document.querySelector('.container');

function spawnILoveYou() {
  const text = document.createElement('div');
  text.classList.add('i-love-you');
  text.textContent = "I LOVE YOU❤";

  text.style.top = `${Math.random() * 90}%`;
  text.style.left = `${Math.random() * 90}%`;
  text.style.color = `hsl(${Math.random() * 360}, 80%, 70%)`;

  container.appendChild(text);

  setTimeout(() => {
    text.remove();
  }, 3000); 
}

setInterval(spawnILoveYou, 50);
