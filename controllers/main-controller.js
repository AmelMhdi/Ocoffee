import dataMapper from "../data-mapper.js";

const mainController = {
  async renderHomePage(req, res) {
    try {
      const allCoffeeData = await dataMapper.getAllCoffeeData();
      
      res.render("home", { allCoffeeData });
    } catch (error) {
      console.error(error);
      res.status(500).send("Une erreur s'est produite.");
    }
  },

  renderCatalogPage(req, res) {
    res.render("catalog");
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