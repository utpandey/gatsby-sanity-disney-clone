import React from "react"
import { SanityVideo } from "../../graphql-types"
import { Genre } from "../types"
import Card from "./Card"
import { isMobile } from "react-device-detect"
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

interface IProps {
  id?: string
  genre: Genre
  videos: SanityVideo[]
}

const Section = ({ genre, videos }: IProps) => {
  console.log(videos)
  videos.map((item:any) => {
    console.log(item?.video?.asset?.assetId)
  })
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
      slidesToSlide: 3,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 3,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  }

  return videos.length > 0 ? (
    // <Carousel
    //     infiniteLoop={true}
    // >
    //     {videos.map(video => (
    //         <a key={video?._key} href={`/video/${video?.slug?.current}`}>
    //             <Card thumbnail={video?.thumbnail} />
    //         </a>
    //     ))}
    // </Carousel>

    <div className="overflow-hidden lg:py-2 lg:px-8 z-10">
      <h3 className="pb-0 mb-0">{genre}</h3>
      {/* <Carousel
                responsive={responsive}
                // swipeable={true}
                draggable={true}
                infinite={true}
                autoPlay={isMobile ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                // customTransition="all 1s"
                transitionDuration={800}
                partialVisible={true}
            > */}
      <div className="row">
        <div className="row__inner flex flex-row">
          {videos.map((video, i) => (
            i === 0 ?
            <a key={video?.video?.asset?.assetId} href={`/video/${video?.slug?.current}`}>
              <Card thumbnail={video?.thumbnail} isFirst={true}/>
            </a>
            :
            <a key={video?.video?.asset?.assetId} href={`/video/${video?.slug?.current}`}>
              <Card thumbnail={video?.thumbnail} isFirst={false}/>
            </a>
          ))}
        </div>
      </div>

      {/* </Carousel> */}
      {/* <div className="section-carousel overflow-x-scroll">
                    <div className="min-w-max flex flex-nowrap scrollbar-hide scrolling-touch items-start lg:py-3 lg:px-3 relative">
                        {videos.map(video => (
                            <a key={video?._key} href={`/video/${video?.slug?.current}`}>
                                <Card thumbnail={video?.thumbnail} />
                            </a>
                        ))}
                    </div>
                </div> */}
    </div>
  ) : null
}

export default Section
