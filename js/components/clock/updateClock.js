import { formatNumber } from './formatNumber.js';
/**
 *
 * @param {[]} DOMelements list ofelements where need to change values
 * @param {Number[]} timeValues list of numbers
 */
function updateClock(DOMelements, timeValues) {
  for (let i = 0; i < DOMelements.length; i++) {
    i
      ? (DOMelements[i].innerText = formatNumber(timeValues[i]))
      : (DOMelements[i].innerText = timeValues[i]);
  }
}
export { updateClock };
