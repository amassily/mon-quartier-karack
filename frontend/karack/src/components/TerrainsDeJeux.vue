<template>
  <div class="terrains-jeux">
    <h1>Les Terrains de Jeux du Quartier</h1>

    <div class="section">
      <h2>Terrains disponibles</h2>
      <div class="section-content">
        <div v-for="terrain in terrainsJeux" :key="terrain.id" class="section-item">
          <div class="image-link" @click="voirDetails(terrain)">
            <div class="image-overlay">
              <img :src="terrain.image" alt="Image du terrain de jeux" class="image" />
            </div>
            <div class="overlay-text">
              <h3>{{ terrain.nom }}</h3>
              <button>Voir détails</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Panneau de détails du terrain de jeux -->
    <div v-if="terrainDetail" class="terrain-detail-panel">
      <div class="detail-header">
        <h2>{{ terrainDetail.nom }}</h2>
        <button @click="fermerDetails">Fermer</button>
      </div>
      <div class="detail-content">
        <p><strong>Description:</strong> {{ terrainDetail.description }}</p>
        <p><strong>Adresse:</strong> {{ terrainDetail.adresse }}</p>
        <p><strong>Contact:</strong> {{ terrainDetail.contact }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      terrainsJeux: [
        {
          id: 1,
          nom: "Terrain de Football Karack",
          image: "https://via.placeholder.com/300x200",
          description: "Un terrain de football avec pelouse synthétique.",
          adresse: "Rue 11, Quartier Karack",
          contact: "0775566778",
        },
        {
          id: 2,
          nom: "Parc des Enfants",
          image: "https://via.placeholder.com/300x200",
          description: "Un parc sécurisé avec des jeux pour enfants.",
          adresse: "Rue 10, Quartier Karack",
          contact: "0771122334",
        },
        {
          id: 3,
          nom: "Espace de Basketball",
          image: "https://via.placeholder.com/300x200",
          description: "Un espace dédié aux amateurs de basketball.",
          adresse: "Rue 12, Quartier Karack",
          contact: "0781122334",
        },
        {
          id: 4,
          nom: "Salle de Jeux Indoor",
          image: "https://via.placeholder.com/300x200",
          description: "Salle de jeux intérieure avec jeux vidéo et babyfoot.",
          adresse: "Rue 13, Quartier Karack",
          contact: "0783344556",
        },
        {
          id: 5,
          nom: "Zone de Skateboard",
          image: "https://via.placeholder.com/300x200",
          description: "Un espace moderne pour les amateurs de skateboard.",
          adresse: "Rue 14, Quartier Karack",
          contact: "0774455667",
        },
      ],
      terrainDetail: null, // Détails du terrain sélectionné
    };
  },
  methods: {
    voirDetails(terrain) {
      this.terrainDetail = terrain;
    },
    fermerDetails() {
      this.terrainDetail = null;
    },
  },
};
</script>
<style scoped>
.section {
  margin: 40px 0;
}

h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.section-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.section-item {
  margin: 10px;
  flex: 0 1 30%;
  text-align: center;
  position: relative;
}

.image-link {
  cursor: pointer;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.image-overlay {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.image-overlay img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.image-overlay:hover img {
  transform: scale(1.03);
}

.overlay-text {
  text-align: center;
  margin-top: 10px;
}

.overlay-text h3 {
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 0;
}

.overlay-text button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.overlay-text button:hover {
  background-color: #388e3c;
}

.espace-detail-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 15px;
  width: 80%;
  border-radius: 10px 10px 0 0;
}

.detail-header h2 {
  font-size: 24px;
}

.detail-header button {
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.detail-header button:hover {
  background-color: #388e3c;
}

.detail-content {
  background-color: white;
  width: 80%;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  color: #333;
}

.detail-content p {
  margin: 10px 0;
  font-size: 16px;
}
</style>
