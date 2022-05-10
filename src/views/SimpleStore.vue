<template>
    <div>
        <h2> {{count}}</h2>
        <input type="button" @click="incrementone" value="点击加1"/>
        <input type="button" @click="incrementtwo" value="点击加2"/>
    </div>
</template>

<script>
export default {
    name: 'Simplestore',

    data() {
        return {

        };
    },
    computed: {
        count() {
            return this.$store.state.count
        }
    },
    mounted() {
        
    },

    methods: {
        incrementone () {
            this.$store.commit({
                        type:'increment',
                        amount:1});
            console.log(this.$store.state.count);
        },
        incrementtwo () {
            this.$store.commit({
                        type:'increment',
                        amount:2});
            console.log(this.$store.state.count);
        },

    },
};
</script>

<style lang="scss" scoped>

</style>