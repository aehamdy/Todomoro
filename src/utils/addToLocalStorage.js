function addToLocalStorage(localStorageKey, data) {
  const stringifiedData = JSON.stringify(data);

  localStorage.setItem(localStorageKey, stringifiedData);
}

export default addToLocalStorage;
