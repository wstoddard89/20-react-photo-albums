import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Card(props) {

  return (
    <div className="card">
      <div className="cardImage">
        {<img src={props.src}></img>}
      </div>
      <div className="cardLabel">
        {props.children}
      </div>
    </div>
  )
}



export default Card