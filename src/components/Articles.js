import React from 'react'
import axios from 'axios'
import { selectUserInput, setBlogData } from '../feature/userHandle';

const Articles = () => {
    const searchInput = useSelector(selectUserInput);
    const articles_url =`https://gnews.io/api/v4/search?q=${searchInput}&token=cc9053584965ba9e9062087c7c0f4011`
    const dispatch = useDispatch();
    const [blogs,setBlogs] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
         .get(blog_url)
         .then ((response) => {
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
            <h1 className="blog-page-header">Articles</h1>
            
        </div>
    );
};

export default Articles;
