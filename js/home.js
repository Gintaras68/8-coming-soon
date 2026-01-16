import { renderClock } from './components/clock/clock.js';
import { progressBar } from './components/progressBar/progressBar.js';
import { socials } from './components/socials/socials.js';
import { progressBarData } from './data/progressBarData.js';
import { socialsData } from './data/socialsData.js';

renderClock('#hero-clock', '03-24 10:00:00');
socials('#social-links', socialsData);
progressBar('.left-column', progressBarData);

const allProgessBarDOM = document.querySelectorAll('.progress-bar');

const animate = () => {
  let totalanimated = 0;
  for (const bar of allProgessBarDOM) {
    if (bar.offsetTop + bar.offsetHeight <= scrollY + innerHeight) {
      bar.classList.add('visible');
      totalanimated++;
    }
  }

  if (totalanimated >= 3) {
    document.removeEventListener('scroll', animate);
  }
};

document.addEventListener('scroll', animate);
