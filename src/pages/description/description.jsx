import React from 'react';
import './description.style.scss';
import { connect } from 'react-redux';
import { selectItemToDisplay } from '../../redux/description/description-selectors'

const Description = ({ itemToPresent }) => {
    const { name, price, imageUrl, description } = itemToPresent
    return (
    <section className="description">
        <h2 className="description__title">{name}</h2>
        <p className="description__text">{description}</p>

    </section>
)}

const mapStateToProps = (state) => ({
    itemToPresent: selectItemToDisplay(state)
})

export default connect(mapStateToProps) (Description);