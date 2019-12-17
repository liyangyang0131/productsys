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
                        编辑商品
                    </div>
                    <div class="panel-body">
                        <div class="table-responsive input-form">
                            <form :model="productCon">
                                <ul>
                                    <li>  商品名称: <input type="text"  v-model="productCon.title"/></li>

                                    <li>  商品图片: <input type="file" /></li>

                                    <br>
                                    <img :src="productCon.picture">
                                    <br>

                                    <li>  商品价格: <input type="text"  v-model="productCon.price"/></li>
                                    <li>  商品邮费: <input type="text"  v-model="productCon.fee"/></li>

                                    <li>
                                        商品描述:
                                        <textarea  id="" cols="60" rows="8" v-model="productCon.desc"></textarea>
                                    </li>

                                    <li>
                                        <br/>
                                        <button class="btn btn-default" @click="editProduct">提交</button>
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
    import {mapGetters} from 'vuex'
    let original = {};
    export default {
        name: "productedit",
        components:{ Aslideleft },
        computed:{
            ...mapGetters({
                productCon:'getProductCon'
            })
        },
        methods:{
            editProduct(){
                const data = this.productCon;
                if(original.title === data.title && original.price === data.price && original.fee === data.fee && original.desc===data.desc){
                    return;
                }
                this.$http.put('/product/edit',data).then(res=>{
                    const data = res.data;
                    if(data.status === 'OK'){
                        this.$router.push('/product');
                    }else{
                        this.$message.error(this.data.message);
                    }
                }).catch(err=>{
                    this.$message.error(err)
                })
            }
        },
        created(){
            original = JSON.parse(JSON.stringify(this.productCon));
        }
    }
</script>

<style scoped>

</style>