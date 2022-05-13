import { useState, useEffect } from 'react';
import BlogList from './blogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('https://satviktiwari.github.io/jsonapi/db.json/');

    return (
        <div className='home'>
            <h1><u>Home</u></h1>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="Welcome to my blogs!!!" />}
        </div>
    );
}

export default Home;