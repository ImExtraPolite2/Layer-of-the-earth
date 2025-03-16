const layers = ['crust', 'mantle', 'outer-core', 'inner-core'];
let num = 0;
let aniTimer = '250';
const music = 'assets/space-noises.mp3';

function stars() {
  const body = document.querySelector('body');

  for (let i = 0; i < 200; i++) {
    const randNumTop = Math.floor(Math.random() * 95);
    const randNumRight = Math.floor(Math.random() * 100);

    const stars = document.createElement('p');
    stars.classList.add('star');
    stars.textContent = '.';
    stars.style.top = `${randNumTop}%`;
    stars.style.right = `${randNumRight}vw`;
    body.appendChild(stars);
  }
}

function buttonOn() {
  const musicButton = document.querySelector('.off-button');
  const musicButtonOuter = document.querySelector('.off-outer');

  musicButtonOuter.className = 'on-outer';
  musicButton.className = 'on-button';
}

function buttonOff() {
  const musicButton = document.querySelector('.on-button');
  const musicButtonOuter = document.querySelector('.on-outer');

  musicButtonOuter.className = 'off-outer';
  musicButton.className = 'off-button';
}

function playSound() {
  const button = document.querySelector('.sound-on');
  const playSound = new Audio(music);

  let on = false;

  button.addEventListener('click', () => {
    on = !on;

    if (on === false) {
      buttonOff();
      playSound.pause();
      playSound.currentTime = 0;
    } else {
      buttonOn();
      playSound.play();
    }

    console.log(on);
  });
}

function applyShine() {
  const stars = document.querySelectorAll('.star');

  for (let i = 0; i < stars.length; i++) {
    if (i < 50) {
      stars[i].style.animation = 'shining 4000ms ease-in-out infinite';
    } else if (i > 50 && i < 100) {
      stars[i].style.animation = 'shining 4000ms 1000ms ease-in-out infinite';
    } else if (i > 100 && i < 150) {
      stars[i].style.animation = 'shining 4000ms 2000ms ease-in-out infinite';
    } else {
      stars[i].style.animation = 'shining 4000ms 3000ms ease-in-out infinite';
    }
  }
}

function original() {
  const htmlLayers = document.querySelectorAll('.layer');

  htmlLayers.forEach((layer) => {
    if (layer.classList.contains(layers[num])) {
      layer.style.display = 'block';
    } else {
      layer.style.display = 'none';
    }
  });
}

function changeLayer(moveFromMiddle, moveFromSide) {
  const htmlLayers = document.querySelectorAll('.layer');

  htmlLayers.forEach((layer) => {
    if (layer.classList.contains(layers[num])) {
      layer.style.animation = `${moveFromSide} ${aniTimer}ms ease-in-out`;

      setTimeout(() => {
        layer.style.display = 'block';
      }, aniTimer);
    } else {
      layer.style.animation = `${moveFromMiddle} ${aniTimer}ms ease-in-out`;

      setTimeout(() => {
        layer.style.display = 'none';
        layer.style.animation = 'none';
      }, aniTimer);
    }
  });
}

function goBack() {
  const goBack = document.querySelector('.go-back');

  goBack.addEventListener('click', () => {
    num--;

    if (num < 0) {
      num = layers.length - 1;
    }

    changeLayer('moveFromMiddleToLeft', 'moveFromLeft');
  });
}

function goForward() {
  const goForward = document.querySelector('.go-forward');

  goForward.addEventListener('click', () => {
    num++;
    if (num >= layers.length) {
      num = 0;
    }

    changeLayer('moveFromMiddleToRight', 'moveFromRight');
  });
}

original();
playSound();

stars();
applyShine();
goBack();
goForward();
