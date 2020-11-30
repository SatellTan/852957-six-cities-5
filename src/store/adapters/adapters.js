export const adaptOffersToClient = (offers) => {

  return offers.map((offer) => adaptOffer(offer));
};

const adaptOffer = (offer) => {

  const newHost = Object.assign({}, offer.host);
  delete Object.assign(newHost, {[`avatarUrl`]: offer.host[`avatar_url`]})[`avatar_url`];
  delete Object.assign(newHost, {[`isPro`]: offer.host[`is_pro`]})[`is_pro`];

  const newOffer = Object.assign({}, offer);
  delete Object.assign(newOffer, {[`isPremium`]: offer[`is_premium`]})[`is_premium`];
  delete Object.assign(newOffer, {[`isFavorite`]: offer[`is_favorite`]})[`is_favorite`];
  delete Object.assign(newOffer, {[`previewImage`]: offer[`preview_image`]})[`preview_image`];
  delete Object.assign(newOffer, {[`maxAdults`]: offer[`max_adults`]})[`max_adults`];
  Object.assign(newOffer, {host: newHost});

  return newOffer;
};
