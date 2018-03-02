/***
*
	将 byid 与 bytagname 合并
	函数为 getElement(String state,String status);
	lg : getElement("tags","body");
		 getElement("id","id");
*
***/

function getElement(state,status){
	//state : 说明	status : 身份
	var element=null;
	if(state=="id"){
		element=document.getElementById(status);
	}else if((state=="em")|(state=="elements")|(state=="tags")){
		element=document.getElementsByTagName(status);
	}else{
		alert("state错误");
	}

	return element;
}



/***
*	为某标签添加子标签
*		函数为addChild(element father,String child);
*		子标签默认内容为 新添加-标签名 若要改变请使用 innerHTML="";
*
*		father 必须为确定元素,不可为数组 lg:document.getElementsByTagName("body")[0] document.getElementsById("id")
*	lg :	
*			var img=addChild(document.getElementsByTagName("body")[0],'img').src='/img/demo.jpg';
*			img.style.min-width="200px";
*			img.style.max-height="200px";
*
*		实现标签	<div> <p> <button> <img> <a> <Textarea>
***/

function addChild(father,equal){
	var child=null;
	if(equal=="div"){
		var text=document.createTextNode("新添加-p");
		child=document.createElement("div");
	}else if(equal=="p"){
		var text=document.createTextNode("新添加-p");
		child=document.createElement("p");
	}else if(equal=="button"){
		var text=document.createTextNode("新添加-button");
		child=document.createElement("button");
	}else if(equal=="img"){
		var text=document.createTextNode("新添加-img");
		child=document.createElement("img");
	}else if(equal=="Textarea"){
		var text=document.createTextNode("新添加-Textarea");
		child=document.createElement("Textarea");
	}else if(equal=="a"){
		var text=document.createTextNode("新添加-a");
		child=document.createElement("a");
	}else{
		child=document.createElement("div");
		child.innerHTML="返回新添加 div"+equal;
	}
    
	if(text!=null)
		child.appendChild(text);
	father.appendChild(child);

	return child;
}
