import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function nameFormat(person){
  return user.name + " " + user.lastname;
}
const user = {
  name : "Rafa",
  lastname : "Martinez"
};

var name = "Rafa"
var salute = <h1>Hola, {name} </h1>;
var salute1 =  <h1>Hola, {user.name} </h1>;

ReactDOM.render(
   nameFormat(user) ,
    document.getElementById('here'));








