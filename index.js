const layers = ['crust', 'mantle', 'outer-core', 'inner-core'];
let num = 0;

function stars() {
  const body = document.querySelector('body');

  for (let i = 0; i < 200; i++) {
    const randNumTop = Math.floor(Math.random() * 100);
    const randNumRight = Math.floor(Math.random() * 100);

    const stars = document.createElement('p');
    stars.classList.add('star');
    stars.textContent = '.';
    stars.style.top = `${randNumTop}vh`;
    stars.style.right = `${randNumRight}vw`;
    body.appendChild(stars);
  }
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

function changeLayer() {
  const htmlLayers = document.querySelectorAll('.layer');
  const goBack = document.querySelector('.go-back');
  const goForward = document.querySelector('.go-forward');

  htmlLayers.forEach((layer) => {
    if (layer.classList.contains(layers[num])) {
      layer.style.display = 'block';
    } else {
      layer.style.display = 'none';
    }
  });

  goBack.addEventListener('click', () => {
    num--;

    htmlLayers.forEach((layer) => {
      if (layer.classList.contains(layers[num])) {
        layer.style.display = 'block';
      } else {
        layer.style.display = 'none';
      }
    });
  });

  goForward.addEventListener('click', () => {
    num++;

    htmlLayers.forEach((layer) => {
      if (layer.classList.contains(layers[num])) {
        layer.style.display = 'block';
      } else {
        layer.style.display = 'none';
      }
    });
  });
}

changeLayer();
stars();
applyShine();
