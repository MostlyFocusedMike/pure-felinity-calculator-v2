import type { Cat } from "./types";
import { randomId } from "./utils";

// const cats = [
//   {
//     id: 'rmhy-1723349417441',
//     name: 'Marrival',
//     gender: 'm',
//     traits: [13, 13, 13, 3, 12, 14, 3],
//     isTestable: false,
//   },
//   {
//     id: 'abds-2834132000112',
//     name: 'Hermes',
//     gender: 'm',
//     traits: [10, 11, 10, 5, 13, 12, 6],
//     isTestable: false,
//   },
//   {
//     id: 'wiyl-1723349429713',
//     name: 'Cherise',
//     gender: 'f',
//     traits: [15, 12, 15, 11, 14, 12, 2],
//     isTestable: true,
//   },
//   {
//     id: 'hous-1723349428875',
//     name: 'Lacey',
//     gender: 'f',
//     traits: [13, 12, 15, 8, 14, 14, 3],
//     isTestable: false,
//   },
//   {
//     id: 'bxhw-1723349430530',
//     name: 'Betany',
//     gender: 'f',
//     traits: [11, 12, 14, 9, 11, 12, 3],
//     isTestable: false,
//   },
// ];

export const setLocalStorageKey = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageKey = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) as string)
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const setLocalCats = (cats: Cat[]) => {
  setLocalStorageKey('cats', cats);
};

export const addCat = (cat: Omit<Cat, 'id'>) => {
  const cats = getCats();
  cats.push({ ...cat, id: randomId() })
  setLocalCats(cats);
};

export const getCats = (showOnlyTestable = false) => {
  const cats: Cat[] = getLocalStorageKey('cats') || [];

  cats.sort((a: Cat, b: Cat) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  });

  return showOnlyTestable ? cats.filter(cat => cat.isTestable) : cats;
};

// export const updateCat = (newCat) => {
//   const cats = getCats();
//   const catIdx = cats.findIndex((cat) => cat.id === newCat.id);
//   if (catIdx < 0) return;
//   cats[catIdx] = { ...cats[catIdx], ...newCat };
//   setCats(cats);
// };

// export const updateAllCatsIsTestableByGender = (gender, isTestable) => {
//   const cats = getCats();
//   cats.forEach(cat => {
//     if (cat.gender === gender) cat.isTestable = isTestable
//   });
//   setCats(cats);
// };

// export const setFalseTestToNonPrimaryCats = (catId, gender) => {
//   const cats = getCats();
//   cats.forEach(cat => {
//     if (cat.id === catId) {
//       cat.isTestable = true;
//       return;
//     }

//     if (cat.gender === gender) cat.isTestable = false;
//   });

//   setCats(cats);
// };

// export const removeCat = (catId) => {
//   setCats(getCats().filter(cat => cat.id !== catId));
// };

// export const getCatsByGender = (gender, showOnlyTestable = false) => {
//   return getCats(showOnlyTestable).filter(cat => cat.gender === gender)
// };

// const GENDER_KEY = 'catCalculator:primaryGender';

// export const getPrimaryGender = () => {
//   return getLocalStorageKey(GENDER_KEY) || 'm';
// };

// export const setPrimaryGender = (gender) => {
//   setLocalStorageKey(GENDER_KEY, gender);
// };

// export const getPrimaryCat = () => {
//   const primaryGender = getPrimaryGender();
//   const cats = getCatsByGender(primaryGender);

//   return cats.find(cat => cat.isTestable);
// };

// export const setPrimaryCatDefault = () => {
//   const primaryGender = getPrimaryGender();
//   const cats = getCatsByGender(primaryGender);

//   const newPrimaryCat = { ...cats[0], isTestable: true };
//   updateCat(newPrimaryCat);
// };
