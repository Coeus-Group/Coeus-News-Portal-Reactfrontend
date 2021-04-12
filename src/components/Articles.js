import React from 'react'
import axios from 'axios'
import { selectUserInput } from '../feature/userHandle';

const Articles = () => {
    const searchInput = useSelector(selectUserInput);

    return (
        <div className="blog-page">
            <h1 className="blog-page-header">Articles</h1>
            
        </div>
    );
};

export default Articles;
