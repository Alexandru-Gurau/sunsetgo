import CartItem from '../cart-item/cart-item.component';
import './offerts.styles.scss';

import Store from '../../store/store.jsx';

const Offerts = () => (
  <div className='offerts'>
    <h3 className='header-normal mb-large'>Rooms & Ratings</h3>
    <div className='offerts__container'>
      {Store.filter((_, idx) => idx < 3).map((el) => (
        <CartItem
          key={el.id}
          id={el.id}
          preview={el.preview}
          price={el.price}
          header={el.header}
          text={el.text}
        />
      ))}
    </div>
  </div>
);

export default Offerts;
