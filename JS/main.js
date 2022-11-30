const { createApp } = Vue;

createApp({
    data() {
        return {
            listaEmail: [],
            listaPronta: false,
        }
    },

    methods: {

        ottieniData() {
            for (let i=0; i<10; i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((risposta) => {
                        console.log(risposta);
                        this.listaEmail.push(risposta);
                        if (this.listaEmail.length == 10){
                            console.log(this.listaEmail.length)
                            this.listaPronta=true;
                        }
                    })};
            },


        },

    mounted() {
        this.ottieniData()
    },

}).mount("#app")