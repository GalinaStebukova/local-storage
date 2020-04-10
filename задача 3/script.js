window.onbeforeunload = function(e) {
	localStorage.clear();
	var taginput = document.querySelectorAll('input');
	var text = document.getElementById('text');
	localStorage.setItem('text',text.value);
	var select = document.getElementById('select');
	var selectId = select.options.selectedIndex;
	localStorage.setItem('select',selectId);
	for (var i = 0; i <= taginput.length; i++){
		if (taginput[i].type == 'text')
			localStorage.setItem('input'+i, taginput[i].value);
		if (taginput[i].checked)
			localStorage.setItem('input'+i, taginput[i].id);
	}
	};

window.onload = function(){
	var taginput = document.querySelectorAll('input');
	var text = document.getElementById('text');
	text.value = localStorage.getItem('text');
	var select = document.getElementById('select');
	select.options[localStorage.getItem('select')].selected = true;
	for (var i = 0; i <= taginput.length; i++){
		if (taginput[i].type == 'text')
			taginput[i].value = localStorage.getItem('input'+i);
		if (taginput[i].id == localStorage.getItem('input'+i))
			taginput[i].checked = true;
			//localStorage.getItem('input'+i, taginput[i].value);
	}
}
	// var select = document.getElementById('select');
	// var selectId = select.options.selectedIndex;
	// console.log(select.options[selectId].value);