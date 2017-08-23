import React, { Component } from 'react';
import '../styles/App.css';
import actors from "../data/actors.js"


export default class Section extends Component {
  render() {
    let myActors = actors.map((actor) => {
      return(
<ul key={actor.id}>
        <li className="list-group-item" key={actor.id}>
    <ul>
    <li>
      <div>Name: {actor.name} </div>
    </li>
    <li>
      <div>Alias: {actor.also_known_as}</div>
    </li>
    <li>
      <div>Popularity (?/10): {actor.popularity}</div>
    </li>
    <li>
      <div>Birthday: {actor.birthday} </div>
    </li>

    <li>
      <div>Date of Death: {actor.deathday === null ? "Still Alive" :  actor.deathday } </div>
    </li>
    <li>
      <div>Gender: {actor.gender === 1 ? "Female" : "Male" }</div>
    </li>
    <p>Biography: {actor.biography}</p>
    </ul>
    </li>
    </ul>

);
})

  return (
    <section>
      <img src="https://fillmurray.com/300/300" alt="Bill Murray"/>
      <ul className="list-group">
      {myActors}
      </ul>
    </section>
  );
}
}
