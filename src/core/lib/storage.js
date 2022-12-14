const STORAGE_PREFIX = process.env.REACT_APP_STORAGE_PREFIX || "zochil";

export function getItem(key, haveToParse = false) {
  if (!process.browser) {
    return null;
  }

  const item = window.localStorage.getItem(`${STORAGE_PREFIX}_${key}`);

  if (haveToParse) {
    try {
      return JSON.parse(item);
    } catch (error) {
      return null;
    }
  } else {
    return item;
  }
}

export function setItem(key, rawValue, haveToStringify = false) {
  if (!process.browser) {
    return;
  }

  let value = rawValue;

  if (haveToStringify) {
    value = JSON.stringify(rawValue);
  }

  window.localStorage.setItem(`${STORAGE_PREFIX}_${key}`, value);
}

export function removeItem(key) {
  if (!process.browser) {
    return;
  }

  window.localStorage.removeItem(`${STORAGE_PREFIX}_${key}`);
}
