export const ratingBlockWidth = (reviews) => {
  const gradesArray = reviews.map(x => x.grade);
  const totalRating = gradesArray.reduce((acc, c) => acc + c, 0) / gradesArray.length;

  return Math.round(totalRating) * 20;
};
