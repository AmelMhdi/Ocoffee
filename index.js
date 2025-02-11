import "dotenv/config";

// Import des dépendances
import express from "express";
import path from "node:path";

// Configuration
const PORT = process.env.PORT || 3000;
const app = express();

// Configuration moteur rendu (EJS)
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

// Servir les fichiers statiques 
app.use(express.static("public"));
app.use("/images", express.static("public/images"));


app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () =>  {
  console.log(`Le serveur est en cours d'exécution : http://localhost:${PORT}`);
});