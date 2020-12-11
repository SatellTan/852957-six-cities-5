// Объекты с названиями ключей полученных данных, которые необходимо адаптировать.
// В качестве свойств объектов - названия сопоставимых ключей после адаптации.
const offerKeysForConvert = {
  isPremium: `is_premium`,
  isFavorite: `is_favorite`,
  previewImage: `preview_image`,
  maxAdults: `max_adults`,
};

const userKeysForConvert = {
  avatarUrl: `avatar_url`,
  isPro: `is_pro`,
};

export const adaptAuthInfoToClient = (data) => {
  const authInfo = Object.assign({}, data);
  сonvertKeysOfObject(authInfo, userKeysForConvert);

  return authInfo;
};

export const adaptOffersToClient = (offers) => {

  return offers.map((offer) => adaptOfferToClient(offer));
};

export const adaptReviewsToClient = (reviews) => {
  if (reviews) {
    reviews.map((review) => сonvertKeysOfObject(review.user, userKeysForConvert));
  }

  return reviews;
};

export const adaptOfferToClient = (data) => {

  const offer = Object.assign({}, data);
  сonvertKeysOfObject(offer, offerKeysForConvert);

  if (offer.host) {
    сonvertKeysOfObject(offer.host, userKeysForConvert);
  }

  return offer;
};

const castToCamelCase = (target, inCamelCase, inSnakeCase) => {
  target[inCamelCase] = target[inSnakeCase];
  delete target[inSnakeCase];
};

const сonvertKeysOfObject = (obj, keys) => {
  Object.entries(keys).forEach(([inCamelCase, inSnakeCase]) => castToCamelCase(obj, inCamelCase, inSnakeCase));
};
