<template>
  <v-card>
    <v-layout>
      <main-sidebar />
      <v-main style="height: 100vh; background-color: beige">
        <v-card
          class="mx-auto overflow-auto"
          :style="{ height: isMobile ? '93.5vh' : '100vh' }"
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
                  elevation="5"
                  variant="tonal"
                >
                  <p class="text-h4 text-center" style="font-weight: 700">
                    RM{{ (userDetail?.totalValue ?? 0).toFixed(2) }}
                  </p>
                  <p class="text-center">Total Asset Accumulated</p>
                  <p class="text-center font-italic">
                    ~The biggest risk of all is not taking one.~
                  </p>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-container fluid class="">
            <v-card style="padding: 2.5rem" elevation="5">
              <v-row class="pl-4 pr-3 pr-md-8 pb-3">
                <p class="text-h6 text-md-h5">My Progress</p>
              </v-row>
              <v-row class="d-flex justify-center my-2">
                <v-card-text class="d-flex justify-space-evenly">
                  <v-chip
                    style=""
                    @click="changeDataOneMonth('one_week')"
                    :color="tabPerformance === 'one_week' ? 'green' : 'blue'"
                    :variant="tabPerformance === 'one_week' ? 'flat' : 'tonal'"
                    >1W</v-chip
                  >
                  <v-chip
                    @click="changeDataOneMonth('one_month')"
                    :color="tabPerformance === 'one_month' ? 'green' : 'blue'"
                    :variant="tabPerformance === 'one_month' ? 'flat' : 'tonal'"
                  >
                    1M
                  </v-chip>
                  <v-chip
                    @click="changeDataOneMonth('three_month')"
                    :color="tabPerformance === 'three_month' ? 'green' : 'blue'"
                    :variant="
                      tabPerformance === 'three_month' ? 'flat' : 'tonal'
                    "
                  >
                    3M
                  </v-chip>
                </v-card-text>
              </v-row>
              <v-row>
                <line-chart
                  :data="userPerformance"
                  height="150px"
                ></line-chart>
              </v-row>
            </v-card>
          </v-container>
          <v-container fluid class="">
            <v-card style="padding: 2.5rem" elevation="5">
              <v-row justify="space-between" class="pl-4 pr-3 pr-md-8 pb-3">
                <p class="text-h6 text-md-h5">My Portfolio</p>
                <v-btn
                  variant="elevated"
                  color="primary"
                  prepend-icon="mdi-wallet-plus"
                  @click="goToOtherPage('/market')"
                >
                  <template v-slot:prepend>
                    <v-icon></v-icon>
                  </template>
                  Deposit Fund
                </v-btn>
              </v-row>
              <v-row align="center">
                <v-col
                  v-for="fund in userDetail?.fund"
                  :key="fund"
                  cols="12"
                  sm="4"
                  md="6"
                  style="height: fit-content"
                >
                  <v-card
                    :title="fund.name"
                    :subtitle="fund.category"
                    variant="tonal"
                    color="primary"
                    elevation="5"
                  >
                    <v-sheet
                      :elevation="3"
                      border
                      rounded
                      style="padding: 20px; margin-inline: 15px"
                    >
                      <div class="d-flex justify-space-around">
                        <div style="">
                          <p class="text-center text-md-h6 text-subtitle-1">
                            Current Value
                          </p>
                          <p class="text-center">
                            RM {{ (fund.nav_price * fund.unit).toFixed(2) }}
                          </p>
                        </div>
                        <div style="">
                          <p class="text-center text-md-h6 text-subtitle-1">
                            Current Profit
                          </p>
                          <p class="text-center">
                            RM
                            {{
                              (
                                fund.nav_price * fund.unit -
                                fund.avg_price * fund.unit
                              ).toFixed(2)
                            }}
                          </p>
                        </div>
                        <div>
                          <p class="text-center text-md-h6 text-subtitle-1">
                            Net Asset Value
                          </p>
                          <p class="text-center">
                            {{ fund.nav_price }}
                            <v-icon style="color: green"
                              >mdi-transfer-up</v-icon
                            >
                          </p>
                        </div>
                      </div>
                    </v-sheet>
                    <v-card-actions
                      style="justify-content: center; padding-bottom: 15px"
                    >
                      <v-btn
                        variant="elevated"
                        color="primary"
                        @click="goToOtherPage(`/product/${fund.id}`)"
                      >
                        Info
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        </v-card>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import MainSidebar from "@/components/MainSidebar.vue";
import axios from "axios";
export default {
  mounted() {
    this.isMobile = this.$vuetify.display.mobile;
    this.getUserDetail();
  },
  components: { MainSidebar },
  data() {
    return {
      userDetail: {},
      userPerformance: {},
      isMobile: false,
      tabPerformance: "one_week",
    };
  },
  methods: {
    changeDataOneMonth(data) {
      this.tabPerformance = data;
      this.userPerformance = this.userDetail.history.find(
        (e) => e.type === this.tabPerformance
      ).data;
    },
    goToOtherPage(data) {
      this.$router.push(data);
    },
    async getUserDetail() {
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_ENDPOINT_URL}/users/1`
        );
        this.userPerformance = response.data.history.find(
          (e) => e.type === this.tabPerformance
        ).data;
        this.userDetail = response.data; // Assuming the response contains an array of funds
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
