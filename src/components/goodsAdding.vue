<template>
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

</template>

<script>
export default {
  name: "goodsAdding",
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
    }
  }
}
</script>

<style scoped>

</style>