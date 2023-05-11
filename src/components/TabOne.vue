<template>
  <div class="d-flex justify-center w-100">
    <v-card class="ma-5" width="40%" height="250">
      <v-card-text>
        <p class="text-h4 text--primary">Temperature</p>
      </v-card-text>

      <p class="text--primary sensor-data">
        {{ temp / 100 || "Loading..." }}
        <v-icon icon="mdi-temperature-celsius"></v-icon>
      </p>
    </v-card>

    <v-card class="ma-5" width="40%" height="250">
      <v-card-text>
        <p class="text-h4 text--primary">Humidity</p>
      </v-card-text>

      <p class="text--primary sensor-data fill-height">
        {{ humidity / 100 || "Loading..." }}
        <v-icon icon="mdi-water-percent"></v-icon>
      </p>
    </v-card>
  </div>

  <div class="d-flex justify-center w-100">
    <v-card class="ma-5 overflow-y-auto" width="85%" max-height="300">
      <v-list lines="one">
        <h5 class="text-h5 ml-3">All online devices</h5>
        <v-divider></v-divider>
        <v-list-item
          v-for="sensor in sensors"
          :key="sensor.deviceid"
          :title="sensor.brandName + ` ` + sensor.name"
          :subtitle="`Online time: ` + (sensor.onlineTime || `Unknown`)"
        >
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script setup>
import {
  getTempSensorData,
  getAllConnectedSensors,
} from "@/services/SensorService.js";
import { onBeforeMount, ref } from "vue";

var temp = ref(null);
var humidity = ref(null);
var sensors = ref([]);

function fetchData() {
  getTempSensorData().then((data) => {
    temp.value = data.temperature;
    humidity.value = data.humidity;
  });
}

onBeforeMount(() => {
  getAllConnectedSensors().then((result) => {
    console.log(result);
    sensors.value = result;
  });
  setInterval(fetchData, 5000);
});
</script>

<style scoped>
.v-card-text {
  width: 100%;
}

.sensor-data {
  margin-top: 5%;
  width: 100%;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
}

.v-icon {
  margin-bottom: 1%;
}
</style>