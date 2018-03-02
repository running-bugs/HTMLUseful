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
	if(equal=="script"){
		child=document.createElement("script");
	}else if(equal=="div"){
		var text=document.createTextNode("新添加-div");
		child=document.createElement("div");
	}else if(equal=="table"){
		child=document.createElement("table");
	}else if(equal=="tr"){
		child=document.createElement("tr");
	}else if(equal=="td"){
		var text=document.createTextNode("新添加-td");
		child=document.createElement("td");
	}else if(equal=="p"){
		var text=document.createTextNode("新添加-p");
		child=document.createElement("p");
	}else if(equal=="a"){
		var text=document.createTextNode("新添加-a");
		child=document.createElement("a");
	}else if(equal=="ul"){
		child=document.createElement("ul");
	}else if(equal=="ol"){
		child=document.createElement("ol");
	}else if(equal=="li"){
		var text=document.createTextNode("新添加-li");
		child=document.createElement("li");
	}else if(equal=="img"){
		var text=document.createTextNode("新添加-img");
		child=document.createElement("img");
	}else if(equal=="Textarea"){
		var text=document.createTextNode("新添加-Textarea");
		child=document.createElement("Textarea");
	}else if(equal=="button"){
		var text=document.createTextNode("新添加-button");
		child=document.createElement("button");
	}else if(equal=="vedio"){
		var text=document.createTextNode("新添加-vedio");
		child=document.createElement("vedio");
	}else{
		child=document.createElement("div");
		child.innerHTML=equal;
	}
    
	if(text!=null)
		child.appendChild(text);
	father.appendChild(child);

	return child;
}
