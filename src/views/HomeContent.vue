<template>
    <div>
        <div class="loading" v-if="loading">
	        Loading...
	    </div>
        <p v-html="post.content"></p>
    </div>
</template>

<script>
export default {
    name: 'HomeContent',

    props: ['id'],
    data() {
        return {
            post: {                   
		      	author: {
	                loginname: 'temp',//设置默认值，防止Vue在axios未被调用前报错
	               }
		      },
	  	      loading:false
        };
    },

    mounted() {
        
    },

    methods: {
        getData(){
            //获取文章信息
            this.$http({
                url: `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,   //ES6语法，引入组件内的 route object（路由信息对象） 
                method: 'get',
                params:{
                    mdrender:true
                }
                })
                .then( (response) => {
                if( response.success === true ){
                    this.post = response.data;
                    this.loading = false;
                }
                })
                .catch(function (error) {
                console.log(error);
                });
        }
    },
    beforeMount() {
        this.loading = true;
        this.getData();
    },
    watch:{
        $route(){
            this.getData();
        }
    }
};
</script>

<style lang="scss" scoped>

</style>