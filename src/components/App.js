import React from "react";
import blogData from "../data/blog";
import Header from "./header";
import About from "./About";
import ArticleList from "./articleList";

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