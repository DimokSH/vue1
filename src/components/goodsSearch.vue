<template>

  <div class="container"      v-if="$store.getters.current_mode_equal_goodsSearch">
    <h6 class="card-title">Заказ №: {{ $store.state.current_order.id }} от {{ $store.state.current_order.date }}</h6>
    <h6 class="card-title">Клиент: {{ $store.state.current_order.client_name }}</h6>
    <br>
    <h5 class="card-title">Подбор товара</h5>
    <input type="text" :value="searchWord" @input="setSearchWord" autofocus placeholder="строка поиска">

    <div>
      <table class="table table-hover table-sm">
        <thead>
        <tr>
          <!--          <th scope="col">#</th>-->
          <th scope="col">товар</th>
          <th scope="col">цена</th>
          <th scope="col">Остаток</th>
          <th scope="col">Код 1с</th>
        </tr>
        </thead>
        <tbody>


        <tr v-for="tov in $store.getters.get_sprtov" v-bind:key="tov.id" @click="click_tovar(tov)">
          <!--          <th scope="row">{{ tov.id }}</th>-->
          <td>{{ tov.name }}</td>
          <td>{{ tov.price }}</td>
          <td>{{ tov.stock }}</td>
          <td>{{ tov.kod1c }}</td>
          <td></td>
          <td>
          </td>
        </tr>

        </tbody>
      </table>
      <button type="button" class="btn btn-outline-primary"
              @click="set_currentMode_orderDetails($store.state.current_order)">Отмена
      </button>

    </div> <!--    конец справочника-->

  </div>

</template>


<script>
import {mapGetters, mapMutations, mapState} from "vuex";


export default {
  name: "goodsSearch",

  computed: {
    ...mapState({
      searchWord: state => state.search_tov_string,
    }),
    ...mapGetters({}),
  },
  methods: {
    ...mapMutations({
      set_currentMode_orderDetails: 'set_currentMode_orderDetails',
      set_current_good: 'set_current_good',
      setSearchWord: 'setSearchWord',


    }),

    click_tovar(tov) {
      console.log(tov)
      this.set_current_good(tov)
      this.set_currentMode_orderDetails //переходим обратно к списку товаров заказа
    },


  },


}

</script>

<style scoped>

</style>