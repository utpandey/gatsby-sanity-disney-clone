import * as React from "react"
import "../styles/base/_base.scss"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Base } from "../components/organisms/Base"
import GraphQLErrorList from "../components/atoms/graphqlError"

export const dat = graphql`
    query sanityAuthor {
      sanityAuthor {
        _id
           name
         }
    }
  `
  console.log(dat)

const IndexPage = ({data}:any) => {
 console.log(data)

  return (
    <Base />
    // <Layout>
    //   <Seo title="Home" />
    //   <StaticImage
    //     src="../images/gatsby-astronaut.png"
    //     width={300}
    //     quality={95}
    //     formats={["auto", "webp", "avif"]}
    //     alt="A Gatsby astronaut"
    //     style={{ marginBottom: `1.45rem` }}
    //   />
    //     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    // </Layout>
  )
}

export default IndexPage
