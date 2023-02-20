const {createApp} = Vue;
const apiUrl = 'api/discs/';

createApp({
    data: () {
        return{
            discs: []
        }

        },
    created() {axios.get(apiUrl).then(res => {this.discs = res.data});}

}).mount('#app')