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



function MyAlbums(props) {

  const[albums, setAlbums] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/albums').then((r) => {
      const albumInfo = r.data
      setAlbums(albumInfo)
    })
  }, [])

  let images = []
  albums.map((data) => {
    images.push(data.thumbnail1)
    // console.log(images)
  })

  let titles = []
  albums.map((data) => {
    titles.push(data.title)
    // console.log(titles)
  })





  
  return (
    <div className="container">
    <div className="mainHeader">
      <h3>My Albums</h3>
    </div>
    <div className="pageContent">
      <Link className="linkTag" to={`/albumNames/1`}>
        <Card src={images[0]} children ={titles[0]} />
      </Link>
      
      <Link className="linkTag" to={`/albumNames/2`}>
        <Card src={images[1]} children ={titles[1]}/>
      </Link>

      <Link className="linkTag" to={`/albumNames/3`}>
        <Card src={images[2]} children ={titles[2]}/>
      </Link>
    </div>
    <div className="pageContent">
      <Link className="linkTag" to={`/albumNames/4`}>
        <Card src={images[3]} children ={titles[3]}/>
      </Link>

      <Link className="linkTag" to={`/albumNames/5`}>
        <Card src={images[4]} children ={titles[4]}/>
      </Link>

      <Link className="linkTag" to={`/albumNames/6`}>
        <Card src={images[5]} children ={titles[5]}/>
      </Link>
    </div>
    </div>
  )
    
  
}


export default MyAlbums