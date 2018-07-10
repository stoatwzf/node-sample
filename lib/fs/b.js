const { read, write, open, close } = require('fs');

open('a.txt', 'r', (err, fd) => {
	const bf = Buffer.alloc(10);

	read(fd, bf, 0, 5, 0, (err, bytesRead, buffer) => {
		close(fd, err => {});
		open('foo.html', 'w', (er, df) => {
			write(df, buffer.toString(), (err, a, b) => {
				console.log(a, b)
			});
		});
	});
});