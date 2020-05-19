import React,{useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Addarticle = () => {
    const [title,setTitle] = useState("");
    const [article,setArticle] = useState("");
    const [authorname,setauthorname]= useState("");
  const [message, setMessage] = useState("");

    const changeOnClick = e => {
        e.preventDefault();
        const articles={
            title,article,authorname
        }
        setTitle("");
        setauthorname("");
        setArticle("");

        axios.post("/articles/add",articles)
        .then(res=> setMessage(res.data))
        .catch(err=>{
            console.log(err);
        })
    }


    return (
      <AddArticleComponent>
        <div className="container">
          <h1>Add New Article</h1>
          <span className="message">{message}</span>
          <form onSubmit={changeOnClick}  encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="authorname">Author Name</label>
              <input
                type="text"
                value={authorname}
                className="form-control"
                placeholder="Enter Name"
                onChange={(e) => setauthorname(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                value={title}
                className="form-control"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Article">Article</label>
              <textarea
                className="form-control"
                value={article}
                rows="3"
                onChange={(e) => setArticle(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Post Article
            </button>
          </form>
        </div>
      </AddArticleComponent>
    );
}

export default Addarticle

const AddArticleComponent=styled.div`
    margin: 3rem auto;
    padding: 4rem;
    width: 31.25rem;

     .message{
      font-weight:900,
      color: red;
      padding : 1rem 1rem 1rem 0;
  }
`; 