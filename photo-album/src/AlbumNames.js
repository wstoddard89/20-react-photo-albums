import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Card from './Card.js'
import MyAlbums from './MyAlbums.js'



function AlbumNames(props) {

  const[albums, setAlbums] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get('http://localhost:3000/albums').then((r) => {
      const albumInfo = r.data
      setAlbums(albumInfo)
      console.log(albumInfo)
    })
  }, [])

  let images = []
  albums.map((data) => {
    images.push(data.name)
    console.log(images)
  })


  return (
    <div className="test"></div>
    // <div className="container">
    //   <div className="mainHeader">
    //   <h3>All Albums</h3>
    // </div>
    // </div>
  )
}



export default AlbumNames