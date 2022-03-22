export const deepClone = (value) => JSON.parse(JSON.stringify(value));
export const personTemplate = () => ({ name: '', age: 0 });
export const profileTemplate = () => ({ ...personTemplate(), children: [] });

export const getCachedProfile = () => {
  const cachedProfile = JSON.parse(localStorage.getItem('profile'));
  try {
    const { name, age, children } = cachedProfile;
    return { name, age, children };
  } catch (error) {
    return profileTemplate();
  }
};

export const isProfileCached = () => {
  const { name, age } = getCachedProfile();
  return name?.length > 0 && age > 0;
};

export const validateProfile = (profile) => {
  const errors = [];
  if (!profile.name || profile?.name.length === 0) {
    errors.push('Profile must have a name');
  }
  if (!profile.age) {
    errors.push('Profile must have age and it must not be zero');
  }
  return errors;
};
