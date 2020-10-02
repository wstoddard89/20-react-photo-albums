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

function AlbumNames() {
  const [album, setAlbum] = useState([])
  const [allAlbums, setAllAlbums] = useState([])
  const [albumTitle, setAlbumTitle] = useState("")
  const { id } = useParams()

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

  const [activePhoto, setActivePhoto] = useState(null)
  console.log(activePhoto)

  return (
    <div>
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
          return (
            <Link className="sideBarLinks" to={`/albumNames/${item.id}`}>
              <li className="sideAlbumNames">{item.title}</li>
            </Link>
          )
        })}
      </div>
      <div className="page2Content">
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
