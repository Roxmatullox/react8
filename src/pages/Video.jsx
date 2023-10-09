
import { useEffect } from "react";
import "./Viseo.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Video = () => {
  const [video1,setVideo1] = useState("")
  const {video} = useParams()

  useEffect(()=>{
    async function Video() {
      let {data} = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDi25Q57Y-uKSZpVz6M8-NFBzcK-jBzz4Y&id=${video}&part=snippet,statistics`)
      setVideo1(data)
    }

    Video()
  },[video])

  let realVideo = video1.items

  return (
    <main>
      <div className="video">
        {
          realVideo?.map((video)=>{
            return(
              <div key={video.id} className="video">
                <img className="video-img" src={video.snippet.thumbnails.default.url} alt="" />
                <h4 className="mt-1">{video.snippet.title}</h4>
              </div>
            )
          })
        }
      </div>
      <div className="another-videos">

      </div>
    </main>
  )
}

export default Video