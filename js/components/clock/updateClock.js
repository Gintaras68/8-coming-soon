import { formatNumber } from './formatNumber.js';

function updateClock(DOMelements, timeValues) {
  for (let i = 0; i < DOMelements.length; i++) {
    i
      ? (DOMelements[i].innerText = formatNumber(timeValues[i]))
      : (DOMelements[i].innerText = timeValues[i]);
  }
}
export { updateClock };
