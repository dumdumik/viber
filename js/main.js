new Vue({
    el: '#app',
    data: {
        columns: [
            { cards: [] }, // Первый столбец
            { cards: [] }, // Второй столбец
            { cards: [] }  // Третий столбец
        ]
    },
    created() {
        this.loadData();
    },


});