import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute, AuthorizationStatus} from "../../const";
import {authInfoType} from '../../types';
import {getAuthorizationStatus, getAuthInfo} from "../../store/selectors/selectors";

const Header = ({authorizationStatus, authInfo}) => {

  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.MAIN} className="header__logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={AppRoute.FAVORITES} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {isAuth ?
                    <span className="header__user-name user__name">{authInfo.email}</span>
                    :
                    <span className="header__login">Sign in</span>
                  }
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.oneOf(Object.keys(AuthorizationStatus)).isRequired,
  authInfo: authInfoType,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  authInfo: getAuthInfo(state),
});

export {Header};
export default connect(mapStateToProps)(Header);
