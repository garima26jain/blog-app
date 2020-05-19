import React, {useState,useEffect} from 'react';
import {Route} from "react-router-dom";
import './App.css';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import Articles from "./components/Articles";
import Addarticle from "./components/Addarticle";
import Editarticle from "./components/Editarticle";

function App() {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    axios
    .get('/articles')
    .then(res=>setPosts(res.data))
    .catch(error=>console.log(error))
  })
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route exact path="/" render={() => <Articles posts={posts} />} />
      <Route
        path="/update/:id"
        render={(props) => <Editarticle {...props} posts={posts} />}
      />
      <Route path="/add-article" component={Addarticle} />
    </div>
  );
}

export default App;
