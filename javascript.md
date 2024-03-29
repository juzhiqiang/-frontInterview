1.闭包
>闭包即函数与其引用的周边状态（词法环境）绑定在一起形成的（封装）组合。换句话说，闭包可以让我们从函数内部访问其外部函数的作用域。在 JavaScript 中，
每当函数创建，闭包就被创建。为了使用闭包，我们可以简单的将一个函数定义在另一个函数的内部，然后将其暴露给外部，返回这个函数或者是把它传给另一个函数。
内部函数会拥有访问外部函数作用域中变量的能力，即使是外部函数已经执行完毕并销毁。
    
   这里面提到的关键
     1、闭包是一个函数
     2、能够访问另外一个函数作用域中的变量
     
    特性：
        1、闭包可以访问当前函数以外的变量
        2、即使外部函数已经返回，闭包仍能访问外部函数定义的变量
        3、闭包可以更新外部变量的值
        
    常出现的面试题
    
## 以下循环打印什么值
```js
    for(var i=0; i<6; i++){
        setTimeout(function(){
            console.log(i)
        },0)
    }
 ```
答案是：**6个6**     
原因： **var i  出现变量提升**
``` 
代码可看作
var i ;
for(i=0;i<6;i++){...}
当i++执行到6时，等于6无法通过判断故只会执行6此，但是因为变量i是全局变量并且for循环内setTimeout是异步宏任务，所以会在js同步宏观任务
执行完成后再执行异步宏观任务，此时i已经被赋值为6了所以打印出了6此6
```
## 说说你对javascript是弱类型语言的理解?
JavaScript 是弱类型语言，而且JavaScript 声明变量的时候并没有预先确定的类型，变量的类型就是其值的类型，也就是说变量当前的类型由其值所决定
    
## javascript中强制类型转换是一个非常易出现bug的点，知道强制转换时候的规则吗？
## 如何判断数据类型？怎么判断一个值到底是数组类型还是对象?
三种方式，分别为 `typeof`、`instanceof` 和 `Object.prototype.toString()`
1. typeof
```js
typeof 'seymoe'    // 'string'
typeof true        // 'boolean'
typeof 10          // 'number'
typeof Symbol()    // 'symbol'
typeof null        // 'object' 无法判定是否为 null
typeof undefined   // 'undefined'
typeof {}           // 'object'
typeof []           // 'object'
typeof(() => {})    // 'function'
```
>1. null 的判定有误差，得到的结果如果使用 typeof，null得到的结果是object
>2. 操作符对对象类型及其子类型，例如函数（可调用对象）、数组（有序索引对象）等进行判定，则除了函数都会得到 object 的结果。

由上面可以知道 typeof 可以用于比较简单的基础判断，遇到引用类型将判断不准确

2. instanceof 通过 instanceof 操作符也可以对对象类型进行判定，其原理就是测试构造函数的  prototype 是否出现在被检测对象的原型链上。
```js
[] instanceof Array            // true
({}) instanceof Object         // true
(()=>{}) instanceof Function   // true
```
3. Object.prototype.toString()
```js
Object.prototype.toString.call({})              // '[object Object]'
Object.prototype.toString.call([])              // '[object Array]'
Object.prototype.toString.call(() => {})        // '[object Function]'
Object.prototype.toString.call('seymoe')        // '[object String]'
Object.prototype.toString.call(1)               // '[object Number]'
Object.prototype.toString.call(true)            // '[object Boolean]'
Object.prototype.toString.call(Symbol())        // '[object Symbol]'
Object.prototype.toString.call(null)            // '[object Null]'
Object.prototype.toString.call(undefined)       // '[object Undefined]'

Object.prototype.toString.call(new Date())      // '[object Date]'
Object.prototype.toString.call(Math)            // '[object Math]'
Object.prototype.toString.call(new Set())       // '[object Set]'
Object.prototype.toString.call(new WeakSet())   // '[object WeakSet]'
Object.prototype.toString.call(new Map())       // '[object Map]'
Object.prototype.toString.call(new WeakMap())   // '[object WeakMap]'
```
 
 * 该方法本质就是依托Object.prototype.toString() 方法得到对象内部属性 [[Class]]
* 传入原始类型却能够判定出结果是因为对值进行了包装
* null 和 undefined 能够输出结果是内部实现有做处理
