function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	div.classList.add('customowa-klasa');
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}