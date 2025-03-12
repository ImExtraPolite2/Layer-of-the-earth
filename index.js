const layers = ['crust', 'mantle', 'outer-core', 'inner-core'];
let num = 0;

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
