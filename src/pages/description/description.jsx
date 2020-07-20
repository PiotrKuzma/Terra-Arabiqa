import React from 'react';
import './description.style.scss';
import { connect } from 'react-redux';
import { selectItemToDisplay } from '../../redux/description/description-selectors';
import { ToggleDescriptionHidden } from '../../redux/description/description.actions';
import { addItemToCartArray } from '../../redux/cart/cart.actions';
import UniButton from '../../components/uniButton/uniButton';
import { ReactComponent as Close } from '../../assets/remove.svg';
import { motion } from 'framer-motion';
import { containerVariants } from '../../animations/page-animations';

const Description = ({ ToggleDescriptionHidden, addItemToCartArray, item}) => {
    const { name, price, imageUrl, description } = item
    return (
    <section className="description">
        <motion.div className="description__container" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
            <div className="description__container__image-box"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="description__container__content">
                <h2 className="description__container__content__title">{name}</h2>
                <p className="description__container__content__text">{description}</p>
                <button className="description__container__content__close"
                    onClick={ToggleDescriptionHidden}>
                    <Close className="description__container__content__close__icon"/>
                </button>
                <div className="description__container__content__footer">
                    <p className="description__container__content__footer__price">{price} zł</p>
                    <UniButton
                        onClick={() => addItemToCartArray(item)}
                    >Dodaj do koszyka
                    </UniButton>
                </div>
            </div>
        </motion.div>
    </section>
)}

const mapDispatchToProps = dispatch => ({
    ToggleDescriptionHidden: () => dispatch(ToggleDescriptionHidden()),
    addItemToCartArray: item => dispatch(addItemToCartArray(item)),
})

const mapStateToProps = (state) => ({
    item: selectItemToDisplay(state),
})


export default connect(mapStateToProps, mapDispatchToProps) (Description);