var j = localStorage.length;

function input(elem){
var input =elem.value;
// var i = 0;
var value = [input];
console.log('место '+j+' это '+value);
localStorage.setItem(j,value)
// i++;
} 

window.onload = function() {
	console.log(j);
	document.getElementById('text').value = localStorage.getItem(j);
	document.getElementById('num').innerHTML ='страница '+j;
}

function clear(){
	localStorage.clear();
}	

function left(){
	if (j > 0){
		j--;
		document.getElementById('text').value = localStorage.getItem(j);
		console.log(j);
		document.getElementById('num').innerHTML = 'страница '+j;
	}
}

function right(){
	if (j < localStorage.length){
		j++;
		document.getElementById('text').value = localStorage.getItem(j);
		console.log(j);
		document.getElementById('num').innerHTML ='страница '+j;
	}
}
// for (var j=0; j<localStorage.length; j++){
// 		value = localStorage.getItem(j);
// 		console.log(value);
// 		//document.getElementById('text').value += value;

// 	}