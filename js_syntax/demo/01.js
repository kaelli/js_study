
function getHello() {
    alert('Hello, world');
}

function showMutiyLine() {
    /*ES6 多行字符串*/
    alert(`Hello, 
        world
        kael`);
}

function showTemplate() {
    /*ES6 模板字符串*/
    var name = "小明";
    var age = "24";
    console.log(`小明的个人信息:
       姓名：${name}
       年龄：${age}`);
    // alert(`小明的个人信息:
    //    姓名：${name}
    //    年龄：${age}`);
}

function HomeWork1() {
    /*在新生欢迎会上，你已经拿到了新同学的名单，请排序后显示：欢迎XXX，XXX，XXX和XXX同学！：*/
    'use strict';
    var arr = ['小明', '小红', '大军', '阿黄'];
    var c=arr.sort();
    var a=c.slice(0,3);
    var b=c.slice(3);
    alert("欢迎"+a+"和"+b+"同学！");
}

function ShowObj() {
    //JavaScript用一个{...}表示一个对象，键值对以xxx: xxx形式申明，用,隔开
    var o = {
        name: 'Jack',
        age: 20,
        city: 'Beijing'
    };
    for (var key in o) {
        console.log(key); // 'name', 'age', 'city'
    }
}

function showForKeyWord1() {
    'use strict';
    var arr = ['Bart', 'Lisa', 'Adam'];
    for (var i = 0;i < arr.length; i++){
        console.log('Hello,'+arr[i]);
    }
}

function showForKeyWord2() {
    'use strict';
    var arr = ['Bart', 'Lisa', 'Adam'];
    for (var key in arr){
        console.log('Hello,'+arr[key]);
    }
}

function showWhile() {
    'use strict';
    var arr = ['Bart', 'Lisa', 'Adam'];
    var i = 0;
    var x;
    while (i<arr.length){
        console.log(`Hello,${arr[i]}`);
        i++;
    }
}

function showFor_of() {
    'use strict';
    var arr = ['Bart', 'Lisa', 'Adam'];
    arr.name = 'test';
    for (var key in arr){
        console.log(arr[key]);
    }
    console.log('arr.length:'+arr.length);

    for (var key of arr){
        console.log(key);
    }
    arr.name = 'test';

}

/*
练习
定义一个计算圆面积的函数area_of_circle()，它有两个参数：
r: 表示圆的半径；
pi: 表示π的值，如果不传，则默认3.14
 */
function area_of_circle(r, pi) {
    if (arguments.length===1){
        pi = 3.14;
    }
    var result = pi*r*r;
    return result;
}

function test_area_of_circle() {
    //测试:
    if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
        console.log('测试通过');
    } else {
        console.log('测试失败');
    }
}

/**
 * 变量提升
 */
function test_var_change() {
    function foo() {
        var x = 'Hello, ' + y;
        console.log(x);
        var y = 'Bob';
    }
    foo();
}

test_var_change();



