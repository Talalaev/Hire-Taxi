<template>
  <div class="hire-taxi">
    <div class="hire-taxi__fog"></div>
    <div class="hire-taxi__content">
      <h1 class="hire-taxi__title">
        <span>Hire Taxi </span>
        <IconTaxi :class="{'taxi-far-away': isTaxiFarAway}"></IconTaxi>
      </h1>
      <el-card>
        <el-form ref="form" :model="hireForm" :rules="rules" :label-position="'left'" label-width="120px">
          <el-form-item label="Full name" prop="fullName" required>
            <el-input v-model="hireForm.fullName" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item label="Mobile phone" prop="mobilePhone" required>
            <el-input v-model="hireForm.mobilePhone" prefix-icon="el-icon-phone" v-mask="'+44 ####-###-###'" type="tel"></el-input>
          </el-form-item>
          <el-form-item label="Date of arrival" prop="dateOfArrival" required>
            <el-date-picker
                v-model="hireForm.dateOfArrival"
                :pickerOptions="pickerOptions"
                type="date"
                class="w-100"
                placeholder="Date of arrival">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="Airport" prop="airport" required>
            <el-select v-model="hireForm.airport" placeholder="Airport" class="w-100">
              <el-option
                  v-for="airport in airports"
                  :key="airport.id"
                  :label="airport.name"
                  :value="airport.name">
              </el-option>
            </el-select>
          </el-form-item>
          <div v-if="terminalShown" class="pl-2">
            <el-form-item label="Terminal">
              <el-select v-model="hireForm.terminal" placeholder="Terminal" class="w-100">
                <el-option
                    v-for="terminal in terminals"
                    :key="terminal"
                    :label="terminal"
                    :value="terminal">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <el-form-item prop="airflightNumber" label="Airflight number" required>
            <el-input v-model="hireForm.airflightNumber" v-mask="'AA ###?#?'"></el-input>
          </el-form-item>
          <el-form-item style="text-align: left;">
            <el-button type="primary" @click="orderTaxi()" :loading="loading">Order</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
  import IconTaxi from '../IconTaxi.vue'
  import moment from 'moment'
  import { airportsMixin } from "./mixins/airports.mixin"
  import { methodsMixin } from "./mixins/methods.mixin"
  import { runAnimationsMixin } from "./mixins/run-animations.mixin"

  export default {
    name: "HireTaxi",
    components: {
      IconTaxi
    },
    mixins: [
      airportsMixin,
      methodsMixin,
      runAnimationsMixin
    ],
    data() {
      return {
        hireForm: {
          fullName: '',
          mobilePhone: '',
          dateOfArrival: '',
          airport: '',
          terminal: '',
          airflightNumber: ''
        },
        rules: {
          fullName: [
            { required: true, message: 'Please input full name', trigger: 'blur' }
          ],
          mobilePhone: [
            { required: true, message: 'Please input mobile phone', trigger: 'change' },
            { len: 16, message: 'Please enter the full number', trigger: 'blur' },
          ],
          dateOfArrival: [
            { required: true, message: 'Please input arrival date', trigger: 'blur' }
          ],
          airport: [
            { required: true, message: 'Please select airport', trigger: 'change' },
          ],
          airflightNumber: [
            { required: true, message: 'Please input airflight number', trigger: 'change' },
            { min: 5, max: 7, message: 'Length should be 5 to 7', trigger: 'blur' }
          ]
        },
        pickerOptions: {
          disabledDate(calendarTime) {
            const todayMs = +moment(moment().format('YYYY-MM-DD'));
            const calendarTimeMs = +moment(moment(calendarTime).format('YYYY-MM-DD'));

            return calendarTimeMs < todayMs;
          }
        },
      };
    },
    computed: {
      terminalShown() {
        return Boolean(this.terminals);
      },
      terminals() {
        if (!this.hireForm.airport) {
          return;
        }

        return this.airports
          .find(airport => airport.name === this.hireForm.airport)
          .terminals;
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/helpers";

  .hire-taxi {
    background-image: url("../../assets/airport.jpg");
    background-size: auto 120%;
    background-repeat: no-repeat;
    background-position: center center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .hire-taxi__fog {
      z-index: 0;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #ffffffeb;
    }

    .hire-taxi__content {
      max-width: 440px;
      margin: auto;
      z-index: 1;
      position: relative;
    }

    .hire-taxi__title {
      display: flex;
      padding: 0 20px;
      align-items: center;
    }
  }

  @media all and (orientation: landscape) {
    .hire-taxi {
      background-size: 120% auto;
    }
  }

  @media all and (orientation: portrait) {
    .hire-taxi {
      background-size: auto 120%;
    }
  }

  .icon-taxi {
    font-size: 76px;
    margin-left: 34px;
    transition: all 1.5s cubic-bezier(0, 0, 0.24, 1);
    transform: translateX(0px);
    opacity: 1;
  }

  .taxi-far-away {
    transform: translateX(500px);
    opacity: 0;
  }
</style>
