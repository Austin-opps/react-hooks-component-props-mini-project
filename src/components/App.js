import React from "react";
import blogData from "../data/blog";
import Header from "./header";
import About from "./about";
import ArticleList from "./article.list";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/> 
      <About image={blogData.image} data={blogData.about}/>
      <ArticleList posts={blogData.posts}/>

    </div>
  );
}

export default App;