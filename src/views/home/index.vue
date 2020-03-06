<template>
  <el-container>
    <layout-aside></layout-aside>
  <el-container>
    <el-header>
      <h2>这是顶栏</h2>
    </el-header>
    <el-main>
      <h2>这是主要区域</h2>
    </el-main>
  </el-container>
  </el-container>
</template>

<script>
import LayoutAside from '@/components/home/layout-aside.vue'
export default {
  components: {
    'layout-aside': LayoutAside
  }
}
</script>

<style>

</style>
