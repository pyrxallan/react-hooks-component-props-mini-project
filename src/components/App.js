import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Article from "./Article";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Underreacted" />
      <About 
        about="A blog about learning React"
      />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
