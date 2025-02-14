import "dotenv/config";
import express from "express";
import router from './router.js';

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));

app.use("/favicon.ico", express.static("./public/images/logo.svg"));

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>  {
  console.log(`Le serveur est en cours d'exécution : http://localhost:${PORT}`);
});