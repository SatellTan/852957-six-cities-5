/*
1.Фотографии. Выводится до 6-ти изображений.
2.Заголовок. Краткое описание предложения,
  например: «Beautiful & luxurious studio at great location».
3.Подробное описание.
4.Премиальность.
5.Тип жилья. Одно из предопределённых значений:
  apartment (Apartment), room (Private Room), house (House), hotel (Hotel).
6.Рейтинг. Оценка предложения отображается в виде закрашенных звезд и среднего бала
  (например, 4.8). Максимальное количество звёзд — 5.
7.Количество спален. Например, 3 Bedrooms.
8.Максимальное количество гостей. Например, Max 4 adults.
9.Стоимость аренды за ночь. Сумма всегда отображается в евро.
10.Список бытовых предметов в квартире (Wifi, Heating, Kitchen, Cable TV и т. д.);
11.Информация о хозяине: аватарка, имя, отметка super (звёздочка возле аватарки).
12.Отзывы. Каждый отзыв содержит:
    Аватар автора.
    Имя автора.
    Оценку. Оценка выводится в виде закрашенных звезд. Максимальное количество звёзд — 5.
    Дата отзыва в формате: Месяц Год. Например: April 2019.
    Текст отзыва.
*/

const IMG_URL = `http://placeimg.com/260/200`;
const AVATAR_URL = `https://api.adorable.io/avatars`;

export default [
  {
    id: 1,
    city: {
      location: {
        latitude: 48.8534,
        longitude: 2.3488,
        zoom: 10,
      },
      name: `Paris`
    },
    images: [`${IMG_URL}/${Math.round(Math.random() * 100)}`,
      `${IMG_URL}/${Math.round(Math.random() * 100)}`,
      `${IMG_URL}/${Math.round(Math.random() * 100)}`],
    title: `Title 1. aaaaaaa bbbbb ccccccc`,
    description: `description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1`,
    isFavorite: true,
    isPremium: false,
    type: `apartment`,
    bedrooms: 2,
    maxAdults: 4,
    previewImage: `${IMG_URL}/${Math.round(Math.random() * 100)}`,
    price: 90,
    rating: 4,
    goods: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Conditioning`, `Safe`],
    host: {
      avatarUrl: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
      id: 3,
      name: `Piter Mog`,
      isPro: true,
    },
    location: {
      latitude: 48.8534,
      longitude: 2.3488,
      zoom: 8,
    },
    reviews: [
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Victor P.`,
        grade: 4,
        date: `April 2019`,
        text: `vvvvvvvvvvv vvvvvvvvvvvvvvvv vvvvvvvvvvvvvvvv vvvvvvvvvvvvv`,
      }
    ],
  },
  {
    id: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: `Amsterdam`
    },
    images: [`${IMG_URL}/${Math.round(Math.random() * 100)}`,
      `${IMG_URL}/${Math.round(Math.random() * 100)}`,
      `${IMG_URL}/${Math.round(Math.random() * 100)}`,
      `${IMG_URL}/${Math.round(Math.random() * 100)}`],
    title: `Title 2. bbbbb cccccccc ddddddddddddd`,
    description: `description 2 description 2 description 2 description 2 description 2 description 2 description 2 description 2`,
    isFavorite: false,
    isPremium: false,
    type: `room`,
    bedrooms: 1,
    maxAdults: 2,
    previewImage: `${IMG_URL}/${Math.round(Math.random() * 100)}`,
    price: 40,
    rating: 2.5,
    goods: [`Wifi`, `Heating`, `Cable TV`],
    host: {
      avatarUrl: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
      id: 4,
      name: `Susan Kors`,
      isPro: false,
    },
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    reviews: [
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Kate P.`,
        grade: 3,
        date: `May 2018`,
        text: `kkkkkkkkkkkkkk kkkkkkkkkkkkkkkk kkkkkkkkkkkkkk kkkkkkkkkkkkkkkk`,
      },
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Oleg P.`,
        grade: 2,
        date: `May 2019`,
        text: `ooooooooooo oooooooooooooooo ooooooooooooooooooo oooooooooooo`,
      },
    ],
  },
  {
    id: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: `Amsterdam`
    },
    images: [`${IMG_URL}/${Math.round(Math.random() * 100)}`,
      `${IMG_URL}/${Math.round(Math.random() * 100)}`,
      `${IMG_URL}/${Math.round(Math.random() * 100)}`,
      `${IMG_URL}/${Math.round(Math.random() * 100)}`,
      `${IMG_URL}/${Math.round(Math.random() * 100)}`],
    title: `Title 3. ccccccccc ddddddd eeeeeee`,
    description: `description 3 description 3 description 3 description 3 description 3 description 3 description 3 description 3`,
    isFavorite: true,
    isPremium: true,
    type: `house`,
    bedrooms: 4,
    maxAdults: 9,
    previewImage: `${IMG_URL}/${Math.round(Math.random() * 100)}`,
    price: 400,
    rating: 4.67,
    goods: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Conditioning`, `Safe`, `Breakfast`],
    host: {
      avatarUrl: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
      id: 5,
      name: `Roy Lork`,
      isPro: true,
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    reviews: [
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Jack P.`,
        grade: 5,
        date: `May 2018`,
        text: `jjjjjjjjjjjjj jjjjjjjjjjjjj jjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjj`,
      },
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Ann G.`,
        grade: 5,
        date: `May 2020`,
        text: `aaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaa`,
      },
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Lora B.`,
        grade: 4,
        date: `June 2020`,
        text: `lllllllllllllll lllllllllllllll llllllllllllll llllllllllllll`,
      },
    ],
  },
  {
    id: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: `Amsterdam`
    },
    images: [`${IMG_URL}/${Math.round(Math.random() * 100)}`,
      `${IMG_URL}/${Math.round(Math.random() * 100)}`,
      `${IMG_URL}/${Math.round(Math.random() * 100)}`,
      `${IMG_URL}/${Math.round(Math.random() * 100)}`,
      `${IMG_URL}/${Math.round(Math.random() * 100)}`,
      `${IMG_URL}/${Math.round(Math.random() * 100)}`],
    title: `Title 4. dddddd eeeee ffffffffffffffffff`,
    description: `description 4 description 4 description 4 description 4 description 4 description 4 description 4 description 4`,
    isFavorite: true,
    isPremium: false,
    type: `hotel`,
    bedrooms: 1,
    maxAdults: 2,
    previewImage: `${IMG_URL}/${Math.round(Math.random() * 100)}`,
    price: 180,
    rating: 3.75,
    goods: [`Wifi`, `Heating`, `Cable TV`, `Conditioning`, `Safe`, `Reception`],
    host: {
      avatarUrl: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
      id: 6,
      name: `John Born`,
      isPro: false,
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    reviews: [
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Oliver P.`,
        grade: 4,
        date: `May 2018`,
        text: `1 oooooooooooo oooooooooooooooo ooooooooooooo ooooooooooooo`,
      },
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Rose G.`,
        grade: 4,
        date: `May 2020`,
        text: `1 rrrrrrrrrrrrrr rrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrr rrrrrrrrrrrrr`,
      },
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Helen B.`,
        grade: 3,
        date: `June 2020`,
        text: `1 hhhhhhhhhhh hhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh`,
      },
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Lili B.`,
        grade: 4,
        date: `August 2018`,
        text: `1 lllllllllllllll llllllllllllllllll llllllllllllllll llllllllllllllllllll`,
      },
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Oliver P.`,
        grade: 4,
        date: `May 2018`,
        text: `2 oooooooooooo oooooooooooooooo ooooooooooooo ooooooooooooo`,
      },
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Rose G.`,
        grade: 4,
        date: `May 2020`,
        text: `2 rrrrrrrrrrrrrr rrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrr rrrrrrrrrrrrr`,
      },
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Helen B.`,
        grade: 3,
        date: `June 2020`,
        text: `2 hhhhhhhhhhh hhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh`,
      },
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Lili B.`,
        grade: 4,
        date: `August 2018`,
        text: `2 lllllllllllllll llllllllllllllllll llllllllllllllll llllllllllllllllllll`,
      },
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Oliver P.`,
        grade: 4,
        date: `May 2018`,
        text: `3 oooooooooooo oooooooooooooooo ooooooooooooo ooooooooooooo`,
      },
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Rose G.`,
        grade: 4,
        date: `May 2020`,
        text: `3 rrrrrrrrrrrrrr rrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrr rrrrrrrrrrrrr`,
      },
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Helen B.`,
        grade: 3,
        date: `June 2020`,
        text: `3 hhhhhhhhhhh hhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh`,
      },
      {
        picture: `${AVATAR_URL}/${Math.round(Math.random() * 100)}`,
        name: `Lili B.`,
        grade: 4,
        date: `August 2018`,
        text: `3 lllllllllllllll llllllllllllllllll llllllllllllllll llllllllllllllllllll`,
      },
    ],
  },
];
