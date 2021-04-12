// 1、默认绑定

// 非严格模式下，在浏览器环境，默认绑定到window
var a = 10 
function foo1 () {
  console.log(this)
  console.log(this.a)
}
// foo1()

// 严格模式下，在浏览器环境，函数里默认绑定到undefined，不影响全局默认绑定window
var b = 10
function foo2 () {
  "use strict"
  console.log(this)
  console.log(this.b) // 报错
}
// foo2()

// 使用let和const会生成局部块级作用域，在声明之前使用变量会出现暂时性死区
// var声明变量会出现变量提升
let c = 10
const d = 20
function foo3 () {
  // this默认绑定window不变，但let和const创建了局部块级作用预，所以以下输出undefined
  console.log(this)
  console.log(this.c) // undefined
  console.log(this.d) // undefined
}
// foo3()

// 易混淆, this还是指向window
var e = 1
function foo4 () {
  var e = 2
  console.log(this.e)
  function inner () { 
    console.log(this.e)
  }
  inner() // 1
}
// foo4() // 1

// 2、隐式绑定
// this永远指向最后调用时的对象
function foo5 () {
  console.log(this.f)
}
var obj = { f: 1, foo5 }
var f = 2
obj.foo5() // 1

// 隐式绑定丢失
function foo6 () {
  console.log(this.a)
}
var obj = { g: 1, foo6 }
var g = 2
// 相当于创建foo7代替obj.foo6，且挂载到window下的方法
var foo7 = obj.foo6
obj.foo() // 1
foo7() // 2

// 3、显示绑定
// 4、new绑定
// 5、箭头函数绑定

