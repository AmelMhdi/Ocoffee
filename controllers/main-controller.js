import dataMapper from "../data-mapper.js";

const mainController = {
  async renderHomePage(req, res) {
    try {
      const allCoffeeData = await dataMapper.getAllCoffeeData();
      console.log(allCoffeeData);
      res.render("home", { allCoffeeData });
    } catch (error) {
      console.error(error);
      res.status(500).send("Une erreur s'est produite.");
    }
  },

  renderCatalogPage(req, res) {
    res.render("catalog");
  },

  renderCoffeeDetailsPage(req, res) {
    res.render("article");
  }
};

export default mainController;