export const OFFERS_CITIES = {
  Paris: {
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 10
    }
  },
  Cologne: {
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 10
    }
  },
  Brussels: {
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 10
    }
  },
  Amsterdam: {
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 10
    }
  },
  Hamburg: {
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 10
    }
  },
  Dusseldorf: {
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 10
    }
  },
};

export const OfferTypes = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const START_CITY = Object.keys(OFFERS_CITIES)[0];

export const FavoritesList = [3, 1, 4];

export const CommentSettings = {
  COMMENTS_LENGTH_MIN: 50,
  COMMENTS_LENGTH_MAX: 300,
};

export const ICON_URL = `../../img/pin.svg`;

export const ACTIVE_ICON_URL = `../../img/pin-active.svg`;

export const ICON_SIZE = [30, 30];

export const MAX_REVIEWS_IN_BLOCK = 10;

export const SortingTypes = {
  POPULAR: `Popular`,
  TO_HIGH_PRICE: `Price: low to high`,
  TO_LOW_PRICE: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

export const RatingStars = {
  1: `terribly`,
  2: `badly`,
  3: `not bad`,
  4: `good`,
  5: `perfect`,
};

export const AppRoute = {
  LOGIN: `/login`,
  MAIN: `/`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
};

export const APIRoute = {
  OFFERS: `/hotels`,
  LOGIN: `/login`,
  FAVORITE: `/favorite`,
};

export const LoadingStatusForRequests = {
  IDLE: `idle`,
  LOADING: `loading`,
  SUCCEEDED: `succeeded`,
  FAILED: `failed`,
};
