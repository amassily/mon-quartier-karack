<template>
  <div class="ecole-detail">
    <h1>{{ ecole.nom }}</h1>
    <div class="ecole-info">
      <img :src="ecole.image" alt="Image de l'école" class="ecole-image" />
      <p>{{ ecole.description }}</p>
      <p><strong>Adresse:</strong> {{ ecole.adresse }}</p>
      <p><strong>Contact:</strong> {{ ecole.contact }}</p>
      <p><strong>Historique:</strong> {{ ecole.historique }}</p>
    </div>

    <div id="map" style="height: 400px"></div>
    <router-link to="/structures/ecoles">
      <button>Retour aux écoles</button>
    </router-link>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import L from "leaflet"; // Importer Leaflet

export default {
  name: "EcoleDetail",
  setup(props, { root }) {
    const ecole = ref(null);

    // Lorsque le composant est monté, on cherche l'école avec l'ID passé en paramètre
    onMounted(() => {
      const ecoleId = root.$route.params.id;
      ecole.value = root.ecoles.find((ecole) => ecole.id === Number(ecoleId));
      if (ecole.value) {
        initMap();
      }
    });

    // Fonction pour initialiser la carte
    const initMap = () => {
      const map = L.map("map").setView(
        [ecole.value.positionMap.lat, ecole.value.positionMap.lng],
        13
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([
        ecole.value.positionMap.lat,
        ecole.value.positionMap.lng,
      ]).addTo(map);
    };

    return { ecole };
  },
};
</script>

<style scoped>
.ecole-detail {
  text-align: center;
  margin: 20px;
}

.ecole-info {
  margin-bottom: 20px;
}

.ecole-info img {
  max-width: 100%;
  border-radius: 10px;
}

button {
  padding: 8px 16px;
  background-color: #ff7f50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
}

button:hover {
  background-color: #ff5722;
}
</style>
