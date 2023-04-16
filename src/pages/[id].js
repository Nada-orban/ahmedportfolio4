import React from 'react'

function Details(props) {
    return (
        <div >
            <p>{props.post.title}</p>

            <p>{props.post.body}</p>
        </div>
    )

}

export default Details

export async function getServerSideProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const data = await res.json();

    return {
        props: {
            post: data
        }
    }

}