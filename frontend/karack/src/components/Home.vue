<template>
  <div>
    <!-- Section Historique du quartier -->
    <div class="historique-section">
      <router-link to="/portraits" class="image-link">
        <div class="image-overlay">
          <img
            src="@/images/ama.jpg"
            alt="Historique du quartier"
            class="image"
          />
          <div class="overlay-text">
            <h2>Historique de Karack</h2>
            <p>
              Découvrez l'histoire fascinante de notre quartier, ses origines,
              et son évolution à travers les années.
            </p>
          </div>
        </div>
      </router-link>
    </div>

    <!-- Section Actualités -->
    <div class="section">
      <h2>Actualités</h2>
      <div class="section-content">
        <div class="section-item">
          <router-link to="/actualites" class="image-link">
            <img src="@/images/ama.jpg" alt="Actualité 1" class="image" />
            <p>Actualité 1</p>
          </router-link>
        </div>
        <div class="section-item">
          <router-link to="/actualites" class="image-link">
            <img src="@/images/ama.jpg" alt="Actualité 2" class="image" />
            <p>Actualité 2</p>
          </router-link>
        </div>
        <div class="section-item">
          <router-link to="/actualites" class="image-link">
            <img src="@/images/ama.jpg" alt="Actualité 3" class="image" />
            <p>Actualité 3</p>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Section Structures -->
    <div class="section">
      <h2>Structures</h2>
      <div class="section-content">
        <div class="section-item">
          <router-link to="/structures" class="image-link">
            <img src="@/images/ama.jpg" alt="Structure 1" class="image" />
            <p>Structure 1</p>
          </router-link>
        </div>
        <div class="section-item">
          <router-link to="/structures" class="image-link">
            <img src="@/images/ama.jpg" alt="Structure 2" class="image" />
            <p>Structure 2</p>
          </router-link>
        </div>
        <div class="section-item">
          <router-link to="/structures" class="image-link">
            <img src="@/images/ama.jpg" alt="Structure 3" class="image" />
            <p>Structure 3</p>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Section Portraits -->
    <div class="section">
      <h2>Portraits</h2>
      <div class="section-content">
        <div class="section-item">
          <router-link to="/portraits" class="image-link">
            <img src="@/images/ama.jpg" alt="Portrait 1" class="image" />
            <p>Portrait 1</p>
          </router-link>
        </div>
        <div class="section-item">
          <router-link to="/portraits" class="image-link">
            <img src="@/images/ama.jpg" alt="Portrait 2" class="image" />
            <p>Portrait 2</p>
          </router-link>
        </div>
        <div class="section-item">
          <router-link to="/portraits" class="image-link">
            <img src="@/images/ama.jpg" alt="Portrait 3" class="image" />
            <p>Portrait 3</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
};
</script>

<style scoped>
/* Styles de base pour les sections */
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
}

/* Styles pour les liens et images */
.image-link {
  display: block;
  text-decoration: none;
  color: inherit;
  position: relative;
}

/* Image avec effet */
.image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  background-color: transparent; /* Transparence assurée */
  border: none; /* Retirer toute bordure */
}

/* Effet au survol */
.image:hover {
  transform: scale(1.05); /* Agrandissement léger */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); /* Ombre plus marquée */
}

/* Enlever toute couleur de fond ou bordure au survol */
.image-link:hover .image {
  background-color: transparent;
  border: none;
}

/* Texte superposé sur l'image */
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  text-align: center;
}

.overlay-text h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}

.overlay-text p {
  font-size: 16px;
  line-height: 1.5;
}

/* Section historique (image + texte) */
.historique-section {
  margin: 40px 0;
  position: relative;
  text-align: center;
}

/* Image pour historique */
.image-overlay {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 100%;
  height: 250px; /* Taille réduite pour l'image historique */
  overflow: hidden;
}

.image-overlay img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  cursor: pointer; /* Pour que l'image soit cliquable */
}

/* Effet sur l'image historique */
.image-overlay:hover img {
  transform: scale(1.03);
}
</style>
