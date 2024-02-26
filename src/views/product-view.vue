<template>
  <v-card>
    <v-layout>
      <main-sidebar />
      <v-main style="height: 100vh">
        <div class="d-flex justify-center align-center">Product</div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import MainSidebar from '@/components/MainSidebar.vue';
export default {
  components: { MainSidebar },
};
</script>
