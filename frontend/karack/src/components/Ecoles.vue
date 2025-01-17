<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="ecoles">
    <h1>Les Écoles du Quartier</h1>

    <div class="section">
      <h2>Écoles disponibles</h2>
      <div class="section-content">
        <div v-for="ecole in ecoles" :key="ecole.id" class="section-item">
          <div class="image-link" @click="voirDetails(ecole)">
            <div class="image-overlay">
              <img :src="ecole.image" alt="Image de l'école" class="image" />
            </div>
            <div class="overlay-text">
              <h3>{{ ecole.nom }}</h3>
              <button>Lire plus</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Panneau de détails de l'école -->
    <div v-if="ecoleDetail" class="ecole-detail-panel">
      <div class="detail-header">
        <h2>{{ ecoleDetail.nom }}</h2>
        <button @click="closeModal">Fermer</button>
      </div>
      <div class="detail-content">
        <p><strong>Description:</strong> {{ ecoleDetail.description }}</p>
        <p><strong>Adresse:</strong> {{ ecoleDetail.adresse }}</p>
        <p><strong>Contact:</strong> {{ ecoleDetail.contact }}</p>
        <p><strong>Historique:</strong> {{ ecoleDetail.historique }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ecoles: [
        {
          id: 1,
          nom: "Yalla Suuren",
          image: "https://via.placeholder.com/300x200",
          description: "Une école primaire située au centre du quartier.",
          adresse: "Rue 1, Quartier Karack",
          contact: "0771234567",
          historique:
            "Fondée en 1980, cette école a formé de nombreux élèves...",
        },
        {
          id: 2,
          nom: "École Secondaire B",
          image: "https://via.placeholder.com/300x200",
          description: "École secondaire avec une excellente réputation.",
          adresse: "Rue 2, Quartier Karack",
          contact: "0777654321",
          historique:
            "Fondée en 1980, cette école a formé de nombreux élèves...",
        },
        // Ajoute les autres écoles ici...
        {
          id: 3,
          nom: "École Secondaire B",
          image: "https://via.placeholder.com/300x200",
          description: "École secondaire avec une excellente réputation.",
          adresse: "Rue 2, Quartier Karack",
          contact: "0777654321",
          historique:
            "Fondée en 1980, cette école a formé de nombreux élèves...",
        },
        {
          id: 4,
          nom: "École Secondaire B",
          image: "https://via.placeholder.com/300x200",
          description: "École secondaire avec une excellente réputation.",
          adresse: "Rue 2, Quartier Karack",
          contact: "0777654321",
          historique:
            "Fondée en 1980, cette école a formé de nombreux élèves...",
        },
        {
          id: 5,
          nom: "École Secondaire B",
          image: "https://via.placeholder.com/300x200",
          description: "École secondaire avec une excellente réputation.",
          adresse: "Rue 2, Quartier Karack",
          contact: "0777654321",
          historique:
            "Fondée en 1980, cette école a formé de nombreux élèves...",
        },
        {
          id: 6,
          nom: "École Secondaire B",
          image: "https://via.placeholder.com/300x200",
          description: "École secondaire avec une excellente réputation.",
          adresse: "Rue 2, Quartier Karack",
          contact: "0777654321",
          historique:
            "Fondée en 1980, cette école a formé de nombreux élèves...",
        },
        {
          id: 7,
          nom: "École Secondaire B",
          image: "https://via.placeholder.com/300x200",
          description: "École secondaire avec une excellente réputation.",
          adresse: "Rue 2, Quartier Karack",
          contact: "0777654321",
          historique:
            "Fondée en 1980, cette école a formé de nombreux élèves...",
        },
        {
          id: 8,
          nom: "École Secondaire B",
          image: "https://via.placeholder.com/300x200",
          description: "École secondaire avec une excellente réputation.",
          adresse: "Rue 2, Quartier Karack",
          contact: "0777654321",
          historique:
            "Fondée en 1980, cette école a formé de nombreux élèves...",
        },
        {
          id: 9,
          nom: "École Secondaire B",
          image: "https://via.placeholder.com/300x200",
          description: "École secondaire avec une excellente réputation.",
          adresse: "Rue 2, Quartier Karack",
          contact: "0777654321",
          historique:
            "Fondée en 1980, cette école a formé de nombreux élèves...",
        },
        {
          id: 10,
          nom: "École Secondaire B",
          image: "https://via.placeholder.com/300x200",
          description: "École secondaire avec une excellente réputation.",
          adresse: "Rue 2, Quartier Karack",
          contact: "0777654321",
          historique:
            "Fondée en 1980, cette école a formé de nombreux élèves...",
        },
      ],
      ecoleDetail: null, // Détail de l'école sélectionnée
    };
  },
  methods: {
    voirDetails(ecole) {
      this.ecoleDetail = ecole;
    },
    closeModal() {
      this.ecoleDetail = null;
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
  display: block;
  cursor: pointer;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
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
  margin: 0;
}

.overlay-text button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #00206a;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.overlay-text button:hover {
  background-color: #00206a;
}

.ecole-detail-panel {
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

.detail-header button {
  padding: 8px 16px;
  background-color: #00206a;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.detail-header button:hover {
  background-color: #00206a;
}

.detail-content {
  background-color: white;
  width: 80%;
  padding: 20px;
  border-radius: 0 0 10px 10px;
}

.detail-content p {
  margin: 10px 0;
  font-size: 16px;
}
</style>
