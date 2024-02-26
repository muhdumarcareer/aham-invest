<template>
  <v-card>
    <v-layout>
      <main-sidebar />
      <v-main style="height: 100vh; background-color: beige">
        <v-card
          class="mx-auto"
          style="height: 95vh"
          width="100%"
          prepend-icon="mdi-wallet"
        >
          <template v-slot:title>Wallet</template>
          <v-container fluid="true" class="">
            <v-row no-gutters class="justify-center align-center">
              <v-col cols="12">
                <v-card
                  class=""
                  style="
                    padding: 2.5rem;
                    background-color: #2196f3;
                    color: white;
                  "
                  variant="tonal"
                >
                  <p class="text-h4 text-center" style="font-weight: 700">
                    RM3000
                  </p>
                  <p class="text-center">Total Asset Accumulated</p>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-container fluid class="">
            <v-row>
              <p class="text-h5 pl-4">Portfolio</p>
            </v-row>
          </v-container>
          <v-container fluid class="">
            <v-row>
              <p class="text-h5 pl-4">Portfolio</p>
            </v-row>
            <v-row style="max-height: 500px; overflow: auto" align="center">
              <v-col
                v-for="fund in fundList"
                :key="fund"
                cols="12"
                sm="3"
                style="height: fit-content"
              >
                <v-card
                  :title="fund.name"
                  subtitle="Equity"
                  variant="tonal"
                  color="primary"
                >
                  <v-container>
                    <v-row no-gutters="true">
                      <v-col cols="6">
                        <p>Price</p>
                        <p>{{ fund.price }}</p>
                      </v-col>
                      <v-col cols="6">
                        <p>wdaw</p>
                        <p>wdaw</p>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import MainSidebar from "@/components/MainSidebar.vue";
export default {
  components: { MainSidebar },
  data() {
    return {
      fundList: [
        {
          id: 1,
          name: "Speedster",
          speed: 35,
          length: 22,
          price: 300000,
          year: 2021,
        },
        {
          id: 2,
          name: "Speedster2",
          speed: 35,
          length: 22,
          price: 300000,
          year: 2021,
        },
        {
          id: 3,
          name: "OceanMaster",
          speed: 25,
          length: 35,
          price: 500000,
          year: 2020,
        },
        {
          id: 4,
          name: "Voyager",
          speed: 20,
          length: 45,
          price: 700000,
          year: 2019,
        },
        {
          id: 5,
          name: "WaveRunner",
          speed: 40,
          length: 19,
          price: 250000,
          year: 2022,
        },
        {
          id: 6,
          name: "Voyager",
          speed: 20,
          length: 45,
          price: 700000,
          year: 2019,
        },
        {
          id: 7,
          name: "WaveRunner",
          speed: 40,
          length: 19,
          price: 250000,
          year: 2022,
        },
        {
          id: 4,
          name: "Voyager",
          speed: 20,
          length: 45,
          price: 700000,
          year: 2019,
        },
        {
          id: 5,
          name: "WaveRunner",
          speed: 40,
          length: 19,
          price: 250000,
          year: 2022,
        },
        {
          id: 6,
          name: "Voyager",
          speed: 20,
          length: 45,
          price: 700000,
          year: 2019,
        },
        {
          id: 7,
          name: "WaveRunner",
          speed: 40,
          length: 19,
          price: 250000,
          year: 2022,
        },
      ],
    };
  },
};
</script>
