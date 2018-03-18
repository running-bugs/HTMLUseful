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

	if(father!=null&&father.innerHTML!=null)
	{
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
		}else if(equal=="canvas"){
			child=document.createElement("canvas");
			child.style.background='blue';
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
		}
		else if(equal=="abbr"){
			child=document.createElement("abbr");
		}else if(equal=="acronym"){
			child=document.createElement("acronym");
		}else if(equal=="address"){
			child=document.createElement("address");
		}else if(equal=="applet"){
			child=document.createElement("applet");
		}else if(equal=="area"){
			child=document.createElement("area");
		}else if(equal=="article"){
			child=document.createElement("article");
		}else if(equal=="aside"){
			child=document.createElement("aside");
		}else if(equal=="audio"){
			child=document.createElement("audio");
		}else if(equal=="b"){
			child=document.createElement("b");
		}else if(equal=="base"){
			child=document.createElement("base");
		}else if(equal=="basefont"){
			child=document.createElement("basefont");
		}else if(equal=="bdi"){
			child=document.createElement("bdi");
		}else if(equal=="bdo"){
			child=document.createElement("bdo");
		}else if(equal=="big"){
			child=document.createElement("big");
		}else if(equal=="blockquote"){
			child=document.createElement("blockquote");
		}else if(equal=="body"){
			child=document.createElement("body");
		}else if(equal=="br"){
			child=document.createElement("br");
		}else if(equal=="caption"){
			child=document.createElement("caption");
		}else if(equal=="center"){
			child=document.createElement("center");
		}else if(equal=="cite"){
			child=document.createElement("cite");
		}else if(equal=="code"){
			child=document.createElement("code");
		}else if(equal=="col"){
			child=document.createElement("col");
		}else if(equal=="colgroup"){
			child=document.createElement("colgroup");
		}else if(equal=="command"){
			child=document.createElement("command");
		}else if(equal=="datalist"){
			child=document.createElement("datalist");
		}else if(equal=="dd"){
			child=document.createElement("dd");
		}else if(equal=="del"){
			child=document.createElement("del");
		}else if(equal=="details"){
			child=document.createElement("details");
		}else if(equal=="dfn"){
			child=document.createElement("dfn");
		}else if(equal=="dialog"){
			child=document.createElement("dialog");
		}else if(equal=="dir"){
			child=document.createElement("dir");
		}else if(equal=="dl"){
			child=document.createElement("dl");
		}else if(equal=="dt"){
			child=document.createElement("dt");
		}else if(equal=="em"){
			child=document.createElement("em");
		}else if(equal=="embed"){
			child=document.createElement("embed");
		}else if(equal=="fieldset"){
			child=document.createElement("fieldset");
		}else if(equal=="font"){
			child=document.createElement("font");
		}else if(equal=="footer"){
			child=document.createElement("footer");
		}else if(equal=="form"){
			child=document.createElement("form");
		}else if(equal=="frame"){
			child=document.createElement("frame");
		}else if(equal=="frameset"){
			child=document.createElement("frameset");
		}else if(equal=="head"){
			child=document.createElement("head");
		}else if(equal=="header"){
			child=document.createElement("header");
		}else if(equal=="hgroup"){
			child=document.createElement("hgroup");
		}else if(equal=="h1"){
			child=document.createElement("h1");
		}else if(equal=="h2"){
			child=document.createElement("h2");
		}else if(equal=="h3"){
			child=document.createElement("h3");
		}else if(equal=="h4"){
			child=document.createElement("h4");
		}else if(equal=="h5"){
			child=document.createElement("h5");
		}else if(equal=="h6"){
			child=document.createElement("h6");
		}else if(equal=="hr"){
			child=document.createElement("hr");
		}else if(equal=="i"){
			child=document.createElement("i");
		}else if(equal=="iframe"){
			child=document.createElement("iframe");
		}else if(equal=="input"){
			child=document.createElement("input");
		}else if(equal=="label"){
			child=document.createElement("label");
		}else if(equal=="link"){
			child=document.createElement("link");
		}else if(equal=="map"){
			child=document.createElement("map");
		}else if(equal=="mark"){
			child=document.createElement("mark");
		}else if(equal=="meta"){
			child=document.createElement("meta");
		}else if(equal=="nav"){
			child=document.createElement("nav");
		}else if(equal=="noframes"){
			child=document.createElement("noframes");
		}else if(equal=="noscript"){
			child=document.createElement("noscript");
		}else if(equal=="object"){
			child=document.createElement("object");
		}else if(equal=="ol"){
			child=document.createElement("ol");
		}else if(equal=="optgroup"){
			child=document.createElement("optgroup");
		}else if(equal=="option"){
			child=document.createElement("option");
		}else if(equal=="output"){
			child=document.createElement("output");
		}else if(equal=="param"){
			child=document.createElement("param");
		}else if(equal=="html"){
			child=document.createElement("html");
		}else if(equal=="progress"){
			child=document.createElement("progress");
		}else if(equal=="q"){
			child=document.createElement("Q");
		}else if(equal=="s"){
			child=document.createElement("s");
		}else if(equal=="samp"){
			child=document.createElement("samp");
		}else if(equal=="select"){
			child=document.createElement("select");
		}else if(equal=="small"){
			child=document.createElement("small");
		}else if(equal=="source"){
			child=document.createElement("source");
		}else if(equal=="span"){
			child=document.createElement("span");
		}else if(equal=="strong"){
			child=document.createElement("strong");
		}else if(equal=="style"){
			child=document.createElement("style");
		}else if(equal=="sub"){
			child=document.createElement("sub");
		}else if(equal=="sup"){
			child=document.createElement("sup");
		}else if(equal=="tbody"){
			child=document.createElement("tbody");
		}else if(equal=="tfoot"){
			child=document.createElement("tfoot");
		}else if(equal=="th"){
			child=document.createElement("th");
		}else if(equal=="thead"){
			child=document.createElement("thead");
		}else if(equal=="time"){
			child=document.createElement("time");
		}else if(equal=="title"){
			child=document.createElement("title");
		}else if(equal=="tr"){
			child=document.createElement("tr");
		}else if(equal=="track"){
			child=document.createElement("track");
		}else if(equal=="u"){
			child=document.createElement("u");
		}else if(equal=="var"){
			child=document.createElement("var");
		}
		else{
			child=document.createElement("div");
			child.innerHTML=equal;
		}
		
		if(text!=null)
			child.appendChild(text);
		father.appendChild(child);

		return child;
	}else{
		return false;
	}
}

Node.prototype.addChildT=function (tags){
	var father=this;
	return addChild(father,tags);
  };




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

Node.prototype.getElementT=function (tags){
	return this.getElementsByTagName(tags);
 };

function documentGetElement(text){
	var element=null;
	var pattern=/ |\.|-/;
	var equal=text.split(pattern);

	if(equal[0]=="tags"){
		return document.getElementsByTagName(equal[1]);
	}else if(equal[0]=="id"){
		return document.getElementById(equal[1]);
	}else if(equal[0]=="name"){
		return document.getElementsByName(equal[1]);
	}else{
		console.log("ERROR 未获取元素");
		return false;
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
	}else if(state=="name"){
		return document.getElementsByName(status);
	}else if(patt.exec(state.innerHTML)!=null){
		element=state.getElementsByTagName(status);
	}else{
		console.log("ERROR 未获取元素");
		return false;
	}
	return element;
}



