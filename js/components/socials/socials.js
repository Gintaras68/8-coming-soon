function socials(selector, data) {
  const DOM = document.querySelector(selector);

  let content = '';
  data.forEach(({ href, icon, active }) => {
    if (active) {
      content += `<a href=${href} class="social-link" target="_blank"><i class="${icon}"></i></a>`;
    }
  });
  DOM.innerHTML += content;
}

export { socials };
