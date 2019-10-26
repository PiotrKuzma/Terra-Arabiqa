

import React from 'react';

import './home.scss'

const home = () => {
    return (
        <div className="home">
            <div className="directory">
                <div className="directory__item">
                    <div className="directory__item__content">
                        <h1 className="title">Kawa Prażona</h1>
                        <span className="subtitle">Zobacz</span>
                    </div>
                </div>
                <div className="directory__item">
                    <div className="directory__item__content">
                        <h1 className="title">Kawiarki</h1>
                        <span className="subtitle">Zobacz</span>
                    </div>
                </div>
                <div className="directory__item">
                    <div className="directory__item__content">
                        <h1 className="title">Akcesoria</h1>
                        <span className="subtitle">Zobacz</span>
                    </div>
                </div>
                <div className="directory__item">
                    <div className="directory__item__content">
                        <h1 className="title">Zestawy</h1>
                        <span className="subtitle">Zobacz</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default home;