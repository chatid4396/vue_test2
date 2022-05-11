import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import User from '../views/User.vue'
import UserProfile from '../views/UserProfile.vue'
import UserPosts from '../views/UserPosts'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: "首页"
        },
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: "关于"
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/user/:id',
        name: 'user',
        component: User,
        meta: {
            title: "用户"
        },
        props: true,
        // children: [
        //   {
        //     // 当 /user/:id/profile 匹配成功，
        //     // UserProfile 会被渲染在 User 的 <router-view> 中
        //     path: 'profile',
        //     component: UserProfile
        //   },
        //   {
        //       // 当 /user/:id/posts 匹配成功
        //       // UserPosts 会被渲染在 User 的 <router-view> 中
        //       path: 'posts',
        //       component: UserPosts
        //   },
        // ]
    },
    {
        path: '/simpleStore',
        name: 'simpleStore',
        component: () => import('../views/SimpleStore.vue'),
        meta: {
            title: "简单store"
        }
    },
    {
        path: '/axiosTest',
        name: 'axiosTest',
        component: () => import('../views/AxiosTest.vue'),
        meta: {
            title: "axios test"
        }
    }

]

const router = new VueRouter({
    routes
})


//前置守卫
router.beforeEach((to, from, next) => {
    //从from跳转到to
    console.log("前置守卫")
    window.document.title = to.matched[0].meta.title;
    next();
})
//后置守卫
router.afterEach((to, from) => {
    console.log("后置守卫：从" + from.matched[0].meta.title + "跳转到" + to.matched[0].meta.title); 
})


export default router
