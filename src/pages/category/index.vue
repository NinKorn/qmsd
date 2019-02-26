<template>
    <div class="category">
        <van-tabs v-model="active" @click="getSubCategory">
            <van-tab :title="title.name" v-for="(title, index) in categories" :key="index">
                <router-link :to="'/goodsSubCategories/'+item.id +'/' + item.name" class="subCate-item"  v-for="(item, i) in subCategory" :key="i">
                    <img :src="item.img">
                    <span>{{ item.name }}</span>
                </router-link>
            </van-tab>
            
        </van-tabs>

        <bottomCom></bottomCom>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            categories: [],
            subCategory: []
        };
    },
    created() {
        this.getCategories()
    },
    methods: {
        getCategories() {
            // 获取商品一级分类信息
            this.$http.get('/goods/getGoodsCategories').then(result => {
                if( result.status === 200) {
                    this.categories = result.data
                    this.id = result.data[0].id
                    // console.log(this.id);
                    // 获取索引为0的二级商品信息
                    return this.$http.get('/goods/getGoodsSubCategories/' + this.id)
                }
                
            })
            .then(result => {
                if (result.status === 200) {
                    // console.log(result.data);
                    this.subCategory = result.data
                }
            }) 
        },
        getSubCategory() {
            // 获取指定商品二级分类信息
            let active = this.active+1;
            this.$http.get('/goods/getGoodsSubCategories/' + active).then( result => {    
                this.subCategory = result.data      
            })
        }
    }
}
</script>

<style lang="less" scope>
.category {
    .van-tabs{
        .van-tab__pane{
            padding: 10px 25px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            .subCate-item {
                margin-bottom: 25px;
                border: 1px solid #eaeaea;
                box-shadow: 0 0 5px #eaeaea;
                width: 160px;
                height: 200px;
                display: flex;
                flex-direction: column;
                span {
                    text-align: center;
                    line-height: 40px ;
                }
            }
        }
        
    }
    .bottom {

    }
}
</style>
