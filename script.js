document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letter");
  const container = document.querySelector(".container");
  const body = document.body;
  const heartContainer = document.querySelector(".background-hearts");
  const flykisses = document.querySelectorAll(".flykiss");

  body.style.background = "white";

  for (let i = 0; i < 30; i++) {
    let heart = document.createElement("div");
    heart.classList.add("bg-heart");
    heart.innerHTML = "❤";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heart.style.fontSize = `${Math.random() * 20 + 20}px`;
    heartContainer.appendChild(heart);
  }

  const toggleLetter = () => {
    const isOpen = container.classList.contains("show-letter");

    if (!isOpen) {
      container.classList.add("show-letter");
      envelope.classList.add("hide-envelope");
      body.style.background = "radial-gradient(circle, #ff758c, #ff7eb3)";
      flykisses.forEach(f => f.style.display = "block"); 
    } else {
      container.classList.remove("show-letter");
      envelope.classList.remove("hide-envelope");
      body.style.background = "white";
      flykisses.forEach(f => f.style.display = "none"); 
    }
  };

  envelope.addEventListener("click", toggleLetter);
  letter.addEventListener("click", toggleLetter);
});
