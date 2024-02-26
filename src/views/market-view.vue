<template>
  <v-card>
    <v-layout>
      <main-sidebar />
      <v-main style="height: 100vh; background-color: beige">
        <v-card class="mx-auto" width="100%" prepend-icon="mdi-finance">
          <template v-slot:title> Market List</template>
          <template v-slot:text>
            <v-text-field
              v-model="search"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details
            ></v-text-field>
          </template>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="fundList"
              :search="search"
              height="65vh"
              item-value="name"
              @click:row="selectRow"
            ></v-data-table>
          </v-card-text>
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
      search: "",
      headers: [
        { title: "Fund Name", align: "start", key: "name" },
        { title: "Price ($)", align: "end", key: "price" },
        { title: "YTD Return", align: "end", key: "length" },
        { title: "Category", align: "end", key: "year" },
        { title: "Risk Moderate", align: "end", key: "speed" },
        { title: "Shariah Compliant", align: "end", key: "length" },
      ],
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
          name: "SeaBreeze",
          speed: 28,
          length: 31,
          price: 450000,
          year: 2018,
        },
        {
          id: 7,
          name: "HarborGuard",
          speed: 18,
          length: 50,
          price: 800000,
          year: 2017,
        },
        {
          id: 8,
          name: "SlickFin",
          speed: 33,
          length: 24,
          price: 350000,
          year: 2021,
        },
        {
          id: 9,
          name: "StormBreaker",
          speed: 22,
          length: 38,
          price: 600000,
          year: 2020,
        },
        {
          id: 10,
          name: "WindSail",
          speed: 15,
          length: 55,
          price: 900000,
          year: 2019,
        },
        {
          id: 11,
          name: "FastTide",
          speed: 37,
          length: 20,
          price: 280000,
          year: 2022,
        },
      ],
    };
  },
  methods: {
    selectRow(item, indx) {
      console.log("aaa-selected item", indx.item.id);
    },
  },
};
</script>

<style>
body {
  font-family: "Open Sans", sans-serif;
}
</style>
