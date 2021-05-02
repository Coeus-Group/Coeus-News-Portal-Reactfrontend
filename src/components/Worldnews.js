import React, { useEffect, useState } from "react";
import axios from 'axios'
import { setBlogData } from '../reducers/userHandle';
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styling/blogs.css";
import Darkmode from 'darkmode-js';
import { useParams } from 'react-router-dom';


const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

const Worldnews = () => {
    let { id } = useParams();
    const newscategory = ['business', 'science', 'technology', 'entertainment', 'health', 'sports'];
    const locations = ['London', 'Birmingham', 'Liverpool', 'Oxford', 'Cambrigde', 'Manchester'];

    let newsType = id.substring((id.indexOf(':') + 1), (id.length));
    // const searchInput = useSelector(selectUserInput);
    // const articles_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=cc9053584965ba9e9062087c7c0f4011&lang=en`
    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState();
    const [loading, setLoading] = useState(true);
    let url = ''

    if (newscategory.includes(newsType)) {
        url = `https://yy3p2v25vk.execute-api.eu-west-2.amazonaws.com/dev/getCategories/${newsType}`
    } else if (locations.includes(newsType)) {
        url = `https://yy3p2v25vk.execute-api.eu-west-2.amazonaws.com/dev/getLocations/${newsType}`
    }
    else {
        url = `https://yy3p2v25vk.execute-api.eu-west-2.amazonaws.com/dev/getArticles`;
    }

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                dispatch(setBlogData(response.data));
                setBlogs(response.data);
                setLoading(false);
            })

            .catch((error) => {
                //console.log(error);

            });
    }, [newsType]);


    let categoryName = newsType.substring(0, 1).toUpperCase() + newsType.substring(1, newsType.length);
    return (
        <div className="blog-page">

            <h1 className="blog-page-header" >{categoryName}</h1>
            {loading ? <h1 className="loading">Loading...♻️</h1> : ""}
            <div className="blogs">
                {blogs?.map((blog) => (
                    <a className="blog" target="_blank" rel="noreferrer" href={blog.article_URL}>
                        <img alt="Coeus News Portal" src={blog.article_image_URL} />
                        <div>
                            {blog.counter >= 10000 ? <h3 id="top-rated"> ⭐ </h3> : ''}
                            <h3 className="sourceName">
                                <span>{blog.author_name}</span>
                                <p>{blog.article_location}</p>

                            </h3>
                            <h1>{blog.title}</h1>
                            <p>{blog.description}</p>
                        </div>

                    </a>
                ))}

                {blogs?.totalArticles === 0 && (
                    <h1 className="no__blogs">
                        No blogs found 😵. Please try searching another key-word
                    </h1>
                )}
            </div>
        </div>
    );
};

export default Worldnews;
