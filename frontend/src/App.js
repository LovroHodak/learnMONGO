import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import axios from "axios";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Authors from "./components/Authors";
import Actors from "./components/Actors";
import PopulatedMovies from "./components/PopulatedMovies";
import Movies from "./components/Movies";

function App() {
  const [items, setItems] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [actors, setActors] = useState([]);
  const [movies, setMovies] = useState([]);
  const [populatedMovies, setPopulatedMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((err) => {
        console.log("this is error: ", err);
      });

    axios
      .get("http://localhost:5000/api/authors", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setAuthors(response.data);
      })
      .catch((err) => {
        console.log("this is error: ", err);
      });

    axios
      .get("http://localhost:5000/api/actors", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setActors(response.data);
      })
      .catch((err) => {
        console.log("this is error: ", err);
      });

    axios
      .get("http://localhost:5000/api/movies", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setMovies(response.data);
      })
      .catch((err) => {
        console.log("this is error: ", err);
      });

    axios
      .get("http://localhost:5000/api/populatedMovies", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setPopulatedMovies(response.data);
      })
      .catch((err) => {
        console.log("this is error: ", err);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/items"
          render={() => {
            return <Items items={items} />;
          }}
        />
        <Route
          exact
          path="/authors"
          render={() => {
            return <Authors authors={authors} />;
          }}
        />
        <Route
          exact
          path="/actors"
          render={() => {
            return <Actors actors={actors} />;
          }}
        />
        <Route
          exact
          path="/movies"
          render={() => {
            return <Movies movies={movies} />;
          }}
        />
        <Route
          exact
          path="/populatedMovies"
          render={() => {
            return <PopulatedMovies populatedMovies={populatedMovies} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
