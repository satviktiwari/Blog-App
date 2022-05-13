import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Auth 1');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('https://satviktiwari.github.io/jsonapi/db.json/', {
            mode: 'no-cors',
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
          console.log("new blog request added");
          setIsPending(false);
          history.push('/');
        })
    }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title: </label><br/>
        <input
         type="text" 
         required
         value = {title}
         onChange = {(e) => setTitle(e.target.value)}
         /><br/><br/>
        <label>Blog Content: </label><br/>
        <textarea 
        required
        value = {body}
        onChange = {(e) => setBody(e.target.value)}
        ></textarea><br/><br/>
        <label>Blog Author: </label><br/>
        <select
        value = {author}
        onChange = {(e) => setAuthor(e.target.value)}
        >
          <option value="Auth 1">Auth 1</option><br/>
          <option value="Auth 2">Auth 2</option><br/>
        </select><br/><br/>
        {
          !isPending && <button>Add Blog</button>
        }
        {
          isPending && <button>Loading</button>
        }
        {/* <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p> */}
      </form>
    </div>
  );
}

export default Create;