<template>
  <div class="about-container">
    <div class="about-content">
      <h1>À propos</h1>
      <p>
        Site web développé par Amassily, un jeune apprenant développeur de
        Karack. Ce site a été conçu dans le but de faciliter la communication et
        les informations au sein de la communauté de Karack.
      </p>
      <p>
        Pour toute demande ou collaboration, n'hésitez pas à me contacter via
        WhatsApp :
        <a href="https://wa.me/+221709531237" target="_blank"
          >Contacter Amassily sur WhatsApp</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Apropos",
};
</script>

<style scoped>
/* Style global pour la page À propos */
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4; /* Fond clair pour toute la page */
  padding: 20px;
}

.about-content {
  background: rgba(0, 0, 0, 0.7); /* Gris transparent avec opacité */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre douce autour du conteneur */
  max-width: 700px;
  text-align: center;
}

h1 {
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  color: #fff; /* Texte blanc pour contraster avec le fond gris */
  margin-bottom: 20px;
}

p {
  font-family: "Lora", serif; /* Police élégante */
  font-size: 18px;
  color: #fff; /* Texte blanc */
  line-height: 1.6;
  margin-bottom: 20px;
}

a {
  font-family: "Lora", serif;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

/* Ajouter une police plus élégante avec Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Lora:wght@400;500&display=swap");
</style>
