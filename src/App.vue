<template>
  <div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Выбор из списка товаров</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!--    справочник товаров-->
            <div>
              <input type="text" v-bind:value="search_tov_string" @input="search_tov_string = $event.target.value">
            </div>
            <div>
              <table class="table table-hover table-sm">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">товар</th>
                  <th scope="col">цена</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
                </thead>
                <tbody>


                <tr v-for="tov in spr_tov" v-bind:key="tov.id">
                  <th scope="row">{{ tov.id }}</th>
                  <td>{{ tov.name }}</td>
                  <td>{{ tov.price }}</td>
                  <td></td>
                  <td>
                  </td>
                </tr>

                </tbody>
              </table>
            </div> <!--    конец справочника-->

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <input type="text" v-bind:value="bb" @input="bb = $event.target.value">

<!--    список заказов-->
    <div v-if="orders_list_visible">
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


        <tr v-for="order in orders" v-bind:key="order.id" @click="clicktest(order)">
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

    <!--    список товаров-->
    <div v-if="goods_visible">

      <h5 class="card-title">Заказ №: {{ current_order.id }}</h5>
      <h5 class="card-title">Клиент: {{ current_order.client_name }}</h5>
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


        <tr v-for="good in current_goods" v-bind:key="good.id">
          <th scope="row">{{ good.id }}</th>
          <td>{{ good.name }}</td>
          <td>{{ good.price }}</td>
          <td>
            <input type="number"
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
      <button type="button" class="btn btn-outline-primary" @click="goto_orderlist">назад к списку заказов</button>
    </div> <!--    конец списка товаров-->


  </div>
</template>


<script>


export default {
  data() {
    return {
      spr_tov: [
        {id: 1, name: 'линза 1', price: 100},
        {id: 2, name: 'линза 2', price: 200},
        {id: 3, name: 'линза 3', price: 300},
        {id: 4, name: 'линза 4', price: 400},
        {id: 5, name: 'оправа 1', price: 500},
        {id: 6, name: 'оправа 2', price: 600},
      ],
      bb: "test",
      goods_visible: false,
      orders_list_visible: true,
      current_order: {},
      current_goods: [],
      search_tov_string: "",
      orders: [
        {
          id: 1, date: '01.11.2021', client_name: 'Соболева Елена Викторовна', sum: 6590,
          goods: [
            {id: 1, name: 'Оправа V32291 С2 Метал Женская', price: 1990, amount: 2},
            {id: 2, name: 'OС Zorko BLUV 16 Optima +1.25', price: 1800, amount: 1},
            {id: 3, name: 'OС Zorko BLUV 16 Optima +1.25', price: 1800, amount: 1},
            {id: 3, name: '_Услуга мастера', price: 1000, amount: 1},
          ]
        },
        {
          id: 2, date: '02.11.2021', client_name: 'Петров Петр Петрович', sum: 18700,
          goods: [
            {id: 1, name: 'линза', price: 800, amount: 2},
            {id: 2, name: 'оправа', price: 5000, amount: 1},
            {id: 3, name: 'услуга мастера', price: 200, amount: 1},
          ]
        }
      ]
    }
  },
  methods: {
    add_like() {
      this.likes++
    },
    clicktest(order) {
      this.current_order = order
      this.current_goods = order.goods
      this.goods_visible = true
      this.orders_list_visible = false
    },
    goto_orderlist() {
      this.goods_visible = false
      this.orders_list_visible = true
    },

  }


}
</script>

<style scoped>
.table-hover > tbody > tr:hover {
  background-color:  #0dcaf0;
}

</style>