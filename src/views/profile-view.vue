<template>
  <v-card>
    <v-layout>
      <main-sidebar />
      <v-main style="height: 100vh">
        <div class="d-flex justify-center align-center">Profile</div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import MainSidebar from "@/components/MainSidebar.vue";
import axios from "axios";
export default {
  components: { MainSidebar },
  data() {
    return {
      answer: [],
    };
  },
  methods: {
    async getBitcoinIndex() {
      try {
        const { data } = await axios.get(
          `${process.env.VUE_APP_ENDPOINT_URL}/funds`
        );
        this.answer = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  beforeMount() {
    this.getBitcoinIndex();
  },
};
</script>
