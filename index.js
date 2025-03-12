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
