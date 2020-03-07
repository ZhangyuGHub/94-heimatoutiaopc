<template>
  <el-container>
    <layout-aside></layout-aside>
  <el-container>
    <el-header>
      <layout-head></layout-head>
    </el-header>
    <el-main style="padding:0">
      <router-view></router-view>
    </el-main>
  </el-container>
  </el-container>
</template>

<script>
import LayoutAside from '@/components/home/layout-aside.vue'
import LayoutHead from '@/components/home/layout-head.vue'
export default {
  components: {
    'layout-aside': LayoutAside,
    'layout-head': LayoutHead
  }
}
</script>

<style>
.el-main{
  padding: 0px;
}
</style>
