import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/user.context';

import Dropdown from '../../dropdown/dropdown.component';
import SignIn from '../../sign-in/sign-in.component';

import emptyBag from '../../../assets/shopping-bag-empty.svg';
import user from '../../../assets/user.svg';
import userLoggedIn from '../../../assets/user-logged-in.svg';

import './navigation-bar.styles.scss';

const NavigationBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { currentUser } = useContext(UserContext);

  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className='navigation__bar'>
      <div className='navigation__bar--logo'>
        <Link to='/'>
          <p className='text-white navigation__bar--link'>HOME</p>
        </Link>
      </div>
      <div className='navigation__bar--links'>
        <Link to='/trips'>
          <p className='text-white navigation__bar--link'>BOOKING</p>
        </Link>
        <Link to='/checkout'>
          <img src={emptyBag} alt='empty bag' className='icon' />
        </Link>
        <div className='navigation__bar--link'>
          {currentUser === null ? (
            <img
              src={user}
              alt='user'
              className='icon'
              onClick={() => handleCart()}
            />
          ) : (
            <img
              src={userLoggedIn}
              alt='user'
              className='icon'
              onClick={() => handleCart()}
            />
          )}
        </div>
      </div>
      {isCartOpen ? (
        <Dropdown handleCart={handleCart}>
          {<SignIn handleCart={handleCart} />}
        </Dropdown>
      ) : null}
    </div>
  );
};

export default NavigationBar;
