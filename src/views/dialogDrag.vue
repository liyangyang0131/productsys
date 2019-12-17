<template>
    <section>
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
        <el-dialog v-dialogDrag
                   title="提示"
                   :visible.sync="dialogVisible"
                   width="30%">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
        </el-dialog>
    </section>
</template>

<script>
    export default {
        name: "dialogDrag",
        data(){
            return{
                dialogVisible:false
            }
        },
    }
</script>

<style scoped>

</style>