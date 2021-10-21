import * as React from "react"
import "../styles/base/_base.scss"
import { useStaticQuery, graphql } from "gatsby"
import {
  SanityVideo,
  AllVideosQuery,
  SanityAccount,
} from "../../graphql-types"
import { Genre, IIndexProps, IVideo } from '../types'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Base } from "../components/organisms/Base"
import GraphQLErrorList from "../components/atoms/graphqlError"
import NavBar from "../components/NavBar"
import Section from "../components/Section"

export const allVideos = graphql`
  query AllVideos {
    allSanityVideo {
      nodes {
        _createdAt
        _id
        title
        tags
        isSeen
        description
        slug {
          current
        }
        thumbnail {
          asset {
            url
            assetId
          }
        }
        video {
          _key
          asset {
            assetId
            url
          }
        }
      }
    }
    sanityAccount(_id: {eq: "e5a4db63-9308-4190-85f1-abb550186a6a"}) {
      username
      avatar {
        asset {
          url
          assetId
        }
      }
    }
  }
`
console.log(allVideos)

const IndexPage = ({ data }: IIndexProps) => {
  console.log(data)
  // console.log(data?.sanityAccount?.username)
  // console.log(data?.allSanityVideo?.nodes)
  const videos = data?.allSanityVideo?.nodes
  console.log(videos[0])
  const randomVideo = (videos: SanityVideo[]) => {
    return videos[Math.floor(Math.random() * videos.length)]
  }

  const filterVideos = (videos: SanityVideo[], genre: Genre) => {
    return videos.filter((video: SanityVideo) => video?.tags?.includes(genre))
  }

  const unSeenVideos = (videos: SanityVideo[]) => {
    return videos.filter((video: SanityVideo) => video.isSeen == false || video.isSeen == null)
  }

  // console.log('not seen:', videos.filter((video: SanityVideo) => video.isSeen == false || video.isSeen == null))
  console.log(filterVideos(videos, 'Drama'))
  console.log(randomVideo(videos));
  return (
    <>
      {/* <Section videos={videos} genre="Drama" key={videos?.length}/> */}


      <NavBar account={data?.sanityAccount} />
      <div className="">
        {/* <div className="main-video">
          <img src={randomVideo(videos)?.thumbnail.url}
                         alt={randomVideo(videos)?.title}/>
        </div> */}

        {/* <div className="video-feed">
          <Link to="#disney">
            <div className="w-1/5 m-1 rounded-xl" id="disney">
              <img src='/disney-button.png' />
            </div>
          </Link>
          <Link to="#pixar">
            <div className="w-1/5 m-1 rounded-xl" id="pixar">
              <img src='/pixar.png' />
            </div>
          </Link>
          <Link to="#star-wars">
            <div className="w-1/5 m-1 rounded-xl" id="star-wars">
              <img src='/star-wars-button.png' />
            </div>
          </Link>
          <Link to="#nat-geo">
            <div className="w-1/5 m-1 rounded-xl" id="nat-geo">
              <img src='/natgeo-button.png' />
            </div>
          </Link>
          <Link to="#marvel">
            <div className="w-1/5 m-1 rounded-xl" id="marvel">
              <img src='/marvel-button.png' />
            </div>
          </Link>
        </div> */}
        <Section genre='Recommended for you' videos={unSeenVideos(videos)} />
        <Section genre='Family' videos={filterVideos(videos, 'Family')} />
        <Section genre='Thriller' videos={filterVideos(videos, 'Thriller')} />
        <Section genre='Classic' videos={filterVideos(videos, 'Classic')} />
        <Section id="pixar" genre='Pixar' videos={filterVideos(videos, 'Pixar')} />
        <Section id="marvel" genre='Marvel' videos={filterVideos(videos, 'Thriller')} />
        <Section id="nat-geo" genre='National-geographic'
          videos={filterVideos(videos, 'National-geographic')} />
        <Section id="disney" genre='Disney' videos={filterVideos(videos, 'Disney')} />
        <Section id="star-wars" genre='Star-wars' videos={filterVideos(videos, 'Star-wars')} />


      </div>
    </>
  )
}

export default IndexPage
