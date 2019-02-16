import React, { Component } from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '../Button';

const cx = classNames.bind(styles);

class Header extends Component {
  render() {
    const { onToggle } = this.props;
    return (
      <header className={cx('header')}>
        <div className={cx('header-content')}>
          <div className={cx('left')}>
            <Button onToggle={onToggle} theme="outline">
              ë©ë´
            </Button>
          </div>
          <div className={cx('brand')}>
            <Link to="/">reactblog</Link>
          </div>
          <div className={cx('right')}>
            <Button theme="outline" to="/editor">
              ì í¬ì¤í¸
            </Button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
