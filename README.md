[TOC]
# 主要内容
**基本语法**
* js基本语法(缪雪峰)
* node.js koa web服务器(阮一峰)
* react,jsx(阮一峰)

**小demo**

# first demo
html,css,js的基本使用
# art-template demo
主要步骤
* 引入template-web.js
* 构建模版代码
* 获取和绑定模版

引入template-web.js

```javascript
 <script src="../common/template-web.js"></script>
```

构建模版代码

```javascript
 <script id="questionTemplate" type="text/html">
     {{each cateContents}}
     <div class="level-1">
         <div>{{$value}}</div>
         <div class="level-2">
             {{each quesContents}}
             <a href="">
                 <span class="flex-1">{{$value}}</span>
                 <i class="icon">&gt;</i>
             </a>
             {{/each}}
         </div>
     </div>
     {{/each}}
 </script>
```

获取和绑定模版

```javascript
 var result = {
         'cateContents': ["一级标题", "一级标题"],
         'quesContents': ["二级标题", "二级标题"]
     }
     var questionTtml = template('questionTemplate', result);
     document.getElementById('question').innerHTML = questionTtml
```

> 注意template()函数第一个参数是模版id