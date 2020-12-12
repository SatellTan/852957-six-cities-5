import {combineReducers} from "redux";
import {appProcess} from "./app-process/app-process";
import {appData} from "./app-data/app-data";
import {appDataOffers} from "./app-data-offers/app-data-offers";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  DATA_OFFERS: `DATA_OFFERS`,
  PROCESS: `PROCESS`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.DATA_OFFERS]: appDataOffers,
  [NameSpace.PROCESS]: appProcess,
  [NameSpace.USER]: user,
});
