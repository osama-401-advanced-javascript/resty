import styles from '../components-styles/header.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

const header = () => {
  return (
    <header className={styles.header}>
      <h1>RUSTy</h1>
      <nav>
        <ul>
          <li>
            <NavLink exact to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/history'>History</NavLink>
          </li>
          <li>
            <NavLink to='/help'>Help</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
