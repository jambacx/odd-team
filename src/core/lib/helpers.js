export function getProductThumb(imagesRaw, suffix = "_t250") {
  try {
    if (imagesRaw) {
      const images = JSON.parse(imagesRaw);
      if (images.length) {
        return images[0].url;
      }
    }
  } catch (e) {}

  return "/img/product.png";
}

export function getProductImagesThumb(imagesRaw, suffix = "_t250") {
  try {
    if (imagesRaw) {
      const images = JSON.parse(imagesRaw);
      if (images.length) {
        return images;
      }
    }
  } catch (e) {}

  return [];
}

export function getDataThumb(data, suffix = "_t250") {
  try {
    if (data) {
      const exportedData = JSON.parse(data);
      return exportedData;
    }
  } catch (e) {}

  return "";
}

export function base64ToBlob(b64Data, sliceSize = 512) {
  let byteCharacters = atob(b64Data); //data.file there
  let byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    let slice = byteCharacters.slice(offset, offset + sliceSize);

    let byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    let byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  return new Blob(byteArrays, {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
}
