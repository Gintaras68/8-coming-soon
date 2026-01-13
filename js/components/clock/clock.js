import { formatNumber } from './formatNumber.js';

function renderClock(selector) {
  const DOM = document.querySelector(selector);

  const time = [432, 9, 37, 39];
  const titles = ['days', 'hours', 'minnutes', 'seconds'];
  let HTML = '';

  for (let i = 0; i < 4; i++) {
    HTML += `<div class="time">
        <div class="value">${formatNumber(time[i])}</div>
        <div class="title">${formatNumber(titles[i])}</div>
      </div>`;
  }

  DOM.innerHTML = HTML;
}

export { renderClock };
