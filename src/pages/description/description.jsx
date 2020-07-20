import React from 'react';
import './description.style.scss';
import { connect } from 'react-redux';
import { selectItemToDisplay } from '../../redux/description/description-selectors';
import { ToggleDescriptionHidden } from '../../redux/description/description.actions';

const Description = ({ itemToPresent, ToggleDescriptionHidden}) => {
    const { name, price, imageUrl, description } = itemToPresent
    return (
    <section className="description">
        <h2 className="description__title">{name}</h2>
        <p className="description__text">{description}</p>
        <button onClick={ToggleDescriptionHidden}>Zamknij</button>
    </section>
)}

const mapDispatchToProps = dispatch => ({
    ToggleDescriptionHidden: () => dispatch(ToggleDescriptionHidden()),
})

const mapStateToProps = (state) => ({
    itemToPresent: selectItemToDisplay(state),
})


export default connect(mapStateToProps, mapDispatchToProps) (Description);