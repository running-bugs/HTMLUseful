# HTMLUseful

## 更多参考[菜鸟教程](http://m.runoob.com/)

## 更多参考[w3school](http://www.w3school.com.cn/tags/index.asp)

[HTML 无序列表](/tag-ul.md)

[HTML 有序列表](/tag-ol.md)

[HTML 表格](/tag-table.md)

[HTML 内联框架](/tag-iframe.md)



# HTML 小技巧

## 更多参考 [js与DOM 手册](https://m.runoob.com/jsref/jsref-tutorial.html)

定义一个类
```
T=function(){
    this.x; //属性前面的this需要加上
    this.y;
    
    this.run=function(){
        return ++this.x;
    };
}

var postion=new T();
console.log(position.x);
```
定义一个数组
```
var arr=["hello","world","!!!"];
var arr=new Array("hello","world");

console.log(arr[0]);
```
在某动作t毫秒后执行方法
```
function getX(){
 return 100;
}
var timeout=setTimeOut(getX,3000);  //3秒后执行getX()函数 注意! getX 非getX();
    //stTimeOut(function(){...},3000);

clearTimeOut(timeout);  //中断setTimeOut方法执行
```
在某动作后每t毫秒为周期 重复执行方法
```
function getX(){
 return 100;
}
var inter=setInterval(getX,3000);  //每3秒执行getX()函数 注意! getX 非getX();

clearInterval(inter);  //中断setInterval方法执行
```
```
强制使用某样式
```
style="
    background:red !important; //将强制使用该样式
    background:blue;
"
```
设置圆形头像
```
css
<style>

    .to{width:100px;height:100px; border-radius:100px}

</style>
```
设置标签层次
```
style='z-index:-10/20/999'
or
getElement().zIndex='10';
```
设置标签内文字位置(相对)
```
style='text-alight:left/center/right'
```
设置标签本身位置(相对)
```
style='float:left/center/right'
```
设置标签本身位置(绝对)
```
style='
    position:absolute;
    top/bottom/left/right:20px;
'
```
设置某标签(块区域)不可见
```
style="
    display:none; //不可见
            block;//可见
"
```
去除无序列表前的黑点
```
style="
     list-style:none;
"
```
