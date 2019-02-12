import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from '../Header';
import Footer from '../Footer';
import SideBarContainer from '../../../container/side/SideBarContainer';
const cx = classNames.bind(styles);

const PageTemplate = ({ children }) => (
  <div className={cx('page-template')}>
    <SideBarContainer />
    <main>{children}</main>
    <Footer />
  </div>
);

export default PageTemplate;
