import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
//import offers from "./mocks/offers";
import {reducer} from "./store/reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

// const Settings = {
//   OFFERS_COUNT: 6
// };

ReactDOM.render(
    <Provider store={store}>
      <App
        offersCount={6}
        //offersCount={store.offersInCity.length}
        offers={store.offersInCity}
        // offersCount={Settings.OFFERS_COUNT}
        // offers={offers}
      />,
    </Provider>,
    document.querySelector(`#root`)
);
