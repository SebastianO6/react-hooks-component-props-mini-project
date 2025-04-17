import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header header={blogData.name}/>
      <About about={blogData.about}/>
      <ArticleList post ={blogData.posts}/>
    </div>
  );
}

export default App;
