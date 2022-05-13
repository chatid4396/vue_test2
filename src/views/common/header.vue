<template>
    <div>
        <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#454647">
            <el-menu-item index="1" :route="{ name: 'home'}">Home</el-menu-item>
            <el-menu-item index="2" :route="{ name: 'about'}">About</el-menu-item>
            <el-menu-item index="3" :route="{ name: 'user', params:{id: '123'}}">User</el-menu-item>
            <el-menu-item index="4" :route="{ name: 'simpleStore'}">SimpleStore</el-menu-item>
            <el-menu-item index="5" :route="{ name: 'user', params:{id: '123131312'}}">user</el-menu-item>
            <el-menu-item index="6" :route="{ name: 'axiosTest'}">Axios Test</a></el-menu-item>
            <el-menu-item index="7" :route="{ name: 'homeList'}">HomeList</el-menu-item>
        </el-menu>
        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        name: 'Header',

        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        mounted() {

        },

    };
</script>

<style lang="scss" scoped>
    .el-menu {
        background-color: antiquewhite;
    }


</style>