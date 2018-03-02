```
<!--内联框架
   target :
     _blank 在新页面打开
     _self 在当前页面打开
     _parent 在父级页面打开（就是b页面）
     _top 在顶级页面打开
	-->
<a href="https://running-bugs.github.io" target="iframe">链接</a>     <!--外部链接 在iframe中打开-->
<iframe target="_self" name="iframe" src="http://www.baidu.com">

</iframe>
```

# 属性
属性|值|描述
--|--|--
align  |left\right\top\middle\bottom\ |不赞成使用。请使用样式代替。规定如何根据周围的元素来对齐此框架。
frameborder   |1\0 |规定是否显示框架周围的边框。
height 	 | pixels\ %  |规定 iframe 的高度。
longdesc 	|URL |	规定一个页面，该页面包含了有关 iframe 的较长描述。
marginheight 	|pixels |	定义 iframe 的顶部和底部的边距。
marginwidth |	pixels 	|定义 iframe 的左侧和右侧的边距。
name |	frame_name |	规定 iframe 的名称。
sandbox  | "" \allow-forms\allow-same-origin\allow-scripts\allow-top-navigation | 启用一系列对 <iframe> 中内容的额外限制。
scrolling |  yes\no\auto | 规定是否在 iframe 中显示滚动条。
seamless |	seamless |	规定 <iframe> 看上去像是包含文档的一部分。
src |	URL 	|规定在 iframe 中显示的文档的 URL。
srcdoc 	|HTML_code |	规定在 <iframe> 中显示的页面的 HTML 内容。
width|  pixels\%  |定义 iframe 的宽度。

# 全局属性
- HTML5 中添加的属性。

属性 |描述
--|--|
accesskey 	|规定激活元素的快捷键。
class |	规定元素的一个或多个类名（引用样式表中的类）。
contenteditable 	|规定元素内容是否可编辑。
contextmenu 	|规定元素的上下文菜单。上下文菜单在用户点击元素时显示。
data-* 	|用于存储页面或应用程序的私有定制数据。
dir |	规定元素中内容的文本方向。
draggable |	规定元素是否可拖动。
dropzone |	规定在拖动被拖动数据时是否进行复制、移动或链接。
hidden 	|规定元素仍未或不再相关。
id 	|规定元素的唯一 id。
lang 	|规定元素内容的语言。
spellcheck 	|规定是否对元素进行拼写和语法检查。
style |	规定元素的行内 CSS 样式。
tabindex 	|规定元素的 tab 键次序。
title 	|规定有关元素的额外信息。
translate 	|规定是否应该翻译元素内容。
