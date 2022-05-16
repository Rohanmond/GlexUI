const starsEl = document.querySelector('.rating-container');
const outputEl = document.getElementById('outputNum');
starsEl.addEventListener('click', (e) => {
  if (e.target.childNodes.length > 0) return;
  let i = 0;
  while (i < starsEl.children.length) {
    starsEl.children[i].classList.replace('fas', 'far');

    i++;
  }
  i = 0;
  while (i < starsEl.children.length) {
    starsEl.children[i].classList.replace('far', 'fas');
    if (e.target.id === starsEl.children[i].id) {
      break;
    }
    i++;
  }
  outputEl.innerText = `${i + 1}/5`;
});
