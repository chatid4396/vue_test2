<template>
    <div class="loggin-div">
        <h1>login</h1>
        <el-form ref="form" :rules="rules" :model="form" label-width="100px" label-position="top">
            <!-- <el-form-item label="登录" class="login-header-html"> -->
            <!-- </el-form-item> -->
            <el-form-item prop="username">
                <el-input placeholder="账号" v-model="form.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="passwd">
                <el-input placeholder="密码" v-model="form.passwd" show-password prop="passwd" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="captcha">
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
                <el-button type="primary" @click="onSubmit('form')">登录</el-button>
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
                    username: '',
                    passwd: '',
                    captcha: '',
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    passwd: [
                        { required: true, message: '请输入密码', trigger: 'change' }
                    ],
                    captcha: [
                        { required: true, message: '请输入验证码', trigger: 'change' }
                    ]
                }
            };
        },

        mounted() {

        },

        methods: {
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$router.push({ path: '/' });
                        // this.$http.post("/login", {
                        //     form : this.form
                        // })
                        // .then(response => {
                        //     if (response.resultCode == "success") {
                        //         this.$router.replace("/")
                        //     } else {
                        //         this.$router.replace("/login")
                        //     }
                        // })
                        // .catch(err => {
                        //     alert("登录失败");
                        // })

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        },
    };
</script>

<style lang="scss">
    .loggin-div {

        width: 80%;
        margin: 200px auto;
        padding: 20px;
        border: 2px solid #dcdfe6;
        box-shadow: 2px 2px 2px #dcdfe6;
        border-radius: 20px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }


    .login-header-html {
        margin: auto;
        font-size: 16px;
    }
</style>