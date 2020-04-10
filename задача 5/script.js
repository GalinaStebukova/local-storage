var j = localStorage.length;
var jph = localStorage.length;

function input(elem){
var input =elem.value;
// var i = 0;
var value = [input];
console.log('место '+j+' это '+value);
localStorage.setItem(j,value);
// i++;
} 

function input_name(elem){
	//jph_n = jph;
	var input =elem.value;
	// var i = 0;
	var value = [input];
	console.log('место '+jph+' это '+value);
	localStorage.setItem('n'+jph,value);
	// i++;
} 

function input_family(elem){
	//jph_f = jph;
	var input =elem.value;
	// var i = 0;
	var value = [input];
	console.log('место '+jph+' это '+value);
	localStorage.setItem('f'+jph,value);
	// i++;
} 
function input_phone(elem){
	// jph_ph = jph;
	var input =elem.value;
	// var i = 0;
	var value = [input];
	console.log('место '+jph+' это '+value);
	localStorage.setItem('ph'+jph,value);
	// i++;
} 



window.onload = function() {
	//console.log(j);
	document.getElementById('text').value = localStorage.getItem(j);
	document.getElementById('num').innerHTML ='страница '+j;
	document.getElementById('num_ab').innerHTML = 'Абонент '+jph;
	var jsonout = localStorage.getItem('exp');
	var expobj = JSON.parse(jsonout);
	document.getElementById("exp").innerHTML = expobj;
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

function leftph(){
	if (jph > 0){
		jph--;
		document.getElementById('name').value = localStorage.getItem('n'+jph);
		document.getElementById('family').value = localStorage.getItem('f'+jph);
		document.getElementById('phone').value = localStorage.getItem('ph'+jph);
		console.log(jph);
		document.getElementById('num_ab').innerHTML = 'Абонент '+jph;
	}
}

function rightph(){
	if (jph < localStorage.length){
		jph++;
		document.getElementById('name').value = localStorage.getItem('n'+jph);
		document.getElementById('family').value = localStorage.getItem('f'+jph);
		document.getElementById('phone').value = localStorage.getItem('ph'+jph);
		console.log(jph);
		document.getElementById('num_ab').innerHTML = 'Абонент '+jph;
	}
}




// function calc ulator(){
	// код начнёт выполняться после загрузки страницы
	// когда окно загрузится, сработает метод window.onLoad
	window.addEventListener('load', function OnWindowLoaded() {
    // набор кнопок
    var signs = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '/',
        '0', '=', '.', 'c'
    ];
 
    // форма калькулятора
    var calc = document.getElementById('calc');
 
    // текстовое поле с математическим выражением
    var textArea = document.getElementById('inputVal');
 
    // Добавление кнопок к форме калькулятора
    signs.forEach(function (sign) {
        var signElement = document.createElement('div');
        signElement.className = 'btn';
        signElement.innerHTML = sign;
        calc.appendChild(signElement);
    });
 
    // проходит по всем кнопкам калькулятора
    // добавляет обработчик на клик
    document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
        // Добавляем действие, выполняемое при клике на любую кнопку
        button.addEventListener('click', onButtonClick);

    });
 


    // функция клика по кнопке калькулятора
    function onButtonClick(e) {
        // e - MouseEvent (содержит информацию о клике)
        if (e.target.innerHTML === 'c') {
            // Если нажата кнопка "с", то стирает все из текстового поля
            textArea.innerHTML = '0';
        } else if (e.target.innerHTML === '=') {
            // Если нажата кнопка "=", то, приведя выражение
            // в текстовом поле к javascript, вычислить значение
            textArea.innerHTML = eval(textArea.innerHTML);
            calc_historyrsum();
            var expression = document.getElementById('calc_history').innerHTML;
			var expression_sum = document.getElementById('inputVal').innerHTML;
			var calc_historyp = document.getElementById('calc_history'); 
            var exp ='последнее выражение ' + expression + '=' + expression_sum;
            var expobj={exp};
            document.getElementById("exp").innerHTML = exp;
            var json = JSON.stringify(exp);
        	localStorage.setItem('exp', json);
        	//var expout = [];
	       
        	//История 

        	// for(var i=0; i<=10; i++){
        	// 	expout[i] = exp;
        	// 	document.getElementById("exp").innerHTML = exp;
        	// 	console.log(expout[i]);
        	// }


        } else if (textArea.innerHTML === '0') {
            // Если textarea содержит только "0", то
            // стереть "0" и записать
            // значения кнопки в текстовое поле
            textArea.innerHTML = e.target.innerHTML;
        } else {
            // Добавление значения кнопки в текстовое поле
            textArea.innerHTML += e.target.innerHTML;
            calc_history();
        }
       //calc_history();
    }

});
function calc_historyrsum(){
	var sum = document.getElementById('inputVal').innerHTML;
	//console.log('после равно ' + sum);

	var expression = document.getElementById('calc_history').innerHTML;
	var expression_sum = document.getElementById('inputVal').innerHTML;
	// calc_history = textArea;
	//console.log('выражение ' + expression + '=' + expression_sum);
	return sum;
}


function calc_history() {

	var textArea = document.getElementById('inputVal').innerHTML;
	//console.log('textArea '+textArea);
	document.getElementById('calc_history').innerHTML = textArea;
	var sum = calc_historyrsum();
	// console.log('sum '+sum);
	// var calc_history = new Array();
	// var calc_history = [];
	// calc_history.push(textArea + '=' + sum);
	if (textArea == sum)
		var calc_history1 =(textArea + '=' + sum);


	// if (calc_history.length == 10)	
	// 	calc_history.shift();

	var expression = document.getElementById('calc_history').innerHTML;
	var expression_sum = document.getElementById('inputVal').innerHTML;
	// calc_history = textArea;
	// console.log('выражение ' + expression + '=' + expression_sum);

	// //console.log(calc_history);
	// console.log('История '+calc_history1);
	
}

function calc_hout(){
	var expression = document.getElementById('calc_history').innerHTML;
	var expression_sum = document.getElementById('inputVal').innerHTML;





}