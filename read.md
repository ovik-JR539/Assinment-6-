import React from 'react';
import PostDisplay from '../component/postdisplay';

const PostPage = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    
    console.log(posts)

    return (
        <div>
            <h2 className='text-7xl p-10'>post of pages: {posts.length}</h2>
           
                <div className='grid grid-cols-3 gap-4' >
                    {posts.map(post =>  <PostDisplay key={post.id} post={post} />)}
                </div>
          

        </div>
    );
};

export default PostPage;