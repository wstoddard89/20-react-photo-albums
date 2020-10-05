import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom"
import Card from "./Card.js"
import MyAlbums from "./MyAlbums.js"

//MUST CD INTO "SRC" TO RUN JSON SERVER (json-server -w albums.json)

function AlbumNames() {
  //useState to get photos in album
  const [album, setAlbum] = useState([])

  //useState to get all albums for sidebar
  const [allAlbums, setAllAlbums] = useState([])

  //useState to get titles of each album title for header
  const [albumTitle, setAlbumTitle] = useState("")

  //useParams to to keep track of "id" for useEffect
  const { id } = useParams()

  // Get requests from local json server. Must cd into "src" to run server
  useEffect(() => {
    axios.get(`http://localhost:3000/albums/${id}`).then((r) => {
      const albumInfo = r.data.photos
      const title = r.data.title
      setAlbumTitle(title)
      setAlbum(albumInfo)
      console.log(albumInfo)
    })
    axios.get(`http://localhost:3000/albums`).then((r) => {
      const allAlbums = r.data
      setAllAlbums(allAlbums)
      console.log(allAlbums)
    })
  }, [id])

  // useState for photo to be clicked on and have modal page display
  const [activePhoto, setActivePhoto] = useState(null)
  console.log(activePhoto)

  return (
    <div>
      {/* Ternary with modal inside to setActivePhoto back to null on second click */}
      {activePhoto ? (
        <div className="modal" onClick={() => setActivePhoto(null)}>
          <h3 className="modalLabel">{activePhoto.name}</h3>
          <img src={activePhoto.thumbnail}></img>
        </div>
      ) : null}
      <div className="container2">
        <div className="mainHeader">
          <h3>{albumTitle}</h3>
        </div>
        <div className="sideBar">
          {allAlbums.map((item) => {
            //Link that allows sidebar to navigate albums
            return (
              <Link className="sideBarLinks" to={`/albumNames/${item.id}`}>
                <li className="sideAlbumNames">{item.title}</li>
              </Link>
            )
          })}
        </div>
        <div className="page2Content">
          {/* Map photos in album to setActivePhoto to photo that is clicked on */}
          {album.map((item) => (
            <div onClick={() => setActivePhoto(item)}>
              <Card img src={item.thumbnail} children={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AlbumNames
