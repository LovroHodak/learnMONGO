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
import AddProduct from "./AddProduct";

import changedProducts from "./changedItems";
import originalProducts from "./originalItems";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  const [items, setItems] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [actors, setActors] = useState([]);
  const [populatedMovies, setPopulatedMovies] = useState([]);
  const [superHeros, setSuperHeros] = useState([]);
  const [changedItemz] = useState(changedProducts);
  const [originalItemz] = useState(originalProducts);
  const [loggedInUser, setLoggedInUser] = useState(null);

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

    if (!loggedInUser) {
      axios
        .get("http://localhost:5000/api/user", { withCredentials: true })
        .then((response) => {
          console.log("new user");
          setLoggedInUser(response.data);
        });
    }
  }, []);

  // USER
  const handleSignUp = (e) => {
    e.preventDefault();
    const { username, email, password } = e.target;

    axios
      .post(
        `http://localhost:5000/api/signup`,
        {
          username: username.value,
          email: email.value,
          password: password.value,
        },
        { withCredentials: true }
      )
      .then((response) => {
        setLoggedInUser(response.data);
        history.push("/");
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    e.preventDefault();
    const { email, password } = e.target;

    axios
      .post(
        `http://localhost:5000/api/signin`,
        {
          email: email.value,
          password: password.value,
        },
        { withCredentials: true }
      )
      .then((response) => {
        setLoggedInUser(response.data);
        history.push("/");
      });
  };

  const handleLogOut = (e) => {
    axios
      .post("http://localhost:5000/api/logout", {}, { withCredentials: true })
      .then(() => {
        setLoggedInUser(null);
      });
  };

  //PRODUCTS
  const handleAddProducts = (e) => {
    e.preventDefault();
    console.log("here");

    let newProduct = {
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
      countInStock: e.target.countInStock.value,
      imageUrl: e.target.imageUrl.value,
    };
    console.log(newProduct);

    axios.post("http://localhost:5000/api/products", newProduct).then(() => {
      setItems([...items, newProduct]);
      console.log("success", newProduct._id);
      history.push("/items");
    });
  };

  const updateAllProductsPrice = () => {
    console.log("updateAllProductsPrice");
    axios
      .patch(`http://localhost:5000/api/products`, {
        changedItemz,
        //originalItemz
      })
      .then((response) => {
        console.log("updateAllProductsPrice - response.data", response.data);
        setItems(response.data);
      });
  };

  // ACTORS
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

  // SUPER-HEROS
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
    axios
      .patch(`http://localhost:5000/api/superHeros/${legend.id}`, {
        strength: legend.strength,
        health: legend.health,
        /* _id: legend._id */
      })
      .then(() => {
        let updatedSuperHeros = superHeros.map((soldier) => {
          if (soldier.id === legend.id) {
            soldier = legend;
          }
          return soldier;
        });
        setSuperHeros(updatedSuperHeros);
        history.push("/superHeros");
      });
  };

  const increaseEditSHStrength = (legend) => {
    console.log("increaseEditSHStrength", legend);
    axios
      .patch(`http://localhost:5000/api/superHeros/${legend.id}`, {
        strength: legend.strength,
        health: legend.health,
        name: legend.name,
        id: legend.id,
      })
      .then(() => {
        let updatedSuperHeros = superHeros.map((soldier) => {
          if (soldier.id === legend.id) {
            soldier = legend;
          }
          return soldier;
        });
        setSuperHeros(updatedSuperHeros);
      });
  };

  const handleDeleteSH = (heroId) => {
    console.log("handleDelete", heroId);
    axios.delete(`http://localhost:5000/api/superHeros/${heroId}`).then(() => {
      let filteredSuperHeros = superHeros.filter((hero) => {
        return hero.id !== heroId;
      });
      setSuperHeros(filteredSuperHeros);
      history.push("/superHeros");
    });
  };

  return (
    <div className="App">
      {loggedInUser ? <h5>User is: {loggedInUser.username}</h5> : null}
      <Navbar  onLogout={handleLogOut} loggedInUser={loggedInUser}/>
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
            return (
              <Items
                items={items}
                updateAllProductsPrice={updateAllProductsPrice}
              />
            );
          }}
        />
        <Route
          exact
          path="/addProduct"
          render={() => {
            return <AddProduct handleAddProducts={handleAddProducts} />;
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
            return (
              <OneHero
                {...routeProps}
                handleDeleteSH={handleDeleteSH}
                increaseEditSHStrength={increaseEditSHStrength}
              />
            );
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

<Route
          exact
          path="/sign-in"
          render={(routeProps) => {
            return (
              <SignIn onSignIn={handleSignIn} {...routeProps} />
            );
          }}
        />

<Route
          exact
          path="/sign-up"
          render={(routeProps) => {
            return (
              <SignUp onSignUp={handleSignUp} {...routeProps} />
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
