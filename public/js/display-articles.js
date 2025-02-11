displayArticles();

function displayArticles() {
  const seeAllButton = document.getElementById("see-all-products-button");
  const articlesList = document.querySelectorAll("#catalog .only-display-3-articles article:nth-child(n+4)");

  seeAllButton.addEventListener("click", () => {
    articlesList.forEach((article => {
      article.style.display = "block";
    }))
    // articlesList.classList.remove("none");
   
    seeAllButton.style.display = "none";
   })


};