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


# 事件属性
## Window 事件属性
- 针对 window 对象触发的事件（应用到 <body> 标签）：

属性 | 值 | 描述
------------ | ----------- | ------------
onafterprint | script | 文档打印之后运行的脚本。
onbeforeprint  | script | 	文档打印之前运行的脚本。
onbeforeunload | script | 文档卸载之前运行的脚本。
onerror  | script | 在错误发生时运行的脚本。
onhaschange 	 | script |  	当文档已改变时运行的脚本。
onload 	 | script |  	页面结束加载之后触发。
onmessage 	 | script | 	在消息被触发时运行的脚本。
onoffline 	 | script | 	当文档离线时运行的脚本。
ononline 	 | script |  	当文档上线时运行的脚本。
onpagehide  | script | 	当窗口隐藏时运行的脚本。
onpageshow 	 | script |  	当窗口成为可见时运行的脚本。
onpopstate  | script |  	当窗口历史记录改变时运行的脚本。
onredo 	 | script | 	当文档执行撤销（redo）时运行的脚本。
onresize 	 | script |  	当浏览器窗口被调整大小时触发。
onstorage 	 | script |  	在 Web Storage 区域更新后运行的脚本。
onundo 	 | script |  	在文档执行 undo 时运行的脚本。
onunload 	 | script |  	一旦页面已下载时触发（或者浏览器窗口已被关闭）。

## Form 事件
- 由 HTML 表单内的动作触发的事件（应用到几乎所有 HTML 元素，但最常用在 form 元素中）：

属性 | 值 | 描述
------------ | ----------- | ------------
onblur 	 | script |  	元素失去焦点时运行的脚本。
onchange 	 | script |  	在元素值被改变时运行的脚本。
oncontextmenu 	 | script |  	当上下文菜单被触发时运行的脚本。
onfocus 	 | script | 	当元素获得焦点时运行的脚本。
onformchange 	 | script |  	在表单改变时运行的脚本。
onforminput 	 | script |  	当表单获得用户输入时运行的脚本。
oninput 	 | script |  	当元素获得用户输入时运行的脚本。
oninvalid 	 | script |  	当元素无效时运行的脚本。
onreset 	 | script |  	当表单中的重置按钮被点击时触发。HTML5 中不支持。
onselect 	 | script |  	在元素中文本被选中后触发。
onsubmit 	 | script | 	在提交表单时触发。

## Keyboard 事件

属性 | 值 | 描述
------------ | ----------- | ------------
onkeydown 	 | script |  	在用户按下按键时触发。
onkeypress 	 | script |  	在用户敲击按钮时触发。
onkeyup 	 | script |  	当用户释放按键时触发。

## Mouse 事件
- 由鼠标或类似用户动作触发的事件：

属性 | 值 | 描述
------------ | ----------- | ------------
onclick 	 | script |  	元素上发生鼠标点击时触发。
ondblclick 	 | script |  	元素上发生鼠标双击时触发。
ondrag 	 | script | 	元素被拖动时运行的脚本。
ondragend 	 | script |  	在拖动操作末端运行的脚本。
ondragenter 	 | script | 	当元素元素已被拖动到有效拖放区域时运行的脚本。
ondragleave 	 | script |  	当元素离开有效拖放目标时运行的脚本。
ondragover 	 | script |  	当元素在有效拖放目标上正在被拖动时运行的脚本。
ondragstart 	 | script |  	在拖动操作开端运行的脚本。
ondrop 	 | script |  	当被拖元素正在被拖放时运行的脚本。
onmousedown 	 | script |  	当元素上按下鼠标按钮时触发。
onmousemove 	 | script |  	当鼠标指针移动到元素上时触发。
onmouseout 	 | script |  	当鼠标指针移出元素时触发。
onmouseover 	 | script |  	当鼠标指针移动到元素上时触发。
onmouseup 	 | script |  	当在元素上释放鼠标按钮时触发。
onmousewheel 	 | script |  	当鼠标滚轮正在被滚动时运行的脚本。
onscroll 	 | script |  	当元素滚动条被滚动时运行的脚本。

## Media 事件
- 由媒介（比如视频、图像和音频）触发的事件（适用于所有 HTML 元素，
但常见于媒介元素中，比如 <audio>、<embed>、<img>、<object> 以及 <video>）:

属性 | 值 | 描述
------------ | ----------- | ------------
onabort 	 | script |  	在退出时运行的脚本。
oncanplay 	 | script |  	当文件就绪可以开始播放时运行的脚本（缓冲已足够开始时）。
oncanplaythrough 	 | script |  	当媒介能够无需因缓冲而停止即可播放至结尾时运行的脚本。
ondurationchange 	 | script |  	当媒介长度改变时运行的脚本。
onemptied 	 | script |  	当发生故障并且文件突然不可用时运行的脚本（比如连接意外断开时）。
onended 	 | script |  	当媒介已到达结尾时运行的脚本（可发送类似“感谢观看”之类的消息）。
onerror 	 | script |  	当在文件加载期间发生错误时运行的脚本。
onloadeddata 	 | script |  	当媒介数据已加载时运行的脚本。
onloadedmetadata 	 | script |  	当元数据（比如分辨率和时长）被加载时运行的脚本。
onloadstart 	 | script |  	在文件开始加载且未实际加载任何数据前运行的脚本。
onpause 	 | script |  	当媒介被用户或程序暂停时运行的脚本。
onplay 	 | script |  	当媒介已就绪可以开始播放时运行的脚本。
onplaying 	 | script |  	当媒介已开始播放时运行的脚本。
onprogress 	 | script |  	当浏览器正在获取媒介数据时运行的脚本。
onratechange 	 | script |  	每当回放速率改变时运行的脚本（比如当用户切换到慢动作或快进模式）。
onreadystatechange 	 | script |  	每当就绪状态改变时运行的脚本（就绪状态监测媒介数据的状态）。
onseeked 	 | script |  	当 seeking 属性设置为 false（指示定位已结束）时运行的脚本。
onseeking 	 | script |  	当 seeking 属性设置为 true（指示定位是活动的）时运行的脚本。
onstalled 	 | script |  	在浏览器不论何种原因未能取回媒介数据时运行的脚本。
onsuspend 	 | script |  	在媒介数据完全加载之前不论何种原因终止取回媒介数据时运行的脚本。
ontimeupdate 	 | script |  	当播放位置改变时（比如当用户快进到媒介中一个不同的位置时）运行的脚本。
onvolumechange 	 | script |  	每当音量改变时（包括将音量设置为静音）时运行的脚本。
onwaiting 	 | script |  	当媒介已停止播放但打算继续播放时（比如当媒介暂停已缓冲更多数据）运行脚本
