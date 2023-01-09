const LOCALSTORAGE_BROWSER = "browser";

export const saveUser = <T>(data: T): void => {
  localStorage.setItem(LOCALSTORAGE_BROWSER, JSON.stringify(data));
};

export const getUser = <T>(): T => {
  let valueFromLS = localStorage.getItem(LOCALSTORAGE_BROWSER) || "[]";
  return JSON.parse(valueFromLS) as T;
};
