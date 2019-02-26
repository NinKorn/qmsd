import Vue from 'vue'
import Router from 'vue-router'
import homeComponent from '@/pages/home'
import goodsSubCategoriesComponent from '@/pages/goodsSubCategories'
import goodsInfoComponent from '@/pages/goodsInfo'
import shopcarComponent from '@/pages/shopcar'
import categoryComponent from '@/pages/category'

Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:homeComponent},
    {path:'/goodsSubCategories/:id/:title',component:goodsSubCategoriesComponent},
    {path:'/goodsInfo/:id',component:goodsInfoComponent},
    {path:'/shopcar',component:shopcarComponent},
    {path:'/category',component:categoryComponent}
  ]
})
