function getFromLocalStorage(localStorageKey) {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

export default getFromLocalStorage;
