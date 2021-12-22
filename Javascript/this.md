## This 相关 （ps:10-19）
本文阐述JS中this的相关知识包含this,bind,call.apply等
### 什么是this

在传统面对对象的语言中，比如JAVA，**this**关键字用来表示当前对象本身，或者是当前对象的一个实例。通过**this**关键字可以获得当前对象的属性和调用方法。

在JavaScript中，**this**似乎表现地略有不同。在JavaScript中，**this**的指向是在调用时候决定的

#### 全局上下文中的this
在全局上下文中执行this等同于全局对象
this. === window. === var

```
console.log(window === this) // true
var a = 1;
this.b = 2
window.c = 3
console.log(a+b+c) // 6
```
在全局上下文，浏览器首先声明全局对象window，并且挂在this === window；因为在全局上下文中，var声明的挂载在全局对象上。所以他们等价；

#### 函数上下文中的this
在函数上下文的this也等同于全局对象
```
function a () {
    console.log(window === this) // true
    function b() {
        console.log(window === this) // true
    }
}
```
在什么时候，this才能等于函数主体本身呢？

```
let a = {
    b: function() {console.log(this)} // b
}
```
当函数是对象的键值的时候this指向的不再是window而是函数体本身。


### 箭头函数

箭头函数是es6的语法，他的功能是将this释放到外层

```
function Person(name){
  this.name = name;
  this.say = () => {
    var name = "xb";
    return this.name;
  }
}
var person = new Person("axuebin");
console.log(person.say()); // axuebin
```


### 改变this指向的方法

需要手动改变this指向的方式还有，call && apply
```
var person = {
  name: "axuebin",
  age: 25
};
function say(job){
  console.log(this.name+":"+this.age+" "+job);
}
say.call(person,"FE"); // axuebin:25
say.apply(person,["FE"]); // axuebin:25
```
call和apply除了第二个参数类型不同之外，其余功能几乎一致。

除此之外还有bind可以实现修改this指向
this会被永久的绑定到bind的第一个参数
```
var person = {
  name: "axuebin",
  age: 25
};
function say(){
  console.log(this.name+":"+this.age);
}
var f = say.bind(person);
console.log(f());
```

### 模拟call和apply的实现

什么是call?
call方法是使用一个指定的this值或者若干个指定的值的前提下去调用某个函数或者方法！
例如：
```
var foo = {
  value: 0
}
function test() {
  console.log(this.value)
}
test.call(foo) // 1
```
以上代码做了两件事：1.改变了test的this指向，将foo作为test的this；2.执行test函数

模拟call的实现

```
Function.prototype.call2 = function(context) {
  var context = context || window // 兼容call2(null)场景，没有context就指向window
  var args = []

  for(var i = 1;i < argument.length; i++) {
    args.push(argument[i]) 
  }
  let result
  context.fn = this // 讲test挂在到对象foo下，实现改变this指向
  if (args.length > 0) {
    result = context.fn(...args) // 执行test方法
  } else {
    result = context.fn() // 执行test方法
  }
  
  delete context.fn // 删除挂载的方法 即使用完后 还原foo
  return result
}
// 测试
var foo = {
  value: 1
}
function test() {
  console.log(this.value)
}
test.call2(foo) // 1
```

apply的模拟
apply的模拟和call的模拟类似 代码如下；
```
Function.prototype.apply2 = function(context,arr) {
  let context = context || window
  let args = []
  let result

  context.fn = this
  if(arr.length > 0) {
    result = context.fn(...arr)
  } else {
    result = context.fn()
  }
  
  delete context.fn
  return result
}
var foo = {
  value: 1
}
var test () {
  console.log(this.value)
}
test.apply2(foo)
```
