<template>
  <div class="container" v-if="$store.getters.current_mode_equal_orderDetails">
    <div class="card">
      <div class="card-body">

        <h5 class="card-title">Заказ №: {{ $store.state.current_order.id }} от
          {{ $store.state.current_order.date }}</h5>

        <h5 class="card-title">Клиент: {{ $store.state.current_order.client_name }}</h5>
        <!--      <h5 class="card-title">Заказ №: {{ current_order.id }}</h5>-->
        <!--      <h5 class="card-title">Клиент: {{ current_order.client_name }}</h5>-->
        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">товар</th>
            <th scope="col">цена</th>
            <th scope="col">количество</th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>

          <tr v-for="good in $store.state.current_order.goods" v-bind:key="good.id">
            <th scope="row">{{ good.id }}</th>
            <td @click="set_currentMode_goodsSearch(good)">{{ good.name }}
            </td>
            <td>{{ good.price }}</td>
            <td>
              <input type=" number
              "
                     v-bind:value="good.amount"
                     @input="good.amount = Number($event.target.value)"
                     min="0" step="1" data-bind="value:replyNumber">
              <!--                   class="form-control" placeholder="0"-->
              <!--                   aria-label="0"-->
              <!--                   aria-describedby="basic-addon1"-->


            </td>
            <td>
            </td>
          </tr>

          </tbody>
        </table>
        <button type="button" class="btn btn-outline-primary" @click="set_currentMode_orderList">назад к списку
          заказов
        </button>
      </div> <!--    конец списка товаров-->
    </div>


  </div>
</template>


<script>
import {mapMutations} from "vuex";

export default {
  name: "orderDetails",


  methods: {
    ...mapMutations({
      set_currentMode_orderList: 'set_currentMode_orderList',
      set_currentMode_goodsSearch: 'set_currentMode_goodsSearch',

    }),


  }
}

</script>

<style>

</style>