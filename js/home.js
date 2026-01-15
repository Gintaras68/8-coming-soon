import { renderClock } from './components/clock/clock.js';
import { socials } from './components/socials/socials.js';
import { socialsData } from './data/socialsData.js';

renderClock('#hero-clock', '03-24 10:00:00');
socials('#social-links', socialsData);
