// JavaScript Document
$(function(){
    $('#owl-demo').owlCarousel({
        items: 1,
    });
	
})

function emmm1(){
	document.getElementById("emm1").style.border="5px solid orange";
	if(a){
	document.getElementById("emm1").style.border="5px solid #E2E2E2";
	}
	}
function emmm2(){
	var a=true;
	if(a){
	document.getElementById("emm2").style.border="5px solid orange";
	a=false;
	}
	else{
		document.getElementById("emm2").style.border="5px solid #E2E2E2";
		a=true;
		}
	}
function emmm3(){
	var a=true;
	if(a){
	document.getElementById("emm3").style.border="5px solid orange";
	a=false;
	}
	else{
		document.getElementById("emm3").style.border="5px solid #E2E2E2";
		a=true;
		}
	}