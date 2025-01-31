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
          description: "Une institut privée avec une excellente réputation.",
          adresse: " Rue K.A-12, Mermoz-Sacré-Cœur, Sicap Karack, Dakar.",
          contact: "(+221) 33 824 14 86.",
          historique:
            "Fondée en 1984, Yalla Suuren est une école située à Karack, réputée pour offrir une éducation de qualité aux élèves de la région. Elle est connue pour ses valeurs éducatives axées sur le développement intellectuel et moral. L’établissement propose une formation inclusive et accompagne les jeunes dans leur apprentissage.",
        },
        {
          id: 2,
          nom: "MAMADOU ET BINETA",
          image: "https://via.placeholder.com/300x200",
          description: "École privée élémentaire et préscolaire.",
          adresse: "Située dans le quartier Karack",
          contact: "0777654321",
          historique:
            "Mamadou et Bineta est une école élémentaire et préscolaire réputée dans la commune. Son nom fait référence au célèbre manuel scolaire sénégalais, symbole de l'éducation au Sénégal. L’école est reconnue pour son approche pédagogique rigoureuse et ses programmes éducatifs adaptés à la jeunesse.",
        },
        // Ajoute les autres écoles ici...
        {
          id: 3,
          nom: "CEM ADAMA DIALLO",
          image: "https://via.placeholder.com/300x200",
          description: "École publique.",
          adresse: "Située dans le quartier Karack, prés du VDN",
          contact: "0777654321",
          historique:
            "Le Collège d’Enseignement Moyen (CEM) Adama Diallo est un établissement public de référence à Karack. Créé pour répondre aux besoins éducatifs de la jeunesse, il propose des programmes conformes au système éducatif sénégalais, avec un accent sur les matières scientifiques et littéraires.",
        },
        {
          id: 4,
          nom: "Bint Imrata Imran",
          image: "https://via.placeholder.com/300x200",
          description: "École privée avec une excellente réputation.",
          adresse: "Quartier Karack, Dakar",
          contact: "0777654321",
          historique:
            "Bint Imrata Imran est un établissement religieux ou éducatif, probablement lié à une école coranique ou une institution d’enseignement religieux dans la région de Karack. Son objectif est de promouvoir l’éducation islamique et d’inculquer des valeurs morales et spirituelles aux enfants.",
        },
        {
          id: 5,
          nom: "Masse Massaer Niane",
          image: "https://via.placeholder.com/300x200",
          description: "École publique avec une excellente réputation.",
          adresse: "Karack, commune de Mermoz-Sacré-Cœur",
          contact: "0777654321",
          historique:
            "Masse Massaer Niane est un établissement scolaire ou éducatif à vocation sociale et culturelle. Le nom évoque des valeurs éducatives profondes et un hommage aux figures culturelles locales.",
        },
        {
          id: 6,
          nom: "Nafissatou Niang",
          image: "https://via.placeholder.com/300x200",
          description: "École publique avec une excellente réputation.",
          adresse: "Karack, commune de Mermoz-Sacré-Cœur",
          contact: "0777654321",
          historique:
            "Nommée en hommage à une figure féminine emblématique du Sénégal (peut-être Nafissatou Niang Diallo, une écrivaine sénégalaise), cet établissement met l’accent sur l’éducation des filles et sur des valeurs d’excellence académique.",
        },
        {
          id: 7,
          nom: "Groupe Scolaire Islamique Rahmah",
          image: "https://via.placeholder.com/300x200",
          description: "École islamique privée avec une excellente réputation.",
          adresse: "Quartier Karack",
          contact: "33 864 34 16 / 76-379-04-32",
          historique:
            "Créé depuis 2001, l'Institution Islamique RAHMAH est une école privée musulmane, pionnière dans la formation franco-islamique, qui propose de former les enfants dans le respect des valeurs islamiques, alliant travail et bien-être",
        },
        {
          id: 8,
          nom: "BSA",
          image: "https://via.placeholder.com/300x200",
          description: "École de formation professionnelle.",
          adresse: "Quartier Karack",
          contact: "+221 33 824 89 89 / +221 77 716 50 16.",
          historique:
            "L'établissement BSA École des Métiers est situé à Sicap Karack Extension, à proximité des écoles Mamadou et Bineta et Yalla Suuren. Il propose diverses formations professionnelles, notamment en hôtellerie, restauration, coiffure et esthétique, transport et logistique, gestion des PME/PMI, entrepreneuriat, marketing et informatique.",
        },
        {
          id: 9,
          nom: "Jardin d'enfant MARCELINA",
          image: "https://via.placeholder.com/300x200",
          description: " institution préscolaire",
          adresse: "Quartier Karack",
          contact: "(+221) 77 650 19 21.",
          historique:
            "L'École Marcellina est une institution préscolaire et une crèche située au cœur du quartier résidentiel de Sicap Karack à Dakar, à proximité de l'École nationale de Police. Ce quartier calme et sécurisé offre un environnement propice à l'éducation des jeunes enfants.",
        },
        {
          id: 10,
          nom: "IMTG",
          image: "https://via.placeholder.com/300x200",
          description: "École formation professionnelle.",
          adresse: "Quartier Karack",
          contact: "(+221) 77 436 93 93",
          historique:
            "L'Institut Moderne de Technologie et de Gestion (IMTG) est un établissement privé d'enseignement supérieur situé à Sicap Amitié 3, Dakar, Sénégal. Il propose des formations axées sur les domaines de la gestion, de la technologie et de l'informatique, avec des programmes allant de la Licence au BTS.",
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
