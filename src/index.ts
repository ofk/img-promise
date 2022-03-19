export const loadImageElement = (image: HTMLImageElement): Promise<HTMLImageElement> =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const settle = (): void => {
      if (image.naturalWidth) {
        resolve(image);
      } else {
        reject(image);
      }
    };
    if (!image.complete) {
      const onComplete = (): void => {
        image.removeEventListener('load', onComplete);
        image.removeEventListener('error', onComplete);
        settle();
      };
      image.addEventListener('load', onComplete);
      image.addEventListener('error', onComplete);
    } else {
      settle();
    }
  });

export const loadImage = (
  imageOrSource: HTMLImageElement | string,
  options?: Partial<HTMLImageElement>
): Promise<HTMLImageElement> => {
  const isImageElement = imageOrSource instanceof HTMLImageElement;
  const image = isImageElement ? imageOrSource : new Image();
  if (options) Object.assign(image, options);
  if (!isImageElement) image.src = imageOrSource;
  return loadImageElement(image);
};
