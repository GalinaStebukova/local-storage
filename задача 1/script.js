
function input(elem){
	var input = elem.value;

	//Сериализуем его в '{"name": "Иван", "arr": [1, 2, 3]}':
	var json = JSON.stringify(input);
	console.log(input);
	//Запишем в localStorage с ключом obj:
	localStorage.setItem('input', json);
	console.log(json);
}
	
	window.onload = function(){



	//Получим данные обратно из localStorage в виде JSON:
	var json = localStorage.getItem('input');
	console.log(input);
	//Преобразуем их обратно в объект JavaScript:
	var input = JSON.parse(json);
	console.log(input);

	var text = document.getElementById("text");
	text.value = input;
	}
