import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/logo.svg';

import './navigation.styles.scss'
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../context/cart.context';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';


const Navigation = () => {
  //const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);
 
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (<span className='nav-link' onClick={signOutUser}>Sign Out</span>) :
              (<Link className='nav-link' to='/auth'>
                Sign In
              </Link>)
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;