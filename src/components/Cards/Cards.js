import React from 'react';
import './Cards.css';

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Card = ({ Articles }) => {

    return (
        <div className="newscards container-fluid">
            {Articles.map((card, index) => (
                <div className="newscard" key={index} _grid={{ index: index % 4, y: 0, w: 1, h: 2 }}>
                    <div className="card text-center shadow">
                        <div className="overflow">
                            <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Image1" className="card-img-top" />
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">{card.title} </h4>
                            <p className="card-text text-secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat assumenda fugit maxime asperiores! Eveniet dignissimos corrupti voluptate esse! Repellat, sapiente!
                                    </p>
                            <a className="btn btn-outline-sucess">View</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

};

export default Card;