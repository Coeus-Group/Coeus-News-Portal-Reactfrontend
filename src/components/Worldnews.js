import React, { useEffect, useState } from "react";
import axios from 'axios'
import { selectUserInput, setBlogData } from '../feature/userHandle';
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styling/blogs.css";
import Darkmode from 'darkmode-js';

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
    const searchInput = useSelector(selectUserInput);
    const worldArticles_url = `https://yy3p2v25vk.execute-api.eu-west-2.amazonaws.com/dev/getLocations/London`
    // https://gnews.io/api/v4/top-headlines?&token=cc9053584965ba9e9062087c7c0f4011&lang=en
    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(worldArticles_url)
            .then((response) => {
                dispatch(setBlogData(response.data));
                setBlogs(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);

            });
    },  [worldArticles_url]);


    return (
        <div className="blog-page">

            <h1 className="blog-page-header">Worldnews</h1>
            {loading ? <h1 className="loading">Loading...♻️</h1> : ""}
            <div className="blogs">
                {blogs?.map((blog) => (
                    <a className="blog" target="_blank" rel="noreferrer" href={blog.url}>
                        <img src={blog.article_image_URL} />
                        <div>
                            <h3 className="sourceName">
                                <span>{blog.author_name}</span>
                                <p>{blog.publishedAt}</p>
                            </h3>
                            <h1>{blog.title}</h1>
                            <p>{blog.description}</p>
                            <a href="#" className="">View</a>

                        </div>
                        
                    </a>
                ))}

                {blogs?.totalArticles == 0 && (
                    <h1 className="no__blogs">
                        No blogs found 😵. Please try searching another key-word
                    </h1>
                )}

            </div>
        </div>
    );
};

export default Worldnews;
