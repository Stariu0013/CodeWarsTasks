const button = document.querySelector('button');
const input = document.querySelector('input');
const div = document.querySelector('div');

button.addEventListener('click', () => {
	if(!/\d/.test(input.value)) {
		div.style.display = 'block'
	} else {
		div.style.display = 'none'
	}
}) 