export const getImageHeight = (url) => {
  const image = new Image();
  image.src = url;
   return image.naturalHeight 
}