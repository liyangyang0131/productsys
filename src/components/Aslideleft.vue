<template>
    <section class="aslide">
        <a href="#" class="list-group-item active">商品管理</a>
        <router-link :to="{path:'/product'}" class="list-group-item">商品列表</router-link>
        <router-link :to="{path:'/productadd'}" class="list-group-item">增加商品</router-link>

        <a href="#" class="list-group-item active">分类管理</a>
        <a href="/" class="list-group-item">
            商品分类列表</a>
        <a href="/" class="list-group-item">
            商品分类增加</a>
    </section>
</template>

<script>
    export default {
        name: "aslideleft"
    }
</script>

<style scoped>

</style>