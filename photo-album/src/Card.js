import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import axios from "axios"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


//MUST CD INTO "SRC" TO RUN JSON SERVER (json-server -w albums.json)

function Card(props) {

  //Sets props to give each card access to image and title
  return (
    <div className="card">
      <div className="cardImage">{<img src={props.src}></img>}</div>
      <div className="cardLabel">{props.title}</div>
    </div>
  )
}

export default Card
