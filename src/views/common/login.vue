<template>
    <div class="loggin-div">
        <el-form ref="form" :model="form" label-width="80px" :label-position="top">
            <el-form-item label="登录" class="login-header-html">
            </el-form-item>
            <el-form-item>
                <el-input placeholder="账号" v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item >
                <el-input placeholder="密码" v-model="form.passwd" show-password></el-input>
            </el-form-item>
            </el-form-item>
            <el-form-item >
                <el-row :gutter="20">
                    <el-col :span="14">
                        <el-input v-model="form.captcha" placeholder="验证码"></el-input>
                    </el-col>
                    <el-col :span="10" class="login-captcha">
                        <img >
                    </el-col>
                </el-row>
            </el-form-item>



            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'Login',

        data() {
            return {
                form: {
                    name: '',
                    passwd: '',
                    captcha: '',
                }
            };
        },

        mounted() {

        },

        methods: {
            onSubmit() {
                console.log('submit!');
            }
        },
    };
</script>

<style lang="scss">
    .loggin-div {
        margin-top: 20%;
        width: 80%;
        margin: auto;
    }


    .login-header-html {
        margin: auto;
        font-size: 16px;
    }
</style>