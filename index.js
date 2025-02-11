import "dotenv/config";
import path from "node:path";
import express from "express";

// Configuration
const PORT = process.env.PORT || 3000;
const app = express();

// Configuration moteur rendu (EJS)
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "./views"));

// Configurer un dossier d'assets statiques
app.use(express.static(path.join(process.cwd(), 'public')));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/catalogue", (req, res) => {
  res.render("catalogue");
});

app.get("/product", (req, res) => {
  res.render("product");
});

app.get("/404", (req, res) => {
  res.render("404");
});

app.listen(PORT, () =>  {
  console.log(`Le serveur est en cours d'exécution : http://localhost:${PORT}`);
});