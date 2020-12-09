import React from 'react';
import PropTypes from 'prop-types';
import styles from './Auth.module.css';

const Auth = ({src, login, register}) => {
  console.log(src, login, register);
  return(
    <>
    <div className={styles.auth}>
      <div className={styles.logoWrapper}></div>
      <p>{}</p>
      <button className={styles.loginBtn} type="button">{login}</button>
      <button className={styles.loginBtn} type="button">{register}</button>
    </div>
    </>
  );
};

Auth.defaultProps = {
  src: '../../images/logo.svg',
  login: 'Вход',
  register: 'Регистрация'
}

Auth.propTypes = {
  src: PropTypes.string,
  login: PropTypes.string,
  register: PropTypes.string,
};

export default Auth;