import React from "react";

function ArticleList({posts}) {
  return (
    <main>
        {posts.map((post) => (
            <article key={post.id}>
                <h3>{post.title}</h3>
                <small>{post.date ? post.date : "January 1, 1970"}</small>
                <p>{post.preview}</p>
            </article>
        ))}
    </main>
  );
}

export default ArticleList;