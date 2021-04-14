import React from 'react';
import './Cards.css';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Card = () => {

    return (
        <div className="newscards container-fluid">
            {cards.map((card, index) => (
                <div className="newscard" key={index} _grid={{ index: index % 4, y: 0, w: 1, h: 2 }}>
                    <div className="card text-center shadow">
                        <div className="overflow">
                            <img src="https://source.unsplash.com/random" alt="Image1" className="card-img-top" />
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">Heading {card} </h4>
                            <p className="card-text text-secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat assumenda fugit maxime asperiores! Eveniet dignissimos corrupti voluptate esse! Repellat, sapiente!
                                    </p>
                            <a href="#" className="btn btn-outline-sucess">View</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

};

export default Card;