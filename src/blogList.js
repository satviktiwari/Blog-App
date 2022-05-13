import {Link} from 'react-router-dom';

const blogList = ({blogs, title}) => {
    return ( 
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className='blog-preview' key = {blog.id}>
                    <hr></hr>
                    <Link to = {`/blogs/${blog.id}`}>
                        <h3>ID: {blog.id} | Title: {blog.title}</h3>
                        <p>Author: {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
export default blogList;