import { FC, HTMLAttributes } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Container } from './styles';
import logoImg from '../../assets/Logo.svg';
import basketImg from '../../assets/basket.svg';
import { Link } from 'react-router-dom';

const Nav: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <ul>
        <li>
          <Link to='/'>
            <img src={logoImg} alt='Little Lemon Logo' />
          </Link>
        </li>
        <li>
          <HashLink to='/'>Home</HashLink>
        </li>
        <li>
          <HashLink to='/#about'>About</HashLink>
        </li>
        <li>
          <HashLink to='/#menu'>Menu</HashLink>
        </li>
        <li>
          <HashLink to='/bookings'>Reservations</HashLink>
        </li>
        <li className='orderBtn'>
          <HashLink role='button' to='#'>
            Order Online
          </HashLink>
        </li>
        <li>
          <img className='basketIcon' src={basketImg} alt='Basket' />
        </li>
      </ul>
    </Container>
  );
};

export default Nav;
