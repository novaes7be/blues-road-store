const sortSelect = document.getElementById("sort");
const productsContainer = document.getElementById("products");

sortSelect.addEventListener("change", () => {
  const cards = Array.from(document.querySelectorAll(".card"));

  let sorted;

  if (sortSelect.value === "low") {
    sorted = cards.sort((a, b) => a.dataset.price - b.dataset.price);
  } else if (sortSelect.value === "high") {
    sorted = cards.sort((a, b) => b.dataset.price - a.dataset.price);
  } else {
    return location.reload();
  }

  productsContainer.innerHTML = "";
  sorted.forEach(card => productsContainer.appendChild(card));
});