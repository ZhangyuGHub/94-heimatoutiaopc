import router from '@/router'
router.beforeEach(function (to, from, next) {
  // 页面的地址以 /home为开头, 进行token的判断
  // 判断页面是不是以 /home为开头
  if (to.path.startsWith('/home')) {
    //   看看有没有token
    const token = window.localStorage.getItem('user-token')
    if (token) {
      next() // 放过
    } else {
      next('/login') // 回登录页
    }
  } else {
    next()
  }
})
