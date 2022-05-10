<template>
    <div>
        <button @click="test">axios test</button>
    </div>
</template>

<script>
import axios from 'axios'
import {Test} from '../api'
export default {
    name: 'Axiostest',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        async test() {
            // axios.get("api/test")
            //     .then((response) => {
            //         console.log(response.data)
            //     })
            let a = Test();
            console.log(a);
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