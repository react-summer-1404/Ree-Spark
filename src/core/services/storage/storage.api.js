const setItem = (key, value) => {
  try {
    if (typeof value === "string") {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (err) {
    console.error("setItem error:", err);
  }
};

const getItem = (key) => {
  try {
    const result = localStorage.getItem(key);
    if (!result || result === "undefined") return false;
    try {
      return JSON.parse(result);
    } catch {
      return result;
    }
  } catch (err) {
    console.error("getItem error:", err);
    return false;
  }
};

const getItemGeneric = (key) => {
  return localStorage.getItem(key) || false;
};

const setItemGeneric = (key, value) => {
  localStorage.setItem(key, value);
};

const removeItem = (key) => {
  localStorage.removeItem(key);
};

const clearStorage = () => {
  localStorage.clear();
};

export {
  setItem,
  getItem,
  removeItem,
  clearStorage,
  setItemGeneric,
  getItemGeneric,
};
