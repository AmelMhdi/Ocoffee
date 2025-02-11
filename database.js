import "dotenv/config";
import pg from 'pg';

const client = new pg.Client(process.env.PG_URL);

await client.connect();

// test
// const result = await client.query(`SELECT * FROM coffeedata`);
// console.log(result);

export default client;
