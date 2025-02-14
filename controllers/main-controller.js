import dataMapper from "../database/data-mapper.js";

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

      const oneCoffeeArticle = await dataMapper.getOneCoffeeArticle(coffeeId);
      
      if (! oneCoffeeArticle) {
        return res.status(404).render("404");
      }
      
      res.render("article", { oneCoffeeArticle });

    } catch (error) {
      console.error(error);
      res.status(500).send("Une erreur s'est produite.");
    }
  },

  async renderShopPage(req, res) {
    try {
      res.render("shop")
    } catch (error) {
      console.error(error);
      res.status(404).render("404");
    }
  }
};

export default mainController;