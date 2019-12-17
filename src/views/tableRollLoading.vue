<template>
    <el-table v-loadmore="loadMore"
            :data="tableData"
            style="width: 100%"
            height="200px">
        <el-table-column
                prop="date"
                label="日期"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址">
        </el-table-column>
        <p slot="append" style="text-align:center; line-height:50px;" v-loading="loading">加载更多</p>
    </el-table>
</template>

<script>
    export default {
        name: "tableRollLoading",
        data() {
            return {
                loading:false,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        },
        methods:{
            loadMore(){
                const _this = this;
                const data = [{
                    date: '1',
                    name: '1',
                    address: '1'
                }, {
                    date: '2',
                    name: '2',
                    address: '2'
                }, {
                    date: '3',
                    name: '3',
                    address: '3'
                }, {
                    date: '4',
                    name: '4',
                    address: '4'
                },{
                    date: '5',
                    name: '5',
                    address: '5'
                }]
                this.loading = true;
                setTimeout(function(){
                    _this.tableData = _this.tableData.concat(data);
                    this.loading = false;
                    console.log(_this.tableData);
                },2000)

            }
        }
    }
</script>

<style scoped>

</style>