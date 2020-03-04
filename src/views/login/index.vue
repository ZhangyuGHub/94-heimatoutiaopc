<template>
  <div class='login'>
    <!-- 表单 -->
    <el-card class='login-card'>
      <!-- 表单内容 -->
      <!-- 头部logo部分 -->
       <div class='title'>
         <img src="../../assets/img/logo_index.png" alt="">
       </div>
       <!-- 表单 绑定model属性  绑定rules属性(表单验证规则) ref 给el-form一个属性-->
       <el-form ref="loginForm" :model="loginForm" :rules="loginRules" style="margin-top:20px">
         <!-- 表单容器 设置prop属性 prop表示要校验的字段名-->
         <el-form-item prop="tel">
           <!-- 表单域  v-model双向绑定 -->
           <el-input v-model="loginForm.tel" placeholder="请输入手机号"></el-input>
         </el-form-item>
         <!-- 验证码 -->
         <el-form-item prop="code">
           <el-input v-model="loginForm.code" style="width:60%" placeholder="请输入验证码"></el-input>
           <!-- 放置一个按钮 -->
           <el-button style="float:right" >发送验证码</el-button>
         </el-form-item>
         <!-- 表单域 -->
         <el-form-item prop="checked">
           <!-- 是否同意协议内容 -->
           <el-checkbox v-model="loginForm.checked" >我已阅读同意用户协议和隐私条款</el-checkbox>
         </el-form-item>
         <!-- 按钮 -->
         <el-form-item>
           <el-button @click="login" style="width:100%" type="primary">登录</el-button>
         </el-form-item>
       </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // data是一个对象，而单组件的数据不能传出去，因此需要return出数据
    return {
      // 校验字段名
      loginForm: {
        tel: '',
        code: '',
        checked: false
      },
      // 配置校验规则
      loginRules: {
        tel: [{ required: true, message: '您的手机号不能为空' }, // 手机号不能为空
          { pattern: /^1[3-9]\d{9}$/, message: '手机格式不正确' }// 利用正则表达式判断手机号格式
        ],
        code: [{ required: true, message: '验证码不能为空' }, // 验证码不能为空
          { pattern: /^\d{4}$/, message: '验证码错误' }// 验证码为四个数字
        ],
        checked: [{
          validator: function (rule, value, callback) {
            value ? callback() : callback(new Error('请先同意我们的协议'))
          }
        }]

      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate().then(() => {
        alert('123')
      })
    }
  }
}
</script>

<style lang='less' scoped>
// 加了scoped属性 就只会对当前自己的组件起作用
// 如果需要写less 需要在style标签中 lang='less'
.login {
  // background-image: url('../../assets/img/back.jpg');
  height: 100vh;// 当前屏幕可视区域分成100份
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  &:before {
     content: '123';
     width: 100%;
     height: 100%;
     position: absolute;
     background-image: url('../../assets/img/back.jpg');
     filter: blur(5px);
      background-size: cover;

  }
  .login-card {
    background:white;
    z-index: 2;
    width:440px;
    height: 340px;
    .title {
      text-align: center;
      img {
         height: 40px;
      }
    }
  }
}
</style>
