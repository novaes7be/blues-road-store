const sortSelect = document.getElementById("sort");
const container = document.getElementById("products");

sortSelect.addEventListener("change", () => {
  const cards = Array.from(container.querySelectorAll(".card"));
  const value = sortSelect.value;

  let sortedCards;

  if (value === "low") {
    sortedCards = cards.sort((a, b) => a.dataset.price - b.dataset.price);
  } else if (value === "high") {
    sortedCards = cards.sort((a, b) => b.dataset.price - a.dataset.price);
  } else {
    return;
  }

  container.innerHTML = "";
  sortedCards.forEach(card => container.appendChild(card));
});