export const getPersistentOption = () => {
  // const { option } = JSON.parse(window.localStorage.getItem("filters"));
  const filters = getPersistentFilters();
  if (filters.option) {
    return filters.option;
  }
  return "Select your news";
};

export const getPersistentFilters = () => {
  const filters = JSON.parse(window.localStorage.getItem("filters"));
  console.log(filters);
  if (filters) {
    return filters;
  }
  return {};
};

export const setPersistentFilters = (option = "", page = 0) => {
  const data = {
    option,
    page,
  };
  window.localStorage.setItem("filters", JSON.stringify(data));
};

export const getPersistentFaves = () => {
  const faves = JSON.parse(window.localStorage.getItem("faves"));
  console.log(faves);
  return faves;
};
export const setPersistentFaves = (faves) => {
  window.localStorage.setItem("faves", JSON.stringify(faves));
};

export const getPersistentFavesId = () => {
  const faves = JSON.parse(window.localStorage.getItem("faves"));
  console.log(faves);
  return faves;
};
export const setPersistentFavesId = (faves) => {
  window.localStorage.setItem("faves", JSON.stringify(faves));
};
