const txt = `CCRC's IT Club!!!`;
const speed = 200;
let i = 0;

export default function typeWriter() {
	if (i < txt.length) {
		document.getElementById('typewriter-txt').textContent += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	} else {
		setTimeout(() => {
			i = 0;
			document.getElementById('typewriter-txt').textContent = '';
			typeWriter();
		}, speed);
	}
}
