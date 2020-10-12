// Получить ширину блока рейтинга в зависимости от его численного значения
export const ratingBlockWidth = (reviews) => {
  const gradesArray = reviews.map((x) => x.grade);
  const totalRating = gradesArray.reduce((acc, c) => acc + c, 0) / gradesArray.length;

  return Math.round(totalRating) * 20;
};

// Отсортировать массив объектов по строковому значению keyName
export const sortingArrayOfObjectsByStringValue = (arrayName, keyName) => {
  arrayName.sort((a, b) => a[keyName].toLowerCase() > b[keyName].toLowerCase() ? 1 : -1);

  return arrayName;
};
