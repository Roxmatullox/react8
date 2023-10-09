import { useState } from "react"
import { useEffect } from "react"
import PropTypes from "prop-types";


import "./Home.css"
import axios from "axios"
import { Link } from "react-router-dom"

const Home = ({search}) => {
  const [posts , setPosts] = useState([])
  const [data , setData] = useState([])
  const [token , setToken] = useState("")

  const  paginate =  (y)=>{
    if (y === ">") {
       setToken(data.nextPageToken);
    } else{
       setToken(data.prevPageToken);
    }
  }

  useEffect(()=>{
    async function getPosts() {
      try {
        let {data:{items} , data} = await axios.get(`${search ? `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDi25Q57Y-uKSZpVz6M8-NFBzcK-jBzz4Y&pageToken=${token}&maxResults=48&chart=mostPopular&part=snippet&q=${search}` :`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDi25Q57Y-uKSZpVz6M8-NFBzcK-jBzz4Y&pageToken=${token}&maxResults=48&chart=mostPopular&part=snippet,statistics`}`)
        setPosts(items)
        setData(data)
      } catch (err) {
        console.log(err);
      }
    }
    getPosts()
  } , [token,search])

  return (
    <main>
      <section id="home">
        {
          posts.map((post)=> {
            return (
              <div key={post.id} className="YouTubeCard">
                <div className="card-img">
                  <Link to={`home/${post.id}`}>
                    <img src={post.snippet.thumbnails.default.url} alt="" />
                  </Link>
                </div>
                <div className="card-text">
                  <div className="channel-logo">
                    <img src="" alt="ava" />
                  </div>
                  <div className="video-title">
                    <h4>{post.snippet.title.slice(0,30)}...</h4>
                    <p>Channel : {post.snippet.channelTitle}</p>
                    <div className="stats">
                      {/* <p>{post.statistics.viewCount} Views</p> */}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </section>
      <section className="text-center py-3" id="next-prev">
        {data.prevPageToken ? <button onClick={()=>paginate("<")} className="btn btn-primary me-1">{"<"}</button> :<button disabled className="btn btn-primary me-1">{"<"}</button>}
        <button onClick={()=>paginate(">")} className="btn btn-primary">{">"}</button>
      </section>
    </main>
  )
}

Home.propTypes = {
  search:PropTypes.string
}

export default Home