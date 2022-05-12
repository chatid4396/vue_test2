<template>
    <div>
        <nav>
            <router-link :to="{name: 'home'}">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/user/123">User</router-link> |
            <router-link to="/simplestore">Simplestore</router-link> |
            <router-link :to="{ name: 'user', params: { id: '123131312' }}">User</router-link> |
            <router-link :to="{ name: 'axiosTest'}">Axios Test</router-link> |
            <router-link :to="{ name: 'homeList'}">HomeList</router-link>
            
        </nav>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'Home',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
    nav {
        padding: 30px;
    }

    nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    nav a.router-link-exact-active {
        color: #42b983;
    }
</style>