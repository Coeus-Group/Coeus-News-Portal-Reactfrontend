import React, { useEffect, useState } from "react";
import axios from 'axios'
import { selectUserInput, setBlogData } from '../feature/userHandle';
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import img8 from '/src/assets/images/News_images_placeholder7.jpeg';
import img5 from '/src/assets/images/News_images_placeholder4.jpeg';
import img6 from '/src/assets/images/News_image_placeholder3.jpeg';


const Articles = () => {
    const searchInput = useSelector(selectUserInput);
    const articles_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=cc9053584965ba9e9062087c7c0f4011`
    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(articles_url)
            .then((response) => {
                dispatch(setBlogData(response.data));
                setBlogs(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);

            });
    }, [searchInput]);

    return (

        


        <div className="blog-page">
            
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img5}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={img6}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img8}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <h1 className="blog-page-header">Articles</h1>
            {loading ? <h1 classname="loading">Loading...♻️</h1> : ""}
            <div className="blogs">
                {blogs?.articles?.map((blog) => (
                    <a className="blog" target="_blank" href={blog.url}>
                        <img src={blog.image} />
                        <div>
                            <h3 className="sourceName">
                                <span>{blog.source.name}</span>
                                <p>{blog.publishedAt}</p>
                            </h3>
                            <h1>{blog.title}</h1>
                            <p>{blog.description}</p>
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

export default Articles;
