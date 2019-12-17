<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-2">
                <Aslideleft></Aslideleft>
            </div>
            <div class="col-sm-10">
                <ol class="breadcrumb">
                    <li class="active">商品管理
                    </li>
                    <li class="active">商品列表
                    </li>
                </ol>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        增加商品
                    </div>
                    <div class="panel-body">
                        <div class="table-responsive input-form">
                            <form :model="product">
                                <ul>
                                    <li>  商品名称: <input type="text" v-model="product.title"/></li>
                                    <li>  商品图片: <input type="file"/></li>
                                    <li>  商品价格: <input type="text"  v-model="product.price"/></li>
                                    <li>  商品邮费: <input type="text" v-model="product.fee"/></li>
                                    <li>
                                        商品描述:
                                        <textarea  id="" cols="60" rows="8" v-model="product.desc"></textarea>
                                    </li>
                                    <li>
                                        <br/>
                                        <button class="btn btn-default" @click="addProduct">提交</button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Aslideleft from '../components/Aslideleft'
    export default {
        name: "productadd",
        components:{ Aslideleft },
        data(){
            return{
                product:{
                    title:'',
                    price:'',
                    fee:'',
                    picture:''
                }
            }
        },
        methods:{
            addProduct(){
                const product = this.product;
                if(!product.title || !product.price || !product.fee){
                    this.$message.warning('请填写相关信息');
                    return;
                }
                this.$http.post('/product/add',product).then(res=>{
                    const data = res.data;
                    if(data.status === 'OK'){
                        this.$router.push('/product');
                    }else{
                        this.$message.error(data.message)
                    }
                }).catch(err=>{
                    this.$message.error(err);
                })
            },
        }
    }
</script>

<style scoped>

</style>