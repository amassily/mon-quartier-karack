import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Actualites from "../components/Actualites.vue";
import Structures from "../components/Structures.vue";
import Ecoles from "../components/Ecoles.vue"; // Nouveau composant pour Écoles
import EcoleDetail from "../components/EcoleDetail.vue"; // Nouveau composant pour les détails des écoles
import Entreprises from "../components/Entreprises.vue";
import TerrainsDeJeux from "../components/TerrainsDeJeux.vue";
import Portraits from "../components/Portraits.vue";
import Apropos from "../components/Apropos.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/actualites", component: Actualites },
  { path: "/structures", component: Structures },
  { path: "/structures/ecoles", component: Ecoles },
  {
    path: "/structures/ecoles/:id",
    component: EcoleDetail,
    name: "ecole-detail",
  }, // Route pour les détails de l'école
  { path: "/structures/entreprises", component: Entreprises },
  { path: "/structures/terrains-de-jeux", component: TerrainsDeJeux },
  { path: "/portraits", component: Portraits },
  { path: "/apropos", component: Apropos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
