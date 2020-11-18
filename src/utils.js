import {SortingTypes} from "./const.js";

// Получить ширину блока рейтинга в зависимости от его численного значения
export const ratingBlock = (reviews, value = `width`) => {
  const gradesArray = reviews.map((x) => x.grade);
  const totalRating = gradesArray.reduce((acc, c) => acc + c, 0) / gradesArray.length;
  if (value === `width`) {

    return Math.round(totalRating) * 20;
  }

  return parseInt(totalRating.toFixed(2), 10);
};

// Отсортировать массив объектов по строковому значению keyName
export const sortArrayOfObjectsByStringValue = (arrayName, keyName) => {
  arrayName.sort((a, b) => a[keyName].toLowerCase() > b[keyName].toLowerCase() ? 1 : -1);

  return arrayName;
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
      return sortArrayOfObjectsByIncreasing(offersArrayNew, `rentPrice`);

    case SortingTypes.TO_LOW_PRICE:
      return sortArrayOfObjectsByDescending(offersArrayNew, `rentPrice`);

    case SortingTypes.TOP_RATED:
      return offersArrayNew.sort((a, b) => ratingBlock(b.reviews, `rating`) - ratingBlock(a.reviews, `rating`));
  }

  return offersArrayNew;
};

export const filterArrayOfObjectByField = (arrayName, fieldName, value) => arrayName.filter((obj) => obj[fieldName] === value);

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
