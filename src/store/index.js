import {createStore} from "vuex";


const Mode_goods_search = "goodsSearch"
const Mode_orderList = "orderList"
const Mode_orderDetails = "orderDetails"

export const store = createStore({
    state: () => ({
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
        ],

        current_mode: Mode_orderList,
        spr_tov: [
            {id: 99999991, name: 'Услуга мастера: ремонт оправы', price: 300, stock: 0},
            {id: 99999992, name: 'Услуга мастера: вставка линз', price: 500, stock: 0},
            {id: 99999993, name: 'Услуга мастера: сборка новых очков', price: 1000, stock: 0},
            // {id: 2, name: 'линза 2', price: 200},
            // {id: 3, name: 'линза 3', price: 300},
            // {id: 4, name: 'линза 4', price: 400},
            // {id: 5, name: 'оправа 1', price: 500},
            // {id: 6, name: 'оправа 2', price: 600},
        ],
        search_tov_string: '',
        current_order: {},
        selected_product_in_search: {},
        current_good_of_order: {},

    }),

    getters: {
        // sortedPosts(state) {
        //     return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        // },
        // sortedAndSearchedPosts(state, getters) {
        //     return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        // },
        get_sprtov(state) {
            var sLow = state.search_tov_string.toLowerCase()
            return state.spr_tov.filter(t => t.name.toLowerCase().includes(sLow))
        },


        current_mode_equal_goodsSearch(state) {
            return state.current_mode === Mode_goods_search
        },
        current_mode_equal_orderList(state) {
            return state.current_mode === Mode_orderList
        },
        current_mode_equal_orderDetails(state) {
            return state.current_mode === Mode_orderDetails
        },
    },

    mutations: {
        set_currentMode_goodsSearch(state, good_of_order) {
            state.current_good_of_order = good_of_order;
            state.current_mode = Mode_goods_search;//
        },
        set_currentMode_orderList(state) {
            state.current_mode = Mode_orderList;
        },
        set_currentMode_orderDetails(state, order) {
            state.current_mode = Mode_orderDetails
            state.current_order = order
        },

        set_current_good(state, good) {
            state.selected_product_in_search = good
            //меняем товар на выбранный товар
            state.current_good_of_order.name = state.selected_product_in_search.name
            state.current_mode = Mode_orderDetails
        },

        setSearchWord(state, ev) {
            state.search_tov_string = ev.target.value
        },

        load_spr_tov_from_array(state, data) {
            state.spr_tov[0].name = 'super'

            var index;
            for (index = 0; index < 100; ++index) {
                state.spr_tov.push(
                    {
                        id: index,
                        name: data[index].name,
                        price: data[index].price,
                        stock: data[index].stock,
                        kod1c: data[index].kod1c
                    }
                )
            }

        },

    },

    actions: {
        loadSprTov({commit}, data) {
            commit('load_spr_tov_from_array', data)
        }

    },
})

