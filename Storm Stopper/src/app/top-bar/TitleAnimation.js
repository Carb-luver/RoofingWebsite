const title = document.querySelector('.toolbarmenutitle');
const strTitle = title.textContent;
const splitTitle = strTitle.split('');
title.textContent = '';

for (let i = 0; i < splitTitle.length; i++) {
  title.innerHTML += '<span>' + splitTitle[i] + '</span>';
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = title.querySelectorAll('span')[char];
  if (span != ' ') {
    span.classList.add('fade');
    char++;
    if (char === splitTitle.length) {
      complete();
      return;
    }
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
