import { loadImage } from '../src';

// copy from https://ja.wikipedia.org/wiki/Data_URI_scheme
const DATA_URI =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

describe('loadImage', () => {
  test('succeed to load', async () => {
    await expect(loadImage(DATA_URI)).resolves.toBeInstanceOf(Image);
    await expect(loadImage(DATA_URI, { crossOrigin: 'Anonymous' })).resolves.toBeInstanceOf(Image);
  });

  test('succeed to load a <img>', async () => {
    const img = new Image();
    img.src = DATA_URI;
    await expect(loadImage(img)).resolves.toBeInstanceOf(Image);
  });

  test('succeed to open a loaded <img>', async () => {
    const img = new Image();
    img.src = DATA_URI;
    await new Promise((resolve) => {
      img.onload = resolve;
    });
    await expect(loadImage(img)).resolves.toBeInstanceOf(Image);
  });

  test('load loaded img', async () => {});

  test('failed to load', async () => {
    await expect(loadImage('')).rejects.toBeInstanceOf(Image);
  });
});
