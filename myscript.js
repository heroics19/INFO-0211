// Select the search input
const searchInput = document.querySelector("[data-search]");

// Select all fruit cards
const fruitCards = document.querySelectorAll(".card");

// Function to filter fruit cards based on search input
function filterCards(query) {
    query = query.toLowerCase(); // Convert query to lowercase for case-insensitive comparison

    fruitCards.forEach(card => {
        const title = card.querySelector(".header h3").textContent.toLowerCase();
        const body = card.querySelector(".body p").textContent.toLowerCase();

        if (title.includes(query) || body.includes(query)) {
            card.style.display = "block"; // Show card if it matches
        } else {
            card.style.display = "none"; // Hide card if it doesn't match
        }
    });
}

// Event listener for input changes
searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();
    filterCards(query);
});