import { useEffect, useState } from 'react';
interface iImagePreloader {
  src: string;
  alt: string;
  classList: string;
}
export function ImagePreloader({ src, alt, classList }: iImagePreloader) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
  }, [src]);

  if (!imageLoaded) {
    return (
      <span
        data-testid="image-preloader-loading"
        className={classList + ' animate-pulse bg-gray-200'}
      ></span>
    );
  }

  return (
    <img
      data-testid="image-preloader-img"
      src={src}
      alt={alt}
      className={classList}
    />
  );
}
