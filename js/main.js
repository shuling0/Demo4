// JavaScript Document
$(function(){
    $('#owl-demo').owlCarousel({
        items: 1,
    });
})


window.onload=function(){
	
	var a=document.getElementById("emmm");
	var c=a.getElementsByTagName("ul")[0];
	var b=a.getElementsByTagName("li");
	for(var i=0;i<b.length;i++){
		b[i].onclick=function(){
		for(var x=0;x<b.length;x++){
			b[x].style.border="5px solid #E2E2E2";
			b[x].className="";
			}
			this.style.border="5px solid #F9E074";
			this.className="ahaha";
			}
		
		}
}
