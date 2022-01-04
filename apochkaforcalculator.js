function operation(eblan){
	document.getElementById("res").innerHTML+=eblan;
}
function clean(){
	document.getElementById("res").innerHTML = ""
}
function del(){
	document.getElementById("res").innerHTML= document.getElementById("res").innerHTML.slice(0,-1)
}
function equal(){
	document.getElementById("res").innerHTML = eval(document.getElementById("res").innerHTML)
}
