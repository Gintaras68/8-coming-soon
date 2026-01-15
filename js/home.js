import { renderClock } from './components/clock/clock.js';
import { progressBar } from './components/progressBar/progressBar.js';
import { socials } from './components/socials/socials.js';
import { progressBarData } from './data/progressBarData.js';
import { socialsData } from './data/socialsData.js';

renderClock('#hero-clock', '03-24 10:00:00');
socials('#social-links', socialsData);
progressBar('.left-column', progressBarData);
