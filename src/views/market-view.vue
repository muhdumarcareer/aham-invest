<template>
  <v-card>
    <v-layout>
      <main-sidebar />
      <v-main style="height: 100vh">
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
            <v-data-table-virtual
              :headers="headers"
              :items="fundList"
              :search="search"
              height="76vh"
              item-value="name"
              fixed-header
              @click:row="selectRow"
            ></v-data-table-virtual>
          </v-card-text>
        </v-card>
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
      fundList: [],
      search: "",
      headers: [
        { title: "Fund Name", align: "start", key: "name" },
        { title: "Price ($)", align: "end", key: "nav_price" },
        { title: "YTD Return", align: "end", key: "ytd_return" },
        { title: "Category", align: "end", key: "category" },
        { title: "Risk Moderate", align: "end", key: "risk" },
        { title: "Shariah Compliant", align: "end", key: "shariah" },
      ],
    };
  },
  methods: {
    selectRow(item, indx) {
      this.$router.push(`/product/${indx.item.id}`);
    },
    async getFundList() {
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_ENDPOINT_URL}/funds`
        );
        this.fundList = response.data; // Assuming the response contains an array of funds
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getFundList();
  },
};
</script>

<style>
body {
  font-family: "Open Sans", sans-serif;
}
</style>
