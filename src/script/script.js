const coin = document.querySelector('.coin');
const flipBtn = document.querySelector('#flip-button');
const resetBtn = document.querySelector('#reset-button');

let heads = 0;
let tails = 0;

flipBtn.addEventListener('click', () => {
  let i = Math.floor(Math.random() * 2);

  coin.style.animation = 'none';

  if (i) {
    setTimeout(function () {
      coin.style.animation = 'spin-heads 3s forwards';
    }, 100);
    tails++;
  } else {
    setTimeout(function () {
      coin.style.animation = 'spin-tails 3s forwards';
    }, 100);
    heads++;
  }
  setTimeout(updateStats, 3000);
  disableButton();
});

document.addEventListener('keypress', (event) => {
  if (event.code === 'Space') {
    let i = Math.floor(Math.random() * 2);

    coin.style.animation = 'none';

    if (i) {
      setTimeout(function () {
        coin.style.animation = 'spin-heads 3s forwards';
      }, 100);
      tails++;
    } else {
      setTimeout(function () {
        coin.style.animation = 'spin-tails 3s forwards';
      }, 100);
      heads++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
  }
});

function updateStats() {
  document.querySelector('#heads-count').textContent = `${heads}`;
  document.querySelector('#tails-count').textContent = `${tails}`;
}

function disableButton() {
  flipBtn.disabled = true;
  resetBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
    resetBtn.disabled = false;
  }, 3000);
};

resetBtn.addEventListener('click', () => {
  coin.style.animation = 'none';
  heads = 0;
  tails = 0;
  updateStats();
});