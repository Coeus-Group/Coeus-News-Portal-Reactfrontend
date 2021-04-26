import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Card from '../Cards/Cards';

function Home() {
    let { id } = useParams();
    const locations = ['London', 'Birmingham', 'Liverpool', 'Manchester', 'Cambridge', 'Oxford'];
    const newscategory = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];
    let category = id.substring((id.indexOf(':') + 1), (id.length));
    let newstype = id.substring((id.indexOf(':') + 1), (id.length));

    const [ArticlesData, setArticles] = useState([]);

    //if(newstype)

    useEffect(() => {
        axios.get(`https://yy3p2v25vk.execute-api.eu-west-2.amazonaws.com/dev/getCategories/${category}`)
            .then(response => setArticles(response.data))
            .catch(error => console.log(error))
    }, [category])
    return (

        <div className="Home">
            <h3>Category: {category}</h3>
            <div className="album py-5 bg-light">
                <div className="recent-stories">
                    <h3>RECENT STORIES</h3>
                    <div className="newscards container-fluid">
                        {ArticlesData.map((card, index) => (
                            <div className="newscard" key={index} _grid={{ index: index % 4, y: 0, w: 1, h: 2 }}>
                                <div className="card text-center shadow">
                                    <div className="overflow">
                                        <img src={card.article_image_URL} alt="Image1" className="card-img-top" />
                                    </div>
                                    <div className="card-body text-dark">
                                        <h4 className="card-title">{card.title} </h4>
                                        <p className="card-text text-secondary">
                                            {card.description}
                                        </p>
                                        <a className="btn btn-outline-sucess">View</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;