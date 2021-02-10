import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import axios from "axios";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Authors from "./components/Authors";
import Actors from "./components/Actors";
import PopulatedMovies from "./components/PopulatedMovies";
import AddActor from "./components/AddActor";
import ActorId from "./components/ActorId";
import SuperHeros from "./components/SuperHeros";
import AddSuperHeros from "./components/AddSuperHeros";
import OneHero from "./components/OneHero";
import EditSuperHero from "./components/EditSuperHero";

function App() {
  const [items, setItems] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [actors, setActors] = useState([]);
  const [populatedMovies, setPopulatedMovies] = useState([]);
  const [superHeros, setSuperHeros] = useState([]);

  let history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products", { withCredentials: true })
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        console.log("this is error: ", err);
      });

    axios
      .get("http://localhost:5000/api/authors", { withCredentials: true })
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((err) => {
        console.log("this is error: ", err);
      });

    axios
      .get("http://localhost:5000/api/actors", { withCredentials: true })
      .then((response) => {
        setActors(response.data);
      })
      .catch((err) => {
        console.log("this is error: ", err);
      });

    axios
      .get("http://localhost:5000/api/populatedMovies", {
        withCredentials: true,
      })
      .then((response) => {
        setPopulatedMovies(response.data);
      })
      .catch((err) => {
        console.log("this is error: ", err);
      });

    axios
      .get("http://localhost:5000/api/superHeros", { withCredentials: true })
      .then((response) => {
        setSuperHeros(response.data);
      })
      .catch((err) => {
        console.log("this is error: ", err);
      });
  }, []);

  const handleAddActor = (e) => {
    e.preventDefault();
    console.log("here");

    let newActor = {
      name: e.target.name.value,
      lastname: e.target.lastname.value,
      age: e.target.age.value,
    };
    console.log(newActor);

    axios.post("http://localhost:5000/api/addActor", newActor).then(() => {
      console.log("success");
      history.push("/");
    });
    setActors([newActor, ...actors]);
  };

  const handleAddSuperHeros = (e) => {
    e.preventDefault();
    console.log("here");

    let newSuperHero = {
      id: superHeros[superHeros.length - 1].id + 1,
      name: e.target.name.value,
      strength: e.target.strength.value,
      health: e.target.health.value,
    };
    console.log(newSuperHero);

    axios
      .post("http://localhost:5000/api/superHeros", newSuperHero)
      .then(() => {
        setSuperHeros([...superHeros, newSuperHero]);
        console.log("success");
        history.push("/superHeros");
      });
  };

  const handleEditSH = (legend) => {
    console.log("handleEditSH", legend);
    axios.patch(`http://localhost:5000/api/superHeros/${legend.id}`, {
      strength: legend.strength,
      health: legend.health,
      /* _id: legend._id */
    })
    .then(() => {
      let updatedSuperHeros = superHeros.map((soldier) => {
        if (soldier.id === legend.id){
          soldier = legend
        }
        return soldier
      })
      setSuperHeros(updatedSuperHeros)
      history.push("/superHeros");
    })
  };

  const handleDeleteSH = (heroId) => {
    console.log('handleDelete', heroId)
    axios.delete(`http://localhost:5000/api/superHeros/${heroId}`)
    .then(() => {
      let filteredSuperHeros = superHeros.filter((hero) => {
          return hero.id !== heroId
      })
      setSuperHeros(filteredSuperHeros)
      history.push("/superHeros");

      /* this.setState({
        superHeros: filteredheros
      }, () => {
        this.props.history.push('/')
      }) */
  })
  }

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
          path="/populatedMovies"
          render={() => {
            return <PopulatedMovies populatedMovies={populatedMovies} />;
          }}
        />

        <Route
          exact
          path="/addActor"
          render={() => {
            return <AddActor handleAddActor={handleAddActor} />;
          }}
        />

        <Route
          exact
          path="/actors/:id"
          render={(routeProps) => {
            return <ActorId {...routeProps} />;
          }}
        />

        <Route
          exact
          path="/superHeros"
          render={() => {
            return <SuperHeros superHeros={superHeros} />;
          }}
        />

        <Route
          exact
          path="/addSuperHeros"
          render={() => {
            return <AddSuperHeros handleAddSuperHeros={handleAddSuperHeros} />;
          }}
        />

        <Route
          exact
          path="/superHeros/:id"
          render={(routeProps) => {
            return <OneHero {...routeProps} handleDeleteSH={handleDeleteSH} />;
          }}
        />

        <Route
          exact
          path="/superHeros/:id/edit"
          render={(routeProps) => {
            return (
              <EditSuperHero handleEditSH={handleEditSH} {...routeProps} />
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
