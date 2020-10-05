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
import Card from './Card'


//MUST CD INTO "SRC" TO RUN JSON SERVER (json-server -w albums.json)


function MyAlbums() {

  //useState that sets "albums" as all data on albums
  const[albums, setAlbums] = useState([])

  //useEffect to get all data on albums
  useEffect(() => {
    axios.get('http://localhost:3000/albums').then((r) => {
      const albumInfo = r.data
      setAlbums(albumInfo)
    })
  }, [])

  //Makes array of all album thumbnail images
  let images = []
  albums.map((data) => {
    images.push(data.thumbnail1)
    console.log(images)
  })

  //Makes array of all album titles
  let titles = []
  albums.map((data) => {
    titles.push(data.title)
    console.log(titles)
  })

  //"pageContent" consists of cards that get images and title props by index"
  return (
    <div className="container">
    <div className="mainHeader">
      <h3>My Albums</h3>
    </div>
    <div className="pageContent">
      <Link className="linkTag" to={`/albumNames/1`}>
        <Card src={images[0]} children={titles[0]} />
      </Link>
      
      <Link className="linkTag" to={`/albumNames/2`}>
        <Card src={images[1]} children={titles[1]}/>
      </Link>

      <Link className="linkTag" to={`/albumNames/3`}>
        <Card src={images[2]} children={titles[2]}/>
      </Link>
    </div>
    <div className="pageContent">
      <Link className="linkTag" to={`/albumNames/4`}>
        <Card src={images[3]} children={titles[3]}/>
      </Link>

      <Link className="linkTag" to={`/albumNames/5`}>
        <Card src={images[4]} children={titles[4]}/>
      </Link>

      <Link className="linkTag" to={`/albumNames/6`}>
        <Card src={images[5]} children={titles[5]}/>
      </Link>
    </div>
    </div>
  )
    
  
}


export default MyAlbums