const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Mon Quartier KARACK fonctionne !");
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d’exécution sur http://localhost:${PORT}`);
});
