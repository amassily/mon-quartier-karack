<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="actualites">
    <h1>Actualités du Sénégal</h1>

    <div class="section">
      <h2>Actualités récentes</h2>
      <div class="section-content">
        <div
          v-for="article in articles"
          :key="article.title"
          class="section-item"
        >
          <a :href="article.url" target="_blank" class="image-link">
            <div class="image-overlay">
              <img
                :src="article.urlToImage"
                alt="Article Image"
                class="image"
              />
            </div>
            <div class="overlay-text">
              <h3>{{ article.title }}</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    this.fetchActualites();
  },
  methods: {
    async fetchActualites() {
      const apiKey = "8dd65dd247db4c48bb197bc71ebd5e09"; // Ta clé API
      const url = `https://newsapi.org/v2/everything?q=Sénégal&apiKey=${apiKey}`; // Recherche par mots-clés

      try {
        const response = await fetch(url);
        const data = await response.json();
        this.articles = data.articles;
      } catch (error) {
        console.error("Erreur lors de la récupération des actualités:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Styles de base pour la section */
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
  height: 200px; /* Ajuster la taille des images */
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

/* Texte en bas de l'image */
.overlay-text {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px;
  width: 100%;
}

/* Styles du titre principal */
h1 {
  text-align: center;
  font-size: 32px;
  margin: 20px 0;
  color: #333;
}
</style>
