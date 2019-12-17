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
                        搜索
                    </div>
                    <div class="panel-body">
                        <form role="form" class="form-inline">
                            <div class="form-group">
                                <label for="name">名称</label>
                                <input type="text" class="form-control" id="name" placeholder="请输入名称">
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-default">开始搜索</button>
                            </div>
                        </form>
                    </div>
                </div>
                <!--
                    列表展示
                -->
                <div class="table-responsive">
                    <table class="table table-striped ">
                        <thead>
                        <tr>
                            <th>编号</th>
                            <th>图标</th>
                            <th>名称</th>
                            <th>价格</th>
                            <th>邮费</th>

                            <th class="text-center">操作</th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr v-for="(item,index) in productList" :key="item.id">
                            <td>{{index+1}}</td>
                            <td>{{item.picture}}</td>
                            <td>{{item.title}}</td>
                            <td>{{item.price}}元</td>
                            <td>{{item.fee}}元</td>
                            <td class="text-center" style="cursor: pointer">
                                <span @click="editBtn(item)">修改</span>
                                <span style="margin:0 10px"></span>
                                <span @click="delBtn(item.id)">删除</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Aslideleft from '../components/Aslideleft'
    import {mapMutations} from 'vuex'
    export default {
        name: "product",
        components:{ Aslideleft },
        data(){
            return{
                productList:[],
            }
        },
        created(){
            this.queryProducts();
        },
        methods:{
            editBtn(el){
                this.$router.push('/productedit');
                this.setProductCon(el);
            },
            delBtn(id){
                this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.delProduct(id);
                })
            },
            queryProducts(){
                this.$http.get('/product/list').then(res=>{
                    var data = res.data;
                    this.productList = data.list;
                }).catch(err=>{this.$message(err)})
            },
            delProduct(id){
                const params = {id}
                this.$http.delete('/product/delete',{params}).then(res=>{
                    var data = res.data;
                    this.$message(data.message);
                    this.queryProducts();
                }).catch(err=>{this.$message(err)})
            },
            ...mapMutations(['setProductCon'])
        }
    }
</script>

<style scoped>

</style>