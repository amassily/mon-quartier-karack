<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="portraits">
    <h1>Portraits de Karack</h1>

    <div class="section">
      <h2>Historique de Karack</h2>
      <div class="section-content">
        <p>
          Karack est un quartier historique avec des racines profondes dans la
          culture locale. Voici les grands hommes qui ont marqué son histoire.
        </p>
      </div>
    </div>

    <div class="section">
      <h2>Les Grands Hommes de Karack</h2>
      <div class="section-content">
        <div v-for="portrait in portraits" :key="portrait.id" class="section-item">
          <button @click="voirDetails(portrait)" class="image-link">
            <div class="image-overlay">
              <img :src="portrait.image" alt="Image du grand homme" class="image" />
            </div>
            <div class="overlay-text">
              <h3>{{ portrait.nom }}</h3>
              <button>Voir détails</button>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Panneau de détails latéral -->
    <div v-if="portraitDetail" class="drawer-panel">
      <div class="drawer-content">
        <div class="detail-header">
          <h2>{{ portraitDetail.nom }}</h2>
          <button @click="closeModal">Fermer</button>
        </div>
        <div class="detail-body">
          <p><strong>Description:</strong> {{ portraitDetail.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portraits: [
        {
          id: 1,
          nom: "Amadou Bamba",
          image: "@/images/ama.jpg",
          description:
            "Un guide spirituel qui a marqué le quartier par ses enseignements.",
        },
        {
          id: 2,
          nom: "Cheikh Anta Diop",
          image: "https://via.placeholder.com/300x200",
          description:
            "Historien et scientifique ayant contribué à l’éducation du quartier.",
        },
        {
          id: 3,
          nom: "Lamine Guèye",
          image: "https://via.placeholder.com/300x200",
          description: "Politicien emblématique qui a marqué Karack.",
        },
      ],
      portraitDetail: null, // Détail du portrait sélectionné
    };
  },
  methods: {
    // Fonction pour afficher les détails du portrait
    voirDetails(portrait) {
      this.portraitDetail = portrait;
    },
    // Fonction pour fermer le panneau de détails
    closeModal() {
      this.portraitDetail = null;
    },
  },
};
</script>

<style scoped>
/* Section principale */
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

/* Styles pour les images */
.image-link {
  display: block;
  text-decoration: none;
  color: inherit;
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
  cursor: pointer;
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

/* Panneau latéral */
.drawer-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background-color: white;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.2);
  z-index: 100;
  overflow-y: auto;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
}

.drawer-content {
  padding: 20px;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
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

.detail-body {
  padding-top: 20px;
}

.detail-body p {
  margin: 10px 0;
  font-size: 16px;
}
</style>
