import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import Axios from "axios"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import MyAlbums from "./MyAlbums"
import AlbumNames from "./AlbumNames"
import Pictures from "./Pictures"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MyAlbums />
        </Route>
        <Route path="/albumNames/:id">
          <AlbumNames />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
