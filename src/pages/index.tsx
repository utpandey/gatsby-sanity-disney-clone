import * as React from "react"
import "../styles/base/_base.scss"
import { useStaticQuery, graphql } from "gatsby"
import {
  SanityVideo,
  AllVideosQuery,
  SanityVideoEdge,
} from "../../graphql-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Base } from "../components/organisms/Base"
import GraphQLErrorList from "../components/atoms/graphqlError"

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
          asset {
            assetId
            url
          }
        }
      }
    }
  }
`
console.log(allVideos)

interface IProps {
  data: AllVideosQuery
}

const IndexPage = ({ data }: IProps) => {
  console.log(data)
  console.log(data?.allSanityVideo?.nodes)

  return <div className="">sadsad</div>
}

export default IndexPage
