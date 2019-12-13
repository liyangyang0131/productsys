<template>
    <div>
        <nav class="navbar navbar-inverse" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <img src="../assets/images/node.jpg" height="44px;" />
                </div>
                <div class="collapse navbar-collapse" id="example-navbar-collapse">
                    <ul class="nav navbar-nav">
                        <!--<router-link tag="li" to="/product">商品管理</router-link>-->
                        <!--<router-link tag="li" to="/">系统设置</router-link>-->

                        <li class="active"><a href="#">商品管理</a>
                        </li>
                        <li class="active"><a href="#">文章管理</a>
                        </li>
                        <li class="active"><a href="#">系统设置</a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a>{{userInfo.username}}欢迎您</a>
                        </li>
                        <li><a @click="logout">安全退出</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

</template>

<script>
    import {mapGetters,mapMutations} from 'vuex'
    export default {
        name: "Header.vue",
        data(){
            return{
                // username:''
            }
        },
        computed:{
            ...mapGetters({
                userInfo:'getUserInfo'  //把 `this.username` 映射为 `this.$store.getters.getUserName`  //注意：data中不能有定义username属性

            })
        },
        methods:{
            logout(){
                this.$http.post('/logout',{id:this.userInfo.id}).then(req=>{
                    const data = req.data;
                    if(data.status === 'OK'){
                        // 清除登录信息
                        this.clear();
                        this.$router.push('/login');
                    }else{
                        this.$message(data.message);
                    }
                }).catch(err=>{
                    this.$message(err);
                })
            },
            ...mapMutations(['clear'])
        }
    }
</script>

<style scoped>

</style>