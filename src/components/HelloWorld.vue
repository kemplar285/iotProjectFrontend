<template>
  <v-tabs v-model="tab" bg-color="primary">
    <v-tab height="100%" value="one">Sensors Data</v-tab>
    <v-tab height="100%" value="two">Switch</v-tab>
    <v-tab height="100%" value="three">Graphs</v-tab>
  </v-tabs>

  <v-card-text>
    <v-window v-model="tab">
      <v-window-item value="one"> <TabOne></TabOne> </v-window-item>

      <v-window-item value="two"> Two</v-window-item>

      <v-window-item value="three"> Three </v-window-item>
    </v-window>
  </v-card-text>
</template>

<script setup>
import TabOne from "@/components/TabOne.vue";
import { ref } from "vue";

const tab = ref(null);
</script>

<style scoped>
.v-tabs {
  height: 10%;
}

.v-tab {
  font-size: 1.5rem;
}
</style>
