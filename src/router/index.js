import Vue from 'vue'
import VueRouter from 'vue-router'

import Login    from '@/views/Login'
import Manage   from '@/views/Manage'

import Screen   from '@/components/AScreen'
import Sale     from '@/components/BSaleAnalysis'
import Basic    from '@/components/CBasicAttribute'
import Action   from '@/components/DActionAnalysis'
import Taobao   from '@/components/ETaobaoPlatform'
import Tmall    from '@/components/FTmallPlatform'
import Live     from '@/components/GLivePlatform'

Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    routes: [
        {
            //重定向至登录页
            path:'/',
            redirect:'/login'
        },
        {
            //跳转登录页
            path: '/login',
            component: Login,
        },
        {
            //跳转主页
            path: '/manage',
            component: Manage,
            children: [
                {
                    //跳转大屏
                    path: 'screen',
                    component: Screen,
                },
                {
                    //跳转销售数据分析
                    path: 'sale',
                    component:Sale,
                },
                {
                    //跳转基本属性分析
                    path: 'basic',
                    component:Basic,
                },
                {
                    //跳转行为分析
                    path:'action',
                    component:Action,
                },
                {
                    //跳转淘宝平台
                    path:'taobao',
                    component:Taobao,                
                },
                {
                    //跳转天猫平台
                    path:'tmall',
                    component:Tmall,                
                },
                {
                    //跳转直播平台
                    path:'live',
                    component:Live,                
                }
            ]         
        }
    ]
})