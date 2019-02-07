import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from '../Header';
import Footer from '../Footer';
import SideBar from '../SideBar';

const cx = classNames.bind(styles);

const PageTemplate = ({ children }) => (
  <div className={cx('page-template')} id="outer-container">
    <SideBar
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
      currentMenu="push"
    />
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default PageTemplate;
