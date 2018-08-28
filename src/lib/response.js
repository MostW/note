// 简易实现反应的例子
// 在浏览器控制台，测试这段代码
let data = {a: 5, b: 2}
let target = null
class Dep {
  constructor () {
    this.subscribers = []
  }
  depend () {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target)
    }
  }
  notify () {
    this.subscribers.forEach(sub => sub())
  }
}

Object.keys(data).forEach(key => {
  let internalValue = data[key]
  const dep = new Dep()
  // 形成闭包了，所以这个上下文不会被释放，因为是在不同的上下文，所以dep的名字相同也无所谓
  Object.defineProperty(data, key, {
    get () {
      dep.depend()
      return internalValue
    },
    set (newVal) {
      internalValue = newVal
      dep.notify()
    }
  })
})

function watcher (myFunc) {
  target = myFunc
  target()
  target = null
}

watcher(() => {
  data.c = data.a * data.b
})

watcher(() => {
  data.d = data.a + data.b
})
