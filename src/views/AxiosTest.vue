<template>
    <div>
        <button @click="testApi">axios test</button>

        <h1>This is test Api get Msg: {{ testMsg }}</h1>
    </div>
</template>

<script>
import axios from 'axios'
import {test} from '../api'
export default {
    name: 'Axiostest',

    data() {
        return {
            testMsg: ''
        };
    },

    mounted() {
        
    },

    methods: {
        async testApi() {
            // axios.get("api/test")
            //     .then((response) => {
            //         console.log(response.data)
            //     })
            test()
            .then((data) => {
                console.log(data);
                this.testMsg = data; 
            })
            .catch((err) => {
                console.log(err);
            });
        }


        // async test() {
        //     try {
        //         let a = await Test();
        //         console.log(a);
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
    },
};
</script>

<style lang="scss" scoped>

</style>