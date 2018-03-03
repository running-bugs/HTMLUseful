# HTMLUseful

## 更多参考[菜鸟教程](http://www.runoob.com/)

## 更多参考[w3school](http://www.w3school.com.cn/tags/index.asp)

[HTML 无序列表](/tag-ul.md)

[HTML 有序列表](/tag-ol.md)

[HTML 表格](/tag-table.md)

[HTML 内联框架](/tag-iframe.md)

## HTML 小技巧

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
设置标签本身位置(绝对(相对父标签))
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
