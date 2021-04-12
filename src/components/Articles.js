import React from 'react'
import axios from 'axios'
import { selectUserInput } from '../feature/userHandle';

const Articles = () => {
    const searchInput = useSelector(selectUserInput);
    const articles_url =`https://gnews.io/api/v4/search?q=${searchInput}&token=cc9053584965ba9e9062087c7c0f4011`
    const dispatch = useDispatch();
    const [blogs,setBlogs] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])

    return (
        <div className="blog-page">
            <h1 className="blog-page-header">Articles</h1>
            
        </div>
    );
};

export default Articles;
