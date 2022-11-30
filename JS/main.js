const { createApp } = Vue;

createApp({
    data() {
        return {
            listaEmail: [],

        }
    },

    methods: {

        ottieniData() {
            for (let i=0; i<10; i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((risposta) => {
                        console.log(risposta);
                        this.listaEmail.push(risposta);
                    })};
            },


        },

    mounted() {
        this.ottieniData()
    },

}).mount("#app")