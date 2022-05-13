import { useParams, useHistory } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, error, isPending} = useFetch('https://satviktiwari.github.io/jsonapi/db.json/'+id);
    const history = useHistory();
    const handleClick = () => {
        fetch('https://satviktiwari.github.io/jsonapi/db.json/' + blog.id,{
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="Blog-Details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Author: {blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;

//npx json-server --watch data/db.json --port 8000