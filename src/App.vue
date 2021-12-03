<template>
  <div class="container">

    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Заказы</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Контакты</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Новости</a>
      </li>
    </ul>

    <goodsSearch/>
    <!--    список заказов-->
    <div class="container" v-if="$store.getters.current_mode_equal_orderList">
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Дата заказа</th>
          <th scope="col">Клиент</th>
          <th scope="col">Сумма</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="order in $store.state.orders" v-bind:key="order.id" @click="set_currentMode_orderDetails(order)">
          <th scope="row">{{ order.id }}</th>
          <td>{{ order.date }}</td>
          <td>{{ order.client_name }}</td>
          <td>{{ order.sum }}</td>
          <td>
            <button type="button" class="btn btn-outline-primary btn-sm" @click="clicktest(order)">Открыть</button>
          </td>
        </tr>

        </tbody>
      </table>
    </div>

    <orderDetails/>

  </div>
</template>


<script>
import goodsSearch from "@/components/goodsSearch";
import {mapState, mapGetters, mapMutations, mapActions} from "vuex"
import orderDetails from "@/components/orderDetails";
import data from "./f1.json"


export default {
  components: {
    orderDetails,
    goodsSearch,
  },

  mounted() {


    console.log(7777777)
    this.loadSprTov(data);
    console.log(8888888)
  },

  data() {
    return {}
  },
  computed: {
    ...mapState({}),
    ...mapGetters({}),
  },

  methods: {
    ...mapMutations({
      set_currentMode_orderDetails: 'set_currentMode_orderDetails',
      set_currentMode_orderList: 'set_currentMode_orderList',

    }),
    ...mapActions({
      loadSprTov: 'loadSprTov',
    }),


  }
}


</script>

<style scoped>
.table-hover > tbody > tr:hover {
  background-color: #0dcaf0;
}

</style>