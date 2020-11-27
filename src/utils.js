import {SortingTypes} from "./const.js";

// Получить округленное целое значение рейтинга либо ширину блока рейтинга
export const ratingBlock = (rating, value = `width`) => {
  if (value === `width`) {

    return Math.round(rating) * 20;
  }

  return Math.round(rating);
};

// Отсортировать массив объектов по увеличению числового значения keyName
const sortArrayOfObjectsByIncreasing = (arrayName, keyName) => {
  arrayName.sort((a, b) => a[keyName] - b[keyName]);
  return arrayName;
};

// Отсортировать массив объектов по убыванию числового значения keyName
const sortArrayOfObjectsByDescending = (arrayName, keyName) => {
  arrayName.sort((a, b) => b[keyName] - a[keyName]);
  return arrayName;
};

export const sortOffersBySortyngType = (offers, sortingType) => {
  const offersArrayNew = [...offers];
  switch (sortingType) {
    case SortingTypes.TO_HIGH_PRICE:
      return sortArrayOfObjectsByIncreasing(offersArrayNew, `price`);

    case SortingTypes.TO_LOW_PRICE:
      return sortArrayOfObjectsByDescending(offersArrayNew, `price`);

    case SortingTypes.TOP_RATED:
      return sortArrayOfObjectsByDescending(offersArrayNew, `rating`);
  }

  return offersArrayNew;
};

export const filterArrayOfObjectByField = (arrayName, fieldName, value) => arrayName.filter((obj) => obj[fieldName] === value);

export const filterOffersByCity = (offers, city) => offers.filter((obj) => obj.city.name === city);

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
