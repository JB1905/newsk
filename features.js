const featureFlags = {
  pagination: false,
  favorites: false,
  advancedSearch: false,
  menu: false,
};

export const isFeatureEnabled = (name) => featureFlags[name];
export const setFeature = (name, status) => (featureFlags[name] = status);
export const getAll = () => featureFlags;
