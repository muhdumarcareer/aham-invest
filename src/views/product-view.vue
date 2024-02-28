<template>
  <v-card>
    <v-layout>
      <main-sidebar />
      <v-main style="height: 100vh; background-color: beige">
        <v-card
          class="mx-auto overflow-auto"
          :style="{ height: isMobile ? '92vh' : '100vh' }"
          width="100%"
          prepend-icon="mdi-package"
        >
          <template v-slot:title>Fund Info</template>
          <v-container fluid="true" class="">
            <v-row no-gutters class="justify-center align-center">
              <v-col cols="12">
                <v-card
                  class="d-flex justify-content-center"
                  style="
                    padding: 2.5rem;
                    background-color: #2196f3;
                    color: white;
                  "
                  elevation="5"
                  variant="tonal"
                >
                  <v-container fluid="true" class="">
                    <v-row>
                      <v-col cols="12">
                        <p class="text-h4 text-center">
                          {{ fundDetail?.name }}
                        </p>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <div class="d-flex justify-center">
                          <div class="pr-10" v-if="!!purchasedUnit">
                            <p class="text-center">Total Owned Value</p>
                            <p
                              class="text-h4 text-center"
                              style="font-weight: 700"
                            >
                              RM
                              {{
                                (
                                  userDetail.fund?.find(
                                    (e) =>
                                      e.fundId === Number(this.$route.params.id)
                                  ).nav_price *
                                  userDetail.fund?.find(
                                    (e) =>
                                      e.fundId === Number(this.$route.params.id)
                                  ).unit
                                ).toFixed(2)
                              }}
                            </p>
                            <p
                              class="text-h6 text-center"
                              style="font-weight: 700"
                            >
                              {{
                                userDetail.fund?.find(
                                  (e) =>
                                    e.fundId === Number(this.$route.params.id)
                                ).unit
                              }}
                              units
                            </p>
                          </div>
                          <div>
                            <p class="text-center">Net Asset Value</p>
                            <p
                              class="text-h4 text-center"
                              style="font-weight: 700"
                            >
                              RM{{ fundDetail?.nav_price }}
                            </p>
                          </div>
                          <div class="pl-10">
                            <p class="text-center">YTD Return</p>
                            <p
                              class="text-h4 text-center"
                              style="font-weight: 700"
                            >
                              {{ fundDetail?.ytd_return }}%
                            </p>
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-container fluid class="">
            <v-row align="stretch">
              <v-col cols="12" md="6">
                <v-card style="padding: 2.5rem" elevation="5" height="100%">
                  <v-row class="pl-4 pr-3 pr-md-8 pb-3">
                    <p class="text-h6 text-md-h5">Performance History</p>
                  </v-row>
                  <v-row class="d-flex justify-center my-2">
                    <v-card-text class="d-flex justify-space-evenly">
                      <v-chip
                        style=""
                        @click="changeDataOneMonth('one_week')"
                        :color="
                          tabPerformance === 'one_week' ? 'green' : 'blue'
                        "
                        :variant="
                          tabPerformance === 'one_week' ? 'flat' : 'tonal'
                        "
                        >1W</v-chip
                      >
                      <v-chip
                        @click="changeDataOneMonth('one_month')"
                        :color="
                          tabPerformance === 'one_month' ? 'green' : 'blue'
                        "
                        :variant="
                          tabPerformance === 'one_month' ? 'flat' : 'tonal'
                        "
                      >
                        1M
                      </v-chip>
                      <v-chip
                        @click="changeDataOneMonth('three_month')"
                        :color="
                          tabPerformance === 'three_month' ? 'green' : 'blue'
                        "
                        :variant="
                          tabPerformance === 'three_month' ? 'flat' : 'tonal'
                        "
                      >
                        3M
                      </v-chip>
                    </v-card-text>
                  </v-row>
                  <v-row>
                    <line-chart :data="historyDate" height="150px"></line-chart>
                  </v-row>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card style="padding: 2.5rem" elevation="5" height="100%">
                  <v-tabs
                    v-model="tabInvest"
                    color="deep-purple-accent-4"
                    align-tabs="center"
                  >
                    <v-tab value="1">Invest In</v-tab>
                    <v-tab value="2">Withdraw Out</v-tab>
                  </v-tabs>
                  <v-window v-model="tabInvest" class="pt-3">
                    <v-window-item key="1" value="1">
                      <v-container fluid>
                        <v-row>
                          <v-text-field
                            clearable
                            label="Num of Unit (x100)"
                            variant="outlined"
                            v-model="buyUnit"
                            type="number"
                            min="0"
                          ></v-text-field>
                        </v-row>
                        <v-row>
                          <v-text-field
                            readonly
                            label="Amount (RM)"
                            variant="outlined"
                            v-model="buyAmount"
                            type="number"
                          ></v-text-field>
                        </v-row>
                        <v-row justify="center">
                          <v-btn
                            variant="tonal"
                            :disabled="disabledButton"
                            color="primary"
                            @click="investFund"
                          >
                            Invest Now
                          </v-btn>
                        </v-row>
                      </v-container>
                    </v-window-item>
                    <v-window-item key="2" value="2">
                      <v-container fluid>
                        <v-row class="pb-3 pl-3">
                          <p>Available To Withdraw: {{ purchasedUnit }}</p>
                        </v-row>
                        <v-row>
                          <v-text-field
                            clearable
                            label="Num of Unit (x100)"
                            variant="outlined"
                            v-model="sellUnit"
                            type="number"
                            :max="purchasedUnit / 100"
                            min="0"
                          ></v-text-field>
                        </v-row>
                        <v-row>
                          <v-text-field
                            readonly
                            label="Amount (RM)"
                            variant="outlined"
                            v-model="sellAmount"
                            type="number"
                          ></v-text-field>
                        </v-row>
                        <v-row justify="center">
                          <v-btn
                            variant="tonal"
                            :disabled="disabledButton"
                            color="error"
                            @click="withdrawFund"
                          >
                            Withdraw Now
                          </v-btn>
                        </v-row>
                      </v-container>
                    </v-window-item>
                  </v-window>
                </v-card>
              </v-col>
            </v-row>
            <v-row align="stretch">
              <v-col cols="12">
                <v-card style="padding: 2.5rem" elevation="5" height="100%">
                  <v-card-item>
                    <v-card-title>{{ fundDetail?.name }}</v-card-title>
                    <v-card-subtitle>
                      {{ fundDetail?.category }}
                    </v-card-subtitle>
                  </v-card-item>
                  <v-card-text>
                    {{ fundDetail?.description }}
                  </v-card-text>
                  <v-table>
                    <tbody>
                      <tr>
                        <td>Fund Type</td>
                        <td>{{ fundDetail?.type }}</td>
                      </tr>
                      <tr>
                        <td>Fund Size</td>
                        <td>{{ fundDetail?.size }}</td>
                      </tr>
                      <tr>
                        <td>Shariah Compliance</td>
                        <td>{{ fundDetail?.shariah ? "Yes" : "No" }}</td>
                      </tr>
                    </tbody>
                  </v-table>
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
import axios from "axios";
import { useToast } from "vue-toastification";
export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  components: { MainSidebar },
  mounted() {
    this.isMobile = this.$vuetify.display.mobile;
    this.getFundList();
    this.getUserDetail();
  },
  data() {
    return {
      historyDate: {},
      fundDetail: {},
      userDetail: {},
      isMobile: false,
      tabInvest: "1",
      tabPerformance: "one_week",
      disabledButton: true,
      buyAmount: 0.0,
      buyUnit: 0,
      sellAmount: 0.0,
      sellUnit: 0,
      purchasedUnit: 0,
      currentValue: 0,
    };
  },
  methods: {
    async investFund() {
      const { id } = this.$route.params;

      try {
        const response = await axios.patch(
          `${process.env.VUE_APP_ENDPOINT_URL}/users/invest/${id}`,
          { unitPrice: this.fundDetail?.nav_price, unit: this.buyUnit * 100 }
        );
        this.getUserDetail();
        this.toast.success("Invest Successful!");
        this.buyUnit = 0;
        this.sellUnit = 0;
        console.log("Investment successful:", response.data);
      } catch (error) {
        this.buyUnit = 0;
        this.sellUnit = 0;
        this.toast.error("Invest Failed!");
        console.error("Investment failed:", error);
      }
    },
    async withdrawFund() {
      const { id } = this.$route.params;

      try {
        const response = await axios.patch(
          `${process.env.VUE_APP_ENDPOINT_URL}/users/withdraw/${id}`,
          { unitPrice: this.fundDetail?.nav_price, unit: this.sellUnit * 100 }
        );
        this.getUserDetail();
        this.buyUnit = 0;
        this.sellUnit = 0;
        this.toast.success("Withdraw Successful!");
        console.log("Investment successful:", response.data);
      } catch (error) {
        this.buyUnit = 0;
        this.sellUnit = 0;
        this.toast.error("Withdraw Failed!");
        console.error("Investment failed:", error);
      }
    },
    changeDataOneMonth(data) {
      this.tabPerformance = data;
      this.historyDate = this.fundDetail.history.find(
        (e) => e.type === this.tabPerformance
      ).data;
    },
    calculateAmount() {
      const rawAmount =
        (this.tabInvest === "1" ? this.buyUnit : this.sellUnit) *
        this.fundDetail?.nav_price *
        100;
      if (this.tabInvest === "1")
        return (this.buyAmount = rawAmount.toFixed(2));
      return (this.sellAmount = rawAmount.toFixed(2));
    },
    async getFundList() {
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_ENDPOINT_URL}/funds/${parseInt(
            this.$route.params.id
          )}`
        );
        this.fundDetail = response.data;
        this.historyDate = response.data.history.find(
          (e) => e.type === this.tabPerformance
        ).data;
      } catch (error) {
        console.log(error);
      }
    },
    async getUserDetail() {
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_ENDPOINT_URL}/users/1`
        );
        const checkBalance = response.data?.fund.find(
          (e) => e.fundId === Number(this.$route.params.id)
        );
        this.purchasedUnit = 0;
        if (checkBalance) {
          this.purchasedUnit = response.data?.fund?.find(
            (e) => e.fundId === Number(this.$route.params.id)
          ).unit;
        }
        this.userDetail = response.data; // Assuming the response contains an array of funds
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    buyUnit(newUnit) {
      this.disabledButton = false;
      if (!Number(newUnit)) {
        this.disabledButton = true;
      }
      this.calculateAmount();
    },
    sellUnit(newUnit) {
      this.disabledButton = false;
      if (!Number(newUnit)) {
        this.disabledButton = true;
      }
      this.calculateAmount();
    },
  },
  created() {
    // Move the filtering logic to the created lifecycle hook
    this.calculateAmount();
  },
};
</script>
