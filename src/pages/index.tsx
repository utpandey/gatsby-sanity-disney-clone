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

  const unSeenVideos = (videos: IVideo[]) => {
    return videos.filter((video: IVideo) => video.isSeen == false || video.isSeen == null)
  }

  // console.log('not seen:', videos.filter((video: IVideo) => video.isSeen == false || video.isSeen == null))
  console.log(filterVideos(videos, 'Drama'))
  console.log(randomVideo(videos));
  return (
    <>
      <NavBar account={data?.sanityAccount}/>
    <div className="">sadsad</div>

    </>
  )
}

export default IndexPage
