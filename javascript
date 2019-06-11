1.闭包
    闭包即函数与其引用的周边状态（词法环境）绑定在一起形成的（封装）组合。换句话说，闭包可以让我们从函数内部访问其外部函数的作用域。在 JavaScript 中，
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
    
        1. 以下循环打印什么值
            for(var i=0; i<6; i++){
                setTimeout(function(){
                    console.log(i)
                },0)
            }
         
            答案是：
                6个6 
            原因： var i  出现变量提升
                    
                   代码可看作
                   var i ;
                   for(i=0;i<6;i++){...}
                   当i++执行到6时，等于6无法通过判断故只会执行6此，但是因为变量i是全局变量并且for循环内setTimeout是异步宏任务，所以会在js同步宏观任务
                   执行完成后再执行异步宏观任务，此时i已经被赋值为6了所以打印出了6此6
