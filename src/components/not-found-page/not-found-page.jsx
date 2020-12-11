import React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from "../../const";
import Footer from "../footer/footer";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <h4><Link to={AppRoute.MAIN}>Go to main page</Link></h4>
      <Footer/>
    </div>
  );
};

export default NotFoundPage;
