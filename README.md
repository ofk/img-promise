# img-promise

Load a image, return a promise.

## Install

```sh
npm install img-promise
```

OR

```html
<script src="img-promise.umd.js"></script>
<script>
  const { loadImage } = imgPromise;
  // :
</script>
```

## Usage

```js
import { loadImage } from 'img-promise';

// pass a URL string
loadImage('img.png')
  .then((img) => {
    console.log("It's loaded", img);
  })
  .catch(() => {
    console.log("It's failed to load");
  });

// pass an <img> element
loadImage(document.querySelector('img')).then((img) => {
  console.log("It's loaded", img);
});
```

### Enable CORS

```js
import { loadImage } from 'img-promise';

const ctx = document.querySelector('canvas').getContext('2d');

loadImage('https://picsum.photos/200/300', {
  crossOrigin: 'Anonymous',
}).then((img) => {
  ctx.drawImage(img, 0, 0, img.width, img.height);
});
```
