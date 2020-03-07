<template>
  <el-row align="middle" type='flex' class='layout-header'>
  <el-col :span="12" class="left" >
       <!-- 图标 -->
       <i class='el-icon-s-fold'></i>
       <span>
           黑马头条
       </span>
  </el-col>
  <el-col :span="12" class="right">
    <el-row type='flex' justify="end" align="middle">
            <img :src="useInfo.photo" alt="">
           <!-- 下拉菜单 -->
           <!-- 触发方式设为click，默认为hover -->
           <el-dropdown trigger='click' @command="click">
               <!-- 显示的内容 -->
               <span>{{useInfo.name}}</span>
                <!--el-dropdown-menu组件包含具名插槽dropdown -->
                <el-dropdown-menu slot="dropdown" >
                   <!-- 下拉选项 el-dropdown-item 作为下拉选项组件-->
                    <el-dropdown-item command="info">个人信息</el-dropdown-item>
                    <el-dropdown-item command="address">git地址</el-dropdown-item>
                    <el-dropdown-item command="exit">退出</el-dropdown-item>
                </el-dropdown-menu>
           </el-dropdown>
        </el-row>
  </el-col>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      useInfo: {}
    }
  },
  methods: {
    click (command) {
      if (command === 'info') {
        alert('你点击了个人信息')
      } else if (command === 'address') {
        window.location.href = 'https://github.com/ZhangyuGHub/94-heimatoutiaopc'
      } else {
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
      }
    }
  },
  created () {
    const token = localStorage.getItem('user-token')
    this.$axios({
      url: '/user/profile', // 地址
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      // 成功之后的操作
      this.useInfo = result.data.data
    })
  }
}
</script>

<style lang='less' scoped>
  .layout-header {
      height: 60px;
      font-size: 1.25rem;
      .left {
          i {
              font-size:20px;
          }
      }
      .right {
          img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              margin-right: 4px;
          }
      }
  }
</style>
