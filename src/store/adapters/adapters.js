// Объекты с названиями ключей полученных данных, которые необходимо адаптировать.
// В качестве свойств объектов - названия сопоставимых ключей после адаптации.
const offerKeysForConvert = {
  isPremium: `is_premium`,
  isFavorite: `is_favorite`,
  previewImage: `preview_image`,
  maxAdults: `max_adults`,
};

const offerHostKeysForConvert = {
  avatarUrl: `avatar_url`,
  isPro: `is_pro`,
};

const authInfoKeysForConvert = {
  avatarUrl: `avatar_url`,
  isPro: `is_pro`,
};

export const adaptAuthInfoToClient = (data) => {
  const authInfo = Object.assign({}, data);
  сonvertKeysOfObject(authInfo, authInfoKeysForConvert);

  return authInfo;
};

export const adaptOffersToClient = (offers) => {

  return offers.map((offer) => adaptOffer(offer));
};

const adaptOffer = (data) => {

  const offer = Object.assign({}, data);
  сonvertKeysOfObject(offer, offerKeysForConvert);

  if (offer.host) {
    сonvertKeysOfObject(offer.host, offerHostKeysForConvert);
  }

  return offer;
};

const toCamelCase = (target, inCamelCase, inSnakeCase) => {
  target[inCamelCase] = target[inSnakeCase];
  delete target[inSnakeCase];
};

const сonvertKeysOfObject = (obj, keys) => {
  Object.entries(keys).forEach(([inSnake, inCamel]) => toCamelCase(obj, inSnake, inCamel));
};
