<script setup>
// imports
import chip from "@/assets/images/icon/chip.png";
import maintenance from "@/assets/images/icon/maintenance.png";
import playing from "@/assets/images/icon/playing-cards.png";
import symbol from "@/assets/images/icon/symbol.png";
import poker from "@/assets/images/icon/poker-chips.png";
import { useNavStore } from "@/stores/useNavStore";
import { onMounted } from "vue";

// variables
const navStore = useNavStore();

// methods
onMounted(async () => {
  await navStore.fetchItems();
});
</script>

<template>
  <div class="row header-menu px-0 px-md-2 d-none d-md-block">
    <div class="col-md-12">
      <ul
        class="list-unstyled d-flex justify-content-between align-items-center py-3 animate__animated animate__zoomIn"
      >
        <li class="d-flex align-items-center gap-2" v-for="(item, id) in navStore.items">
          <img id="icon" :src="chip" alt="chip" />
          <router-link class="text-decoration-none text-white fs-6" to="/">
            {{ item.text }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
