import React from 'react';
import './checkout.style.scss';
import { connect } from 'react-redux';
import { selectPurchasedItems } from '../../redux/cart/cart-selectors';
import { countPurchasedItemsTotal } from '../../redux/cart/cart-selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import Unibutton from '../../components/uniButton/uniButton';
import Empty from '../../components/empty-message/empty-message';

const Checkout = ({ purchasedItems, purchasedItemsTotal }) => (
    <div className="checkout">
        <div className="checkout__header">
            <div className="checkout__header__cell">
                <span className="checkout__header__cell">Produkt</span>
            </div>
            <div className="checkout__header__cell">
                <span className="checkout__header__cell">Opis</span>
            </div>
            <div className="checkout__header__cell">
                <span className="checkout__header__cell">Cena</span>
            </div>
            <div className="checkout__header__cell">
                <span className="checkout__header__cell">Ilość</span>
            </div>
            <div className="checkout__header__cell">
                <span className="checkout__header__cell">Usuń</span>
            </div>
        </div>
        {
           purchasedItems.map(item => (
               <CheckoutItem item={item} key={item.id}/>
           ))
        }
        <div className="checkout__total">
            <span className="checkout__total__number"> Razem do zapłaty: {purchasedItemsTotal} zł</span>
        </div>
        <div className="checkout__result">
        {
            purchasedItems.length?
            <Unibutton>Zamawiam</Unibutton>
            :
            <Empty/>
        }
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    purchasedItems: selectPurchasedItems(state),
    purchasedItemsTotal: countPurchasedItemsTotal(state)

})

export default connect(mapStateToProps)(Checkout);

