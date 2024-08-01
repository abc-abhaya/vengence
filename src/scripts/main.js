import IT_CLUB_LOGO from '../assets/it-club-logo.png';
import setFavicon from './favicon';
import headerOnScroll from './effect/headerOnScroll';
import typeWriter from './effect/typeWriter';

const { log } = console;
log('Namaste Nepal');

setFavicon(IT_CLUB_LOGO, 'png');

document.addEventListener('DOMContentLoaded', (event) => {
	typeWriter();
	headerOnScroll();
});
