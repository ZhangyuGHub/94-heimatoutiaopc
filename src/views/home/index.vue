<template>
  <el-container>
    <layout-aside></layout-aside>
  <el-container>
    <el-header>
      <layout-head></layout-head>
    </el-header>
    <el-main>
      <h2>这是主要区域</h2>
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

</style>
