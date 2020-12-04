
import axios from "axios";

const BACKEND_URL = `https://5.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
      // Бросаем ошибку, потому что важно прервать цепочку промисов после запроса авторизации.
      // Запрос авторизации — это особый случайб и важно дать понять приложению, что запрос был неудачным.
      throw err;
    }

    if (response.status === HttpCode.BAD_REQUEST) {
      // alert(`Недостаточно полученной информации`);
      throw err;
    }

    if (response.status === HttpCode.NOT_FOUND) {
      // alert(`Not found`);
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
