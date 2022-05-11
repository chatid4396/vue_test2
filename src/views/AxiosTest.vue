<template>
    <div>
        <button @click="testApi">axios test</button>

        <h1>This is test Api get Msg: {{ testMsg }}</h1>


        <button @click="testApi2">post test</button>
        <h1>This is test Api get Msg: {{ testMsg2 }}</h1>

    </div>
</template>

<script>
export default {
    name: 'Axiostest',

    data() {
        return {
            testMsg: '',
            testMsg2: '',
        };
    },

    mounted() {
        
    },

    methods: {
        testApi() {
            var str = "test";        
            this.$http.get(`/test/${str}`)
            .then((data) => {
                console.log(data);
                this.testMsg = data; 
            })
            .catch((err) => {
                console.log(err);
            });
        },

        testApi2() {
            var params = new Object;
            params.str = "test";
            this.$http.post('/testPost',params)
            .then((data) => {
                console.log(data);
                this.testMsg2 = data; 
            })
            .catch((err) => {
                console.log(err);
            })
        }
    },
};
</script>

<style lang="scss" scoped>

</style>