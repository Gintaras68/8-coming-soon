function progressBar(selector, data) {
  const DOM = document.querySelector(selector);
  let HTML = '';

  data.forEach(({ label, value }) => {
    HTML += ` <div class="progress-bar">
                <div class="top">
                  <span>${label}</span>
                  <span>${value} %</span>
                </div>

                <div class="bottom">
                  <div class="progress" style="width: ${value}%" ></div>
                </div>
              </div>`;
  });

  DOM.insertAdjacentHTML('beforeend', HTML);
}

export { progressBar };
