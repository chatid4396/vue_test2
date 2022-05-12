<template>
    <div>
        <el-table :data="posts" style="width: 100%">
            <el-table-column width="100" >
                <template slot-scope="scope">
                    <img :src="scope.row.author.avatar_url" />
                </template>
            </el-table-column>
            <el-table-column width="100">
                <template slot-scope="scope">
                    <span>{{ scope.row.reply_count + "/" + scope.row.visit_count  }}</span>
                </template>
            </el-table-column>
            <el-table-column width="200">
                <template slot-scope="scope">
                    <router-link :to="{name: 'context', params: { id: `scope.row.id` }}"> {{ scope.row.title }}</router-link>
                </template>
            </el-table-column>
            <el-table-column  width="100">
                <template slot-scope="scope">
                    <span>{{ scope.row.last_reply_at }}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: 'HomeList',

        data() {
            return {
                icon: "https://avatars.githubusercontent.com/u/227713?v=4&s=",
                posts: []
            };
        },

        mounted() {

        },

        methods: {
            getData() {
                this.$http({
                url: 'https://cnodejs.org/api/v1/topics',
                method: 'get',
                params: {
                    page: 1,
                    limit:20,
                }
              })
			  .then( (response) => {
			  	if( response.success === true ){
			  		this.posts = response.data;
			  	}
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
            },

        },
        beforeMount() {
	    	this.getData();
	    }
    };
</script>

<style lang="scss" scoped>

</style>