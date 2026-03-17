const buttons = document.querySelectorAll(".filter-btn");
const productsContainer = document.getElementById("products");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    // ativa visual
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const sortType = button.dataset.sort;
    const cards = Array.from(document.querySelectorAll(".card"));

    let sorted;

    if (sortType === "low") {
      sorted = cards.sort((a, b) => a.dataset.price - b.dataset.price);
    } 
    else if (sortType === "high") {
      sorted = cards.sort((a, b) => b.dataset.price - a.dataset.price);
    } 
    else {
      sorted = cards; // padrão
    }

    productsContainer.innerHTML = "";
    sorted.forEach(card => productsContainer.appendChild(card));
  });
});