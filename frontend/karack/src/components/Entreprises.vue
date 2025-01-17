<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="entreprises">
    <h1>Les Entreprises du Quartier</h1>

    <div class="section">
      <h2>Entreprises disponibles</h2>
      <div class="section-content">
        <div
          v-for="entreprise in entreprises"
          :key="entreprise.id"
          class="section-item"
        >
          <div class="image-link" @click="voirDetails(entreprise)">
            <div class="image-overlay">
              <img
                :src="entreprise.image"
                alt="Image de l'entreprise"
                class="image"
              />
            </div>
            <div class="overlay-text">
              <h3>{{ entreprise.nom }}</h3>
              <button>Voir détails</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Panneau de détails de l'entreprise -->
    <div v-if="entrepriseDetail" class="entreprise-detail-panel">
      <div class="detail-header">
        <h2>{{ entrepriseDetail.nom }}</h2>
        <button @click="fermerDetails">Fermer</button>
      </div>
      <div class="detail-content">
        <p><strong>Description:</strong> {{ entrepriseDetail.description }}</p>
        <p><strong>Adresse:</strong> {{ entrepriseDetail.adresse }}</p>
        <p><strong>Contact:</strong> {{ entrepriseDetail.contact }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entreprises: [
        {
          id: 1,
          nom: "Boulangerie du Quartier",
          image: "https://via.placeholder.com/300x200",
          description:
            "Une boulangerie locale avec des produits frais chaque matin.",
          adresse: "Rue 1, Quartier Karack",
          contact: "0771234567",
        },
        {
          id: 2,
          nom: "Salon de Coiffure Bella",
          image: "https://via.placeholder.com/300x200",
          description: "Un salon de coiffure moderne et convivial.",
          adresse: "Rue 2, Quartier Karack",
          contact: "0777654321",
        },
        {
          id: 3,
          nom: "Garage Auto Karack",
          image: "https://via.placeholder.com/300x200",
          description: "Garage spécialisé dans les réparations mécaniques.",
          adresse: "Rue 3, Quartier Karack",
          contact: "0779876543",
        },
        {
          id: 4,
          nom: "Pharmacie Karack Santé",
          image: "https://via.placeholder.com/300x200",
          description: "Pharmacie de proximité avec un service rapide.",
          adresse: "Rue 4, Quartier Karack",
          contact: "0781234567",
        },
        {
          id: 5,
          nom: "Restaurant Saveurs Africaines",
          image: "https://via.placeholder.com/300x200",
          description:
            "Restaurant proposant des plats traditionnels africains.",
          adresse: "Rue 5, Quartier Karack",
          contact: "0787654321",
        },
      ],
      entrepriseDetail: null, // Détails de l'entreprise sélectionnée
    };
  },
  methods: {
    voirDetails(entreprise) {
      this.entrepriseDetail = entreprise;
    },
    fermerDetails() {
      this.entrepriseDetail = null;
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
  background-color: #ff7f50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.overlay-text button:hover {
  background-color: #ff5722;
}

.entreprise-detail-panel {
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
  background-color: #ff7f50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.detail-header button:hover {
  background-color: #ff5722;
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
