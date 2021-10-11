import * as React from "react"
import { Banner } from "../molecules/Banner"
import Footer from "../molecules/Footer"
import { Hero } from "../molecules/Hero"
import { VerticalFeatures } from "../molecules/VerticalFeatures"
import Header from "../header"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "../molecules/Navbar"
import About from "./About"
import Working from "./Working"
import Contact from "./Contact"
import SEO from "../seo"

const Base = () => {
 
  // const siteTitle: string = data.site.siteMetadata?.title || `Title`
  return (
    <div className="antialiased">
      {/* <Header siteTitle={siteTitle} /> */}
      <SEO />
      <Navbar />
      <About />
      <Working />
      <Contact />
      {/* <Hero /> */}
      {/* <VerticalFeatures />
      <Banner /> */}
      <Footer />
    </div>
  )
}

export { Base }
