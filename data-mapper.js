import client from './database.js';

const dataMapper = {
  async getAllCoffeeData() {
    const result = await client.query(`SELECT * FROM coffeedata`);
    const allCoffeeData = result.rows;
    return allCoffeeData;
  },

  async getOneCoffeeArticle(id) {
    const result = await client.query(`SELECT * FROM coffeedata WHERE id = $1`, [id]);
    const oneCoffeeArticle = result.rows[0];
    return oneCoffeeArticle;
  }
};

export default dataMapper;