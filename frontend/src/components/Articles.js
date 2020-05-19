import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const Articles = ({posts}) => {
    const [article,setArticle] =  useState([]);


    //DELTE
    const deleteArticle = id => {
      axios.delete(`/articles/${id}`)
      .then(res=> alert(res.data))
      setArticle(article.filter(elem=>elem._id!== id));
    };




    return (
      <MainContainer>
        {posts.map((article, key) => (
          <div className="container" key={key}>
            <h2>{article.title}</h2>
            <p>{article.article}</p>
            <span className="badge badge-secondary p-2">
              {article.authorname}
            </span>
            <div className="row my-5">
              <div className="col-sm-2">
                <Link to={`/update/${article._id}`} 
                  className="btn btn-outline btn-success">
                  Edit Article
                </Link>
              </div>
              <div className="col-sm-2">
                <button onClick={()=>deleteArticle(article._id)} 
                  className="btn btn-outline btn-danger ">
                  Delete Article
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </MainContainer>
    );
}

export default Articles

const MainContainer=styled.div`
    margin: 7rem 0;
`;