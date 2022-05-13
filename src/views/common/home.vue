<template>
    <div>
        <el-container>
            <el-header>
                <htmlheader></htmlheader>
            </el-header>
            <el-container class="maincontainer">
                <el-aside width="200px" class="left">
                    <leftaside></leftaside>
                </el-aside>
                <el-main>
                    <router-view />
                </el-main>
                <el-aside width="200px" class="right">
                    <rightaside></rightaside>
                </el-aside>
            </el-container>
            
        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {
            htmlheader: () => import('./header.vue'),
            leftaside: () => import('./leftaside.vue'),
            rightaside: () => import('./rightaside.vue'),
        },
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
    * {
        margin: 5px; 
    }
    .maincontainer {
        padding: 5px;   
    }

    .el-header, .el-footer {
        color: #333;
        text-align: center;
        line-height: 60px;
    } 

    .el-aside {
        border-radius: 5px;
        border: 2px solid red;
        height: 600px;
    }

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