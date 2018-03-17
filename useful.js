/***
*
	将 byid 与 bytagname 合并
	
	函数为 getElement(string text);
	lg : getElement("id.div");
	getElement("id div");
	getElement("id-div");
	
	函数为 getElement(String state,String status); / getElement(object state,String status);
	lg : getElement("tags","body");
	     getElement("id","id");
	     getElement(div,"a");
*
***/

function getElement(c1,c2){
	if(arguments.length==1)
		return documentGetElement(c1);
	else if(arguments.length==2)
		return gradationGetElement(c1,c2);
}

function documentGetElement(text){
	var element=null;
	var pattern=/ |\.|-/;
	var equal=text.split(pattern);

	if(equal[0]=="tags"){
		return document.getElementsByTagName(equal[1]);
	}else if(equal[0]=="id"){
		return document.getElementById(equal[1]);
	}
}

function gradationGetElement(state,status){
	//state : 说明	status : 身份
	var element=null;
	var patt=new RegExp("<[^>]+>");

	if(state=="id"){
		element=document.getElementById(status);
	}else if(state=="tags"){
		element=document.getElementsByTagName(status);
	}else if(patt.exec(state.innerHTML)!=null){
		element=state.getElementsByTagName(status);
	}else{
		alert("first string error!");
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
*	lg :
*			var div=this.addChild(body,"<img id='img' src='/img.jpg'>");
*			var img2=this.getElement("id",'img');
*			img2.style.width='200px';
*
*		实现标签	<div> <p> <button> <img> <a> <Textarea> <script> <ul> <ol> <li> <table> <tr> <td> <iframe>
***/

function addChild(father,equal){
	var child=null;
	if(equal=="script"){
		child=document.createElement("script");
	}else if(equal=="div"){
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
	}else if(equal=="canvas"){
		child=document.createElement("canvas");
		child.style.background='blue';
	}else if(equal=="img"){
		var text=document.createTextNode("新添加-img");
		child=document.createElement("img");
	}else if(equal=="Textarea"){
		var text=document.createTextNode("新添加-Textarea");
		child=document.createElement("Textarea");
	}else if(equal=="iframe"){
		var text=document.createTextNode("新添加-iframe");
		child=document.createElement("iframe");
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
