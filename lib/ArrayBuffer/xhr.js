const xhr = new XMLHttpRequest();

xhr.open('GET', 'url');
xhr.responseType = 'arraybuffer';
xhr.onload = () => {
	const data = xhr.response;
}
xhr.send();