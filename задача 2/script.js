var i = localStorage.length;

function input(elem){
var input =elem.value;
// var i = 0;
var value = [input];
console.log('место '+i+' это '+value);
localStorage.setItem(i,value)
i++;
} 
var j = i--;
window.onload = function() {
	console.log(j);
	document.getElementById('text').value = localStorage.getItem(j);
}

function clear(){
	localStorage.clear();
}	

function left(){
	if (j > 0)
	document.getElementById('text').value = localStorage.getItem(j--);
	console.log(j);
}

function right(){
	if (j < localStorage.length)
	document.getElementById('text').value = localStorage.getItem(j++);
	console.log(j);
}
// for (var j=0; j<localStorage.length; j++){
// 		value = localStorage.getItem(j);
// 		console.log(value);
// 		//document.getElementById('text').value += value;

// 	}