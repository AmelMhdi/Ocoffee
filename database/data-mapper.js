import client from '../database/database.js';

const dataMapper = {

  async getAllCoffeeData() {
    const result = await client.query(`SELECT * FROM "coffeedata"`);
    const allCoffeeData = result.rows;
    return allCoffeeData;
  },

  async getOneCoffeeArticle(coffeeId) {
    try {
      const coffeeIdAstInt = parseInt(coffeeId, 10);
      if (isNaN(coffeeIdAstInt)) {
        return null;
      }

      const result = await client.query(`SELECT * FROM "coffeedata" WHERE "id" = $1`, [coffeeIdAstInt]);
      if (result.rows.length === 0) {
        return null;
      }

      const oneCoffeeArticle = result.rows[0];
      return oneCoffeeArticle;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async getLatestCoffeeArticles() {
    try {
      const result = await client.query(`SELECT * FROM "coffeedata" ORDER BY "id" DESC LIMIT 3`);
      if (result.rows.length === 0) {
        return [];
      }
      const latestArticles = result.rows;
      return latestArticles;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
};

export default dataMapper;