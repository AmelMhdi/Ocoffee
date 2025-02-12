import dataMapper from "../data-mapper.js";

const mainController = {
  async renderHomePage(req, res) {
    try {
      const latestCoffeeArticles = await dataMapper.getLatestCoffeeArticles();
      res.render("home", { latestCoffeeArticles });
    } catch (error) {
      console.error(error);
      res.render("home", { latestCoffeeArticles: [] });
    }
  },
  
  async renderCatalogPage(req, res) {
    try {
    const allCoffeeData = await dataMapper.getAllCoffeeData();
    
    res.render("catalog", { allCoffeeData, isCatalogPage: true });
    } catch (error) {
      console.error(error);
      res.status(500).send("Une erreur s'est produite.");
    }
  },

  async renderCoffeeDetailsPage(req, res) {
    try {
      const coffeeId = req.params.id;
      console.log("coffeeId:", coffeeId);

      const oneCoffeeArticle = await dataMapper.getOneCoffeeArticle(coffeeId);
      
      if (! oneCoffeeArticle) {
        return res.status(404).render("404");
      }
      
      console.log("coffeeArticle:", oneCoffeeArticle);
      res.render("article", { oneCoffeeArticle });
    } catch (error) {
      console.error(error);
      res.status(500).send("Une erreur s'est produite.");
    }
  }
};

export default mainController;