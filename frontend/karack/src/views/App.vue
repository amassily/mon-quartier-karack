<template>
  <div id="app">
    <!-- Menu de navigation -->
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/actualites">Actualités</router-link></li>

        <!-- Menu déroulant pour Structures -->
        <li class="dropdown">
          <a href="#" class="dropbtn">Structures</a>
          <ul class="dropdown-content">
            <li><router-link to="/structures/ecoles">Écoles</router-link></li>
            <li>
              <router-link to="/structures/entreprises"
                >Entreprises</router-link
              >
            </li>
            <li>
              <router-link to="/structures/terrains-de-jeux"
                >Terrains de jeux</router-link
              >
            </li>
          </ul>
        </li>

        <li><router-link to="/portraits">Portraits</router-link></li>
        <li><router-link to="/apropos">À propos</router-link></li>
        <li><button @click="toggleLogin">S'identifier</button></li>
      </ul>
    </nav>

    <!-- Formulaire de connexion qui s'affiche après avoir cliqué sur "S'identifier" -->
    <div v-if="isLoginVisible" class="login-form">
      <h2>Page de Connexion</h2>
      <form>
        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom" required />

        <label for="prenom">Prénom :</label>
        <input type="text" id="prenom" name="prenom" required />

        <label for="adresse">Adresse :</label>
        <input type="text" id="adresse" name="adresse" required />

        <label for="numero">Numéro :</label>
        <input type="tel" id="numero" name="numero" required />

        <button type="submit">Enregistrer</button>
      </form>
      <button @click="toggleLogin">Fermer</button>
    </div>

    <!-- Afficher la page correspondante ici -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isLoginVisible: false, // Variable pour afficher/masquer la page de connexion
    };
  },
  methods: {
    toggleLogin() {
      this.isLoginVisible = !this.isLoginVisible; // Bascule la visibilité du formulaire
    },
  },
};
</script>

<style>
/* Global reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Arial", sans-serif;
  background-color: #f4f4f4;
}

/* Le conteneur principal, ajuster la marge pour laisser de l'espace pour le menu */
#app {
  margin-top: 120px; /* Augmenter la marge pour compenser la hauteur du menu */
}

/* Menu de navigation */
nav {
  background-color: rgba(0, 0, 0, 0.7); /* Fond noir avec 70% d'opacité */
  backdrop-filter: blur(5px); /* Flou de l'arrière-plan derrière le menu */
  padding: 15px 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Ombre discrète sous le menu */
  border-radius: 10px; /* Arrondir les bords de la barre */
}

/* Liste du menu */
ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  position: relative;
}

/* Liens du menu */
a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 15px;
  display: block;
}

/* Couleur au survol (Menu uniquement) */
nav a:hover {
  background-color: #ff7f50; /* Couleur attrayante au survol */
  border-radius: 5px;
}

/* Styles pour le bouton "S'identifier" */
button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

/* Effet au survol pour le bouton */
button:hover {
  background-color: #45a049;
}

/* Menu déroulant (Structures) */
.dropdown {
  position: relative;
}

.dropbtn {
  background-color: transparent;
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  text-align: center;
}

/* Menu déroulant */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  min-width: 160px;
  z-index: 1;
  border-radius: 5px;
  top: 100%;
}

/* Afficher le sous-menu au survol du parent */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Liens du sous-menu */
.dropdown-content li {
  margin: 0;
  padding: 10px;
}

.dropdown-content a {
  color: white;
  padding: 10px 15px;
  display: block;
}

/* Effet au survol pour les liens du sous-menu */
.dropdown-content a:hover {
  background-color: #ff7f50;
  border-radius: 5px;
}

/* Styles pour le formulaire de connexion */
.login-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 500px;
  z-index: 20;
}

.login-form h2 {
  text-align: center;
  margin-bottom: 20px;
}

.login-form label {
  display: block;
  margin: 10px 0 5px;
}

.login-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-form button {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-form button:hover {
  background-color: #45a049;
}
</style>
