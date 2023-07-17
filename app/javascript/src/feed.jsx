import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getTweets, createTweet, getTweetsByUser } from "./requests";
import $ from 'jquery';

const Nav = (props) => {
  const [keyword, setKeyword] = useState('');
  const [username, setUsername] = useState('');

  setUsername(user.username);

  const handleSearch = (event) => {
    event.preventDefault();
    searchKeyword(keyword);
    setKeyword('');
  };

  return (
    <nav className="navbar navbar-expand-xl navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/feed">
          <img src="/WhiteBirdIcon.png" alt="Twitter Logo" width="45" height="45" className="d-inline-block align-text-top" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/feed/tweet">Create Tweet</a>
            </li>
          </ul>
          <form className="d-flex ms-auto" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Twitter"
              aria-label="Search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};


const Feed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getTweets(
      (data) => {
        setTweets(data);
        console.log("Tweets retrieved:", data);
      },
      (error) => {
        console.error("Error retrieving tweets:", error);
      }
    );
  }, []);

  return (
    <div className="container-fluid">
      {tweets.map((tweet) => (
        <div className="row" key={tweet.id}>
          <div className="card-body">
            <p className="card-title">{tweet.username}</p>
            <p className="card-text">{tweet.message}</p>
            <p className="card-text">{tweet.created_at}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const TweetsByUser = (props) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getTweetsByUser(
      (data) => {
        setTweets(data);
        console.log("Tweets retrieved:", data);
      },
      (error) => {
        console.error("Error retrieving tweets:", error);
      }
    );
  }, []);

  return (
    <div className="container-fluid">
      {tweets.map((tweet) => (
        <div className="row" key={tweet.id}>
          <div className="card-body">
            <p className="card-title">{tweet.username}</p>
            <p className="card-text">{tweet.message}</p>
            <p className="card-text">{tweet.created_at}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const WhatsHappening = (props) => (
  <div className="whats-happening">
    <h3>What's Happening</h3>
    <div className="card">
      <div className="card-body">
        <p className="card-title">Trending</p>
        <p className="card-text">Who to follow</p>
      </div>
    </div>
  </div>
);

const PostTweet = (props) => {
  const [message, setMessage] = useState('');

  const handlePost = (event) => {
    event.preventDefault();
    createTweet(message);
    setMessage('');
  };

  return (
    <div className="create-tweet">
      <h3>Create Tweet</h3>
      <div className="card">
        <form onSubmit={handlePost}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Post</button>
        </form>
      </div>
    </div>
  );
};

const FeedApp = (props) => (  
    <React.Fragment>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <Feed />
          </div>
          <div className="col-lg-4">
            <WhatsHappening />
          </div>
        </div>
      </div>
    </React.Fragment>
);

const FeedRouter = (props) => (
  <Router>
    <Switch>
      <Route exact path="/feed" component={FeedApp} />
      <Route exact path="/feed/tweet" component={PostTweet} />
    </Switch>
  </Router>
)

export default FeedRouter;